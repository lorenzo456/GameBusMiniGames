(self["webpackChunkopentrivia"] = self["webpackChunkopentrivia"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9535);



const routes = [
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 2711)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'quizcategory',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_pages_quizcategory_quizcategory_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/quizcategory/quizcategory.module */ 4269)).then(m => m.QuizcategoryPageModule)
    },
    {
        path: 'quizcategory/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_pages_quizcategory_quizcategory_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/quizcategory/quizcategory.module */ 4269)).then(m => m.QuizcategoryPageModule)
    },
    {
        path: 'quizcategory/:id/:name',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_pages_quizcategory_quizcategory_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/quizcategory/quizcategory.module */ 4269)).then(m => m.QuizcategoryPageModule)
    },
    {
        path: 'quizquestion/:question',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_quizquestion_quizquestion_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/quizquestion/quizquestion.module */ 7404)).then(m => m.QuizquestionPageModule)
    },
    {
        path: 'quizquestion',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_quizquestion_quizquestion_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/quizquestion/quizquestion.module */ 7404)).then(m => m.QuizquestionPageModule)
    },
    {
        path: 'correctquestion',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_correctquestion_correctquestion_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/correctquestion/correctquestion.module */ 2393)).then(m => m.CorrectquestionPageModule)
    },
    {
        path: 'wrongquestion',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_wrongquestion_wrongquestion_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/wrongquestion/wrongquestion.module */ 8894)).then(m => m.WrongquestionPageModule)
    },
    {
        path: 'storage',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_storage_storage_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/storage/storage.module */ 5610)).then(m => m.StoragePageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _services_caching_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/caching.service */ 6730);





let AppComponent = class AppComponent {
    constructor(cachingService) {
        this.cachingService = cachingService;
        this.cachingService.initStorage();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_caching_service__WEBPACK_IMPORTED_MODULE_2__.CachingService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 3220);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage-angular */ 2966);
/* harmony import */ var localforage_cordovasqlitedriver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! localforage-cordovasqlitedriver */ 5125);
/* harmony import */ var localforage_cordovasqlitedriver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(localforage_cordovasqlitedriver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 2604);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ 7699);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 4766);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 9704);
/* harmony import */ var _components_social_share_social_share_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/social-share/social-share.component */ 8611);















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_social_share_social_share_component__WEBPACK_IMPORTED_MODULE_6__.SocialShareComponent],
        entryComponents: [_components_social_share_social_share_component__WEBPACK_IMPORTED_MODULE_6__.SocialShareComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_12__.IonicStorageModule.forRoot({
                driverOrder: [localforage_cordovasqlitedriver__WEBPACK_IMPORTED_MODULE_2__._driver, _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Drivers.IndexedDB]
            }), _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            })],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicRouteStrategy }, _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__.SocialSharing],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 8611:
/*!*******************************************************************!*\
  !*** ./src/app/components/social-share/social-share.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialShareComponent": () => (/* binding */ SocialShareComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_social_share_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./social-share.component.html */ 6887);
/* harmony import */ var _social_share_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social-share.component.scss */ 9958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ 4766);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4595);
/**
 * Based very loosely on https://enappd.com/blog/social-sharing-component-in-ionic-5-mobile-web-apps/168/,
removed all capacitor parts, since they would not work well in my tests
*
* So, just using cross platform HTML capabilities
*/




 // was fighting with @env, so hacked away relative path

let SocialShareComponent = class SocialShareComponent {
    constructor(ctrl, plt) {
        this.ctrl = ctrl;
        this.plt = plt;
        this.sharingList = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.socialShareOption;
        this.loader = null;
        this.sharingText = 'Look at my score in Open Triva!';
        this.emailSubject = this.sharingText;
        this.recipient = [''];
        this.sharingImage = ['https://opentdb.com/images/logo.png'];
        this.sharingUrl = 'https://store.enappd.com';
    }
    ngOnInit() { }
    closeCtrl() {
        this.ctrl.dismiss();
    }
    /**
     * Not used by PVG, keeping here just for historical reference
     * @param shareData
     */
    shareVia(shareData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.plt.is('cordova')) {
                console.log("with cordova");
                // not needed for cross-platform variant, just using links, no calls to this shareVia function
            }
            else {
                const shareClick = shareData;
                console.log("desktop, no cordova");
                console.log(shareClick);
            }
        });
    }
};
SocialShareComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform }
];
SocialShareComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-social-share',
        template: _raw_loader_social_share_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_social_share_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SocialShareComponent);



