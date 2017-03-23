import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from './collections/collections.component';
import { CollectionSingleComponent } from './collections/collection-single/collection-single.component';
import { BagSingleComponent } from './collections/bag-single/bag-single.component';
import { NotFoundComponent} from './not-found/not-found.component';

export const routes =[
    { 
        path: '',
        component: HomeComponent,
    },
    {
        path: '',
        component: CollectionsComponent,
        children:[
            {
                path: ':id/bags',
                component: CollectionSingleComponent
            },
            {
                path: ':id/bags/:bagid/attachments',
                component: BagSingleComponent
            }

        ]
    },
    { 
        path: '**',
         component: NotFoundComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes)