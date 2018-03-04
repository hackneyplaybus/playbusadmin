import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from './location'
import { LocationService } from './location.service'
import{ MapsAPILoader } from '@agm/core'


import 'rxjs/add/operator/switchMap';

declare var google: any;

@Component({
  selector: 'location-edit',
  templateUrl: `./templates/location-edit.component.html`,
})
export class LocationEditComponent implements OnInit{
    @Input() 
    public set location(val: Location) {
      this._location = val;
      this.isEditing = this._location.location_id != undefined && this._location.location_id != ''
    }  
    public get location(): Location {
        return this._location;
    }  
    
    @Output() onStopEditing = new EventEmitter<boolean>();

    _location = new Location();
    private title: string;
    isEditing = false;
    private deleteModal = false;
    entity = 'location';
    geocoder: any;

    lat: number = 51.5484201;
    lng: number = -0.0741668;
    
    closeDeleteModal(event: boolean): void {
      this.deleteModal = event;
    }

    ngOnInit(): void {
        this.mapsAPILoader.load().then(() => {
            console.log('google script loaded');
            this.geocoder = new google.maps.Geocoder();
        });
    }

    mapClicked($event: any) {
        this._location.latitude = $event.coords.lat;
        this._location.longitude = $event.coords.lng;
        this._location.address = '';
        this._location.city = '';
        this._location.address = '';

        this.geocoder.geocode({'location': $event.coords}, (results, status) => {
            if (status === 'OK') {
              if (results[1]) {                
                var comp = results[0].address_components;
                for (var ii = 0; ii < comp.length;++ii) {                
                    if (comp[ii].types[0] == 'postal_code') {
                        this._location.postal_code = comp[ii].long_name;
                    }
                    if (comp[ii].types[0] == 'postal_town') {
                        this._location.city = comp[ii].long_name;
                    }
                    if (comp[ii].types[0] == 'route') {
                        this._location.address = comp[ii].long_name;
                    }
                }
                
              } else {
                window.alert('No results found');
              }
            } else {
              window.alert('Geocoder failed due to: ' + status);
            }
          });
      }

    addLocation(): void {
        this.locationService.addLocation(this._location).then(() => location.reload());
    }

    stopEditing():  void {
        this._location.location_id = '';
        this.location = this._location;
        this.onStopEditing.next(true);
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private locationService: LocationService,
        private mapsAPILoader: MapsAPILoader,
    ){}
}