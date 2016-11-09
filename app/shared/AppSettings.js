"use strict";
var AppSettings = (function () {
    function AppSettings() {
    }
    Object.defineProperty(AppSettings, "API_ENDPOINT", {
        get: function () { return 'https://api.themoviedb.org/3'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "IMAGE_ENDPOINT", {
        get: function () { return 'http://image.tmdb.org/t/p/w500/'; },
        enumerable: true,
        configurable: true
    });
    return AppSettings;
}());
exports.AppSettings = AppSettings;
//# sourceMappingURL=AppSettings.js.map