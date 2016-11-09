import { Component, Input } from '@angular/core';

import { IMovie } from '../movie';


@Component({
    selector: '[movie-item]',
    moduleId: module.id,
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css']
})
export class MovieComponent {
    @Input() movieData: IMovie;
}