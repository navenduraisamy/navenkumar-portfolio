"use strict";(self.webpackChunknavenkumar_portfolio=self.webpackChunknavenkumar_portfolio||[]).push([[737],{737:(O,c,a)=>{a.r(c),a.d(c,{GithubComponent:()=>T});var s=a(6814),l=a(7398),t=a(9468),p=a(9862);let m=(()=>{class e{constructor(n){this.http=n,this._domain="https://api.github.com/"}getPinnedRepositories(){return this.http.get(`${this._domain}users/navenduraisamy/repos`).pipe((0,l.U)(n=>n.map(i=>({id:i.id,name:i.name,html_url:i.html_url,description:i.description,topics:i.topics,language:i.language,homepage:i.homepage}))),(0,l.U)(n=>n.filter(i=>i.topics.includes("portfolio-item"))))}getUserProfile(){return this.http.get(`${this._domain}users/navenduraisamy`).pipe((0,l.U)(n=>({name:n.name,login:n.login,avatar_url:n.avatar_url,html_url:n.html_url})))}static#t=this.\u0275fac=function(i){return new(i||e)(t.LFG(p.eN))};static#n=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})();var g=a(7123);const h=["blockListItemTemplate"];function d(e,o){1&e&&t.GkF(0)}const f=function(e){return{item:e}};function _(e,o){if(1&e&&(t.ynx(0),t.YNc(1,d,1,0,"ng-container",2),t.BQk()),2&e){const n=o.$implicit,i=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",i.blockListItemTemplate)("ngTemplateOutletContext",t.VKq(2,f,n))}}let x=(()=>{class e{constructor(){this.list=[]}static#t=this.\u0275fac=function(i){return new(i||e)};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-block-list"]],contentQueries:function(i,r,y){if(1&i&&t.Suo(y,h,5),2&i){let u;t.iGM(u=t.CRH())&&(r.blockListItemTemplate=u.first)}},inputs:{list:"list"},standalone:!0,features:[t.jDz],decls:2,vars:1,consts:[[1,"grid-container"],[4,"ngFor","ngForOf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,r){1&i&&(t.TgZ(0,"div",0),t.YNc(1,_,2,4,"ng-container",1),t.qZA()),2&i&&(t.xp6(1),t.Q6J("ngForOf",r.list))},dependencies:[s.ez,s.sg,s.tP],styles:[".grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:20px;padding-bottom:20px}@media only screen and (max-width: 576px){.grid-container[_ngcontent-%COMP%]{margin-top:20px}}"]})}return e})();function C(e,o){if(1&e&&(t.ynx(0),t.TgZ(1,"app-user-profile",1)(2,"a",2),t._UZ(3,"i",3),t._uU(4),t.qZA()(),t.BQk()),2&e){const n=o.ngIf;t.xp6(1),t.Q6J("displayName",n.name)("avatarUrl",n.avatar_url),t.xp6(1),t.s9C("href",n.html_url,t.LSH),t.xp6(2),t.hij(" ",n.login," ")}}function b(e,o){if(1&e&&(t.TgZ(0,"div",6)(1,"a",7),t._uU(2),t.ALo(3,"titlecase"),t.qZA(),t.TgZ(4,"small"),t._uU(5),t.qZA(),t.TgZ(6,"small",8),t._uU(7),t.qZA()()),2&e){const n=o.item;t.xp6(1),t.s9C("href",n.html_url,t.LSH),t.xp6(1),t.Oqu(t.lcZ(3,4,n.name)),t.xp6(3),t.Oqu(n.description),t.xp6(2),t.Oqu(n.language)}}function v(e,o){if(1&e&&(t.ynx(0),t.TgZ(1,"app-block-list",4),t.YNc(2,b,8,6,"ng-template",null,5,t.W1O),t.qZA(),t.BQk()),2&e){const n=o.ngIf;t.xp6(1),t.Q6J("list",n)}}let T=(()=>{class e{constructor(n){this.github=n,this.githubUser$=this.github.getUserProfile(),this.repositories$=this.github.getPinnedRepositories()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(m))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-github"]],standalone:!0,features:[t._Bn([m]),t.jDz],decls:4,vars:6,consts:[[4,"ngIf"],[3,"displayName","avatarUrl"],[1,"text-muted",3,"href"],[1,"bi","bi-github","pr-2"],[3,"list"],["blockListItemTemplate",""],[1,"grid-item","border","d-flex","flex-column"],[1,"title","text-primary",3,"href"],[1,"text-muted","mt-auto","pt-3"]],template:function(i,r){1&i&&(t.YNc(0,C,5,4,"ng-container",0),t.ALo(1,"async"),t.YNc(2,v,4,1,"ng-container",0),t.ALo(3,"async")),2&i&&(t.Q6J("ngIf",t.lcZ(1,2,r.githubUser$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(3,4,r.repositories$)))},dependencies:[s.ez,s.O5,s.Ov,s.rS,p.JF,g.t,x],styles:[".grid-item[_ngcontent-%COMP%]{min-height:150px;padding:20px;border-radius:.375rem}.grid-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:16px;text-decoration:none;padding-bottom:8px}.grid-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:hover{text-decoration:underline;cursor:pointer}"]})}return e})()}}]);