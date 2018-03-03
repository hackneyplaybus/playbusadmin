import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router }  from '@angular/router';
import { Service } from './service'
import { ServiceService } from './service.service'
import { Item } from './item'


import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'service-view',
  templateUrl: `./templates/service.component.html`,
})
export class ServiceComponent implements OnInit{
    service = new Service();
    title = 'Services';
    private items: Item[];
    private services: Service[];

    ngOnInit(): void {

        this.serviceService.getServices()
            .then(services => {
                this.services = services;
                this.items = []; 
                for (let service of services) {                    
                    let item = new Item();
                    item.value = service.name;
                    item.id = service.service_id;
                    item.type = 'service';
                    this.items.push(item);
                }
            });
        
    }

    onStopEditing(val: boolean): void {
        this.service.service_id = '';
    }

    onItemSelect(item: Item): void {
        
        for (let service of this.services) {
            if (service.service_id == item.id) {
                this.service = { ...service};
                break;
            }
        }
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private serviceService: ServiceService
    ){}
}