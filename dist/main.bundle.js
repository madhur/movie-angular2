webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_movie_mock_data__ = __webpack_require__(183);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MovieService = (function () {
    function MovieService() {
    }
    MovieService.prototype.getMovieDetail = function (movieKey) {
        var movie = __WEBPACK_IMPORTED_MODULE_2__model_movie_mock_data__["a" /* movies */].find(function (x) { return movieKey === x.key; });
        if (movie === -1) {
            return null;
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].of(movie);
        }
    };
    ;
    MovieService.prototype.getMoviesList = function () {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].of(__WEBPACK_IMPORTED_MODULE_2__model_movie_mock_data__["a" /* movies */]);
    };
    MovieService.prototype.searchMovie = function (searchText) {
        var filteredMovies = __WEBPACK_IMPORTED_MODULE_2__model_movie_mock_data__["a" /* movies */].filter(function (movie) {
            if (movie.name.toLowerCase().includes(searchText.toLowerCase())) {
                return true;
            }
            return false;
        });
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].of(filteredMovies);
    };
    return MovieService;
}());
MovieService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], MovieService);

;
//# sourceMappingURL=movie.service.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 159;


/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(186);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(254),
        styles: [__webpack_require__(240)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_rating_item_rating_item_component__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_movie_detail_movie_detail_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_movie_actions__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_movie_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_redux_store__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_movie_item_movie_item_component__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_movie_container_movie_container_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_build_redux_store_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_movie_search_movie_search_component__ = __webpack_require__(179);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_movie_container_movie_container_component__["a" /* MovieContainerComponent */] },
    { path: 'movie/:movieKey', component: __WEBPACK_IMPORTED_MODULE_1__components_movie_detail_movie_detail_component__["a" /* MovieDetailComponent */] }
];
var AppModule = (function () {
    function AppModule(ngRedux) {
        ngRedux.provideStore(__WEBPACK_IMPORTED_MODULE_12__core_build_redux_store_service__["a" /* store */]);
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_movie_item_movie_item_component__["a" /* MovieItemComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_movie_container_movie_container_component__["a" /* MovieContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_1__components_movie_detail_movie_detail_component__["a" /* MovieDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_0__components_rating_item_rating_item_component__["a" /* RatingItemComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_movie_search_movie_search_component__["a" /* MovieSearchComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_redux_store__["NgReduxModule"],
            __WEBPACK_IMPORTED_MODULE_13__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__service_movie_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_2__actions_movie_actions__["a" /* MovieActions */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_redux_store__["NgRedux"]) === "function" && _a || Object])
], AppModule);

var _a;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_movie_actions__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieContainerComponent = (function () {
    function MovieContainerComponent(movieActions, redux) {
        this.movieActions = movieActions;
        this.redux = redux;
    }
    MovieContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.redux.dispatch(this.movieActions.getMovies());
        this.moviesList$.subscribe(function (data) {
            if (data != null) {
                _this.numMovies = data.size;
            }
        });
    };
    return MovieContainerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["select"])(['movies_app', 'filtered_movies']),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"]) === "function" && _a || Object)
], MovieContainerComponent.prototype, "moviesList$", void 0);
MovieContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-movie-container',
        template: __webpack_require__(255),
        styles: [__webpack_require__(241)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__actions_movie_actions__["a" /* MovieActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__actions_movie_actions__["a" /* MovieActions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgRedux"]) === "function" && _c || Object])
], MovieContainerComponent);

var _a, _b, _c;
//# sourceMappingURL=movie-container.component.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_movie_actions__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MovieDetailComponent = (function () {
    function MovieDetailComponent(route, movieActions, redux) {
        this.route = route;
        this.movieActions = movieActions;
        this.redux = redux;
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
        var movieKey = this.route.snapshot.params['movieKey'];
        this.redux.dispatch(this.movieActions.getMovieByKey(movieKey));
    };
    MovieDetailComponent.prototype.getMovieImage = function (movie) {
        return '/assets/images/movie-covers/' + movie.get('img');
    };
    return MovieDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["select"])(['movies_app', 'selected_movie']),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"]) === "function" && _a || Object)
], MovieDetailComponent.prototype, "movie", void 0);
MovieDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-movie-detail',
        template: __webpack_require__(256),
        styles: [__webpack_require__(242)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__actions_movie_actions__["a" /* MovieActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__actions_movie_actions__["a" /* MovieActions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgRedux"]) === "function" && _d || Object])
], MovieDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=movie-detail.component.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieItemComponent = (function () {
    function MovieItemComponent(router) {
        this.router = router;
    }
    MovieItemComponent.prototype.ngOnInit = function () {
        this.rating = this.movie.get('rate');
    };
    MovieItemComponent.prototype.getMovieImage = function (movie) {
        return '/assets/images/movie-covers/' + movie.get('img');
    };
    MovieItemComponent.prototype.openMovieDetail = function (movie) {
        this.router.navigate(['movie', movie.get('key')]);
    };
    return MovieItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MovieItemComponent.prototype, "movie", void 0);
MovieItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-movie-item',
        template: __webpack_require__(257),
        styles: [__webpack_require__(243)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _a || Object])
], MovieItemComponent);

var _a;
//# sourceMappingURL=movie-item.component.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_movie_actions__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieSearchComponent = (function () {
    function MovieSearchComponent(redux, movieActions) {
        this.redux = redux;
        this.movieActions = movieActions;
    }
    MovieSearchComponent.prototype.ngOnInit = function () {
    };
    MovieSearchComponent.prototype.searchChange = function ($event) {
        this.redux.dispatch(this.movieActions.searchMovie(this.searchText));
    };
    return MovieSearchComponent;
}());
MovieSearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-movie-search',
        template: __webpack_require__(258),
        styles: [__webpack_require__(244)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__actions_movie_actions__["a" /* MovieActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__actions_movie_actions__["a" /* MovieActions */]) === "function" && _b || Object])
], MovieSearchComponent);

