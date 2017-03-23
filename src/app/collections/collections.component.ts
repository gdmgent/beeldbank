import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../shared/services/collection.service';

@Component({
    selector: 'my-collections',
    template:`
    <router-outlet></router-outlet>
    `
})
export class CollectionsComponent implements OnInit {
    constructor(
        private service: CollectionService
    ) { }

    ngOnInit() { }
}