webpackJsonp([1,5],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_collection_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BagSingleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BagSingleComponent = (function () {
    function BagSingleComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    BagSingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Grab the id from templateUrl
        var bagid = this.route.snapshot.params['bagid'];
        var id = this.route.snapshot.params['id'];
        this.service.getCollection(id)
            .subscribe(function (collection) { return _this.collection = collection; });
        this.service.getBagWithAttachments(bagid)
            .subscribe(function (bags) { return _this.bags = bags; });
    };
    BagSingleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            styles: ["\n        .thumbnail{\n            width: 100%;\n            height: 100%;\n            margin: 0.5em!important;\n            padding: 0.5em!important;\n        }\n        \n    "],
            template: __webpack_require__(538)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_collection_service__["a" /* CollectionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_collection_service__["a" /* CollectionService */]) === 'function' && _b) || Object])
    ], BagSingleComponent);
    return BagSingleComponent;
    var _a, _b;
}());
//# sourceMappingURL=bag-single.component.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_collection_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CollectionListComponent = (function () {
    function CollectionListComponent(service) {
        this.service = service;
        this.attachments = new Array;
    }
    CollectionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getCollections()
            .subscribe(function (res) {
            _this.collections = res;
            for (var i = 0; i < res.length; i++) {
                var collectionid = res[i].id;
                _this.service.getBagsFromCollection(collectionid)
                    .subscribe(function (bags) {
                    var bagid = bags[0].id;
                    _this.service.getBagWithAttachments(bagid)
                        .subscribe(function (data) {
                        var attachmenturl = data[0].url;
                        console.log(attachmenturl);
                        _this.attachments.push(attachmenturl);
                    });
                });
            }
        });
    };
    CollectionListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            styles: [" \n        .flexthis{\n            display: -webkit-flex;\n            display: -ms-flexbox;\n            display: flex;\n        \n            -webkit-flex-wrap: wrap;\n            -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        }\n        .box {\n            display: -webkit-flex;\n            display: -ms-flexbox;\n            display: flex;\n        } \n    "],
            template: __webpack_require__(539)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_collection_service__["a" /* CollectionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_collection_service__["a" /* CollectionService */]) === 'function' && _a) || Object])
    ], CollectionListComponent);
    return CollectionListComponent;
    var _a;
}());
//# sourceMappingURL=collection-list.component.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_collection_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionSingleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CollectionSingleComponent = (function () {
    function CollectionSingleComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    CollectionSingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Grab the id from templateUrl
        var id = this.route.snapshot.params['id'];
        // use the collectionservice to getCollection()
        this.service.getCollection(id)
            .subscribe(function (collection) { return _this.collection = collection; });
        this.service.getBagsFromCollection(id)
            .subscribe(function (bags) { return _this.bags = bags; });
    };
    CollectionSingleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            styles: ["\n        .flexthis{\n            display: -webkit-flex;\n            display: -ms-flexbox;\n            display: flex;\n        \n            -webkit-flex-wrap: wrap;\n            -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        }\n        .box {\n            display: -webkit-flex;\n            display: -ms-flexbox;\n            display: flex;\n        } \n\n    "],
            template: __webpack_require__(540)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_collection_service__["a" /* CollectionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_collection_service__["a" /* CollectionService */]) === 'function' && _b) || Object])
    ], CollectionSingleComponent);
    return CollectionSingleComponent;
    var _a, _b;
}());
//# sourceMappingURL=collection-single.component.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_collection_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CollectionsComponent = (function () {
    function CollectionsComponent(service) {
        this.service = service;
    }
    CollectionsComponent.prototype.ngOnInit = function () { };
    CollectionsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'my-collections',
            template: "\n    <nav-header></nav-header>\n    <router-outlet></router-outlet>\n    <footer></footer>\n    "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_collection_service__["a" /* CollectionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_collection_service__["a" /* CollectionService */]) === 'function' && _a) || Object])
    ], CollectionsComponent);
    return CollectionsComponent;
    var _a;
}());
//# sourceMappingURL=collections.component.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            template: "\n    <div class=\"jumbotron text-center\">\n        <h1>404 Not Found</h1>\n        <p>You may be lost. Follow the breadcrumbs back <a routerLink=\"/\">home</a>.</p>\n        <div class=\"embed-responsive embed-responsive-16by9\">\n            <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/SaA_cs4WZHM?autoplay=1\"></iframe>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 345;


