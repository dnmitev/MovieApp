import { Component, OnInit } from '@angular/core';

import { IMovie } from '../movie';

import { MoviesService } from '../movies.service';

@Component({
    selector: 'movie-list',
    moduleId: module.id,
    templateUrl: './movie-list.component.html'
})
export class MovieListComponent implements OnInit {
    movies: IMovie[];
    error: string;

    constructor(private _moviesService: MoviesService) { }

    ngOnInit(): void {
        this._moviesService
            .getPopularMovies()
            .subscribe(
                data => this.movies = data,
                error => this.error = error
            );
    }
}