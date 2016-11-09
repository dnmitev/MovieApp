import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IMovie } from './movie';

import { AppSettings } from '../app.settings';

@Injectable()
export class MoviesService {
    constructor(private _http: Http) { }

    getPopularMovies(): Observable<IMovie[]> {
        return this._http.get(`${AppSettings.API_ENDPOINT}/discover/movie?sort_by=popularity.desc&api_key=${AppSettings.API_KEY}`)
                            .map((response: Response) => <IMovie[]>response.json().results)
                            .do(data => data.forEach(m => m.poster_path = `${AppSettings.IMAGE_ENDPOINT}/${m.poster_path}`));
    }
}