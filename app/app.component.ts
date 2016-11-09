import { Component } from '@angular/core';

@Component({
    selector: 'movie-app',
    moduleId: module.id,
    templateUrl: './app.component.html',
})
export class AppComponent {
    pageTitle: string = `The Movie DB`;
}