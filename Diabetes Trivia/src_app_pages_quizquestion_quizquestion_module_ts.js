(self["webpackChunkopentrivia"] = self["webpackChunkopentrivia"] || []).push([["src_app_pages_quizquestion_quizquestion_module_ts"],{

/***/ 9583:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/quizquestion/questiondetails/questiondetails.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestiondetailsComponent": () => (/* binding */ QuestiondetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_questiondetails_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./questiondetails.component.html */ 4494);
/* harmony import */ var _questiondetails_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questiondetails.component.scss */ 5271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 4595);





let QuestiondetailsComponent = class QuestiondetailsComponent {
    constructor(popoverController) {
        this.popoverController = popoverController;
    }
    ngOnInit() {
        console.log("in pop-over question details");
    }
    dismiss() {
        this.popoverController.dismiss();
    }
};
QuestiondetailsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.PopoverController }
];
QuestiondetailsComponent.propDecorators = {
    question: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ["question",] }]
};
QuestiondetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-questiondetails',
        template: _raw_loader_questiondetails_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_questiondetails_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], QuestiondetailsComponent);



/***/ }),

/***/ 9042:
/*!*******************************************************************!*\
  !*** ./src/app/pages/quizquestion/quizquestion-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizquestionPageRoutingModule": () => (/* binding */ QuizquestionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _quizquestion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quizquestion.page */ 8514);




const routes = [
    {
        path: '',
        component: _quizquestion_page__WEBPACK_IMPORTED_MODULE_0__.QuizquestionPage
    }
];
let QuizquestionPageRoutingModule = class QuizquestionPageRoutingModule {
};
QuizquestionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QuizquestionPageRoutingModule);



/***/ }),

/***/ 7404:
/*!***********************************************************!*\
  !*** ./src/app/pages/quizquestion/quizquestion.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizquestionPageModule": () => (/* binding */ QuizquestionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _quizquestion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quizquestion-routing.module */ 9042);
/* harmony import */ var _quizquestion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quizquestion.page */ 8514);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 5349);
/* harmony import */ var _questiondetails_questiondetails_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questiondetails/questiondetails.component */ 9583);









let QuizquestionPageModule = class QuizquestionPageModule {
};
QuizquestionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _quizquestion_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuizquestionPageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_quizquestion_page__WEBPACK_IMPORTED_MODULE_1__.QuizquestionPage, _questiondetails_questiondetails_component__WEBPACK_IMPORTED_MODULE_3__.QuestiondetailsComponent] // importing details component, since otherwise production build fails (solution via https://stackoverflow.com/a/66730027)
    })
], QuizquestionPageModule);



/***/ }),

/***/ 8514:
/*!*********************************************************!*\
  !*** ./src/app/pages/quizquestion/quizquestion.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizquestionPage": () => (/* binding */ QuizquestionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_quizquestion_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./quizquestion.page.html */ 537);
/* harmony import */ var _quizquestion_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quizquestion.page.scss */ 4503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var src_app_services_caching_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/caching.service */ 6730);
/* harmony import */ var _questiondetails_questiondetails_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questiondetails/questiondetails.component */ 9583);
/* harmony import */ var _app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/api.service */ 3381);
/* harmony import */ var _app_interfaces_gamebus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/interfaces/gamebus */ 95);











