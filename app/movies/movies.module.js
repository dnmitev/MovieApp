"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var movie_list_component_1 = require('./movie-list/movie-list.component');
var movie_component_1 = require('./movie/movie.component');
var movies_service_1 = require('./movies.service');
var shared_module_1 = require('../shared/shared.module');
var MovieModule = (function () {
    function MovieModule() {
    }
    MovieModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule],
            exports: [
                movie_list_component_1.MovieListComponent,
                movie_component_1.MovieComponent
            ],
            declarations: [
                movie_list_component_1.MovieListComponent,
                movie_component_1.MovieComponent
            ],
            providers: [movies_service_1.MoviesService]
        }), 
        __metadata('design:paramtypes', [])
    ], MovieModule);
    return MovieModule;
}());
exports.MovieModule = MovieModule;
//# sourceMappingURL=movies.module.js.map