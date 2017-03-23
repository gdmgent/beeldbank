import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/subject';
import { Collection } from '../models/collection';
import { Bag } from '../models/bag';

@Injectable()

export class CollectionService {
    private collectionsUrl: string = 'http://192.168.10.40/api/v1/collections';
    //private collectionsUrl: string = 'http://beeldback.jefroosens.be/api/v1/collections';

    constructor(
        private http: Http
    ){}

    /**
     * Get all collections 
     */
    getCollections(): Observable<Collection[]>{
        return this.http.get(this.collectionsUrl)
        .map(res => res.json())
        .catch(this.handleError);
    }

    /**
     * Get collection
     */
    getCollection(id: number): Observable<Collection>{
        return this.http.get(`${this.collectionsUrl}/${id}`)
            .map(res => res.json())
            .catch(this.handleError);
    }

    /**
     * Get the bags from a collection
     */
    getBagsFromCollection(id: number): Observable<Bag[]>{
        return this.http.get(`${this.collectionsUrl}/${id}/bags`)
        .map(res => res.json())
        .catch(this.handleError);
    }

    /**
     * Get bag with attachments
     */
     getBagWithAttachments(id: number): Observable<Bag[]>{
         return this.http.get(`${this.collectionsUrl}/${id}/attachments`)
         .map(res => res.json())
         .catch(this.handleError);
     }


    /**
     * Handle any errors from the API
     */
    private handleError(err){
        let errMessage: string;

            if (err instanceof Response){
                let body    = err.json() || '';
                let error   = body.error || JSON.stringify(body);
                errMessage  = `${err.status} - ${err.statusText || ''}${error}`;
            } else {
                errMessage  = err.message ? err.message : err.toString();
            }

            return Observable.throw(errMessage);
    }


}