var _a, _b;
//# sourceMappingURL=movie-search.component.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RatingItemComponent = RatingItemComponent_1 = (function () {
    function RatingItemComponent() {
        // -------------------------------------------------------------------------
        // Inputs
        // -------------------------------------------------------------------------
        this.iconClass = "star-icon";
        this.fullIcon = "★";
        this.emptyIcon = "☆";
        this.titles = [];
        // -------------------------------------------------------------------------
        // Outputs
        // -------------------------------------------------------------------------
        this.onHover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onLeave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.hovered = 0;
        this.hoveredPercent = undefined;
        // -------------------------------------------------------------------------
        // Private Properties
        // -------------------------------------------------------------------------
        this._max = 5;
    }
    Object.defineProperty(RatingItemComponent.prototype, "max", {
        get: function () {
            return this._max;
        },
        // -------------------------------------------------------------------------
        // Input Accessors
        // -------------------------------------------------------------------------
        set: function (max) {
            this._max = max;
            this.buildRanges();
        },
        enumerable: true,
        configurable: true
    });
    // -------------------------------------------------------------------------
    // Implemented from ControlValueAccessor
    // -------------------------------------------------------------------------
    RatingItemComponent.prototype.writeValue = function (value) {
        /*if (value % 1 !== value) {
         this.model = Math.round(value);
         return;
         }*/
        if (value != null) {
            this.model = value;
            this.buildRanges();
        }
    };
    RatingItemComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    RatingItemComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    // -------------------------------------------------------------------------
    // Implemented from Va..
    // -------------------------------------------------------------------------
    RatingItemComponent.prototype.validate = function (c) {
        if (this.required && !c.value) {
            return {
                required: true
            };
        }
        return null;
    };
    // -------------------------------------------------------------------------
    // Lifecycle callbacks
    // -------------------------------------------------------------------------
    RatingItemComponent.prototype.ngOnInit = function () {
        this.buildRanges();
    };
    // -------------------------------------------------------------------------
    // Host Bindings
    // -------------------------------------------------------------------------
    RatingItemComponent.prototype.onKeydown = function (event) {
        if ([37, 38, 39, 40].indexOf(event.which) === -1 || this.hovered)
            return;
        event.preventDefault();
        event.stopPropagation();
        var increment = this.float ? 0.5 : 1;
        this.rate(this.model + (event.which === 38 || event.which === 39 ? increment : increment * -1));
    };
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    RatingItemComponent.prototype.calculateWidth = function (item) {
        if (this.hovered > 0) {
            if (this.hoveredPercent !== undefined && this.hovered === item)
                return this.hoveredPercent;
            return this.hovered >= item ? 100 : 0;
        }
        var val = this.rating >= item ? 100 : 100 - Math.round((item - this.rating) * 10) * 10;
        return val;
    };
    RatingItemComponent.prototype.setHovered = function (hovered) {
        if (!this.readonly && !this.disabled) {
            this.hovered = hovered;
            this.onHover.emit(hovered);
        }
    };
    RatingItemComponent.prototype.changeHovered = function (event) {
        if (!this.float)
            return;
        var target = event.target;
        var relativeX = event.pageX - target.offsetLeft;
        var percent = Math.round((relativeX * 100 / target.offsetWidth) / 10) * 10;
        this.hoveredPercent = percent > 50 ? 100 : 50;
    };
    RatingItemComponent.prototype.resetHovered = function () {
        this.hovered = 0;
        this.hoveredPercent = undefined;
        this.onLeave.emit(this.hovered);
    };
    RatingItemComponent.prototype.rate = function (value) {
        if (!this.disabled && value >= 0 && value <= this.ratingRange.length) {
            var newValue = this.hoveredPercent ? (value - 1) + this.hoveredPercent / 100 : value;
            // this.onChange(newValue);
            this.model = newValue;
        }
    };
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    RatingItemComponent.prototype.buildRanges = function () {
        this.ratingRange = this.range(1, this.max);
        if (this.rating != null) {
            this.rate(this.rating);
        }
    };
    RatingItemComponent.prototype.range = function (start, end) {
        var foo = [];
        for (var i = start; i <= end; i++) {
            foo.push(i);
        }
        return foo;
    };
    return RatingItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RatingItemComponent.prototype, "iconClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RatingItemComponent.prototype, "fullIcon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RatingItemComponent.prototype, "emptyIcon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], RatingItemComponent.prototype, "readonly", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], RatingItemComponent.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], RatingItemComponent.prototype, "required", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], RatingItemComponent.prototype, "float", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RatingItemComponent.prototype, "rating", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], RatingItemComponent.prototype, "titles", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], RatingItemComponent.prototype, "max", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], RatingItemComponent.prototype, "onHover", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], RatingItemComponent.prototype, "onLeave", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("keydown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RatingItemComponent.prototype, "onKeydown", null);