/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_module__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(475);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2_app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CollectionService = (function () {
    function CollectionService(http) {
        this.http = http;
        //private collectionsUrl: string = 'http://192.168.10.40/api/v1/collections';
        this.collectionsUrl = 'http://beeldback.gdm.gent/api/v1/collections';
    }
    /**
     * Get all collections
     */
    CollectionService.prototype.getCollections = function () {
        return this.http.get(this.collectionsUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    /**
     * Get collection
     */
    CollectionService.prototype.getCollection = function (id) {
        return this.http.get(this.collectionsUrl + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    /**
     * Get the bags from a collection
     */
    CollectionService.prototype.getBagsFromCollection = function (id) {
        return this.http.get(this.collectionsUrl + "/" + id + "/bags")
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    /**
     * Get bag with attachments
     */
    CollectionService.prototype.getBagWithAttachments = function (id) {
        return this.http.get(this.collectionsUrl + "/" + id + "/attachments")
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //  getAttachmentFromCollection(id: number){
    //     this.getBagsFromCollection(id).subscribe(
    //          bags => {
    //             let bagid = bags[0].id;
    //                 this.getBagWithAttachments(bagid).subscribe(
    //                 data => {
    //                 let attachmenturl = data[0].url;
    //                 console.log(attachmenturl);
    //                 return attachmenturl;
    //                 }
    //             )
    //         }
    //     )    
    //  }
    /**
     * Handle any errors from the API
     */
    CollectionService.prototype.handleError = function (err) {
        var errMessage;
        if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = err.json() || '';
            var error = body.error || JSON.stringify(body);
            errMessage = err.status + " - " + (err.statusText || '') + error;
        }
        else {
            errMessage = err.message ? err.message : err.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMessage);
    };
    CollectionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], CollectionService);
    return CollectionService;
    var _a;
}());
//# sourceMappingURL=collection.service.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_collection_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getCollections()
            .subscribe(function (collections) { return _this.collections = collections; });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'my-app',
            styles: ["\n      .active{\n        color: #000!important;\n      }\n    \n  "],
            template: "\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_collection_service__["a" /* CollectionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_collection_service__["a" /* CollectionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_collection_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__not_found_not_found_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_footer_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__collections_collections_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__collections_collection_list_collection_list_component__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__collections_collection_single_collection_single_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__collections_bag_single_bag_single_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_map__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_topromise__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_topromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_topromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_catch__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_do__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_observable_throw__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_rxjs_add_observable_throw__);
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



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__collections_collections_component__["a" /* CollectionsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_12__collections_collection_single_collection_single_component__["a" /* CollectionSingleComponent */],
                __WEBPACK_IMPORTED_MODULE_11__collections_collection_list_collection_list_component__["a" /* CollectionListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__collections_bag_single_bag_single_component__["a" /* BagSingleComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__shared_services_collection_service__["a" /* CollectionService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collections_collections_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collections_collection_single_collection_single_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__collections_collection_list_collection_list_component__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__collections_bag_single_bag_single_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_component__ = __webpack_require__(311);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });






var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__collections_collections_component__["a" /* CollectionsComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_3__collections_collection_list_collection_list_component__["a" /* CollectionListComponent */],
            },
            {
                path: ':id/bags',
                component: __WEBPACK_IMPORTED_MODULE_2__collections_collection_single_collection_single_component__["a" /* CollectionSingleComponent */]
            },
            {
                path: ':id/bags/:bagid/attachments',
                component: __WEBPACK_IMPORTED_MODULE_4__collections_bag_single_bag_single_component__["a" /* BagSingleComponent */]
            }
        ]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_component__["a" /* NotFoundComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_collection_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(service) {
        this.service = service;
        this.attachments = new Array;
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getCollections()
            .subscribe(function (res) {
            _this.collections = res;
        });
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            styles: [" \n    "],
            selector: 'footer',
            template: __webpack_require__(541)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_collection_service__["a" /* CollectionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_collection_service__["a" /* CollectionService */]) === 'function' && _a) || Object])
    ], FooterComponent);
    return FooterComponent;
    var _a;
}());
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_collection_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(service) {
        this.service = service;
        this.attachments = new Array;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getCollections()
            .subscribe(function (res) {
            _this.collections = res;
        });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            styles: [" \n    "],
            selector: 'nav-header',
            template: __webpack_require__(542)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_collection_service__["a" /* CollectionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_collection_service__["a" /* CollectionService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"bags\">\n    <div class=\"header-bar\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-5 header-bar-text_box\">\n                    <h2>{{ bags[0].title }}</h2>\n                    <h4>Campus Mariakerke</h4>\n                    <p>{{bags[0].description }}</p>\n                </div>\n                <div class=\"col-sm-6 col-sm-offset-1 col-xs-12  header-bar-img_box\" [ngStyle]=\"{'background-image': 'url(http://beeldback.gdm.gent/' + bags[0].url + ')'}\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"breadcrumb-back\">\n        <div class=\"container\" *ngIf=\"collection\">\n            <ol class=\"breadcrumb\">\n                <li><a [routerLink]=\"['/']\" >Collections</a></li>\n                <li><a [routerLink]=\"[ '/', collection.id,'bags']\" >{{ collection.name }}</a></li>\n                <li class=\"active\">{{ bags[0].title }}</li>\n            </ol>\n        </div>\n    </div>\n    <div class=\"container single-bags\">\n        <div class=\"row\">\n            <div class=\"col-xs-6 col-md-3 box\" *ngFor=\"let bag of bags\">\n                <a href=\"http://beeldback.gdm.gent/{{bag.url}}\" data-lightbox=\"attachments\">\n                    <img class=\"thumbnail\" src=\"http://beeldback.gdm.gent/{{bag.url}}\">\n                </a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

module.exports = "<div *ngIf='collections'> \n    <div class=\"header-bar\">\n        <div class=\"container\">\n            <div class=\"flexthis\">\n                <div class=\"col-sm-5 col-xs-12 header-bar-text_box\">\n                    <h2>Beeldbank</h2>\n                    <h4>Campus Mariakerke</h4>\n                    <p>Naasr onze collectie in de rekken van de mediatheek is er ook een erfgoedcollectie aanwezig in ons archief. Met deze beeldbank willen we jou een kijk geven in deze collectie vol gedigitaliseerde werken van onze studenten.</p>\n                    <!--<p class=\"button-primary col-sm-6 col-xs-12\" role=\"button\" href=\"#collecties\">Bekijk alle collecties</p>-->\n                </div>\n                <div class=\"col-sm-6 col-sm-offset-1 col-xs-12 header-bar-img_box\" [ngStyle]=\"{'background-image': 'url(http://beeldback.gdm.gent/' + attachments[0] + ')'}\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"container\" id=\"collecties\">\n        <div class=\"flexthis\">\n            <div class=\"col-sm-6 col-xs-12\"  *ngFor=\"let collection of collections; let i = index\">\n                <div class=\"collection-box\">\n                    <div class=\"collection-box_img\" [ngStyle]=\"{'background-image': 'url(http://beeldback.gdm.gent/' + attachments[i] + ')'}\"></div>\n                    <h4>{{ collection.name }}</h4>\n                    <p><a [routerLink]=\"[ collection.id,'bags']\" >Bekijk deze collectie</a><span>24/02/2017</span></p>\n                </div>\n            </div>  \n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"collection\">\n    <div class=\"header-bar\">\n        <div class=\"container\">\n            <div class=\"flexthis\">\n                <div class=\"col-sm-5 header-bar-text_box\">\n                    <h2>{{ collection.name }}</h2>\n                    <h4>datum</h4>\n                    <p>{{ collection.description }}</p>\n                </div>\n                <div class=\"col-sm-6 col-md-offset-1 col-xs-12  header-bar-img_box\" *ngIf=\"bags\" [ngStyle]=\"{'background-image': 'url(http://beeldback.gdm.gent/' + bags[0].attachments[0].url + ')'}\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"breadcrumb-back\">\n        <div class=\"container \">\n            <ol class=\"breadcrumb\">\n                <li><a [routerLink]=\"['/']\" >Collections</a></li>\n                <li class=\"active\">{{ collection.name }}</li>\n            </ol>\n        </div>\n    </div>\n    <div class=\"container\">\n        <div  class=\"flexthis\" *ngIf=\"bags\">\n            <div class=\"col-sm-6 col-xs-12\" *ngFor=\"let bag of bags\">\n                <div class=\"collection-box\" >\n                    <div class=\"collection-box_img\" [ngStyle]=\"{'background-image': 'url(http://beeldback.gdm.gent/' + bag.attachments[0].url + ')'}\"></div>\n                    <h4>{{ bag.title }}</h4>\n                    <p>{{ bag.description }}</p>\n                    <p><a [routerLink]=\"[ bag.id,'attachments']\">Bekijk meer</a>\n                </div>\n            </div>\n            <div *ngIf=\"!bags\">\n                <h1>None available</h1>\n            </div>\n        </div>\n    </div>\n </div>\n"

/***/ }),

