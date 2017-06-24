package dao

import (
	"sort"
	"strconv"
	"strings"

	"github.com/hackneyplaybus/playbusadmin/packages/wire"

	"golang.org/x/net/context"

	"google.golang.org/appengine/datastore"
	"google.golang.org/appengine/log"
)

const (
	KindFamily   = "family"
	KindChild    = "child"
	KindCarer    = "carer"
	KindNotes    = "notes"
	KindReferral = "referral"
	KindLocation = "location"
)

// type DaoIf interface {
// 	CreateFamily(ctx context.Context) error
// 	ReadFamily(ctx context.Context, familyId string) (*wire.Family, error)
// 	DeleteFamily(ctx context.Context, familyId string) error

// 	CreateChild(ctx context.Context, child *wire.Child) error
// 	ReadChild(ctx context.Context, childId string) (*wire.Child, error)
// 	NameSearchChild(ctx context.Context, term string) ([]*wire.Child, error)
// }

func CreateFamily(ctx context.Context) (*datastore.Key, error) {
	return datastore.Put(ctx, datastore.NewIncompleteKey(ctx, KindFamily, nil), nil)
}

func ReadFamily(ctx context.Context, familyId string) (*wire.Family, error) {
	id, err := strconv.Atoi(familyId)
	if err != nil {
		return nil, err
	}
	key := datastore.NewKey(ctx, KindFamily, "", int64(id), nil)
	family := &wire.Family{
		FamilyId: familyId,
	}
	query := datastore.NewQuery(KindChild).Ancestor(key)
	children := []*wire.Child{}
	_, err = query.GetAll(ctx, &children)
	if err != nil {
		return nil, err
	}
	//TODO: populate keys on children

	family.Children = children

	query = datastore.NewQuery(KindCarer).Ancestor(key)
	carers := []*wire.Carer{}
	_, err = query.GetAll(ctx, &carers)
	if err != nil {
		return nil, err
	}
	//TODO: populate keys on carers
	family.Carers = carers

	query = datastore.NewQuery(KindNotes).Ancestor(key)
	notes := []*wire.Note{}
	_, err = query.GetAll(ctx, &notes)
	if err != nil {
		return nil, err
	}
	//TODO: populate keys on notes
	family.Notes = notes

	return family, nil
}

func CreateCarer(ctx context.Context, carer *wire.Carer, familyKey *datastore.Key) error {

	carer.FirstName, carer.LastName, carer.LoweredNameSet = augmentName(carer.Name, carer.FirstName, carer.LastName)
	key, err := datastore.Put(ctx, datastore.NewIncompleteKey(ctx, KindCarer, familyKey), carer)
	if err != nil {
		return err
	}
	carer.CarerId = strconv.Itoa(int(key.IntID()))
	return nil
}

func CreateNote(ctx context.Context, note *wire.Note, familyKey *datastore.Key) error {

	_, err := datastore.Put(ctx, datastore.NewIncompleteKey(ctx, KindNotes, familyKey), note)
	if err != nil {
		return err
	}
	return nil
}

func CreateReferral(ctx context.Context, referral *wire.Referral, carerKey *datastore.Key) error {
	_, err := datastore.Put(ctx, datastore.NewIncompleteKey(ctx, KindReferral, carerKey), referral)
	if err != nil {
		return err
	}
	return nil
}

func CreateLocation(ctx context.Context, location *wire.Location, parentKey *datastore.Key) error {
	_, err := datastore.Put(ctx, datastore.NewIncompleteKey(ctx, KindLocation, parentKey), location)
	if err != nil {
		return err
	}
	return nil
}

func CreateChild(ctx context.Context, child *wire.Child, familyKey *datastore.Key) error {

	child.FirstName, child.LastName, child.LoweredNameSet = augmentName(child.Name, child.FirstName, child.LastName)
	key, err := datastore.Put(ctx, datastore.NewIncompleteKey(ctx, KindChild, familyKey), child)
	if err != nil {
		return err
	}
	child.ChildId = strconv.Itoa(int(key.IntID()))
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

func augmentName(name, firstname, lastname string) (string, string, []string) {

	nameArr := strings.Fields(name)
	if name != "" && firstname == "" && lastname == "" {
		if len(nameArr) == 1 {
			firstname = name
		} else {
			firstname = nameArr[0]
			lastname = nameArr[len(nameArr)-1]
		}
	}
	loweredNameSet := []string{}
	for _, name := range nameArr {
		loweredNameSet = append(loweredNameSet, strings.ToLower(name))
	}
	return firstname, lastname, loweredNameSet
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