RatingItemComponent = RatingItemComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "app-rating",
        template: "\n<span (mouseleave)=\"resetHovered()\"\n      class=\"rating\"\n      [class.disabled]=\"disabled\"\n      [class.readonly]=\"readonly\"\n      tabindex=\"0\"\n      role=\"slider\" \n      aria-valuemin=\"0\"\n      [attr.aria-valuemax]=\"ratingRange.length\" \n      [attr.aria-valuenow]=\"model\">\n    <span *ngFor=\"let item of ratingRange; let index = index\">\n        <i (mouseenter)=\"setHovered(item)\" \n           (mousemove)=\"changeHovered($event)\"\n           (click)=\"rate(item)\" \n           [attr.data-icon]=\"fullIcon\"\n           class=\"{{ iconClass }} half{{ calculateWidth(item) }}\"\n           [title]=\"titles[index] || item\">{{ emptyIcon }}</i>\n    </span>\n</span>\n",
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return RatingItemComponent_1; }), multi: true },
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return RatingItemComponent_1; }), multi: true },
        ],
        styles: ["\nspan.rating {\n    cursor: pointer;\n    outline: none;\n}\nspan.rating.readonly {\n    cursor: default;\n}\nspan.rating.disabled {\n    cursor: not-allowed;\n}\nspan.rating i{\n    font-style: normal; \n}\n.star-icon {\n    color: #ddd;\n    font-size: 1em;\n    position: relative;\n}\n.star-icon:before {\n    color: #FDE16D;\n    content: attr(data-icon) \" \";\n    position: absolute;\n    left: 0;\n    overflow: hidden;\n    width: 0;\n} \nspan.rating.disabled .star-icon:before {\n    color: #ECECEC;\n    text-shadow: none;\n}\n.star-icon.half10:before {\n    width: 10%;\n}\n.star-icon.half20:before {\n    width: 20%;\n}\n.star-icon.half30:before {\n    width: 30%;\n}\n.star-icon.half40:before {\n    width: 40%;\n}\n.star-icon.half50:before {\n    width: 50%;\n}\n.star-icon.half60:before {\n    width: 60%;\n}\n.star-icon.half70:before {\n    width: 70%;\n}\n.star-icon.half80:before {\n    width: 80%;\n}\n.star-icon.half90:before {\n    width: 90%;\n}\n.star-icon.half100:before {\n    width: 100%;\n}\n@-moz-document url-prefix() { /* Firefox Hack */\n  .star-icon {\n    font-size: 50px;\n    line-height: 34px;\n  }\n}\n"]
    })
], RatingItemComponent);

