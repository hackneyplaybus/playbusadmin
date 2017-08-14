import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router }  from '@angular/router';
import { Location } from './location'
import { LocationService } from './location.service'
import { Item } from './item'


import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'location-view',
  templateUrl: `./templates/location.component.html`,
})
export class LocationComponent implements OnInit{
    location = new Location();
    title = 'Locations';
    private items: Item[];
    private locations: Location[];

    ngOnInit(): void {

        this.locationService.getLocations()
            .then(locations => {
                this.locations = locations;
                this.items = []; 
                for (let location of locations) {                    
                    let item = new Item();
                    item.value = location.name;
                    item.id = location.location_id;
                    item.type = 'location';
                    this.items.push(item);
                }
            });
        
    }

    onStopEditing(val: boolean): void {
        this.location.location_id = '';
    }

    onItemSelect(item: Item): void {
        
        for (let location of this.locations) {
            if (location.location_id == item.id) {
                this.location = { ...location};
                break;
            }
        }
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private locationService: LocationService
    ){}
}