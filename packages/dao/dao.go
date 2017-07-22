package dao

import (
	"sort"
	"strings"
	"time"

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
	KindVisit    = "visit"
	KindLocation = "location"
	KindProject  = "project"
	KindService  = "service"

	DefaultKeyLen = 12
)

func ReadFamily(ctx context.Context, familyId string) (*wire.Family, error) {

	family := &wire.Family{
		Children: []*wire.Child{},
		Carers:   []*wire.Carer{},
		Notes:    []*wire.Note{},
		Visits:   []*wire.Visit{},
	}

	query := datastore.NewQuery(KindChild).Filter("FamilyId =", familyId)

	_, err := query.GetAll(ctx, &family.Children)
	if err != nil {
		return nil, err
	}

	query = datastore.NewQuery(KindCarer).Filter("FamilyId =", familyId)

	_, err = query.GetAll(ctx, &family.Carers)
	if err != nil {
		return nil, err
	}

	family.Visits, err = ReadFamilyVisits(ctx, familyId)
	if err != nil {
		return nil, err
	}

	query = datastore.NewQuery(KindNotes).Filter("FamilyId =", familyId).Order("-Timestamp")
	_, err = query.GetAll(ctx, &family.Notes)
	if err != nil {
		return nil, err
	}

	family.Referrals, err = ReadFamilyReferrals(ctx, familyId)
	if err != nil {
		return nil, err
	}

	return family, nil
}

func CreateCarer(ctx context.Context, carer *wire.Carer) error {
	if carer.CarerId == "" {
		carer.CarerId = newKey("carer-", DefaultKeyLen)
	}
	if carer.FamilyId == "" {
		carer.FamilyId = newKey("family-", DefaultKeyLen)
	}

	carer.FirstSeen = time.Now().Round(time.Second)

	carer.FirstName, carer.LastName, carer.LoweredNameSet = augmentName(carer.Name, carer.FirstName, carer.LastName)
	carer.LoweredNameAndEmailSet = []string{carer.Email}
	carer.LoweredNameAndEmailSet = append(carer.LoweredNameAndEmailSet, carer.LoweredNameSet...)
	_, err := datastore.Put(ctx, datastore.NewKey(ctx, KindCarer, carer.CarerId, 0, nil), carer)
	if err != nil {
		return err
	}
	return nil
}
func DeleteCarer(ctx context.Context, carerId string) error {
	key := datastore.NewKey(ctx, KindCarer, carerId, 0, nil)
	_, keys, err := ReadCarerVisits(ctx, carerId)
	if err != nil {
		return err
	}
	keys = append(keys, key)
	return datastore.DeleteMulti(ctx, keys)
}

func CreateVisit(ctx context.Context, visit *wire.Visit) error {
	visit.VisitId = newKey("visit-", DefaultKeyLen)
	visit.DateRecorded = time.Now()
	_, err := datastore.Put(ctx, datastore.NewKey(ctx, KindVisit, visit.VisitId, 0, nil), visit)
	if err != nil {
		return err
	}
	return nil
}

func ReadFamilyVisits(ctx context.Context, familyId string) ([]*wire.Visit, error) {
	query := datastore.NewQuery(KindVisit).Filter("FamilyId =", familyId)
	visits := []*wire.Visit{}
	_, err := query.GetAll(ctx, &visits)
	if err != nil {
		return nil, err
	}

	for _, visit := range visits {
		visit.Location, err = ReadLocation(ctx, visit.LocationId)
		if err != nil {
			return nil, err
		}

		visit.Project, err = ReadProject(ctx, visit.ProjectId)
		if err != nil {
			return nil, err
		}

	}

	return visits, nil
}

func CreateNote(ctx context.Context, note *wire.Note) error {
	note.Timestamp = time.Now().Round(time.Second)
	note.NoteId = newKey("note-", DefaultKeyLen)
	_, err := datastore.Put(ctx, datastore.NewKey(ctx, KindNotes, note.NoteId, 0, nil), note)
	if err != nil {
		return err
	}
	return nil
}

