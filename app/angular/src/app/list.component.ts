import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Router }  from '@angular/router';
import { Item } from './item'

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'list-view',
  templateUrl: `./templates/list.component.html`,
})
export class ListComponent implements OnInit{
    @Input() items: Item[];
    @Input() title: string;
    @Output() onItemSelect = new EventEmitter<Item>();

    ngOnInit(): void {

    }

    editItem(item: Item): void {
        this.onItemSelect.next(item);
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ){}
}