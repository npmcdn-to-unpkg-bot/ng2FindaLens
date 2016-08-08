import { Lens } from '../common/lens';
import { Http, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LensAdminService {
    lenses: Lens[] = [];
    constructor(private _http: Http) {}

    getMessages() {
        return this._http.get('/')
            .map(response => {
                const data = response.json().obj;
                let objs: any[] = [];
                console.log(data);
                for (let i = 0; i < data.length; i++) {
                    
                }
                return data;
            })
            .catch(error => Observable.throw(error.json()));
    }
}