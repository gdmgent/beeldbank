import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';

import { CollectionService } from './shared/services/collection.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from './collections/collections.component'; 
import { CollectionSingleComponent } from './collections/collection-single/collection-single.component';
import { BagSingleComponent } from './collections/bag-single/bag-single.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/topromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';


 
@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    routing
    ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    CollectionsComponent,
    NotFoundComponent, 
    CollectionSingleComponent,
    BagSingleComponent
    ],
  providers: [
    CollectionService
    ],
  bootstrap: [
     AppComponent 
     ]
})
export class AppModule {}