/***/ }),

/***/ 6730:
/*!*********************************************!*\
  !*** ./src/app/services/caching.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CachingService": () => (/* binding */ CachingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 2604);
/* harmony import */ var localforage_cordovasqlitedriver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! localforage-cordovasqlitedriver */ 5125);
/* harmony import */ var localforage_cordovasqlitedriver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(localforage_cordovasqlitedriver__WEBPACK_IMPORTED_MODULE_1__);




/**
 * A simple caching service
 *
 * Based on: https://devdactic.com/cache-api-response-ionic/
 */
// Expire time in seconds 
const TTL = 60 * 60;
// Key to identify only cached API data
const CACHE_KEY_PREFIX = '_mycached_';
const ANSWER_LOG_KEY_PREFIX = CACHE_KEY_PREFIX + "RES_";
const ACTIVE_QUESTION_KEY = CACHE_KEY_PREFIX + "ACTIVE_QUESTION";
let CachingService = class CachingService {
    constructor(storage) {
        this.storage = storage;
    }
    /**
     * Setup Ionic Storage
     */
    initStorage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.defineDriver(localforage_cordovasqlitedriver__WEBPACK_IMPORTED_MODULE_1__);
            yield this.storage.create();
            console.log("storage initialized");
        });
    }
    /**
     * For debugging purposes
     * @returns the storage within this cache
     */
    getStorage() {
        return this.storage;
    }
    /**
     * Store active question as complex object to avoid having to expose details in the HTTP query string
    */
    storeActiveQuestion(question) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.storage.set(ACTIVE_QUESTION_KEY, question);
        });
    }
    /**
     * Load back (see storeActiveQuestion)
    */
    loadActiveQuestion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const storedValue = yield this.storage.get(ACTIVE_QUESTION_KEY);
            return storedValue;
        });
    }
    /**
     * Answer storage local, for supporting aggregations on #correct, etc.
     * Note that the 'apiService.broadcastAnswer' method handles API based persistence to GameBus (via onMessage/postMessage)
    */
    storeAnswerLog(answer) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const storedValue = yield this.storage.get(this.storageKeyFromAnswer(answer));
            if (!storedValue) {
                this.storage.set(this.storageKeyFromAnswer(answer), answer);
            }
            else {
                storedValue.userTries = answer.userTries; // we only overwrite the data that does not come from the trivia API
                storedValue.userTimesCorrect = answer.userTimesCorrect;
                this.storage.set(this.storageKeyFromAnswer(answer), storedValue);
            }
        });
    }
    /**
     * Retrieve back answer (@see storeAnswerLog)
     * @param answer
     * @returns
     */
    getAnswerLog(answer) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const storedValue = yield this.storage.get(this.storageKeyFromAnswer(answer));
            if (!storedValue) {
                answer.userTries = 0;
                answer.userTimesCorrect = 0;
                return answer;
            }
            else {
                return storedValue;
            }
        });
    }
    getAllCachedAnswers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let res = [];
            const st = yield this.storage;
            yield st.forEach((v, k) => {
                if (k.startsWith(ANSWER_LOG_KEY_PREFIX)) {
                    res.push(v);
                }
            });
            return res;
        });
    }
    /**
     * Store request data
     */
    cacheRequest(url, data) {
        const validUntil = (new Date().getTime()) + TTL * 1000;
        return this.storage.set(this.storageKeyFromUrl(url), { validUntil, data });
    }
    /**
     * Try to load cached data
     */
    getCachedRequest(url) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const currentTime = new Date().getTime();
            const storedValue = yield this.storage.get(this.storageKeyFromUrl(url));
            if (!storedValue) {
                return null;
            }
            else if (storedValue.validUntil < currentTime) {
                yield this.storage.remove(url);
                return null;
            }
            else {
                return storedValue.data;
            }
        });
    }
    /**
     * Helper to avoid mistakes in concatenation
     */
    storageKeyFromUrl(url) {
        return `${CACHE_KEY_PREFIX}${url}`;
    }
    /**
     * Helper to avoid mistakes in concatenation
     */
    storageKeyFromAnswer(answer) {
        return ANSWER_LOG_KEY_PREFIX + answer.category + "_" + answer.question;
    }
    /**
     * Remove all cached data & files
     */
    clearCachedData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const keys = yield this.storage.keys();
            keys.map((key) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                if (key.startsWith(CACHE_KEY_PREFIX)) {
                    yield this.storage.remove(key);
                }
            }));
        });
    }
    /**
     * debug output
     */
    dumpCachedData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const keys = yield this.storage.keys();
            keys.map((key) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                const val = yield this.storage.get(key);
                console.log(val);
            }));
        });
    }
    /**
     * Example to remove one cached URL
     */
    invalidateCacheEntry(url) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.remove(this.storageKeyFromUrl(url));
        });
    }
};
CachingService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage }
];
CachingService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CachingService);



