"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=281,exports.ids=[281],exports.modules={79281:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HomeModule:()=>HomeModule});var common=__webpack_require__(11048),core=__webpack_require__(89724),globals=__webpack_require__(37503),router=__webpack_require__(6609),platform_browser=__webpack_require__(14800),load_service=__webpack_require__(7478),app_component=__webpack_require__(59157),ngx_spinner=__webpack_require__(30427),routing_service=__webpack_require__(78078);function HomeComponent_ngx_spinner_1_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"ngx-spinner",3),core.TgZ(1,"h3",4),core._uU(2),core.qZA(),core.qZA()),2&rf){const ctx_r0=core.oxw();let tmp_6_0;core.Udp("color",ctx_r0.selectedIndicator().color),core.s9C("bdColor",ctx_r0.selectedIndicator().bg_color),core.s9C("color",ctx_r0.selectedIndicator().color),core.s9C("type",ctx_r0.selectedIndicator().name),core.Q6J("fullScreen",!0),core.xp6(1),core.Udp("font-family",ctx_r0.storeInfo().fontName),core.xp6(1),core.hij("",null==(tmp_6_0=ctx_r0.storeInfo())?null:tmp_6_0.fullName,"\n")}}function HomeComponent_header_2_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"header",5),core._UZ(1,"img",6),core.qZA()),2&rf){const ctx_r1=core.oxw();let tmp_2_0;core.Gre("bg-",ctx_r1.storeInfo().colorStyle.back_code," py-6"),core.Q6J("hidden",null==ctx_r1.storeInfo().username||""==ctx_r1.storeInfo().username),core.xp6(1),core.Q6J("src",null!==(tmp_2_0=null==ctx_r1.storeInfo().homeLinkTop?null:ctx_r1.storeInfo().homeLinkTop.toString())&&void 0!==tmp_2_0?tmp_2_0:null==ctx_r1.storeInfo().themeLink?null:ctx_r1.storeInfo().themeLink.toString(),core.LSH)}}function HomeComponent_section_3_div_2_div_1_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",14),core.TgZ(1,"p",15),core._uU(2),core.qZA(),core.qZA()),2&rf){const row_r5=core.oxw().$implicit,ctx_r6=core.oxw(2);core.Udp("color",ctx_r6.selectedTheme().color),core.xp6(1),core.Gre("text-center text-",ctx_r6.storeInfo().colorStyle.text_code,""),core.Udp("font-family",ctx_r6.storeInfo().fontName),core.xp6(1),core.hij(" ",row_r5.text," ")}}function HomeComponent_section_3_div_2_div_2_div_2_p_10_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"p",29),core.TgZ(1,"b",30),core._uU(2),core.qZA(),core.qZA()),2&rf){const product_r12=core.oxw().$implicit,ctx_r13=core.oxw(4);let tmp_1_0;core.Udp("font-family",ctx_r13.storeInfo().fontName),core.xp6(2),core.hij(" ",ctx_r13.formatPrice((null!==(tmp_1_0=product_r12.price)&&void 0!==tmp_1_0?tmp_1_0:0)/100)," ")}}function HomeComponent_section_3_div_2_div_2_div_2_Template(rf,ctx){if(1&rf){const _r16=core.EpF();core.TgZ(0,"div",18),core.TgZ(1,"div"),core.TgZ(2,"a",19),core.NdJ("click",__name(function(){const product_r12=core.CHM(_r16).$implicit;return core.oxw(4).routeToProduct(product_r12.productID)},"HomeComponent_section_3_div_2_div_2_div_2_Template_a_click_2_listener")),core._UZ(3,"img",20),core.qZA(),core.TgZ(4,"div",21),core.TgZ(5,"div",22),core.TgZ(6,"h4",23),core.TgZ(7,"a",24),core.NdJ("click",__name(function(){const product_r12=core.CHM(_r16).$implicit;return core.oxw(4).routeToProduct(product_r12.productID)},"HomeComponent_section_3_div_2_div_2_div_2_Template_a_click_7_listener")),core._uU(8),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.TgZ(9,"div",25),core.YNc(10,HomeComponent_section_3_div_2_div_2_div_2_p_10_Template,3,3,"p",26),core.TgZ(11,"div",27),core.TgZ(12,"a",28),core.NdJ("click",__name(function(){const product_r12=core.CHM(_r16).$implicit;return core.oxw(4).routeToProduct(product_r12.productID)},"HomeComponent_section_3_div_2_div_2_div_2_Template_a_click_12_listener")),core._uU(13),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA()}if(2&rf){const product_r12=ctx.$implicit,row_r5=core.oxw(2).$implicit,ctx_r11=core.oxw(2);let tmp_2_0,tmp_5_0;core.xp6(1),core.Gre("card h-100 bg-",ctx_r11.storeInfo().colorStyle.back_code,""),core.ekj("border-secondary","light"==ctx_r11.storeInfo().colorStyle.text_code),core.xp6(2),core.s9C("src",null!==(tmp_2_0=null==product_r12.url?null:product_r12.url.toString())&&void 0!==tmp_2_0?tmp_2_0:"",core.LSH),core.xp6(3),core.Udp("font-family",ctx_r11.storeInfo().fontName)("font-size",ctx_r11.titleFontSize(row_r5),"px"),core.ekj("my-5","inherit"!=ctx_r11.titleFontSize(row_r5)&&(null!==(tmp_5_0=row_r5.grid_row)&&void 0!==tmp_5_0?tmp_5_0:1)<=2),core.xp6(1),core.Udp("color",ctx_r11.selectedTheme().color),core.xp6(1),core.Oqu(product_r12.name),core.xp6(2),core.Q6J("ngIf",ctx_r11.autoCoupon(product_r12)),core.xp6(2),core.Gre("btn btn-outline-",ctx_r11.storeInfo().colorStyle.text_code," bad w-100 mt-auto text-center"),core.Udp("font-family",ctx_r11.storeInfo().fontName)("font-size",ctx_r11.fontSize(row_r5),"px"),core.xp6(1),core.hij(" ",ctx_r11.formatPrice(ctx_r11.mainPrice(product_r12))," ")}}function HomeComponent_section_3_div_2_div_2_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",16),core.TgZ(1,"div"),core.YNc(2,HomeComponent_section_3_div_2_div_2_div_2_Template,14,25,"div",17),core.qZA(),core.qZA()),2&rf){const row_r5=core.oxw().$implicit,ctx_r7=core.oxw(2);let tmp_0_0;core.xp6(1),core.Gre("row mx-2 gx-3 gx-lg-3 row-cols-1 row-cols-md-",null!==(tmp_0_0=row_r5.grid_row)&&void 0!==tmp_0_0?tmp_0_0:1," justify-content-center"),core.xp6(1),core.Q6J("ngForOf",ctx_r7.products(row_r5.smart_products,row_r5.products))}}function HomeComponent_section_3_div_2_div_3_div_1_Template(rf,ctx){if(1&rf){const _r26=core.EpF();core.TgZ(0,"div",32),core.TgZ(1,"div",33),core.TgZ(2,"a",34),core.NdJ("click",__name(function(){const i_r23=core.CHM(_r26).index,row_r5=core.oxw(2).$implicit;let tmp_b_0;return core.oxw(2).imgLinkPressed((null!==(tmp_b_0=row_r5.imgLinks)&&void 0!==tmp_b_0?tmp_b_0:[])[i_r23])},"HomeComponent_section_3_div_2_div_3_div_1_Template_a_click_2_listener")),core._UZ(3,"img",35),core.qZA(),core.qZA(),core.qZA()}if(2&rf){const img_r22=ctx.$implicit;core.xp6(3),core.s9C("src",img_r22,core.LSH)}}__name(HomeComponent_ngx_spinner_1_Template,"HomeComponent_ngx_spinner_1_Template"),__name(HomeComponent_header_2_Template,"HomeComponent_header_2_Template"),__name(HomeComponent_section_3_div_2_div_1_Template,"HomeComponent_section_3_div_2_div_1_Template"),__name(HomeComponent_section_3_div_2_div_2_div_2_p_10_Template,"HomeComponent_section_3_div_2_div_2_div_2_p_10_Template"),__name(HomeComponent_section_3_div_2_div_2_div_2_Template,"HomeComponent_section_3_div_2_div_2_div_2_Template"),__name(HomeComponent_section_3_div_2_div_2_Template,"HomeComponent_section_3_div_2_div_2_Template"),__name(HomeComponent_section_3_div_2_div_3_div_1_Template,"HomeComponent_section_3_div_2_div_3_div_1_Template");const _c0=__name(function(){return[]},"_c0");function HomeComponent_section_3_div_2_div_3_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div"),core.YNc(1,HomeComponent_section_3_div_2_div_3_div_1_Template,4,1,"div",31),core.qZA()),2&rf){const row_r5=core.oxw().$implicit;let tmp_0_0,tmp_1_0;core.Gre("row gx-0 row-cols-1 row-cols-md-",null!==(tmp_0_0=row_r5.grid_row)&&void 0!==tmp_0_0?tmp_0_0:1," justify-content-center w-100 mx-0"),core.xp6(1),core.Q6J("ngForOf",null!==(tmp_1_0=row_r5.imgs)&&void 0!==tmp_1_0?tmp_1_0:core.DdM(4,_c0))}}function HomeComponent_section_3_div_2_div_4_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",36),core._UZ(1,"div",37),core.qZA()),2&rf){const row_r5=core.oxw().$implicit,ctx_r9=core.oxw(2);core.xp6(1),core.Udp("font-family",ctx_r9.storeInfo().fontName)("color",ctx_r9.selectedTheme().color),core.Q6J("innerHTML",ctx_r9.rowText(row_r5),core.oJD)}}function HomeComponent_section_3_div_2_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",9),core.YNc(1,HomeComponent_section_3_div_2_div_1_Template,3,9,"div",10),core.YNc(2,HomeComponent_section_3_div_2_div_2_Template,3,4,"div",11),core.YNc(3,HomeComponent_section_3_div_2_div_3_Template,2,5,"div",12),core.YNc(4,HomeComponent_section_3_div_2_div_4_Template,2,6,"div",13),core.qZA()),2&rf){const row_r5=ctx.$implicit;let tmp_0_0;core.xp6(1),core.Q6J("ngIf",""!=(null!==(tmp_0_0=row_r5.text)&&void 0!==tmp_0_0?tmp_0_0:"").trim()),core.xp6(1),core.Q6J("ngIf",0==row_r5.type),core.xp6(1),core.Q6J("ngIf",1==row_r5.type),core.xp6(1),core.Q6J("ngIf",2==row_r5.type)}}function HomeComponent_section_3_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"section",7),core.TgZ(1,"div"),core.YNc(2,HomeComponent_section_3_div_2_Template,5,4,"div",8),core.qZA(),core.qZA()),2&rf){const ctx_r2=core.oxw();let tmp_1_0;core.Udp("background-color",ctx_r2.selectedTheme().bg_color),core.xp6(2),core.Q6J("ngForOf",null!==(tmp_1_0=null==(tmp_1_0=ctx_r2.storeInfo())?null:tmp_1_0.homeRows)&&void 0!==tmp_1_0?tmp_1_0:core.DdM(4,_c0))}}function HomeComponent_section_4_Template(rf,ctx){if(1&rf){const _r30=core.EpF();core.TgZ(0,"section",7),core.TgZ(1,"div",38),core.TgZ(2,"div",14),core.TgZ(3,"p",15),core._uU(4," COMING SOON "),core.qZA(),core.qZA(),core.TgZ(5,"div"),core.TgZ(6,"div",39),core.TgZ(7,"div",40),core.TgZ(8,"a",41),core.NdJ("click",__name(function(){return core.CHM(_r30),core.oxw().routeToAbout()},"HomeComponent_section_4_Template_a_click_8_listener")),core._UZ(9,"img",42),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA()}if(2&rf){const ctx_r3=core.oxw();let tmp_4_0;core.Udp("background-color",ctx_r3.selectedTheme().bg_color),core.xp6(2),core.Udp("color",ctx_r3.selectedTheme().color),core.xp6(1),core.Gre("text-center text-",ctx_r3.storeInfo().colorStyle.text_code,""),core.Udp("font-family",ctx_r3.storeInfo().fontName),core.xp6(6),core.s9C("src",null!==(tmp_4_0=null==ctx_r3.storeInfo().homeLink?null:ctx_r3.storeInfo().homeLink.toString())&&void 0!==tmp_4_0?tmp_4_0:"",core.LSH)}}__name(HomeComponent_section_3_div_2_div_3_Template,"HomeComponent_section_3_div_2_div_3_Template"),__name(HomeComponent_section_3_div_2_div_4_Template,"HomeComponent_section_3_div_2_div_4_Template"),__name(HomeComponent_section_3_div_2_Template,"HomeComponent_section_3_div_2_Template"),__name(HomeComponent_section_3_Template,"HomeComponent_section_3_Template"),__name(HomeComponent_section_4_Template,"HomeComponent_section_4_Template");class HomeComponent{constructor(platformID,cdr,router2,titleService,metaService,loadService,rootComponent,_router,spinner,injector,routingService,sanitizer,location){this.platformID=platformID,this.cdr=cdr,this.router=router2,this.titleService=titleService,this.metaService=metaService,this.loadService=loadService,this.rootComponent=rootComponent,this._router=_router,this.spinner=spinner,this.injector=injector,this.routingService=routingService,this.sanitizer=sanitizer,this.location=location,this.isSpinning=!1,this.storeProducts=void 0}storeInfo(){return globals.O.storeInfo}availableCurrencies(){return globals.O.availableCurrencies}selectedCurrency(){return globals.O.selectedCurrency}templates(){return globals.O.availableTemplates}availableTemplates(){return globals.O.availableTemplates}getLinkImg(name){return globals.O.socials.filter(obj=>obj.name==name)[0].img}autoCoupon(product){var _a;return null===(_a=this.storeInfo().coupons)||void 0===_a?void 0:_a.filter(coupon=>coupon.products.includes(product.productID)&&coupon.auto).sort(function(a,b){return a.amt<b.amt?1:a.amt>b.amt?-1:0})[0]}fontSize(row){var _a,_b;return this.rootComponent.isMobile()||(null!==(_a=row.grid_row)&&void 0!==_a?_a:1)>=2?"inherit":.5/(null!==(_b=row.grid_row)&&void 0!==_b?_b:1)*100}titleFontSize(row){var _a,_b;return this.rootComponent.isMobile()||(null!==(_a=row.grid_row)&&void 0!==_a?_a:1)>=2?"inherit":.3/(null!==(_b=row.grid_row)&&void 0!==_b?_b:1)*100}products(smartProducts,products){if(void 0!==smartProducts){if(0==smartProducts)return this.newArrivalProducts();if(1==smartProducts)return this.featuredProducts()}var prod=Array();return null==products||products.forEach(p=>{var _a;let pro=null===(_a=this.storeProducts)||void 0===_a?void 0:_a.find(pr=>pr.productID==p);pro&&prod.push(pro)}),prod}mainPrice(product){var _a,_b,_c,_d,_e;let coupon=this.autoCoupon(product);if(coupon){if(0==coupon.style)return(null!==(_a=product.price)&&void 0!==_a?_a:0)/100-(null!==(_b=product.price)&&void 0!==_b?_b:0)/100*coupon.amt;if(1==coupon.style)return(null!==(_c=product.price)&&void 0!==_c?_c:0)/100-100*(null!==(_d=coupon.amt)&&void 0!==_d?_d:0)}return(null!==(_e=product.price)&&void 0!==_e?_e:0)/100}openSocial(l){const link=document.createElement("a");link.target="_blank";let url="";/^http[s]?:\/\//.test(l)||(url+="http://"),url+=l,link.href=url,link.setAttribute("visibility","hidden"),link.click(),link.remove()}newArrivalProducts(){var _a;return null===(_a=this.storeProducts)||void 0===_a?void 0:_a.sort(function(a,b){return a.timestamp>b.timestamp?-1:a.timestamp<b.timestamp?1:0}).slice(0,4)}featuredProducts(){var _a;return null===(_a=this.storeProducts)||void 0===_a?void 0:_a.sort(function(a,b){return a.likes>b.likes?-1:a.likes<b.likes?1:0}).slice(0,4)}imgLinkPressed(link){this.rootComponent.routeToImgLink(link)}ngOnDestroy(){this.loadService.adminComponent=void 0}ngOnInit(){this.loadService.homeComponent=this,this.init()}routeToProduct(productID){this.rootComponent.routeToProduct(productID)}routeToShop(){this.rootComponent.routeToShop()}routeToAbout(){this.rootComponent.routeToAbout()}selectedIndicator(){var _a,_b,_c,_d,_e,_f;let co=null===(_b=null===(_a=globals.O.storeInfo)||void 0===_a?void 0:_a.loading)||void 0===_b?void 0:_b.color,bco=null===(_d=null===(_c=globals.O.storeInfo)||void 0===_c?void 0:_c.loading)||void 0===_d?void 0:_d.bg_color;return{name:null===(_f=null===(_e=globals.O.storeInfo)||void 0===_e?void 0:_e.loading)||void 0===_f?void 0:_f.name,color:"rgba("+co[0]+","+co[1]+","+co[2]+","+co[3]+")",bg_color:"rgba("+bco[0]+","+bco[1]+","+bco[2]+","+bco[3]+")"}}showSpinner(){this.isSpinning||(this.isSpinning=!0,(0,common.NF)(this.platformID)&&this.spinner.show(),setTimeout(()=>{this.spinner.hide()},1500))}selectedTheme(){var _a,_b,_c,_d,_e,_f;let co=null===(_b=null===(_a=globals.O.storeInfo)||void 0===_a?void 0:_a.colorStyle)||void 0===_b?void 0:_b.btn_color,bco=null===(_d=null===(_c=globals.O.storeInfo)||void 0===_c?void 0:_c.colorStyle)||void 0===_d?void 0:_d.bg_color;return{name:null===(_f=null===(_e=globals.O.storeInfo)||void 0===_e?void 0:_e.colorStyle)||void 0===_f?void 0:_f.name,color:"rgba("+co[0]+","+co[1]+","+co[2]+","+co[3]+")",bg_color:"rgba("+bco[0]+","+bco[1]+","+bco[2]+","+bco[3]+")"}}hideSpinner(){this.isSpinning&&(this.isSpinning=!1)}callback(){var _a,_b,_c,_d,_e;globals.O.storeInfo.username?(this.rootComponent.setFavIcon(null!==(_b=null===(_a=globals.O.storeInfo.profileLink)||void 0===_a?void 0:_a.toString())&&void 0!==_b?_b:""),this.addTags(null!==(_c=globals.O.storeInfo.fullName)&&void 0!==_c?_c:"Thred",(null!==(_d=globals.O.storeInfo.profileLink)&&void 0!==_d?_d:new URL("https://shopmythred.com")).toString(),null!==(_e=globals.O.storeInfo.bio)&&void 0!==_e?_e:"Check out my Thred Store!","shopmythred.com/"+globals.O.storeInfo.username),(0,common.NF)(this.platformID)&&(this.showSpinner(),this.loadService.logView(),this.rootComponent.setOptions()),null==globals.O.userInfo&&(0,common.NF)(this.platformID)?this.loadService.getCustomer():0==globals.O.availableCurrencies.length&&(0,common.NF)(this.platformID)?this.loadService.getCountries():0==globals.O.templates.length&&(0,common.NF)(this.platformID)?this.loadService.getTemplates():null==this.storeProducts?this.loadService.getPosts(products=>{this.storeProducts=products}):this.rootComponent.cdr.detectChanges()):this.routingService.routeTo404(this.getStoreName().isCustom)}init(){const storeInfo=this.getStoreName();this.downloadAllStoreInfo(storeInfo.link,storeInfo.isCustom)}isBrowser(){return(0,common.NF)(this.platformID)}downloadAllStoreInfo(storeName,isCustom=!1){this.loadService.myCallback=()=>this.callback(),this.loadService.getUser(storeName,void 0,isCustom)}rowText(row){var _a;let replaced=null!==(_a=row.html)&&void 0!==_a?_a:"";return this.sanitizer.bypassSecurityTrustHtml(replaced)}getStoreName(){var request="";if("localhost:4200"!=(request=(0,common.PM)(this.platformID)?globals.O.URL:globalThis.location.host)&&"shopmythred.com"!=request)return{isCustom:!0,link:request};return{isCustom:!1,link:this.router.snapshot.paramMap.get("user")}}open(e,item){}formatPrice(price){var priceAsString=new String((price*globals.O.selectedCurrency.rate).toFixed(2));switch(priceAsString.indexOf(".")){case priceAsString.length-1:priceAsString+="00";break;case priceAsString.length-2:priceAsString+="0"}return this.numberWithCommas(this.getCurrencyForCountry(globals.O.selectedCurrency,"US"!=globals.O.selectedCurrency.name)+priceAsString)}numberWithCommas(x){return x.replace(/\B(?=(\d{3})+(?!\d))/g,",")}getCurrencyForCountry(country,shouldShowName){var returnItem=country.currency_symbol;return shouldShowName&&(returnItem=country.name+" "+returnItem),returnItem}addTags(title,imgUrl,description,url){this.metaService.updateTag({property:"og:title",content:title+" - Home"}),this.metaService.updateTag({property:"og:image:width",content:"200"}),this.metaService.updateTag({property:"og:image:height",content:"200"}),this.metaService.updateTag({property:"og:image",content:imgUrl}),this.metaService.updateTag({property:"og:url",content:url}),this.metaService.updateTag({property:"og:description",content:description}),this.titleService.setTitle(title),this.metaService.updateTag({property:"description",content:description})}}__name(HomeComponent,"HomeComponent"),HomeComponent.\u0275fac=__name(function(t){return new(t||HomeComponent)(core.Y36(core.Lbi),core.Y36(core.sBO),core.Y36(router.gz),core.Y36(platform_browser.Dx),core.Y36(platform_browser.h_),core.Y36(load_service.J),core.Y36(app_component.y),core.Y36(router.F0),core.Y36(ngx_spinner.t2),core.Y36(core.zs3),core.Y36(routing_service.Z),core.Y36(platform_browser.H7),core.Y36(common.lw))},"HomeComponent_Factory"),HomeComponent.\u0275cmp=core.Xpm({type:HomeComponent,selectors:[["app-home"]],decls:5,vars:4,consts:[["size","large",3,"bdColor","color","type","fullScreen",4,"ngIf"],["style","height: fit-content;",3,"hidden","class",4,"ngIf"],["class","py-5",3,"background-color",4,"ngIf"],["size","large",3,"bdColor","color","type","fullScreen"],[1,"text-center","mt-5"],[2,"height","fit-content",3,"hidden"],[1,"w-100","h-100",3,"src"],[1,"py-5"],["class","w-100 mb-5",4,"ngFor","ngForOf"],[1,"w-100","mb-5"],["class","d-flex align-items-center justify-content-center pb-1 mb-5","style","height: 50px; font-weight: bold;font-size:30px;",3,"color",4,"ngIf"],["class","w-100",4,"ngIf"],[3,"class",4,"ngIf"],["class","w-100 mx-0",4,"ngIf"],[1,"d-flex","align-items-center","justify-content-center","pb-1","mb-5",2,"height","50px","font-weight","bold","font-size","30px"],[2,"line-height","1.2em"],[1,"w-100"],["class","col",4,"ngFor","ngForOf"],[1,"col"],["role","button",3,"click"],["alt","ok",1,"card-img-top",3,"src"],[1,"card-body","p-2","pb-0"],[1,"text-center"],[1,"fw-bolder"],["role","button",2,"text-decoration","none",3,"click"],[1,"card-footer","p-4","pt-0","pt-0","pb-4","border-top-0","bg-transparent"],["class","text-center fw-bolder d-flex justify-content-center align-items-center","style","font-size:15px",3,"font-family",4,"ngIf"],[1,"text-center","d-flex","justify-content-center","align-items-center","w-100"],["role","button",2,"font-weight","bold","max-width","50vh",3,"click"],[1,"text-center","fw-bolder","d-flex","justify-content-center","align-items-center",2,"font-size","15px"],[1,"old-price"],["class","col mb-1",4,"ngFor","ngForOf"],[1,"col","mb-1"],[1,"d-block","align-items-center","text-center","text-sm-start","w-100"],["role","button",1,"ms-0","me-0",3,"click"],["alt","Product",2,"width","100%","height","auto",3,"src"],[1,"w-100","mx-0"],[1,"m-3",3,"innerHTML"],[1,"container","mt-5"],[1,"d-block","align-items-center","pt-0"],[1,"d-block","align-items-center","text-center","text-sm-start"],["role","button",1,"mx-auto","me-sm-4",3,"click"],["alt","Product",2,"max-width","100%","height","auto",3,"src"]],template:__name(function(rf,ctx){if(1&rf&&(core._UZ(0,"router-outlet"),core.YNc(1,HomeComponent_ngx_spinner_1_Template,3,10,"ngx-spinner",0),core.YNc(2,HomeComponent_header_2_Template,2,5,"header",1),core.YNc(3,HomeComponent_section_3_Template,3,5,"section",2),core.YNc(4,HomeComponent_section_4_Template,10,12,"section",2)),2&rf){let tmp_2_0,tmp_3_0;core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()),core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()),core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()&&(null==(tmp_2_0=ctx.storeInfo())?null:tmp_2_0.active)&&0!=(null==ctx.storeProducts?null:ctx.storeProducts.length)),core.xp6(1),core.Q6J("ngIf",ctx.isBrowser()&&(null==(tmp_3_0=ctx.storeInfo())?null:tmp_3_0.username)&&(!(null!=(tmp_3_0=ctx.storeInfo())&&tmp_3_0.active)||0==(null==ctx.storeProducts?null:ctx.storeProducts.length)))}},"HomeComponent_Template"),directives:[router.lC,common.O5,ngx_spinner.Ro,common.sg],styles:[".centered[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.cover[_ngcontent-%COMP%]{color:#fff;position:relative;background-repeat:no-repeat;background-position-x:center;background-position-y:top;background-size:cover}.low[_ngcontent-%COMP%]{color:#a5652a}.bad[_ngcontent-%COMP%]{font-size:inherit}.mid[_ngcontent-%COMP%]{color:silver}.high[_ngcontent-%COMP%]{color:gold}.old-price[_ngcontent-%COMP%]{text-decoration:line-through;-webkit-text-decoration-style:solid;text-decoration-style:solid;color:gray}.new-price[_ngcontent-%COMP%]{text-decoration:none}.middle[_ngcontent-%COMP%]{color:#fff;position:relative;background-repeat:no-repeat;background-position-x:center;background-position-y:center;background-size:cover}"]});var card=__webpack_require__(38182),icon=__webpack_require__(74848);const routes=[{path:"",component:HomeComponent}];class HomeModule{}__name(HomeModule,"HomeModule"),HomeModule.\u0275fac=__name(function(t){return new(t||HomeModule)},"HomeModule_Factory"),HomeModule.\u0275mod=core.oAB({type:HomeModule,bootstrap:[HomeComponent]}),HomeModule.\u0275inj=core.cJS({providers:[globals.O],imports:[[common.ez,card.QW,icon.Ps,ngx_spinner.ef,router.Bz.forChild(routes)]]})}};