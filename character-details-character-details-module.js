(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["character-details-character-details-module"],{

/***/ "9+Ad":
/*!***********************************************************************!*\
  !*** ./src/app/character-details/character-details-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CharacterDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPageRoutingModule", function() { return CharacterDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _character_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./character-details.page */ "doI0");




const routes = [
    {
        path: '',
        component: _character_details_page__WEBPACK_IMPORTED_MODULE_3__["CharacterDetailsPage"]
    }
];
let CharacterDetailsPageRoutingModule = class CharacterDetailsPageRoutingModule {
};
CharacterDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CharacterDetailsPageRoutingModule);



/***/ }),

/***/ "KKVh":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/character-details/character-details.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Character Details</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"characters-list\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col sizeMd=\"4\" offsetMd=\"4\">\n        <ion-card *ngIf=\"character\" class=\"ion-text-center\">\n          <ion-card-header>\n            <img src=\"{{character.image}}\" alt=\"{{character.image}}\" />\n            <ion-card-title>{{character.name}}</ion-card-title>\n            <ion-card-subtitle>{{character.status}}</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content> </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "PLpG":
/*!***************************************************************!*\
  !*** ./src/app/character-details/character-details.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFyYWN0ZXItZGV0YWlscy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "doI0":
/*!*************************************************************!*\
  !*** ./src/app/character-details/character-details.page.ts ***!
  \*************************************************************/
/*! exports provided: CharacterDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPage", function() { return CharacterDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_character_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./character-details.page.html */ "KKVh");
/* harmony import */ var _character_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./character-details.page.scss */ "PLpG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






let CharacterDetailsPage = class CharacterDetailsPage {
    constructor(route, http) {
        this.route = route;
        this.http = http;
    }
    ngOnInit() {
        this.getCharacter();
    }
    getCharacter() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.http.get(`https://rickandmortyapi.com/api/character/${id}`).subscribe(response => this.character = response);
    }
};
CharacterDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
CharacterDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-character-details',
        template: _raw_loader_character_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_character_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CharacterDetailsPage);



/***/ }),

/***/ "l1IW":
/*!***************************************************************!*\
  !*** ./src/app/character-details/character-details.module.ts ***!
  \***************************************************************/
/*! exports provided: CharacterDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPageModule", function() { return CharacterDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _character_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./character-details-routing.module */ "9+Ad");
/* harmony import */ var _character_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./character-details.page */ "doI0");







let CharacterDetailsPageModule = class CharacterDetailsPageModule {
};
CharacterDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _character_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CharacterDetailsPageRoutingModule"]
        ],
        declarations: [_character_details_page__WEBPACK_IMPORTED_MODULE_6__["CharacterDetailsPage"]]
    })
], CharacterDetailsPageModule);



/***/ })

}]);
//# sourceMappingURL=character-details-character-details-module.js.map