/***/ 541:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <div *ngIf='collections' class=\"container\"> \n        <div class=\"navbar\">\n            <div class=\"container-fluid\">\n                <div class=\"navbar-header\">\n                    <a routerLink=\"/\" class=\"navbar-brand\">{{ collections[0].organisations_name }}</a>\n                </div>\n                <ul class=\"nav navbar-nav\">\n                    <li><a class=\"nav_active\" routerLink=\"/\">Beeldbank</a></li>\n                    \n                </ul>\n                <p class=\"footer-right\">In samenwerking met <a href=\"https://www.arteveldehogeschool.be/\" target=\"_blank\">Arteveldehogeschool</a></p>\n            </div>\n        </div>\n    </div> \n</div>\n    "

/***/ }),

/***/ 542:
/***/ (function(module, exports) {

module.exports = "<div *ngIf='collections' class=\"container header-navigation\"> \n    <div class=\"navbar\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                <a routerLink=\"/\" class=\"navbar-brand\">{{ collections[0].organisations_name }}</a>\n            </div>\n            <ul class=\"nav navbar-nav\">\n                <li><a class=\"nav_active\" routerLink=\"/\">Beeldbank</a></li>\n            </ul>\n            <!--<ul class=\"nav navbar-nav navbar-right\">\n                <li><a routerLink=\"/\">Contacteer ons</a></li>\n            </ul>-->\n        </div>\n    </div>\n</div>\n    "

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(346);


/***/ })

},[570]);
//# sourceMappingURL=main.bundle.js.map