(self.webpackChunkopentrivia=self.webpackChunkopentrivia||[]).push([[9781],{9781:(t,e,n)=>{"use strict";n.r(e),n.d(e,{HomePageModule:()=>x});var i=n(6274),o=n(4683),s=n(4988),r=n(5709),a=n(3899),c=n(1855),l=n(4766),g=n(7272);function p(t,e){if(1&t&&(g.TgZ(0,"ion-row"),g.TgZ(1,"ion-col"),g.TgZ(2,"a",6),g._UZ(3,"ion-img",7),g.qZA(),g.qZA(),g.qZA()),2&t){const t=e.$implicit;g.xp6(2),g.Q6J("href",t.href,g.LSH),g.xp6(1),g.Q6J("src",t.logo)}}let u=(()=>{class t{constructor(t,e){this.ctrl=t,this.plt=e,this.sharingList=l.N.socialShareOption,this.loader=null,this.sharingText="Look at my score in Open Triva!",this.emailSubject=this.sharingText,this.recipient=[""],this.sharingImage=["https://opentdb.com/images/logo.png"],this.sharingUrl="https://store.enappd.com"}ngOnInit(){}closeCtrl(){this.ctrl.dismiss()}shareVia(t){return(0,c.mG)(this,void 0,void 0,function*(){if(this.plt.is("cordova"))console.log("with cordova");else{const e=t;console.log("desktop, no cordova"),console.log(e)}})}}return t.\u0275fac=function(e){return new(e||t)(g.Y36(o.Dh),g.Y36(o.t4))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-social-share"]],decls:9,vars:1,consts:[["padding","",1,"mainContent"],["no-margin","","margin-top","",1,"feedbackCard"],[1,"textCenter"],[1,"logoList"],[4,"ngFor","ngForOf"],["fill","clear",1,"btn",3,"click"],["target","_blank",3,"href"],[1,"socialLogo",3,"src"]],template:function(t,e){1&t&&(g.TgZ(0,"div",0),g.TgZ(1,"div",1),g.TgZ(2,"ion-row",2),g.TgZ(3,"div"),g._uU(4," You can share Via :- "),g.qZA(),g.qZA(),g.TgZ(5,"div",3),g.YNc(6,p,4,2,"ion-row",4),g.qZA(),g.TgZ(7,"ion-button",5),g.NdJ("click",function(){return e.closeCtrl()}),g._uU(8," Close "),g.qZA(),g.qZA(),g.qZA()),2&t&&(g.xp6(6),g.Q6J("ngForOf",e.sharingList))},directives:[o.Nd,i.sg,o.YG,o.wI,o.Xz],styles:[".textCenter[_ngcontent-%COMP%]{margin-top:10px;display:flex;flex-direction:row;justify-content:center}.socialLogo[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:50%!important;overflow:hidden}.logoList[_ngcontent-%COMP%]{margin-top:30px;display:flex;flex:1;justify-content:center;margin-bottom:20px}.btn[_ngcontent-%COMP%]{float:right}.mainContent[_ngcontent-%COMP%]{flex:1;background-color:#0000004d!important;justify-content:center;align-content:center;align-items:center;display:flex}.feedbackCard[_ngcontent-%COMP%]{width:100%;border-radius:4px;background-color:#fff}.profile-photo[_ngcontent-%COMP%]{border-radius:50%!important;overflow:hidden}"]}),t})();var h=n(95),d=n(2737),f=n(6411),m=n(6730);function T(t,e){if(1&t&&(g.TgZ(0,"ion-card"),g._uU(1),g.qZA()),2&t){const t=e.ngIf;g.xp6(1),g.AsE("Performance so far : ",t.userTimesCorrect," out of ",t.userTries,"")}}function v(t,e){1&t&&g._uU(0,"loading...")}const C=function(t,e){return["/quizcategory/",t,e]};function Z(t,e){if(1&t&&(g.TgZ(0,"ion-item"),g.TgZ(1,"ion-label",9),g.TgZ(2,"h2"),g._uU(3),g.qZA(),g.TgZ(4,"ion-note",1),g._uU(5),g.qZA(),g.qZA(),g.qZA()),2&t){const t=e.$implicit;g.xp6(1),g.Q6J("routerLink",g.WLB(3,C,t.id,t.name)),g.xp6(2),g.Oqu(t.name),g.xp6(2),g.hij("",t.numQuestions>-1?t.numQuestions:"?"," questions online")}}const b=[{path:"",component:(()=>{class t{constructor(t,e,n,i,o,s){this.apiService=t,this.apiService2=e,this.cachingService=n,this.loadingController=i,this.platform=o,this.shareCtrl=s,this.logEnabled=!0,this.appName="Trivia Diabetes DB",this.allowedOriginPrefixes=["http://127.0.0.1:","https://127.0.0.1:","http://localhost:","https://localhost:","https://app3.gamebus.eu","https://app.gamebus.eu","https://app4b.gamebus.eu","https://app3-new.gamebus.eu","https://app-new.gamebus.eu"],this.trustParent=!1,this.numTotalAnswers=this.getAggregateResultMetrics(),this.loadTriviaConfig(!1)}ngOnInit(){return(0,c.mG)(this,void 0,void 0,function*(){this.apiService.answer$.subscribe(t=>{this.numTotalAnswers=this.getAggregateResultMetrics(),this.sendToParent(t)})})}sendToParent(t){let e=this.apiService.getFrameData();if(this.trustParent&&e&&e.gameData){let n=e.gameData;n.forEach(e=>{if(e.propertyTK.toUpperCase()===h.Q.QUESTION_TEXT)e.value=t.question.question;else if(e.propertyTK.toUpperCase()===h.Q.QUESTION_CORRECT)e.value=String(t.correct);else if(e.propertyTK.toUpperCase()===h.Q.THROUGH_HINT)e.value=String(t.throughHint);else if(e.propertyTK.toUpperCase()===h.Q.DIFFICULTY_LIKERT_3){const n=t.question.difficulty.toLowerCase();e.value="medium"===n?"0":"hard"===n?"1":"-1"}else e.propertyTK.toUpperCase()===h.Q.ANSWER?e.value=t.answer:this.consoleLog("not sending to parent: ",e)}),e.activityForm.propertyInstances=n;const i=JSON.stringify(e);window.parent.postMessage(i,"*")}else console.log("Not posting result to parent (due to untrusted source or due to lacking frame data)")}loadTriviaConfig(t){return(0,c.mG)(this,void 0,void 0,function*(){const t=yield this.loadingController.create({message:"Loading trivia metadata..."});yield t.present(),this.consoleLog("starting load via api2"),this.apiService2.getCategories().then(e=>{this.consoleLog(e),this.triviaCategories=e,this.consoleLog("done loading categories"),t.dismiss()})})}onMessage(t){try{if(this.consoleLog("event in onMessage in iframe from home.page.ts in trivia",t),this.allowedOriginPrefixes.find(e=>t.origin.startsWith(e))){this.consoleLog("TRUSTED",t),this.trustParent=!0;const e=t.data;null!=e&&"object"!=typeof e&&(this.apiService.setFrameData(JSON.parse(e)),this.consoleLog("frameData in the iframe=====",this.apiService.getFrameData()))}else this.consoleLog("WARNING: not consuming parent data: extend trusted origin list in Trivia Homepage attribute.",t.origin)}catch(e){throw this.consoleLog("error in onMessage",e),e}}getAggregateResultMetrics(){return(0,c.mG)(this,void 0,void 0,function*(){const t=yield this.apiService.getAllCachedAnswers();return this.aggregateResults(t)})}aggregateResults(t){let e=0,n=0;return t.map(t=>{e+=t.userTries,n+=t.userTimesCorrect}),{userTimesCorrect:n,userTries:e}}clearCache(){return(0,c.mG)(this,void 0,void 0,function*(){this.cachingService.clearCachedData()})}showShareOptions(t){return(0,c.mG)(this,void 0,void 0,function*(){return(yield this.shareCtrl.create({event:t,component:u,cssClass:"backTransparent",backdropDismiss:!0})).present()})}consoleLog(t,e){this.logEnabled&&console.log(t,e)}}return t.\u0275fac=function(e){return new(e||t)(g.Y36(d.s),g.Y36(f._),g.Y36(m.$),g.Y36(o.HT),g.Y36(o.t4),g.Y36(o.Dh))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-home"]],hostBindings:function(t,e){1&t&&g.NdJ("message",function(t){return e.onMessage(t)},!1,g.Jf7)},decls:18,vars:6,consts:[["color","primary"],["slot","end"],[3,"click"],["slot","icon-only","name","share"],["slot","icon-only","name","trash"],["expand","full",3,"click"],[4,"ngIf","ngIfElse"],["loading",""],[4,"ngFor","ngForOf"],["routerDirection","forward",3,"routerLink"]],template:function(t,e){if(1&t&&(g.TgZ(0,"ion-header"),g.TgZ(1,"ion-toolbar",0),g.TgZ(2,"ion-title"),g._uU(3),g.qZA(),g.TgZ(4,"ion-buttons",1),g.TgZ(5,"ion-button",2),g.NdJ("click",function(t){return e.showShareOptions(t)}),g._UZ(6,"ion-icon",3),g.qZA(),g.TgZ(7,"ion-button",2),g.NdJ("click",function(){return e.clearCache()}),g._UZ(8,"ion-icon",4),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(9,"ion-content"),g.TgZ(10,"ion-button",5),g.NdJ("click",function(){return e.loadTriviaConfig(!0)}),g._uU(11,"Refresh Categories"),g.qZA(),g.YNc(12,T,2,2,"ion-card",6),g.ALo(13,"async"),g.YNc(14,v,1,0,"ng-template",null,7,g.W1O),g.TgZ(16,"ion-list"),g.YNc(17,Z,6,6,"ion-item",8),g.qZA(),g.qZA()),2&t){const t=g.MAs(15);g.xp6(3),g.hij(" ",e.appName," "),g.xp6(9),g.Q6J("ngIf",g.lcZ(13,4,e.numTotalAnswers))("ngIfElse",t),g.xp6(5),g.Q6J("ngForOf",e.triviaCategories)}},directives:[o.Gu,o.sr,o.wd,o.Sm,o.YG,o.gu,o.W2,i.O5,o.q_,i.sg,o.PM,o.Ie,o.Q$,o.YI,a.rH,o.uN],pipes:[i.Ov],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),t})()}];let A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[a.Bz.forChild(b)],a.Bz]}),t})(),x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[i.ez,s.u5,o.Pc,A,r.m]]}),t})()}}]);