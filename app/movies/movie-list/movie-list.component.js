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
var movies_service_1 = require('../movies.service');
var MovieListComponent = (function () {
    function MovieListComponent(_moviesService) {
        this._moviesService = _moviesService;
    }
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._moviesService
            .getPopularMovies()
            .subscribe(function (data) { return _this.movies = data; }, function (error) { return _this.error = error; });
    };
    MovieListComponent = __decorate([
        core_1.Component({
            selector: 'movie-list',
            moduleId: module.id,
            templateUrl: './movie-list.component.html'
        }), 
        __metadata('design:paramtypes', [movies_service_1.MoviesService])
    ], MovieListComponent);
    return MovieListComponent;
}());
exports.MovieListComponent = MovieListComponent;
//# sourceMappingURL=movie-list.component.js.map