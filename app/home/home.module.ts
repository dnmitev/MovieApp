import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { SharedModule } from '../shared/shared.module';
import { MovieModule } from '../movies/movies.module';

@NgModule({
    imports: [
        SharedModule,
        MovieModule
    ],
    declarations: [
        HomeComponent
    ],
    providers: []
})
export class HomeModule { }