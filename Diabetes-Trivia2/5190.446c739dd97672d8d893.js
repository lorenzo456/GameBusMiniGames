(self.webpackChunkopentrivia=self.webpackChunkopentrivia||[]).push([[5190],{5190:(t,i,e)=>{"use strict";e.r(i),e.d(i,{QuizcategoryPageModule:()=>v});var o=e(6274),n=e(4988),s=e(4683),r=e(3899),c=e(1855),a=e(7535),u=e(7272),d=e(2737),p=e(6730),l=e(6963);function h(t,i){if(1&t){const t=u.EpF();u.TgZ(0,"ion-item",3),u.NdJ("click",function(){const i=u.CHM(t).$implicit;return u.oxw().goToQuestion(i)}),u._uU(1),u.ALo(2,"unescape"),u.TgZ(3,"ion-note",4),u._uU(4),u.qZA(),u.qZA()}if(2&t){const t=i.$implicit;u.xp6(1),u.hij(" ",u.lcZ(2,2,t.question)," "),u.xp6(3),u.hij("difficulty ",t.difficulty,"")}}const g=[{path:"",component:(()=>{class t{constructor(t,i,e,o,n){this.activatedRoute=t,this.apiService=i,this.cachingService=e,this.loadingController=o,this.router=n,this.id=0,this.name="(no name)",this.loadTriviaQuestions(!1)}ngOnInit(){this.id=parseInt(this.activatedRoute.snapshot.paramMap.get("id")),this.name=this.activatedRoute.snapshot.paramMap.get("name")}loadTriviaQuestions(t){return(0,c.mG)(this,void 0,void 0,function*(){const i=yield this.loadingController.create({message:"Loading questions..."});yield i.present(),this.apiService.getTriviaQuestions(this.id,t).subscribe(t=>{this.questions=t},t=>{console.error(t),(0,a._)(t)},()=>{i.dismiss()}),i.dismiss()})}goToQuestion(t){return(0,c.mG)(this,void 0,void 0,function*(){yield this.cachingService.storeActiveQuestion(t),this.router.navigate(["/quizquestion"])})}}return t.\u0275fac=function(i){return new(i||t)(u.Y36(r.gz),u.Y36(d.s),u.Y36(p.$),u.Y36(s.HT),u.Y36(r.F0))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-quizcategory"]],decls:9,vars:2,consts:[["slot","start"],["defaultHref","/home"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["slot","end"]],template:function(t,i){1&t&&(u.TgZ(0,"ion-header"),u.TgZ(1,"ion-toolbar"),u.TgZ(2,"ion-buttons",0),u._UZ(3,"ion-back-button",1),u.qZA(),u.TgZ(4,"ion-title"),u._uU(5),u.qZA(),u.qZA(),u.qZA(),u.TgZ(6,"ion-content"),u.TgZ(7,"ion-list"),u.YNc(8,h,5,4,"ion-item",2),u.qZA(),u.qZA()),2&t&&(u.xp6(5),u.hij("Quiz Category: ",i.name,""),u.xp6(3),u.Q6J("ngForOf",i.questions))},directives:[s.Gu,s.sr,s.Sm,s.oU,s.cs,s.wd,s.W2,s.q_,o.sg,s.Ie,s.uN],pipes:[l.v],styles:["ion-item[_ngcontent-%COMP%]{border-bottom-style:solid;border-bottom-width:1px;padding-bottom:2px;padding-top:2px}"]}),t})()}];let m=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[r.Bz.forChild(g)],r.Bz]}),t})();var f=e(5709);let v=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({providers:[],imports:[[o.ez,n.u5,s.Pc,m,f.m]]}),t})()}}]);