var RatingItemComponent_1;
//# sourceMappingURL=rating-item.component.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__combine_reducers_service__ = __webpack_require__(182);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return store; });



var applyReduxDevTools = window.devToolsExtension;
var composeArgs = [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a)
];
applyReduxDevTools ? composeArgs.push(window.devToolsExtension()) : function noop() { };
var enhancer = __WEBPACK_IMPORTED_MODULE_0_redux__["compose"].apply(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"], composeArgs);
var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__combine_reducers_service__["a" /* default */], {}, enhancer);
//# sourceMappingURL=build-redux-store.service.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducer_movie_reducer__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(84);


/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["combineReducers"])({
    movies_app: __WEBPACK_IMPORTED_MODULE_0__reducer_movie_reducer__["a" /* MoviesReducer */]
});
//# sourceMappingURL=combine-reducers.service.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__movie_model__ = __webpack_require__(184);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return movies; });

var movies = [
    {
        id: 1,
        key: "deadpool",
        name: "Deadpool",
        description: "A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers, adopting the alter ego Deadpool.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].adventure, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].comedy],
        rate: "8.6",
        length: "1hr 48mins",
        img: "deadpool.jpg"
    },
    {
        id: 2,
        key: "we-are-the-millers",
        name: "We're the Millers",
        description: "A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].adventure, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].comedy, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime],
        rate: "7.0",
        length: "1hr 50mins",
        img: "we-are-the-millers.jpg"
    },
    {
        id: 3,
        key: "straight-outta-compton",
        name: "Straight Outta Compton",
        description: "The group NWA emerges from the mean streets of Compton in Los Angeles, California, in the mid-1980s and revolutionizes Hip Hop culture with their music and tales about life in the hood.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].biography, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].history],
        rate: "8.0",
        length: "2hr 27mins",
        img: "straight-outta-compton.jpg"
    },
    {
        id: 4,
        key: "gridiron-gang",
        name: "Gridiron Gang",
        description: "Teenagers at a juvenile detention center, under the leadership of their counselor, gain self-esteem by playing football together.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].sport],
        rate: "6.9",
        length: "2hr 5mins",
        img: "gridiron-gang.jpg"
    },
    {
        id: 5,
        key: "american-gangster",
        name: "American Gangster",
        description: "In 1970s America, a detective works to bring down the drug empire of Frank Lucas, a heroin kingpin from Manhattan, who is smuggling the drug into the country from the Far East.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].biography, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama],
        rate: "7.8",
        length: "2hr 37mins",
        img: "american-gangster.jpg"
    },
    {
        id: 6,
        key: "gangster-squad",
        name: "Gangster Squad",
        description: "It's 1949 Los Angeles, the city is run by gangsters and a malicious mobster, Mickey Cohen. Determined to end the corruption, John O'Mara assembles a team of cops, ready to take down the ruthless leader and restore peace to the city.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama],
        rate: "6.8",
        length: "1hr 53mins",
        img: "gangster-squad.jpg"
    },
    {
        id: 7,
        key: "now-you-see-me",
        name: "Now You See Me",
        description: "An FBI agent and an Interpol detective track a team of illusionists who pull off bank heists during their performances and reward their audiences with the money.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].mystery, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].thriller],
        rate: "7.3",
        length: "1hr 55mins",
        img: "now-you-see-me.jpg"
    },
    {
        id: 8,
        key: "jurassic-world",
        name: "Jurassic World",
        description: "A new theme park is built on the original site of Jurassic Park. Everything is going well until the park's newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].adventure, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].scifi],
        rate: "7.1",
        length: "2hr 4mins",
        img: "jurassic-world.jpg"
    },
    {
        id: 9,
        key: "mission-impossible-rogue-nation",
        name: "Mission: Impossible: Rogue Nation",
        description: "Ethan and team take on their most impossible mission yet, eradicating the Syndicate - an International rogue organization as highly skilled as they are, committed to destroying the IMF.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].adventure, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].thriller],
        rate: "7.5",
        length: "2hr 11mins",
        img: "mission-impossible-rogue-nation.jpg"
    },
    {
        id: 10,
        key: "the-man-from-uncle",
        name: "The Man from U.N.C.L.E.",
        description: "In the early 1960s, CIA agent Napoleon Solo and KGB operative Illya Kuryakin participate in a joint mission against a mysterious criminal organization, which is working to proliferate nuclear weapons.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].adventure, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].thriller],
        rate: "7.3",
        length: "1hr 56mins",
        img: "the-man-from-uncle.jpg"
    },
    {
        id: 10,
        key: "spectre",
        name: "Spectre",
        description: "A cryptic message from Bond's past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].adventure, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].thriller],
        rate: "6.9",
        length: "2hr 28mins",
        img: "spectre.jpg"
    },
    {
        id: 11,
        key: "legend",
        name: "Legend",
        description: "The film tells the story of the identical twin gangsters Reggie and Ronnie Kray, two of the most notorious criminals in British history, and their organised crime empire in the East End of London during the 1960s.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].biography, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama],
        rate: "7.0",
        length: "2hr 28mins",
        img: "legend.jpg"
    },
    {
        id: 12,
        key: "southpaw",
        name: "Southpaw",
        description: "Boxer Billy Hope turns to trainer Tick Wills to help him get his life back on track after losing his wife in a tragic accident and his daughter to child protection services.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].sport],
        rate: "7.5",
        length: "2hr 4mins",
        img: "southpaw.jpg"
    },
    {
        id: 13,
        key: "bridge-of-spies",
        name: "Bridge of Spies",
        description: "During the Cold War, an American lawyer is recruited to defend an arrested Soviet spy in court, and then help the CIA facilitate an exchange of the spy for the Soviet captured American U2 spy plane pilot, Francis Gary Powers.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].biography, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].thriller],
        rate: "7.7",
        length: "2hr 22mins",
        img: "bridge-of-spies.jpg"
    },
    {
        id: 14,
        key: "ant-man",
        name: "Ant-Man",
        description: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].adventure, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].scifi],
        rate: "7.4",
        length: "1hr 57mins",
        img: "ant-man.jpg"
    },
    {
        id: 15,
        key: "fast-and-furious-7",
        name: "Fast & Furious 7",
        description: "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].thriller],
        rate: "7.3",
        length: "2hr 17mins",
        img: "fast-and-furious-7.jpg"
    },
    {
        id: 16,
        key: "tracers",
        name: "Tracers",
        description: "Wanted by the Chinese mafia, a New York City bike messenger escapes into the world of parkour after meeting a beautiful stranger.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama],
        rate: "5.6",
        length: "1hr 34mins",
        img: "tracers.jpg"
    },
    {
        id: 17,
        key: "running-scared",
        name: "Running Scared",
        description: "A low-ranking thug is entrusted by his crime boss to dispose of a gun that killed corrupt cops, but things get out of control when the gun ends up in wrong hands.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama],
        rate: "7.4",
        length: "2hr 2mins",
        img: "running-scared.jpg"
    },
    {
        id: 18,
        key: "the-hangover",
        name: "The Hangover",
        description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].comedy],
        rate: "7.8",
        length: "1hr 40mins",
        img: "the-hangover.jpg"
    },
    {
        id: 19,
        key: "project-x",
        name: "Project X",
        description: "3 high school seniors throw a birthday party to make a name for themselves. As the night progresses, things spiral out of control as word of the party spreads.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].comedy, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime],
        rate: "6.7",
        length: "1hr 28mins",
        img: "project-x.jpg"
    },
    {
        id: 20,
        key: "the-dark-knight",
        name: "The Dark Knight",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama],
        rate: "9.0",
        length: "2hr 32mins",
        img: "the-dark-knight.jpg"
    },
    {
        id: 21,
        key: "the-tournament",
        name: "The Tournament",
        description: "Every seven years in an unsuspecting town, The Tournament takes place. A battle royale between 30 of the world's deadliest assassins. The last man standing receiving the $10,000,000 cash prize and the title of Worlds No 1, which itself carries the legendary million dollar a bullet price tag.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].thriller],
        rate: "6.1",
        length: "1hr 35mins",
        img: "the-tournament.jpg"
    },
    {
        id: 22,
        key: "the-matrix",
        name: "The Matrix",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].scifi],
        rate: "8.7",
        length: "2hr 16mins",
        img: "the-matrix.jpg"
    },
    {
        id: 23,
        key: "bad-boys",
        name: "Bad Boys",
        description: "Two hip detectives protect a murder witness while investigating a case of stolen heroin.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].comedy, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime],
        rate: "6.8",
        length: "1hr 59mins",
        img: "bad-boys.jpg"
    }
];
//# sourceMappingURL=movie.mock-data.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return genreType; });
var genreType = {
    action: "action",
    adventure: "adventure",
    biography: "biography",
    comedy: "comedy",
    crime: "crime",
    drama: "drama",
    history: "history",
    mystery: "mystery",
    scifi: "scifi",
    sport: "sport",
    thriller: "thriller"
};
//# sourceMappingURL=movie.model.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__movies_constants__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesReducer; });


