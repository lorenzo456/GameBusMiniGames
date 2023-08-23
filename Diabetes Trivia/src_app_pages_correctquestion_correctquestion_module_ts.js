(self["webpackChunkopentrivia"] = self["webpackChunkopentrivia"] || []).push([["src_app_pages_correctquestion_correctquestion_module_ts"],{

/***/ 1125:
/*!*************************************************************************!*\
  !*** ./src/app/pages/correctquestion/correctquestion-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrectquestionPageRoutingModule": () => (/* binding */ CorrectquestionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _correctquestion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./correctquestion.page */ 298);




const routes = [
    {
        path: '',
        component: _correctquestion_page__WEBPACK_IMPORTED_MODULE_0__.CorrectquestionPage
    }
];
let CorrectquestionPageRoutingModule = class CorrectquestionPageRoutingModule {
};
CorrectquestionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CorrectquestionPageRoutingModule);



/***/ }),

/***/ 2393:
/*!*****************************************************************!*\
  !*** ./src/app/pages/correctquestion/correctquestion.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrectquestionPageModule": () => (/* binding */ CorrectquestionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _correctquestion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./correctquestion-routing.module */ 1125);
/* harmony import */ var _correctquestion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./correctquestion.page */ 298);







let CorrectquestionPageModule = class CorrectquestionPageModule {
};
CorrectquestionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _correctquestion_routing_module__WEBPACK_IMPORTED_MODULE_0__.CorrectquestionPageRoutingModule
        ],
        declarations: [_correctquestion_page__WEBPACK_IMPORTED_MODULE_1__.CorrectquestionPage]
    })
], CorrectquestionPageModule);



/***/ }),

/***/ 298:
/*!***************************************************************!*\
  !*** ./src/app/pages/correctquestion/correctquestion.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrectquestionPage": () => (/* binding */ CorrectquestionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_correctquestion_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./correctquestion.page.html */ 915);
/* harmony import */ var _correctquestion_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./correctquestion.page.scss */ 4736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _app_services_caching_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/caching.service */ 6730);






let CorrectquestionPage = class CorrectquestionPage {
    constructor(router, cachingService) {
        this.router = router;
        this.cachingService = cachingService;
        this.question = this.cachingService.loadActiveQuestion();
    }
    ngOnInit() {
    }
    toHome() {
        this.router.navigate(['/home']).then(() => {
        });
    }
};
CorrectquestionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _app_services_caching_service__WEBPACK_IMPORTED_MODULE_2__.CachingService }
];
CorrectquestionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-correctquestion',
        template: _raw_loader_correctquestion_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_correctquestion_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CorrectquestionPage);



/***/ }),

/***/ 4736:
/*!*****************************************************************!*\
  !*** ./src/app/pages/correctquestion/correctquestion.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3JyZWN0cXVlc3Rpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 915:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/correctquestion/correctquestion.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Correct Answer</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<ion-card *ngIf=\"question | async as q; else loading\">\r\n  <ion-card-header>\r\n    <ion-card-title>Congratulations!</ion-card-title>\r\n  </ion-card-header>\r\n  <ion-card-content>\r\n    <ion-item className=\"ion-activated\">\r\n      <ion-icon name=\"trophy\" slot=\"start\"></ion-icon>\r\n      You Answer: {{ q.correct_answer }}  \r\n    </ion-item>\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n<ng-template #loading>loading...</ng-template>\r\n\r\n<ion-button expand=\"full\" (click)=\"toHome()\">Navigate Home</ion-button>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_correctquestion_correctquestion_module_ts.js.map