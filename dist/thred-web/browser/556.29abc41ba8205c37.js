"use strict";(self.webpackChunkthred_web=self.webpackChunkthred_web||[]).push([[556],{31556:(_,y,c)=>{c.r(y),c.d(y,{AboutModule:()=>N});var h=c(11048),e=c(89724),n=c(37503),g=c(6609),S=c(14800),C=c(21639),x=c(78078),O=c(59157),v=c(30427);function A(i,p){if(1&i&&(e.TgZ(0,"ngx-spinner",3),e.TgZ(1,"h3",4),e._uU(2),e.qZA(),e.qZA()),2&i){const o=e.oxw();let t;e.Udp("color",o.selectedIndicator().color),e.s9C("bdColor",o.selectedIndicator().bg_color),e.s9C("color",o.selectedIndicator().color),e.s9C("type",o.selectedIndicator().name),e.Q6J("fullScreen",!0),e.xp6(1),e.Udp("font-family",o.storeInfo().fontName),e.xp6(1),e.hij("",null==(t=o.storeInfo())?null:t.fullName,"\n")}}function w(i,p){if(1&i&&(e.TgZ(0,"header",5),e._UZ(1,"img",6),e.qZA()),2&i){const o=e.oxw();e.Gre("bg-",o.storeInfo().colorStyle.back_code," py-6"),e.xp6(1),e.Q6J("src",null==o.storeInfo().themeLink?null:o.storeInfo().themeLink.toString(),e.LSH)}}function k(i,p){if(1&i&&(e.TgZ(0,"section",7),e._UZ(1,"img",8),e.TgZ(2,"p",9),e._uU(3," Our Story "),e.qZA(),e.TgZ(4,"div",10),e._UZ(5,"p",11),e.qZA(),e.qZA()),2&i){const o=e.oxw();e.Udp("background-color",o.selectedTheme().bg_color),e.xp6(1),e.s9C("src",o.storeInfo().profileLink,e.LSH),e.xp6(1),e.Gre("text-center text-",o.storeInfo().colorStyle.text_code," px-5 mx-5 mb-5"),e.Udp("font-family",o.storeInfo().fontName)("color",o.selectedTheme().color),e.xp6(3),e.Udp("font-family",o.storeInfo().fontName)("color",o.selectedTheme().color),e.Q6J("innerHTML",o.storeBio(),e.oJD)}}let T=(()=>{class i{constructor(o,t,r,l,s,a,d,u,f,m){this.platformID=o,this.cdr=t,this.router=r,this.titleService=l,this.metaService=s,this.loadService=a,this.routingService=d,this.rootComponent=u,this._router=f,this.spinner=m,this.defaultBio="Hello! <br/><br/>FULL9NAME was made for creative trail blazers like you. The dreamers who seek new adventures that warp reality and transcend time. Our lust for life lives on through our unique pieces. Here\u2019s your chance to display inspiration, love, heartache, vibes in the form of a unique piece of clothing/accessory not found anywhere else in the world but here\u2026 <br/><br/>With a purchase of FULL9NAME you show the world that you are a free thinker, and belong to the tribe of dreamers. We welcome you with open arms. <br/><br/> We are FULL9NAME.",this.isSpinning=!1}storeInfo(){return n.O.storeInfo}availableCurrencies(){return n.O.availableCurrencies}selectedCurrency(){return n.O.selectedCurrency}templates(){return n.O.availableTemplates}availableTemplates(){return n.O.availableTemplates}getLinkImg(o){return n.O.socials.filter(t=>t.name==o)[0].img}openSocial(o){const t=document.createElement("a");t.target="_blank";let r="";/^http[s]?:\/\//.test(o)||(r+="http://"),r+=o,t.href=r,t.setAttribute("visibility","hidden"),t.click(),t.remove()}isBrowser(){return(0,h.NF)(this.platformID)}selectedIndicator(){var o,t,r,l,s,a;let d=null===(t=null===(o=n.O.storeInfo)||void 0===o?void 0:o.loading)||void 0===t?void 0:t.color,u=null===(l=null===(r=n.O.storeInfo)||void 0===r?void 0:r.loading)||void 0===l?void 0:l.bg_color;return{name:null===(a=null===(s=n.O.storeInfo)||void 0===s?void 0:s.loading)||void 0===a?void 0:a.name,color:"rgba("+d[0]+","+d[1]+","+d[2]+","+d[3]+")",bg_color:"rgba("+u[0]+","+u[1]+","+u[2]+","+u[3]+")"}}selectedTheme(){var o,t,r,l,s,a;let d=null===(t=null===(o=n.O.storeInfo)||void 0===o?void 0:o.colorStyle)||void 0===t?void 0:t.btn_color,u=null===(l=null===(r=n.O.storeInfo)||void 0===r?void 0:r.colorStyle)||void 0===l?void 0:l.bg_color;return{name:null===(a=null===(s=n.O.storeInfo)||void 0===s?void 0:s.colorStyle)||void 0===a?void 0:a.name,color:"rgba("+d[0]+","+d[1]+","+d[2]+","+d[3]+")",bg_color:"rgba("+u[0]+","+u[1]+","+u[2]+","+u[3]+")"}}storeBio(){var o,t,r;let l=this.storeInfo().bio;return""==l||null==l?this.defaultBio.replace(/FULL9NAME/g,null!==(t=null===(o=this.storeInfo().fullName)||void 0===o?void 0:o.trim())&&void 0!==t?t:"This brand"):null!==(r=l.replace(/\n/g,"<br>"))&&void 0!==r?r:""}ngOnInit(){this.init()}showSpinner(){this.isSpinning||(this.isSpinning=!0,(0,h.NF)(this.platformID)&&this.spinner.show(),setTimeout(()=>{this.spinner.hide()},1500))}hideSpinner(){this.isSpinning&&(this.isSpinning=!1)}callback(){var o,t,r,l,s,a;n.O.storeInfo.username?(this.showSpinner(),this.rootComponent.setOptions(),this.rootComponent.setFavIcon(null!==(t=null===(o=n.O.storeInfo.profileLink)||void 0===o?void 0:o.toString())&&void 0!==t?t:""),this.addTags(null!==(r=n.O.storeInfo.fullName)&&void 0!==r?r:"Thred",null===(s=null!==(l=n.O.storeInfo.profileLink)&&void 0!==l?l:new URL("https://shopmythred.com"))||void 0===s?void 0:s.toString(),null!==(a=n.O.storeInfo.bio)&&void 0!==a?a:"Check out my Thred Store!","shopmythred.com/"+n.O.storeInfo.username),(0,h.NF)(this.platformID)&&this.loadService.logView(),null==n.O.userInfo&&(0,h.NF)(this.platformID)?this.loadService.getCustomer():(0,h.NF)(this.platformID)&&this.cdr.detectChanges()):this.routingService.routeTo404(this.getStoreName().isCustom)}addTags(o,t,r,l){this.metaService.updateTag({property:"og:title",content:o+" - About"}),this.metaService.updateTag({property:"og:image:width",content:"200"}),this.metaService.updateTag({property:"og:image:height",content:"200"}),this.metaService.updateTag({property:"og:image",content:t}),this.metaService.updateTag({property:"og:url",content:l}),this.metaService.updateTag({property:"og:description",content:r}),this.titleService.setTitle(o),this.metaService.updateTag({property:"description",content:r})}init(){const o=this.getStoreName();this.downloadAllStoreInfo(o.link,o.isCustom)}downloadAllStoreInfo(o,t=!1){this.loadService.myCallback=()=>this.callback(),this.loadService.getUser(o,void 0,t)}getStoreName(){var o;return"localhost:4200"!=(o=(0,h.PM)(this.platformID)?n.O.URL:globalThis.location.host)&&"shopmythred.com"!=o?{isCustom:!0,link:o}:{isCustom:!1,link:this.router.snapshot.paramMap.get("user")}}}return i.\u0275fac=function(o){return new(o||i)(e.Y36(e.Lbi),e.Y36(e.sBO),e.Y36(g.gz),e.Y36(S.Dx),e.Y36(S.h_),e.Y36(C.J),e.Y36(x.Z),e.Y36(O.y),e.Y36(g.F0),e.Y36(v.t2))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-about"]],decls:4,vars:3,consts:[["size","large",3,"bdColor","color","type","fullScreen",4,"ngIf"],["style","height: fit-content;",3,"class",4,"ngIf"],["class","py-5",3,"background-color",4,"ngIf"],["size","large",3,"bdColor","color","type","fullScreen"],[1,"text-center","mt-5"],[2,"height","fit-content"],[1,"w-100","h-100",3,"src"],[1,"py-5"],[1,"mx-auto","d-block","mb-5",3,"src"],[2,"font-size","30px","line-height","1.2em","font-weight","bold"],[1,"text-left","px-sm-5","px-0"],[1,"px-5","mx-2",2,"font-size","20px","line-height","1.2em",3,"innerHTML"]],template:function(o,t){if(1&o&&(e._UZ(0,"router-outlet"),e.YNc(1,A,3,10,"ngx-spinner",0),e.YNc(2,w,2,4,"header",1),e.YNc(3,k,6,18,"section",2)),2&o){let r;e.xp6(1),e.Q6J("ngIf",t.isBrowser()),e.xp6(1),e.Q6J("ngIf",t.isBrowser()),e.xp6(1),e.Q6J("ngIf",t.isBrowser()&&null!=(null==(r=t.storeInfo())?null:r.username))}},directives:[g.lC,h.O5,v.Ro],styles:[".centered[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.cover[_ngcontent-%COMP%]{color:#fff;position:relative;background-repeat:no-repeat;background-position-x:center;background-position-y:center;background-size:cover}"]}),i})();const L=[{path:"",component:T}];let N=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i,bootstrap:[T]}),i.\u0275inj=e.cJS({providers:[n.O],imports:[[h.ez,v.ef,g.Bz.forChild(L)]]}),i})()}}]);