(self["webpackChunkopentrivia"] = self["webpackChunkopentrivia"] || []).push([["src_app_pages_quizcategory_quizcategory_module_ts"],{

/***/ 3274:
/*!*******************************************************************!*\
  !*** ./src/app/pages/quizcategory/quizcategory-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizcategoryPageRoutingModule": () => (/* binding */ QuizcategoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _quizcategory_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quizcategory.page */ 9574);




const routes = [
    {
        path: '',
        component: _quizcategory_page__WEBPACK_IMPORTED_MODULE_0__.QuizcategoryPage
    }
];
let QuizcategoryPageRoutingModule = class QuizcategoryPageRoutingModule {
};
QuizcategoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QuizcategoryPageRoutingModule);



/***/ }),

/***/ 4269:
/*!***********************************************************!*\
  !*** ./src/app/pages/quizcategory/quizcategory.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizcategoryPageModule": () => (/* binding */ QuizcategoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _quizcategory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quizcategory-routing.module */ 3274);
/* harmony import */ var _quizcategory_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quizcategory.page */ 9574);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 5349);








let QuizcategoryPageModule = class QuizcategoryPageModule {
};
QuizcategoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _quizcategory_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuizcategoryPageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_quizcategory_page__WEBPACK_IMPORTED_MODULE_1__.QuizcategoryPage],
        providers: []
    })
], QuizcategoryPageModule);



/***/ }),

/***/ 9574:
/*!*********************************************************!*\
  !*** ./src/app/pages/quizcategory/quizcategory.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizcategoryPage": () => (/* binding */ QuizcategoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_quizcategory_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./quizcategory.page.html */ 638);
/* harmony import */ var _quizcategory_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quizcategory.page.scss */ 7165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ 3381);
/* harmony import */ var src_app_services_caching_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/caching.service */ 6730);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7535);









let QuizcategoryPage = class QuizcategoryPage {
    constructor(activatedRoute, apiService, cachingService, loadingController, router) {
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.cachingService = cachingService;
        this.loadingController = loadingController;
        this.router = router;
        this.id = 0;
        this.name = "(no name)";
        this.loadTriviaQuestions(false);
    }
    ngOnInit() {
        this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
        this.name = this.activatedRoute.snapshot.paramMap.get('name');
    }
    loadTriviaQuestions(forceRefresh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading questions...'
            });
            yield loading.present();
            this.apiService.getTriviaQuestions(this.id, forceRefresh).subscribe(res => {
                this.questions = res;
            }, ((e) => { console.error(e); (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(e); }), () => { loading.dismiss(); });
            loading.dismiss(); // unfortunately, I had to add this redundantly, since the previous dismiss is not executed for some funky reason
        });
    }
    goToQuestion(question) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.cachingService.storeActiveQuestion(question);
            this.router.navigate(['/quizquestion']);
        });
    }
};
QuizcategoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_caching_service__WEBPACK_IMPORTED_MODULE_3__.CachingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
QuizcategoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-quizcategory',
        template: _raw_loader_quizcategory_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_quizcategory_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], QuizcategoryPage);



/***/ }),

/***/ 7165:
/*!***********************************************************!*\
  !*** ./src/app/pages/quizcategory/quizcategory.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  padding-bottom: 2px;\n  padding-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXpjYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6InF1aXpjYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG59Il19 */");

/***/ }),

/***/ 638:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quizcategory/quizcategory.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Quiz Category: {{ this.name }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>  \r\n  <ion-list>\r\n    <ion-item *ngFor=\"let question of questions\" (click)=\"goToQuestion(question)\">\r\n      {{ question.question | unescape }}\r\n      <ion-note slot=\"end\">difficulty {{ question.difficulty }}</ion-note>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_quizcategory_quizcategory_module_ts.js.map