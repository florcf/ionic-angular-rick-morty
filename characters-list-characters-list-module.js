(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["characters-list-characters-list-module"],{

/***/ "3jCr":
/*!*******************************************************************!*\
  !*** ./src/app/characters-list/characters-list-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CharactersListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersListPageRoutingModule", function() { return CharactersListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _characters_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters-list.page */ "v94e");




const routes = [
    {
        path: '',
        component: _characters_list_page__WEBPACK_IMPORTED_MODULE_3__["CharactersListPage"]
    }
];
let CharactersListPageRoutingModule = class CharactersListPageRoutingModule {
};
CharactersListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CharactersListPageRoutingModule);



/***/ }),

/***/ "DQqe":
/*!***********************************************************!*\
  !*** ./src/app/characters-list/characters-list.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFyYWN0ZXJzLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "l030":
/*!***********************************************************!*\
  !*** ./src/app/characters-list/characters-list.module.ts ***!
  \***********************************************************/
/*! exports provided: CharactersListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersListPageModule", function() { return CharactersListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _characters_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters-list-routing.module */ "3jCr");
/* harmony import */ var _characters_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./characters-list.page */ "v94e");







let CharactersListPageModule = class CharactersListPageModule {
};
CharactersListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _characters_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["CharactersListPageRoutingModule"]
        ],
        declarations: [_characters_list_page__WEBPACK_IMPORTED_MODULE_6__["CharactersListPage"]]
    })
], CharactersListPageModule);



/***/ }),

/***/ "mIb+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/characters-list/characters-list.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Characters</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col sizeMd=\"4\" offsetMd=\"4\">\n        <ion-list>\n          <ion-item *ngFor=\"let character of characters\" routerLink=\"/character-details/{{character.id}}\">\n            <ion-avatar slot=\"start\">\n              <img src=\"{{character.image}}\" alt=\"Rick and Morty Character - {{character.name}}\">\n            </ion-avatar>\n            <ion-label>{{character.name}}</ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "v94e":
/*!*********************************************************!*\
  !*** ./src/app/characters-list/characters-list.page.ts ***!
  \*********************************************************/
/*! exports provided: CharactersListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersListPage", function() { return CharactersListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_characters_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./characters-list.page.html */ "mIb+");
/* harmony import */ var _characters_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characters-list.page.scss */ "DQqe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





let CharactersListPage = class CharactersListPage {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.http.get('https://rickandmortyapi.com/api/character').subscribe(response => {
            this.characters = response.results;
        });
    }
};
CharactersListPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
CharactersListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-characters-list',
        template: _raw_loader_characters_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_characters_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CharactersListPage);



/***/ })

}]);
//# sourceMappingURL=characters-list-characters-list-module.js.map