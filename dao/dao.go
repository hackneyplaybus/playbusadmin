package dao

import (
	"sort"
	"strconv"
	"strings"

	"github.com/hackneyplaybus/playbusadmin/wire"

	"golang.org/x/net/context"

	"google.golang.org/appengine/datastore"
	"google.golang.org/appengine/log"
)

const (
	KindFamily = "family"
	KindChild  = "child"
	KindCarer  = "carer"
)

type DaoIf interface {
	CreateFamily(ctx context.Context, familyId string) error
	ReadFamily(ctx context.Context, familyId string) (*wire.Family, error)
	DeleteFamily(ctx context.Context, familyId string) error

	CreateChild(ctx context.Context, child *wire.Child) error
	ReadChild(ctx context.Context, childId string) (*wire.Child, error)
	NameSearchChild(ctx context.Context, term string) ([]*wire.Child, error)
}

func CreateChild(ctx context.Context, child *wire.Child) error {
	augmentName(child)

	key, err := datastore.Put(ctx, datastore.NewIncompleteKey(ctx, KindChild, nil), child)
	if err != nil {
		return err
	}
	child.ChildId = key.StringID()
	return nil
}

type childCount struct {
	child *wire.Child
	count int
}
type byCount []childCount

func (a byCount) Len() int           { return len(a) }
func (a byCount) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a byCount) Less(i, j int) bool { return a[i].count < a[j].count }

func AutoCompleteChild(ctx context.Context, term string) ([]*wire.Child, error) {
	term = strings.ToLower(term)

	termArr := strings.Fields(term)
	childCountMap := map[string]childCount{}
	for _, prefix := range termArr {
		query := datastore.NewQuery(KindChild).
			Filter("LoweredNameSet >=", prefix).
			Filter("LoweredNameSet <=", prefixSuccessor(prefix))

		children := []*wire.Child{}
		keys, err := query.GetAll(ctx, &children)
		if err != nil {
			return nil, err
		}
		for ii, child := range children {
			child.ChildId = strconv.Itoa(int(keys[ii].IntID()))
			log.Infof(ctx, "ChildId: %s, %#v", child.ChildId, keys[ii])
			if ccount, ok := childCountMap[child.ChildId]; !ok {
				childCountMap[child.ChildId] = childCount{
					child: child,
					count: 1,
				}
			} else {
				ccount.count++
				childCountMap[child.ChildId] = ccount
			}
		}

	}
	toArr := make([]childCount, len(childCountMap))
	ii := 0
	for _, ccount := range childCountMap {
		toArr[ii] = ccount
		ii++
	}
	sort.Sort(sort.Reverse(byCount(toArr)))

	children := make([]*wire.Child, len(toArr))
	for ii, child := range toArr {
		children[ii] = child.child
	}

	return children, nil
}

func ReadChild(ctx context.Context, name string) (*wire.Child, error) {

	query := datastore.NewQuery(KindChild).Filter("Name =", name)
	children := []*wire.Child{}
	_, err := query.GetAll(ctx, &children)
	if err != nil {
		return nil, err
	}

	return children[0], nil
}

func augmentName(child *wire.Child) {

	nameArr := strings.Fields(child.Name)
	if child.Name != "" && child.FirstName == "" && child.LastName == "" {
		if len(nameArr) == 1 {
			child.FirstName = child.Name
		} else {
			child.FirstName = nameArr[0]
			child.LastName = nameArr[len(nameArr)-1]
		}
	}
	child.LoweredNameSet = []string{}
	for _, name := range nameArr {
		child.LoweredNameSet = append(child.LoweredNameSet, strings.ToLower(name))
	}

}

func prefixSuccessor(prefix string) string {
	if prefix == "" {
		return "" // infinite range
	}
	n := len(prefix)
	for n--; n >= 0 && prefix[n] == '\xff'; n-- {
	}
	if n == -1 {
		return ""
	}
	ans := []byte(prefix[:n])
	ans = append(ans, prefix[n]+1)
	return string(ans)
}
