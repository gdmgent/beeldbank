import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../shared/services/collection.service';
import { Collection } from '../shared/models/collection';

@Component({
    styles: [` 
        .media-object{
            width: 100px!important;
            height: auto!important;
        }
        .media{
            margin: 20px 0!important;
            padding: 20px !important;
            background-color: #f3f3f3!important;
            border-radius: 10px !important;
            cursor: pointer;
        }
    `],
    selector: 'home-page',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit{
    collections: Collection[];

    constructor(
        private service: CollectionService
    ){}
    
    ngOnInit(){
        this.service.getCollections()
            .subscribe(collections => this.collections = collections);
    }
}