/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    socialShareOption: [
        {
            title: 'Facebook',
            logo: 'assets/socialShare/facebook.png',
            href: 'https://facebook.com/sharer/sharer.php?display=page&u=https://minigames.gamebus.eu/opentrivia/&quote=My+latest+OpenTrivia+score...'
        },
        {
            title: 'Twitter',
            logo: 'assets/socialShare/twitter.png',
            href: 'https://twitter.com/intent/tweet/?hashtags=opentrivia&text=My+latest+OpenTrivia+score+at+https://minigames.gamebus.eu/opentrivia/'
        }, /*
        {
          title: 'Pinterest',
          logo: 'assets/socialShare/pinterest.png',
          href: 'https://pinterest.com/pin/create/link/?url=https://minigames.gamebus.eu/opentrivia/&media=https://opentdb.com/images/logo.png&description=My+latest+OpenTrivia+score...'
        },
        {
          title: 'Email',
          logo: 'assets/socialShare/mail.png',
          href: 'mailto:?subject=My latest OpenTrivia session...&body=I played OpenTrivia. Come join me at https://minigames.gamebus.eu/opentrivia/'
        }*/
    ]
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 476);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		5261,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		26,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		9009,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		7221,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		993,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		3645,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		2245,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		3482,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		4081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		3315,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		4133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		7542,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1459,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		7618,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		101,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		2210,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		7370,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		3652,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		8220,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		5500,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		4913,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		5078,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4857,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		8958,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		4383,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		7630,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1297,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		5492,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		3752,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7487,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1778,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2904,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		1609,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		2849,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		4127,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		8400,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		4397,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		3391,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		6793,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		1695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		4180,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 9958:
/*!*********************************************************************!*\
  !*** ./src/app/components/social-share/social-share.component.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".textCenter {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.socialLogo {\n  width: 50px;\n  height: 50px;\n  border-radius: 50% !important;\n  overflow: hidden;\n}\n\n.logoList {\n  margin-top: 30px;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.btn {\n  float: right;\n}\n\n.mainContent {\n  flex: 1;\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.feedbackCard {\n  width: 100%;\n  border-radius: 4px;\n  background-color: white;\n}\n\n.profile-photo {\n  border-radius: 50% !important;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2lhbC1zaGFyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7QUFHSjs7QUFEQTtFQUNJLE9BQUE7RUFDQSwrQ0FBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFJSjs7QUFGQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBS0o7O0FBSEE7RUFDSSw2QkFBQTtFQUNBLGdCQUFBO0FBTUoiLCJmaWxlIjoic29jaWFsLXNoYXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRDZW50ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG4uc29jaWFsTG9nbyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ubG9nb0xpc3Qge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5idG4ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5tYWluQ29udGVudCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuMykgIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmZlZWRiYWNrQ2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5wcm9maWxlLXBob3RvIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufSJdfQ== */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ 6887:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/social-share/social-share.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- Based very loosely on https://enappd.com/blog/social-sharing-component-in-ionic-5-mobile-web-apps/168/,\r\nremoved all capacitor parts, since they would not work well in my tests -->\r\n<div padding class=\"mainContent\">\r\n  <div no-margin margin-top class=\"feedbackCard\">\r\n    <ion-row class=\"textCenter\">\r\n      <div>\r\n          You can share Via :-\r\n      </div>\r\n    </ion-row>\r\n  \r\n  <div class=\"logoList\">\r\n    <ion-row *ngFor=\"let item of sharingList\">\r\n      \r\n          <ion-col>\r\n            <a [href]=\"item.href\" target=\"_blank\">\r\n              <ion-img class=\"socialLogo\" [src]=\"item.logo\"></ion-img>\r\n            </a>\r\n          </ion-col>\r\n    </ion-row>\r\n  </div>    \r\n  \r\n  <ion-button class=\"btn\" (click)=\"closeCtrl()\" fill=\"clear\">\r\n    Close\r\n  </ion-button>\r\n  </div>\r\n  </div>");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map