var initialState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["fromJS"])({
    movies: [],
    selected_movie: null,
    filtered_movies: [],
    search_text: null
});
var MoviesReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__movies_constants__["a" /* MoviesConstants */].GET_MOVIES_LIST:
            return state.merge(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["fromJS"])({
                movies: action.payload,
                filtered_movies: action.payload
            }));
        case __WEBPACK_IMPORTED_MODULE_0__movies_constants__["a" /* MoviesConstants */].GET_MOVIE:
            return state.merge(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["fromJS"])({
                selected_movie: action.payload
            }));
        case __WEBPACK_IMPORTED_MODULE_0__movies_constants__["a" /* MoviesConstants */].SEARCH_MOVIE:
            return state.merge(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["fromJS"])({
                search_text: action.payload
            }));
        case __WEBPACK_IMPORTED_MODULE_0__movies_constants__["a" /* MoviesConstants */].FILTER_MOVIES:
            return state.merge(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["fromJS"])({
                filtered_movies: action.payload
            }));
        default:
            return state;
    }
};
//# sourceMappingURL=movie.reducer.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ".desclabel {\n    font-weight: bold;\n}\n\n.movie-detail{\n    margin-top: 50px;\n}\n\n.movie-genre {\n    margin-top: 50px;\n}\n\n.col-lg-12 {\n    margin-top: 50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ".movie {\n\n    margin: 50px;\n    cursor: pointer;\n}\n\n.movielabel {\n    text-align: center;\n    width: 100%;\n    margin-top: 10px;\n}\n\n.rating {\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href=\"#\">Movies App</a>\n        </div>\n        <form class=\"navbar-form navbar-right\">\n            <div class=\"form-group\">\n                <app-movie-search></app-movie-search>\n            </div>\n\n        </form>\n\n    </div>\n</nav>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"row\">\n    <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\"  *ngFor=\"let movie of (moviesList$ | async)\">\n      <app-movie-item [movie]=\"movie\"></app-movie-item>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" class=\"movie-name\">\n    <div class=\"col-lg-12 col-md-4 col-sm-6 col-xs-12\">\n\n        <h1 class=\"movielabel\">{{(movie | async).get('name')}}</h1>\n\n\n\n    </div>\n\n</div>\n\n<div class=\"row\" class=\"movie-image\">\n    <div class=\"col-lg-12 col-md-4 col-sm-6 col-xs-12\">\n\n\n        <img [src]=\"getMovieImage(movie | async)\" />\n\n\n    </div>\n\n\n</div>\n\n<div class=\"row\" class=\"movie-rating\">\n    <div class=\"col-lg-12 col-md-4 col-sm-6 col-xs-12\">\n\n\n        <div class=\"rating\">\n            <app-rating [rating]=\"(movie | async).get('rate')\" [max]=\"10\" iconClass=\"star-icon\" fullIcon=\"★\" emptyIcon=\"☆\" [readonly]=\"true\"\n                [disabled]=\"false\" [required]=\"false\" [float]=\"true\" [titles]=\"['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']\">\n\n            </app-rating>\n        </div>\n\n\n    </div>\n\n\n</div>\n\n<div class=\"row\" class=\"movie-genre\">\n    <div class=\"col-lg-12 col-md-4 col-sm-6 col-xs-12\">\n\n\n\n        <div class=\"desclabel\">Movie genre:</div>\n        <div class=\"description\">\n            {{(movie | async).get('genres').join(',')}}\n        </div>\n\n\n\n\n    </div>\n\n\n</div>\n\n<div class=\"row\" class=\"movie-length\">\n    <div class=\"col-lg-12 col-md-4 col-sm-6 col-xs-12\">\n\n\n\n        <div class=\"desclabel\">Movie length:</div>\n        <div class=\"description\">\n            {{(movie | async).get('length')}}\n        </div>\n\n\n\n\n    </div>\n\n\n</div>\n\n\n<div class=\"row\" class=\"movie-detail\">\n    <div class=\"col-lg-12 col-md-4 col-sm-6 col-xs-12\">\n        <div class=\"desclabel\">Description:</div>\n        <div class=\"description\">\n            {{(movie | async).get('description')}}\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = "<div class=\"movie\" (click)=\"openMovieDetail(movie)\">\n  <img [src]=\"getMovieImage(movie)\" />\n  <label class=\"movielabel\">{{movie.get('name')}}</label>\n\n  <div class=\"rating\">\n  <app-rating [rating]=\"rating\"\n  [max]=\"10\"\n  iconClass=\"star-icon\"\n  fullIcon=\"★\"\n  emptyIcon=\"☆\"\n  [readonly]=\"true\"\n  [disabled]=\"false\"\n  [required]=\"false\"\n  [float]=\"true\"\n  [titles]=\"['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']\">\n\n</app-rating>\n\n</div>\n</div>"