func CreateReferral(ctx context.Context, referral *wire.Referral) error {
	referral.ReferralId = newKey("referral-", DefaultKeyLen)
	_, err := datastore.Put(ctx, datastore.NewKey(ctx, KindReferral, referral.ReferralId, 0, nil), referral)
	if err != nil {
		return err
	}
	return nil
}

func ReadFamilyReferrals(ctx context.Context, familyId string) ([]*wire.Referral, error) {
	refs := []*wire.Referral{}
	query := datastore.NewQuery(KindReferral).Filter("FamilyId =", familyId)
	_, err := query.GetAll(ctx, &refs)
	if err != nil {
		return nil, err
	}

	for _, ref := range refs {
		ref.Service, err = ReadService(ctx, ref.ServiceId)
		if err != nil {
			return nil, err
		}
	}

	return refs, nil
}

func CreateLocation(ctx context.Context, location *wire.Location) error {
	if location.LocationId == "" {
		location.LocationId = newKey("location-", DefaultKeyLen)
	}
	_, err := datastore.Put(ctx, datastore.NewKey(ctx, KindLocation, location.LocationId, 0, nil), location)
	if err != nil {
		return err
	}
	return nil
}

func ReadLocations(ctx context.Context) ([]*wire.Location, error) {
	locs := []*wire.Location{}
	_, err := datastore.NewQuery(KindLocation).GetAll(ctx, &locs)
	if err != nil {
		return nil, err
	}
	return locs, nil
}

func ReadLocation(ctx context.Context, locationId string) (*wire.Location, error) {
	loc := &wire.Location{}
	key := datastore.NewKey(ctx, KindLocation, locationId, 0, nil)
	if err := datastore.Get(ctx, key, loc); err != nil {
		return nil, err
	}
	return loc, nil
}

func CreateProject(ctx context.Context, project *wire.Project) error {
	if project.ProjectId == "" {
		project.ProjectId = newKey("project-", DefaultKeyLen)
	}
	_, err := datastore.Put(ctx, datastore.NewKey(ctx, KindProject, project.ProjectId, 0, nil), project)
	if err != nil {
		return err
	}
	return nil
}

func ReadProjects(ctx context.Context) ([]*wire.Project, error) {
	locs := []*wire.Project{}
	_, err := datastore.NewQuery(KindProject).GetAll(ctx, &locs)
	if err != nil {
		return nil, err
	}
	return locs, nil
}

func ReadProject(ctx context.Context, projectId string) (*wire.Project, error) {
	project := &wire.Project{}
	key := datastore.NewKey(ctx, KindProject, projectId, 0, nil)
	if err := datastore.Get(ctx, key, project); err != nil {
		return nil, err
	}
	return project, nil
}

func CreateService(ctx context.Context, service *wire.Service) error {
	if service.ServiceId == "" {
		service.ServiceId = newKey("service-", DefaultKeyLen)
	}

	_, err := datastore.Put(ctx, datastore.NewKey(ctx, KindService, service.ServiceId, 0, nil), service)
	if err != nil {
		return err
	}
	return nil
}

func ReadServices(ctx context.Context) ([]*wire.Service, error) {
	locs := []*wire.Service{}
	_, err := datastore.NewQuery(KindService).GetAll(ctx, &locs)
	if err != nil {
		return nil, err
	}
	return locs, nil
}

func ReadService(ctx context.Context, serviceId string) (*wire.Service, error) {
	service := &wire.Service{}
	key := datastore.NewKey(ctx, KindService, serviceId, 0, nil)
	if err := datastore.Get(ctx, key, service); err != nil {
		return nil, err
	}
	return service, nil
}

func UpdateChildConsent(ctx context.Context, childId string, infoConsent, photoConsent bool) (*wire.Child, error) {
	child := &wire.Child{}
	return child, datastore.RunInTransaction(ctx, func(ctx context.Context) error {

		var err error
		var key *datastore.Key
		child, key, err = ReadChild(ctx, childId)
		if err != nil {
			log.Errorf(ctx, "Error Reading Child %v", err)
			return err
		}

		child.PhotoConsent = photoConsent
		child.InfoConsent = infoConsent

		_, err = datastore.Put(ctx, key, child)
		if err != nil {
			log.Errorf(ctx, "Error Putting Child %v", err)
			return err
		}
		return nil
	}, nil)
}

