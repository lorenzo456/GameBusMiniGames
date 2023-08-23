(self["webpackChunkopentrivia"] = self["webpackChunkopentrivia"] || []).push([["src_app_pages_storage_storage_module_ts"],{

/***/ 4774:
/*!*********************************************************!*\
  !*** ./src/app/pages/storage/storage-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoragePageRoutingModule": () => (/* binding */ StoragePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _storage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.page */ 4721);




const routes = [
    {
        path: '',
        component: _storage_page__WEBPACK_IMPORTED_MODULE_0__.StoragePage
    }
];
let StoragePageRoutingModule = class StoragePageRoutingModule {
};
StoragePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StoragePageRoutingModule);



/***/ }),

/***/ 5610:
/*!*************************************************!*\
  !*** ./src/app/pages/storage/storage.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoragePageModule": () => (/* binding */ StoragePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _storage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage-routing.module */ 4774);
/* harmony import */ var _storage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.page */ 4721);







let StoragePageModule = class StoragePageModule {
};
StoragePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _storage_routing_module__WEBPACK_IMPORTED_MODULE_0__.StoragePageRoutingModule
        ],
        declarations: [_storage_page__WEBPACK_IMPORTED_MODULE_1__.StoragePage]
    })
], StoragePageModule);



/***/ }),

/***/ 4721:
/*!***********************************************!*\
  !*** ./src/app/pages/storage/storage.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoragePage": () => (/* binding */ StoragePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_storage_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./storage.page.html */ 1429);
/* harmony import */ var _storage_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.page.scss */ 9039);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _services_caching_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/caching.service */ 6730);





let StoragePage = class StoragePage {
    constructor(cachingService) {
        this.cachingService = cachingService;
        this.storageItems = [];
    }
    ngOnInit() {
        let i = 0;
        this.cachingService.getStorage().forEach((v, k) => {
            this.storageItems.push({ key: k, value: JSON.stringify(v), index: i++ });
        });
    }
};
StoragePage.ctorParameters = () => [
    { type: _services_caching_service__WEBPACK_IMPORTED_MODULE_2__.CachingService }
];
StoragePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-storage',
        template: _raw_loader_storage_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_storage_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StoragePage);



/***/ }),

/***/ 9039:
/*!*************************************************!*\
  !*** ./src/app/pages/storage/storage.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yYWdlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 1429:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/storage/storage.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>storage</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngFor=\"let item of this.storageItems\">\r\n    {{item.index}}: {{item.key}} - {{item.value}}\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_storage_storage_module_ts.js.map