let QuizquestionPage = class QuizquestionPage {
    constructor(activatedRoute, alertCtrl, cachingService, apiService, popoverController, router) {
        this.activatedRoute = activatedRoute;
        this.alertCtrl = alertCtrl;
        this.cachingService = cachingService;
        this.apiService = apiService;
        this.popoverController = popoverController;
        this.router = router;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const activeQ = yield this.cachingService.loadActiveQuestion();
            this.question = activeQ;
            this.possibleAnswers = this.shuffleArray([this.question.correct_answer].concat(this.question.incorrect_answers));
            this.cachingService.getAnswerLog(this.question).then(answer => this.question = answer);
        });
    }
    /**
     * From https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array,
     * could be moved to a service
     */
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    /**
     * Function that also other mini games may want to implement
     * @returns
     */
    canTakeHint() {
        return this.apiService.getFrameData().negativePointsCheck.items.filter((npItem) => {
            return npItem.canFire &&
                npItem.conditions.filter((c) => {
                    return c.property.translationKey.toUpperCase() === _app_interfaces_gamebus__WEBPACK_IMPORTED_MODULE_5__.GameProperty.THROUGH_HINT;
                }).length > 0;
        }).length > 0;
    }
    showConfirm(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let mcItemValue = event.detail.value;
            const throughHint = mcItemValue ? false : true;
            const prompt = yield this.alertCtrl.create({
                header: 'Submit?',
                message: throughHint ? "Are you sure you want that hint?" : mcItemValue,
                buttons: [
                    {
                        text: 'OK',
                        role: 'OK',
                        handler: () => {
                            this.question.userTries++;
                            if (throughHint) {
                                mcItemValue = this.question.correct_answer; // take the hint
                            }
                            const isCorrect = (mcItemValue == this.question.correct_answer);
                            if (isCorrect) {
                                this.question.userTimesCorrect++;
                                this.router.navigate(['/correctquestion']);
                            }
                            else {
                                this.router.navigate(['/wrongquestion']);
                            }
                            this.cachingService.storeAnswerLog(this.question).then(() => this.apiService.broadcastAnswer({
                                question: this.question,
                                correct: isCorrect,
                                answer: mcItemValue,
                                throughHint: throughHint
                            }));
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'Cancel',
                        handler: () => {
                            // do nothing
                        }
                    }
                ]
            });
            yield prompt.present();
            /** alternative approach to results checking
            const result= await prompt.onDidDismiss();
            console.log(result);
            if (result.role.toLowerCase()=="ok") {
        
            }
             */
        });
    }
    detailsPopover(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _questiondetails_questiondetails_component__WEBPACK_IMPORTED_MODULE_3__.QuestiondetailsComponent,
                event: ev,
                cssClass: 'popover_setting',
                componentProps: {
                    question: this.question
                },
                translucent: true
            });
            popover.onDidDismiss().then((result) => {
                console.log(result.data);
            });
            return yield popover.present();
            /** Sync event from popover component */
        });
    }
};
QuizquestionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: src_app_services_caching_service__WEBPACK_IMPORTED_MODULE_2__.CachingService },
    { type: _app_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
QuizquestionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-quizquestion',
        template: _raw_loader_quizquestion_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_quizquestion_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], QuizquestionPage);



/***/ }),

/***/ 5271:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/quizquestion/questiondetails/questiondetails.component.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVzdGlvbmRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 4503:
/*!***********************************************************!*\
  !*** ./src/app/pages/quizquestion/quizquestion.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  padding-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXpxdWVzdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKIiwiZmlsZSI6InF1aXpxdWVzdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59Il19 */");

/***/ }),

/***/ 4494:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quizquestion/questiondetails/questiondetails.component.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <ion-list>\r\n    <ion-item (click)=\"dismiss()\">\r\n      Times Answered: <ion-label>{{ question?.userTries }}</ion-label>\r\n    </ion-item>\r\n    <ion-item (click)=\"dismiss()\">\r\n      Times Correct: {{ question?.userTimesCorrect }} \r\n    </ion-item>  \r\n  </ion-list>\r\n</ion-content>");

/***/ }),

/***/ 537:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quizquestion/quizquestion.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Quiz Question</ion-title>\r\n    <ion-icon name=\"ellipsis-horizontal-outline\" slot=\"end\" (click)=\"detailsPopover($event)\"\r\n      (mouseenter)=\"detailsPopover($event)\"></ion-icon>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n<ion-content>\r\n\r\n  <ion-list>\r\n    <ion-radio-group value=\"quizoptions\" (ionChange)=\"showConfirm($event)\">\r\n      <ion-list-header>\r\n        <ion-label>{{ question?.question | unescape }}</ion-label>\r\n\r\n      </ion-list-header>\r\n      <ion-item *ngFor=\"let answerOption of possibleAnswers\">\r\n        <ion-label>{{answerOption | unescape }}</ion-label>\r\n        <ion-radio slot=\"start\" value=\"{{answerOption}}\"></ion-radio>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n  </ion-list>\r\n  <ion-button expand=\"block\" color=\"primary\" (click)=\"showConfirm($event)\" *ngIf=\"canTakeHint(); else noHint\">\r\n    Take Hint\r\n  </ion-button>\r\n  <ng-template #noHint>\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-title>No Hint Possible</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ion-item className=\"ion-activated\">\r\n          <ion-icon name=\"analytics\" slot=\"start\"></ion-icon>\r\n          If you would like to get hints, please check the rules in GameBus!\r\n        </ion-item>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ng-template>\r\n\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_quizquestion_quizquestion_module_ts.js.map