func UpdateCarerConsent(ctx context.Context, carerId string, infoConsent, photoConsent bool) (*wire.Carer, error) {
	carer := &wire.Carer{}
	return carer, datastore.RunInTransaction(ctx, func(ctx context.Context) error {

		var err error
		var key *datastore.Key
		carer, key, err = ReadCarer(ctx, carerId)
		if err != nil {
			log.Errorf(ctx, "Error Reading Carer %v", err)
			return err
		}

		carer.PhotoConsent = photoConsent
		carer.InfoConsent = infoConsent

		_, err = datastore.Put(ctx, key, carer)
		if err != nil {
			log.Errorf(ctx, "Error Putting Carer %v", err)
			return err
		}
		return nil
	}, nil)
}

func ReadChild(ctx context.Context, childId string) (*wire.Child, *datastore.Key, error) {
	child := &wire.Child{}
	key := datastore.NewKey(ctx, KindChild, childId, 0, nil)
	if err := datastore.Get(ctx, key, child); err != nil {
		return nil, nil, err
	}

	return child, key, nil
}

func DeleteChild(ctx context.Context, childId string) error {
	key := datastore.NewKey(ctx, KindChild, childId, 0, nil)
	_, keys, err := ReadChildVisits(ctx, childId)
	if err != nil {
		return err
	}
	keys = append(keys, key)
	return datastore.DeleteMulti(ctx, keys)
}

func ReadChildVisits(ctx context.Context, childId string) ([]*wire.Visit, []*datastore.Key, error) {
	query := datastore.NewQuery(KindVisit).Filter("ChildId =", childId)
	visits := []*wire.Visit{}
	keys, err := query.GetAll(ctx, &visits)
	if err != nil {
		return nil, nil, err
	}

	for _, visit := range visits {
		visit.Location, err = ReadLocation(ctx, visit.LocationId)
		if err != nil {
			return nil, nil, err
		}

		visit.Project, err = ReadProject(ctx, visit.ProjectId)
		if err != nil {
			return nil, nil, err
		}

	}

	return visits, keys, nil
}

func ReadCarer(ctx context.Context, carerId string) (*wire.Carer, *datastore.Key, error) {
	carer := &wire.Carer{}
	key := datastore.NewKey(ctx, KindCarer, carerId, 0, nil)
	if err := datastore.Get(ctx, key, carer); err != nil {
		return nil, nil, err
	}

	return carer, key, nil
}

func ReadCarerVisits(ctx context.Context, carerId string) ([]*wire.Visit, []*datastore.Key, error) {
	query := datastore.NewQuery(KindVisit).Filter("CarerId =", carerId)
	visits := []*wire.Visit{}
	keys, err := query.GetAll(ctx, &visits)
	if err != nil {
		return nil, nil, err
	}

	for _, visit := range visits {
		visit.Location, err = ReadLocation(ctx, visit.LocationId)
		if err != nil {
			return nil, nil, err
		}

		visit.Project, err = ReadProject(ctx, visit.ProjectId)
		if err != nil {
			return nil, nil, err
		}

	}

	return visits, keys, nil
}

func CreateChild(ctx context.Context, child *wire.Child) error {
	if child.ChildId == "" {
		child.ChildId = newKey("child-", DefaultKeyLen)
	}
	if child.FamilyId == "" {
		child.FamilyId = newKey("family-", DefaultKeyLen)
	}

	child.FirstSeen = time.Now().Round(time.Second)
	child.FirstName, child.LastName, child.LoweredNameSet = augmentName(child.Name, child.FirstName, child.LastName)
	_, err := datastore.Put(ctx, datastore.NewKey(ctx, KindChild, child.ChildId, 0, nil), child)
	if err != nil {
		return err
	}
	return nil
}

