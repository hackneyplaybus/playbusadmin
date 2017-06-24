package dao

import (
	"github.com/hackneyplaybus/playbusadmin/wire"

	"golang.org/x/net/context"

	"google.golang.org/appengine/datastore"
)

type DaoIf interface {
	CreateFamily(familyId string) error
	ReadFamily(familyId string) (*wire.Family, error)
	DeleteFamily(familyId string) error
	MergeFamily(FamilyId, FamilyIdToMerge string) error
}

func CreateChild(ctx context.Context, child *wire.Child) error {
	_, err := datastore.Put(ctx, datastore.NewIncompleteKey(ctx, "child", nil), child)
	if err != nil {
		return err
	}
	return nil
}

func ReadChild(ctx context.Context, name string) (*wire.Child, error) {
	query := datastore.NewQuery("child").Filter("Name =", name)
	children := []*wire.Child{}
	_, err := query.GetAll(ctx, &children)
	if err != nil {
		return nil, err
	}

	return children[0], nil
}
