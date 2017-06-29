package domain

import (
	"fmt"

	"sync"

	"golang.org/x/net/context"
	"google.golang.org/appengine/datastore"
	"google.golang.org/appengine/urlfetch"
	"googlemaps.github.io/maps"
)

var (
	ErrNoResultsFound = fmt.Errorf("No Results")
	mapKey            = ""
	mapsClient        *maps.Client
	mapsLock          sync.RWMutex
)

type MapsKey struct {
	MapsKey string
}

func Geocode(ctx context.Context, address string) (*maps.LatLng, error) {
	// Such low throughput that I will just do this to avoid the race of getting the key and setting the client
	// Obvs ways to optimise
	mapsLock.Lock()
	defer mapsLock.Unlock()
	if mapKey == "" {
		mk := &MapsKey{}
		datastore.Get(ctx, datastore.NewKey(ctx, "mapskey", "mapskey", 0, nil), mk)
		mapKey = mk.MapsKey
	}
	var err error
	if mapsClient == nil {
		mapsClient, err = maps.NewClient(maps.WithAPIKey(mapKey), maps.WithHTTPClient(urlfetch.Client(ctx)))
		if err != nil {
			return nil, err
		}
	}
	results, err := mapsClient.Geocode(ctx, &maps.GeocodingRequest{
		Address: address,
	})
	if err != nil {
		return nil, err
	}
	if len(results) == 0 {
		return nil, ErrNoResultsFound
	}

	return &results[0].Geometry.Location, nil
}

func ConstructAddress(address, postalCode, city string) string {
	return fmt.Sprintf("%s, %s, %s, UK", address, postalCode, city)
}
