(self.webpackChunkthred_web=self.webpackChunkthred_web||[]).push([[10],{56010:(e,t,o)=>{"use strict";o.r(t),o.d(t,{InvalidPageModule:()=>v});var r=o(38583),n=o(37503),i=o(93738),s=o(79866),a=o(37716),l=o(95987),c=o(39075),p=o(21952),d=o(55041),h=o(78078);function g(e,t){if(1&e&&(a.TgZ(0,"header"),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"div"),a.TgZ(4,"p",3),a._uU(5," THIS PAGE DOESN'T EXIST "),a.qZA(),a.TgZ(6,"p",4),a.TgZ(7,"a",5),a._uU(8,"BACK TO SHOP"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e){const e=a.oxw();a.Gre("bg-",e.storeInfo().colorStyle.back_code," py-6"),a.xp6(1),a.Udp("background-image","url("+e.storeInfo().themeLink.toString()+")"),a.xp6(6),a.MGl("href","/",e.storeInfo().username,"/products",a.LSH)}}function u(e,t){if(1&e&&(a.TgZ(0,"footer"),a.TgZ(1,"div",6),a.TgZ(2,"p"),a._uU(3),a.qZA(),a.qZA(),a.TgZ(4,"div",6),a.TgZ(5,"p"),a._uU(6,"Powered by Thred"),a.qZA(),a.qZA(),a.qZA()),2&e){const e=a.oxw();a.Gre("py-5 bg-",e.storeInfo().colorStyle.back_code,""),a.xp6(2),a.Gre("m-0 text-center text-",e.storeInfo().colorStyle.text_code,""),a.Udp("font-family",e.storeInfo().fontName),a.xp6(1),a.hij("\xa9 ",e.storeInfo().fullName," 2021"),a.xp6(2),a.Gre("m-0 text-center text-",e.storeInfo().colorStyle.text_code,""),a.Udp("font-family",e.storeInfo().fontName)}}let m=(()=>{class e{constructor(e,t,o,r,n,i,s,a,l){this.platformID=e,this.cdr=t,this.router=o,this.titleService=r,this.metaService=n,this.loadService=i,this.rootComponent=s,this._router=a,this.routingService=l}storeInfo(){return n.O.storeInfo}availableCurrencies(){return n.O.availableCurrencies}selectedCurrency(){return n.O.selectedCurrency}templates(){return n.O.availableTemplates}availableTemplates(){return n.O.availableTemplates}isBrowser(){return(0,r.NF)(this.platformID)}ngOnInit(){this.init()}callback(){var e,t,o;n.O.storeInfo.username?(this.rootComponent.setOptions(),this.rootComponent.setFavIcon(n.O.storeInfo.profileLink.toString()),this.addTags(null!==(e=n.O.storeInfo.fullName)&&void 0!==e?e:"Thred",(null!==(t=n.O.storeInfo.profileLink)&&void 0!==t?t:new URL("https://shopmythred.com")).toString(),null!==(o=n.O.storeInfo.bio)&&void 0!==o?o:"Check out my Thred Store!","shopmythred.com/"+n.O.storeInfo.username),(0,r.NF)(this.platformID)&&this.cdr.detectChanges()):this.routingService.routeTo404(this.getStoreName().isCustom)}selectedTheme(){var e,t,o,r,i,s;let a=null===(t=null===(e=n.O.storeInfo)||void 0===e?void 0:e.colorStyle)||void 0===t?void 0:t.btn_color,l=null===(r=null===(o=n.O.storeInfo)||void 0===o?void 0:o.colorStyle)||void 0===r?void 0:r.bg_color;return{name:null===(s=null===(i=n.O.storeInfo)||void 0===i?void 0:i.colorStyle)||void 0===s?void 0:s.name,color:"rgba("+a[0]+","+a[1]+","+a[2]+","+a[3]+")",bg_color:"rgba("+l[0]+","+l[1]+","+l[2]+","+l[3]+")"}}init(){const e=this.getStoreName();this.downloadAllStoreInfo(e.link,e.isCustom)}downloadAllStoreInfo(e,t=!1){this.loadService.myCallback=()=>this.callback(),this.loadService.getUser(e,void 0,t)}getStoreName(){var e="";return(0,r.PM)(this.platformID)?(e=n.O.URL,console.log(e)):e=globalThis.location.host,"localhost:4200"!=e&&"shopmythred.com"!=e?{isCustom:!0,link:e}:{isCustom:!1,link:this.router.snapshot.paramMap.get("user")}}addTags(e,t,o,r){this.metaService.updateTag({property:"og:title",content:e+" - 404"}),this.metaService.updateTag({property:"og:image:width",content:"200"}),this.metaService.updateTag({property:"og:image:height",content:"200"}),this.metaService.updateTag({property:"og:image",content:t}),this.metaService.updateTag({property:"og:url",content:r}),this.metaService.updateTag({property:"og:description",content:o}),this.titleService.setTitle(e),this.metaService.updateTag({property:"description",content:o})}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(a.Lbi),a.Y36(a.sBO),a.Y36(l.gz),a.Y36(c.Dx),a.Y36(c.h_),a.Y36(p.J),a.Y36(d.y),a.Y36(l.F0),a.Y36(h.Z))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-invalid-page"]],decls:3,vars:2,consts:[[3,"class",4,"ngIf"],[1,"cover",2,"background-image","url(https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2FSample-Walls%2FHome%2F1.jpg?alt=media)"],[1,"d-flex","align-items-center","justify-content-center",2,"height","800px","font-weight","bold","font-size","35px"],[1,"text-center",2,"line-height","1.2em","text-shadow","2px 2px #42424281"],[1,"text-center","px-5","mx-5",2,"font-size","30px","line-height","1.2em","font-weight","bold","text-shadow","2px 2px #42424281"],[1,"btn","btn-outline-light",2,"font-weight","bold",3,"href"],[1,"container"]],template:function(e,t){1&e&&(a._UZ(0,"router-outlet"),a.YNc(1,g,9,6,"header",0),a.YNc(2,u,7,14,"footer",0)),2&e&&(a.xp6(1),a.Q6J("ngIf",t.isBrowser()),a.xp6(1),a.Q6J("ngIf",t.isBrowser()))},directives:[l.lC,r.O5],styles:[".centered[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.cover[_ngcontent-%COMP%]{color:#fff;position:relative;background-repeat:no-repeat;background-position-x:center;background-position-y:center;background-size:cover}"]}),e})();const f=[{path:"",component:m}];let v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e,bootstrap:[m]}),e.\u0275inj=a.cJS({providers:[n.O],imports:[[r.ez,i.QW,s.ef,l.Bz.forChild(f),l.Bz.forChild(f)]]}),e})()}}]);