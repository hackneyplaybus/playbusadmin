import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from './location'
import { LocationService } from './location.service'


import 'rxjs/add/operator/switchMap';

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
    
    @Output() onStopEditing = new EventEmitter<boolean>();

    _location = new Location();
    private title: string;
    isEditing = false;

    ngOnInit(): void {

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
        private locationService: LocationService
    ){}
}