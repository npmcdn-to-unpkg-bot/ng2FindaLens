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
    private _url = 'http://findalensapi.herokuapp.com/api';
    private _localUrl = 'http://localhost:8000/api';

    constructor(private _http: Http) {}

    getStuff() {
        return this._http.get('/api/lenses')
            .map(response => {
                const data = response.json();
                let objs: any[] = [];
                // for (let i = 0; i < data.length; i++) {
                //     let lens = new Lens(data[i].lensName, 'null', 0, 'null', 'null', 'null', 'null', false, 'null', 'null', false, false, 'null', false, 0, 0, 0, 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', data[i].brand);
                //     console.log(lens);
                //     objs.push(lens);
                // }
                
                return data;
            })
            // .catch(error => Observable.throw(error.json()));
            // .map(res => {
            //     // console.log(res.json().obj);
            //     res.json();
            // });
    }

    getLenses() {
        return this._http.get(this._localUrl + '/lenses')
            .map(res => {
                const data = res.json();
                return data;
            })
    }
}