import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CollectionService } from '../../shared/services/collection.service';
import { Collection } from '../../shared/models/collection';
import { Bag } from '../../shared/models/bag';

@Component({
    styles: [`
        .row{
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
        
            -webkit-flex-wrap: wrap;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        }
        .box {
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
        } 

    `],
    templateUrl: 'collection-single.component.html'
})
export class CollectionSingleComponent implements OnInit {
    collection : Collection;
    bags: Bag[];
    constructor(
        private route: ActivatedRoute,
        private service: CollectionService
    ) { }

    ngOnInit() {
        // Grab the id from templateUrl
        let id = this.route.snapshot.params['id'];

        // use the collectionservice to getCollection()
        this.service.getCollection(id)
            .subscribe(collection => this.collection = collection);

        this.service.getBagsFromCollection(id)
            .subscribe(bags => this.bags = bags);

     }
}