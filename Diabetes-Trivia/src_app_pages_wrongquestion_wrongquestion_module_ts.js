(self["webpackChunkopentrivia"] = self["webpackChunkopentrivia"] || []).push([["src_app_pages_wrongquestion_wrongquestion_module_ts"],{

/***/ 3831:
/*!*********************************************************************!*\
  !*** ./src/app/pages/wrongquestion/wrongquestion-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrongquestionPageRoutingModule": () => (/* binding */ WrongquestionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _wrongquestion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrongquestion.page */ 2359);




const routes = [
    {
        path: '',
        component: _wrongquestion_page__WEBPACK_IMPORTED_MODULE_0__.WrongquestionPage
    }
];
let WrongquestionPageRoutingModule = class WrongquestionPageRoutingModule {
};
WrongquestionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WrongquestionPageRoutingModule);



/***/ }),

/***/ 8894:
/*!*************************************************************!*\
  !*** ./src/app/pages/wrongquestion/wrongquestion.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrongquestionPageModule": () => (/* binding */ WrongquestionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _wrongquestion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrongquestion-routing.module */ 3831);
/* harmony import */ var _wrongquestion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrongquestion.page */ 2359);







let WrongquestionPageModule = class WrongquestionPageModule {
};
WrongquestionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _wrongquestion_routing_module__WEBPACK_IMPORTED_MODULE_0__.WrongquestionPageRoutingModule
        ],
        declarations: [_wrongquestion_page__WEBPACK_IMPORTED_MODULE_1__.WrongquestionPage]
    })
], WrongquestionPageModule);



/***/ }),

/***/ 2359:
/*!***********************************************************!*\
  !*** ./src/app/pages/wrongquestion/wrongquestion.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrongquestionPage": () => (/* binding */ WrongquestionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_wrongquestion_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./wrongquestion.page.html */ 7149);
/* harmony import */ var _wrongquestion_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrongquestion.page.scss */ 3844);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);






let WrongquestionPage = class WrongquestionPage {
    constructor(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.pop();
    }
};
WrongquestionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
WrongquestionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-wrongquestion',
        template: _raw_loader_wrongquestion_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_wrongquestion_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WrongquestionPage);



/***/ }),

/***/ 3844:
/*!*************************************************************!*\
  !*** ./src/app/pages/wrongquestion/wrongquestion.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3cm9uZ3F1ZXN0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 7149:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wrongquestion/wrongquestion.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\r\n    </ion-buttons>\r\n    \r\n    <ion-title>Wrong Answer</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<h2>Ahhh... Too bad.</h2>\r\n\r\n<ion-button expand=\"full\" (click)=\"this.goBack()\">Try Again</ion-button>\r\n<ion-button expand=\"full\" (click)=\"this.router.navigate(['/home'])\">Navigate Home</ion-button>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_wrongquestion_wrongquestion_module_ts.js.map