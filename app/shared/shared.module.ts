import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star/star.component';
import { GenreComponent } from './genre/genre.component';

import { GenreService } from './genre/genre.service';
import { GenresService } from './genre/genres.service';

@NgModule({
    imports: [CommonModule],
    exports: [
        CommonModule,
        FormsModule,
        StarComponent,
        GenreComponent
    ],
    declarations: [
        StarComponent,
        GenreComponent
    ],
    providers: [
        GenreService,
        GenresService
    ]
})
export class SharedModule {
}