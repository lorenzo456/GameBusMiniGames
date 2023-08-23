(self["webpackChunkopentrivia"] = self["webpackChunkopentrivia"] || []).push([["src_app_home_home_module_ts"],{

/***/ 5089:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 9460);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 2711:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 9460);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 5349);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ 5089);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomePageRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 9460:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 3381);
/* harmony import */ var _services_api2_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api2.service */ 2986);
/* harmony import */ var _services_caching_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/caching.service */ 6730);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _components_social_share_social_share_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/social-share/social-share.component */ 8611);
/* harmony import */ var _app_interfaces_gamebus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/interfaces/gamebus */ 95);
/**
 * Open source mini-game for Gamebus.
 *
 * Based on template code from https://devdactic.com/cache-api-response-ionic/
 */








// import { Share } from '@capacitor/share'; => only on mobile devices and desktop Safari, so using https://enappd.com/blog/social-sharing-component-in-ionic-5-mobile-web-apps/168/ to render also pure HTML counterparts when needed


 // for hiding share button in case not supported

let HomePage = class HomePage {
    constructor(apiService, apiService2, cachingService, loadingController, platform, // just for educational/informative purposes (see console)
    shareCtrl) {
        this.apiService = apiService;
        this.apiService2 = apiService2;
        this.cachingService = cachingService;
        this.loadingController = loadingController;
        this.platform = platform;
        this.shareCtrl = shareCtrl;
        this.logEnabled = true; // for central enabling/disabling of console log output
        this.appName = "Trivia Diabetes DB";
        /**
         * Property to control who is posting event data in the context of miniGames
         */
        this.allowedOriginPrefixes = ["http://127.0.0.1:", "https://127.0.0.1:", "http://localhost:", "https://localhost:", "https://app3.gamebus.eu", "https://app.gamebus.eu", "https://app4b.gamebus.eu"];
        this.trustParent = false;
        this.numTotalAnswers = this.getAggregateResultMetrics(); // see https://bitbucket.org/pietervangorp/opentdb-ionic/branch/educational/promises-vs-observables for design alternatives  
        this.loadTriviaConfig(false);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.apiService.answer$.subscribe((answerMsg) => {
                this.numTotalAnswers = this.getAggregateResultMetrics();
                this.sendToParent(answerMsg);
            });
        });
    }
    sendToParent(answerMsg) {
        let frameData = this.apiService.getFrameData();
        if (this.trustParent && frameData && frameData.gameData) {
            let pInstances = frameData.gameData;
            pInstances.forEach((pi) => {
                if (pi.propertyTK.toUpperCase() === _app_interfaces_gamebus__WEBPACK_IMPORTED_MODULE_6__.GameProperty.QUESTION_TEXT) {
                    pi.value = answerMsg.question.question;
                }
                else if (pi.propertyTK.toUpperCase() === _app_interfaces_gamebus__WEBPACK_IMPORTED_MODULE_6__.GameProperty.QUESTION_CORRECT) {
                    pi.value = String(answerMsg.correct);
                }
                else if (pi.propertyTK.toUpperCase() === _app_interfaces_gamebus__WEBPACK_IMPORTED_MODULE_6__.GameProperty.THROUGH_HINT) {
                    pi.value = String(answerMsg.throughHint);
                }
                else if (pi.propertyTK.toUpperCase() === _app_interfaces_gamebus__WEBPACK_IMPORTED_MODULE_6__.GameProperty.DIFFICULTY_LIKERT_3) {
                    const answerDifficulty = answerMsg.question.difficulty.toLowerCase();
                    if (answerDifficulty === "medium") {
                        pi.value = "0";
                    }
                    else if (answerDifficulty === "hard") {
                        pi.value = "1";
                    }
                    else { // default to easy
                        pi.value = "-1";
                    }
                }
                else if (pi.propertyTK.toUpperCase() === _app_interfaces_gamebus__WEBPACK_IMPORTED_MODULE_6__.GameProperty.ANSWER) {
                    pi.value = answerMsg.answer;
                }
                else {
                    this.consoleLog("not sending to parent: ", pi);
                }
            });
            frameData.activityForm.propertyInstances = pInstances;
            const message = JSON.stringify(frameData);
            window.parent.postMessage(message, '*');
        }
        else {
            console.log("Not posting result to parent (due to untrusted source or due to lacking frame data)");
        }
    }
    loadTriviaConfig(forceRefresh) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading trivia metadata...'
            });
            yield loading.present();
            this.consoleLog("starting load via api2");
            this.apiService2.getCategories().then(res => {
                this.consoleLog(res);
                this.triviaCategories = res;
                this.consoleLog("done loading categories");
                loading.dismiss();
            });
        });
    }
    /** hello world for iframe to GB Base */
    //listening to the message sent to iframe
    onMessage($event) {
        try {
            this.consoleLog("event in onMessage in iframe from home.page.ts in trivia", $event);
            if (this.allowedOriginPrefixes.find((prefix) => {
                return $event.origin.startsWith(prefix);
            })) {
                this.consoleLog("TRUSTED", $event);
                this.trustParent = true; // store trust to also allow post back to parent
                const data = $event.data;
                if (data !== undefined && data !== null && typeof (data) != 'object') {
                    this.apiService.setFrameData(JSON.parse(data));
                    this.consoleLog("frameData in the iframe=====", this.apiService.getFrameData());
                }
            }
            else {
                this.consoleLog("WARNING: not consuming parent data: extend trusted origin list in Trivia Homepage attribute.", $event.origin);
            }
        }
        catch (e) {
            this.consoleLog("error in onMessage", e);
            throw (e);
        }
        ;
    }
    /**
     * To fill up attribute that is awaited for
     * @returns
     */
    getAggregateResultMetrics() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const answers = yield this.apiService.getAllCachedAnswers();
            return this.aggregateResults(answers);
        });
    }
    aggregateResults(answers) {
        let total = 0;
        let correct = 0;
        answers.map(a => {
            total += a.userTries;
            correct += a.userTimesCorrect;
        });
        return {
            userTimesCorrect: correct,
            userTries: total
        };
    }
    clearCache() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.cachingService.clearCachedData();
        });
    }
    showShareOptions(popData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const shareCtrl = yield this.shareCtrl.create({
                event: popData,
                component: _components_social_share_social_share_component__WEBPACK_IMPORTED_MODULE_5__.SocialShareComponent,
                cssClass: 'backTransparent',
                backdropDismiss: true
            });
            return shareCtrl.present();
        });
    }
    consoleLog(msg, more) {
        if (this.logEnabled) {
            console.log(msg, more);
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_api2_service__WEBPACK_IMPORTED_MODULE_3__.ApiService2 },
    { type: _services_caching_service__WEBPACK_IMPORTED_MODULE_4__.CachingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController }
];
HomePage.propDecorators = {
    onMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.HostListener, args: ['window:message', ['$event'],] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSJdfQ== */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      {{ appName }}\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"showShareOptions($event)\">\r\n        <ion-icon slot=\"icon-only\" name=\"share\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button (click)=\"clearCache()\">\r\n        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-button expand=\"full\" (click)=\"loadTriviaConfig(true)\">Refresh Categories</ion-button>  \r\n      <ion-card *ngIf=\"numTotalAnswers | async as nT; else loading\">Performance so far : {{ nT.userTimesCorrect }} out of {{ nT.userTries }}</ion-card>    \r\n      <ng-template #loading>loading...</ng-template>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let category of (triviaCategories)\">\r\n      <ion-label [routerLink]=\"['/quizcategory/', category.id, category.name]\" routerDirection=\"forward\">\r\n        <h2>{{ category.name }}</h2>\r\n        <ion-note slot=\"end\">{{ (category.numQuestions>-1)?category.numQuestions:\"?\" }} questions online</ion-note>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map