/***/ }),

/***/ 258:
/***/ (function(module, exports) {

module.exports = "<input name=\"searchText\" type=\"text\" [(ngModel)]=\"searchText\" (input)=\"searchChange($event)\"  class=\"form-control\" placeholder=\"Movie Name\">"

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_movie_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movies_constants__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieActions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieActions = (function () {
    function MovieActions(moviesService) {
        this.moviesService = moviesService;
        this.getMoviesList = function (data) {
            return {
                type: __WEBPACK_IMPORTED_MODULE_2__movies_constants__["a" /* MoviesConstants */].GET_MOVIES_LIST,
                payload: data
            };
        };
        this.setSearchText = function (data) {
            return {
                type: __WEBPACK_IMPORTED_MODULE_2__movies_constants__["a" /* MoviesConstants */].SEARCH_MOVIE,
                payload: data
            };
        };
        this.filterMovies = function (data) {
            return {
                type: __WEBPACK_IMPORTED_MODULE_2__movies_constants__["a" /* MoviesConstants */].FILTER_MOVIES,
                payload: data
            };
        };
        this.getMovie = function (data) {
            return {
                type: __WEBPACK_IMPORTED_MODULE_2__movies_constants__["a" /* MoviesConstants */].GET_MOVIE,
                payload: data
            };
        };
    }
    MovieActions.prototype.getMovies = function () {
        var _this = this;
        return function (dispatch) {
            _this.moviesService.getMoviesList()
                .subscribe(function (res) {
                dispatch(_this.getMoviesList(res));
            }, function (err) {
                console.log(err);
            });
        };
    };
    MovieActions.prototype.searchMovie = function (searchText) {
        var _this = this;
        return function (dispatch) {
            _this.moviesService.searchMovie(searchText)
                .subscribe(function (res) {
                dispatch(_this.filterMovies(res));
            }, function (err) {
                console.log(err);
            });
        };
    };
    MovieActions.prototype.getMovieByKey = function (movieKey) {
        var _this = this;
        return function (dispatch) {
            _this.moviesService.getMovieDetail(movieKey)
                .subscribe(function (res) {
                dispatch(_this.getMovie(res));
            }, function (err) {
                console.log(err);
            });
        };
    };
    return MovieActions;
}());
MovieActions = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__service_movie_service__["a" /* MovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__service_movie_service__["a" /* MovieService */]) === "function" && _a || Object])
], MovieActions);

var _a;
//# sourceMappingURL=movie.actions.js.map

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(160);


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesConstants; });
var MoviesConstants = {
    GET_MOVIES_LIST: 'GET_MOVIES_LIST',
    GET_MOVIE: 'GET_MOVIE',
    SEARCH_MOVIE: 'SEARCH_MOVIE',
    FILTER_MOVIES: 'FILTER_MOVIES'
};
//# sourceMappingURL=movies.constants.js.map

/***/ })

},[532]);
//# sourceMappingURL=main.bundle.js.map