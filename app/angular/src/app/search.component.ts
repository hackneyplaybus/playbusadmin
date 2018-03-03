import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router }  from '@angular/router';
import { Item } from './item';
import { Child } from './child';
import { Carer } from './carer';
import { SearchService, ChildCarer} from './search.service';


import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'search-view',
  templateUrl: `./templates/search.component.html`,
})
export class SearchComponent implements OnInit{
    children: Child[];
    carers: Carer[];
    term: string;
    ngOnInit(): void {
        this.route.queryParams        
        .subscribe(params => {
          this.term = params['term'];
          console.log(params);  
  
          if (this.term) {
            this.searchService.doSearch(this.term).then(persons => this.updateChildCarer(persons));
          }
        });
    }

    private search(term: string): void {
        this.term = term;
        this.router.navigate(['/search'], { queryParams: { term: this.term } });        
      }

    private updateChildCarer(childCarer: ChildCarer): void {
        this.carers = childCarer.carers;
        this.children = childCarer.children;
      }

    private goToFamily(familyId: string): void {
    this.router.navigateByUrl('/family/'+familyId);
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private searchService: SearchService,
           
    ){}
}