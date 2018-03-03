import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Service } from './service'
import { ServiceService } from './service.service'


import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'service-edit',
  templateUrl: `./templates/service-edit.component.html`,
})
export class ServiceEditComponent implements OnInit{
    @Input() 
    public set service(val: Service) {
      this._service = val;
      this.isEditing = this._service.service_id != undefined && this._service.service_id != ''
    }  
    public get service(): Service {
        return this._service;
    }  
    
    @Output() onStopEditing = new EventEmitter<boolean>();

    _service = new Service();
    private title: string;
    isEditing = false;
    private deleteModal = false;
    entity = 'service';
    
    closeDeleteModal(event: boolean): void {
      this.deleteModal = event;
    }

    ngOnInit(): void {

    }

    addService(): void {
        this.serviceService.addService(this._service).then(() => location.reload());
    }

    stopEditing():  void {
        this._service.service_id = '';
        this.service = this._service;
        this.onStopEditing.next(true);
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private serviceService: ServiceService
    ){}
}