import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CollectionService } from '../../shared/services/collection.service';
import { Collection } from '../../shared/models/collection';
import { Bag } from '../../shared/models/bag';

@Component({
    styles: [`
        .thumbnail{
            width: 100%;
            height: 100%;
            margin: 0.5em!important;
            padding: 0.5em!important;
        }
        
    `],
    templateUrl: 'bag-single.component.html'
})
export class BagSingleComponent implements OnInit {
    collection : Collection;
    bags: Bag[];
    constructor(
        private route: ActivatedRoute,
        private service: CollectionService
    ) { }

    ngOnInit() { 
        // Grab the id from templateUrl
        let bagid = this.route.snapshot.params['bagid'];
        let id = this.route.snapshot.params['id'];

        this.service.getCollection(id)
            .subscribe(collection => this.collection = collection);

        this.service.getBagWithAttachments(bagid)
            .subscribe(bags => this.bags = bags);
    }
}