type itemCount struct {
	item  interface{}
	count int
}
type byCount []itemCount

func (a byCount) Len() int           { return len(a) }
func (a byCount) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a byCount) Less(i, j int) bool { return a[i].count < a[j].count }

func AutoCompleteChild(ctx context.Context, term string) ([]*wire.Child, error) {
	term = strings.ToLower(term)

	termArr := strings.Fields(term)
	childCountMap := map[string]itemCount{}
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

			log.Infof(ctx, "ChildId: %s, %#v", child.ChildId, keys[ii])
			if ccount, ok := childCountMap[child.ChildId]; !ok {
				childCountMap[child.ChildId] = itemCount{
					item:  child,
					count: 1,
				}
			} else {
				ccount.count++
				childCountMap[child.ChildId] = ccount
			}
		}

	}
	toArr := make([]itemCount, len(childCountMap))
	ii := 0
	for _, ccount := range childCountMap {
		toArr[ii] = ccount
		ii++
	}
	sort.Sort(sort.Reverse(byCount(toArr)))

	children := make([]*wire.Child, len(toArr))
	for ii, child := range toArr {
		children[ii] = child.item.(*wire.Child)
	}

	return children, nil
}

func AutoCompleteCarer(ctx context.Context, term string) ([]*wire.Carer, error) {
	term = strings.ToLower(term)

	termArr := strings.Fields(term)
	carerCountMap := map[string]itemCount{}
	for _, prefix := range termArr {
		query := datastore.NewQuery(KindCarer).
			Filter("LoweredNameSet >=", prefix).
			Filter("LoweredNameSet <=", prefixSuccessor(prefix))

		carers := []*wire.Carer{}
		keys, err := query.GetAll(ctx, &carers)
		if err != nil {
			return nil, err
		}
		for ii, carer := range carers {

			log.Infof(ctx, "CarerId: %s, %#v", carer.CarerId, keys[ii])
			if ccount, ok := carerCountMap[carer.CarerId]; !ok {
				carerCountMap[carer.CarerId] = itemCount{
					item:  carer,
					count: 1,
				}
			} else {
				ccount.count++
				carerCountMap[carer.CarerId] = ccount
			}
		}

	}
	toArr := make([]itemCount, len(carerCountMap))
	ii := 0
	for _, ccount := range carerCountMap {
		toArr[ii] = ccount
		ii++
	}
	sort.Sort(sort.Reverse(byCount(toArr)))

	carers := make([]*wire.Carer, len(toArr))
	for ii, carer := range toArr {
		carers[ii] = carer.item.(*wire.Carer)
	}

	return carers, nil
}

func AutoCompleteCarerEmail(ctx context.Context, term string) ([]*wire.Carer, error) {
	term = strings.ToLower(term)

	termArr := strings.Fields(term)
	carerCountMap := map[string]itemCount{}
	for _, prefix := range termArr {
		query := datastore.NewQuery(KindCarer).
			Filter("LoweredNameAndEmailSet >=", prefix).
			Filter("LoweredNameAndEmailSet <=", prefixSuccessor(prefix))

		carers := []*wire.Carer{}
		keys, err := query.GetAll(ctx, &carers)
		if err != nil {
			return nil, err
		}
		for ii, carer := range carers {

			log.Infof(ctx, "CarerId: %s, %#v", carer.CarerId, keys[ii])
			if ccount, ok := carerCountMap[carer.CarerId]; !ok {
				carerCountMap[carer.CarerId] = itemCount{
					item:  carer,
					count: 1,
				}
			} else {
				ccount.count++
				carerCountMap[carer.CarerId] = ccount
			}
		}

	}
	toArr := make([]itemCount, len(carerCountMap))
	ii := 0
	for _, ccount := range carerCountMap {
		toArr[ii] = ccount
		ii++
	}
	sort.Sort(sort.Reverse(byCount(toArr)))

	carers := make([]*wire.Carer, len(toArr))
	for ii, carer := range toArr {
		carers[ii] = carer.item.(*wire.Carer)
	}

	return carers, nil
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
