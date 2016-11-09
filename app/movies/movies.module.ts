import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';

import { MoviesService } from './movies.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [SharedModule],
    exports: [
        MovieListComponent,
        MovieComponent
    ],
    declarations: [
        MovieListComponent,
        MovieComponent
    ],
    providers: [MoviesService]
})
export class MovieModule { }