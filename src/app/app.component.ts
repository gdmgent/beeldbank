import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Collection } from './shared/models/collection';
import { CollectionService } from './shared/services/collection.service';


@Component({
  selector: 'my-app',
  styles: [`
      .active{
        color: #000!important;
      }
    
  `],
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {
  collections: Collection[];

  constructor(
    private service: CollectionService,
    private router: Router
  ){}

  ngOnInit() {
    this.service.getCollections()
      .subscribe(
        collections => this.collections = collections
        );
  }
}