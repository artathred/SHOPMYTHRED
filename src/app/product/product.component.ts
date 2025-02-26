import {
  ChangeDetectorRef,
  Component,
  OnInit,
  Inject,
  AfterViewInit,
  ViewChild,
  HostListener,
  OnDestroy,
  ElementRef,
} from '@angular/core';

import {
  ActivatedRoute,
  Router,
  NavigationStart,
  NavigationEnd,
} from '@angular/router';
import { Country } from '../models/shipping-country.model';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { LoadService, Dict } from '../services/load.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Globals } from '../globals';
import { ProductInCart } from '../models/product-in-cart.model';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { RoutingService } from '../services/routing.service';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { Product } from '../models/product.model';
import { Inventory } from '../models/inventory.model';
import { Template } from '../models/template.model';
import { NFT } from '../models/nft.model';
import { NftLog } from '../models/nft-log.model';
import { Collection } from '../models/collection.model';
import { ethers, BigNumber } from 'ethers';
import { MatAccordion } from '@angular/material/expansion/accordion';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { from, Subscription } from 'rxjs';
import detectEthereumProvider from '@metamask/detect-provider';
import axios from 'axios';
import { filter, map, skip, takeLast } from 'rxjs/operators';
import { Store } from '../models/store.model';
import { NftInfoComponent } from './nft-info/nft-info.component';
import { Clipboard } from '@angular/cdk/clipboard';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('carousel', { read: DragScrollComponent })
  ds?: DragScrollComponent;

  storeInfo?: Store;

  availableCurrencies() {
    return Globals.availableCurrencies;
  }
  selectedCurrency() {
    return Globals.selectedCurrency;
  }

  selectedIndex = 0;

  selectedInv?: Inventory;

  productToBuy?: NFT;

  collection?: Collection;

  get rates() {
    return Globals.rates;
  }

  editionMapping: { [k: string]: string } = {
    '=0': 'Editions',
    '=1': 'Edition',
    other: 'Editions',
  };

  usdDisplayPrice = 0;

  quantityNumbers: Array<number> = [];
  panelOpenState = false;

  accordionList = [
    {
      id: 'panel-1',
      title: 'Properties',
      subtitle: '',
      type: 0,
      isDisabled: false,
      isExpanded: true,
    },
    {
      id: 'panel-2',
      title: 'About',
      description: '',
      subtitle: '',
      type: 1,
      isDisabled: false,
      isExpanded: true,
    },
  ];

  accordionList2 = [
    {
      id: 'panel-1',
      title: 'Offers',
      subtitle: '',
      type: 1,
      isDisabled: false,
      isExpanded: true,
    },
    // ,{
    //   id:"panel-2",
    //   title:"Price History",
    //   description:"",
    //   subtitle: "",
    //   type: 0,
    //   isDisabled:false,
    //   isExpanded:false
    // },
    // {
    //   id:"panel-2",
    //   title:"Activity",
    //   description:"",
    //   subtitle: "",
    //   type: 2,
    //   isDisabled:false,
    //   isExpanded:false
    // }
  ];

  accordionList3 = [
    {
      id: 'panel-1',
      title: 'History',
      subtitle: '',
      type: 1,
      isDisabled: false,
      isExpanded: true,
    },
    {
      id: 'panel-3',
      title: 'Details',
      subtitle: '',
      type: 2,
      isDisabled: false,
      isExpanded: true,
    },
    // ,{
    //   id:"panel-2",
    //   title:"Price History",
    //   description:"",
    //   subtitle: "",
    //   type: 0,
    //   isDisabled:false,
    //   isExpanded:false
    // },
    // {
    //   id:"panel-2",
    //   title:"Activity",
    //   description:"",
    //   subtitle: "",
    //   type: 2,
    //   isDisabled:false,
    //   isExpanded:false
    // }
  ];

  ethereum: any;

  signInForm = this.fb.group({
    email: [null, Validators.required],
    password: [null],
  });

  signUpForm = this.fb.group({
    email: [null, Validators.required],
    password: [null],
    confirmPassword: [null],
  });

  constructor(
    @Inject(PLATFORM_ID) private platformID: Object,
    private cdr: ChangeDetectorRef,
    private router: ActivatedRoute,
    private _router: Router,
    private titleService: Title,
    private metaService: Meta,
    private loadService: LoadService,
    private modalService: NgbModal,
    private rootComponent: AppComponent,
    private spinner: NgxSpinnerService,
    private routingService: RoutingService,
    private dialog: MatDialog,
    private clipboard: Clipboard,
    private fb: FormBuilder
  ) {}
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  openInfo() {
    const modalRef = this.dialog.open(NftInfoComponent, {
      width: '97.5vw',
      height: '87.5vh',
      maxHeight: '100vh',
      maxWidth: '100vw',
      panelClass: 'app-full-bleed-dialog',
      // data: {
      //   nft: product,
      //   collection: this.collection,
      //   provider: Globals.provider,
      // },
    });
    let sub = modalRef.afterClosed().subscribe((resp) => {
      // sub.unsubscribe();
      // if (resp as NFT) {
      //   this.productToBuy = resp as NFT;
      // } else {
      // }
    });
  }

  sub?: Subscription;

  // private sub = this._router.events
  //   .pipe(
  //     filter(event => event instanceof NavigationStart),
  //     map(event => event as NavigationStart),  // appease typescript
  //     filter(event => (event.url !== this.oldUrl) && !event.url.includes('my-store'))
  //   )
  //   .subscribe(
  //     event => {
  //       this.oldUrl = event.url
  //       this.ngOnInit()
  //     }
  // );

  // oldUrl = ''

  getLinkImg(name: string) {
    return Globals.socials.filter((obj) => {
      return obj.name == name;
    })[0].img;
  }

  get loggedIn() {
    return this.rootComponent.loggedIn;
  }


  viewTxPolygonScan(log: NftLog) {
    if (!log.txHash) {
      return;
    }
    var urlLink = `https://polygonscan.com/tx/${log.txHash}`;

    const link = document.createElement('a');
    link.target = '_blank';

    let url: string = '';
    if (!/^http[s]?:\/\//.test(urlLink)) {
      url += 'http://';
    }

    url += urlLink;

    link.href = url;

    link.setAttribute('visibility', 'hidden');
    link.click();
    link.remove();
  }

  displayedColumns: string[] = ['symbol', 'from', 'to', 'price', 'date'];
  dataSource: Array<Dict<any>> = [
    // {price: '0.02 MATIC', from: nftaddress.slice(nftaddress.length-4)},
  ];

  nftLogs: Array<NftLog> = [];

  mainPrice(product: Product) {
    return (product.price ?? 0) / 100;
  }

  openSocial(l: string) {
    const link = document.createElement('a');
    link.target = '_blank';

    let url: string = '';
    if (!/^http[s]?:\/\//.test(l)) {
      url += 'http://';
    }

    url += l;

    link.href = url;

    link.setAttribute('visibility', 'hidden');
    link.click();
    link.remove();
  }

  beforePanelClosed(panel: any) {
    panel.isExpanded = false;
  }
  beforePanelOpened(panel: any) {
    panel.isExpanded = true;
  }

  afterPanelClosed() {}
  afterPanelOpened() {}

  closeAllPanels() {
    this.Accordion?.closeAll();
  }
  openAllPanels() {
    this.Accordion?.openAll();
  }

  selectedIndicator() {
    if (!Globals.storeInfo) {
      return {
        name: '',
        color: '',
        bg_color: '',
      };
    }
    let co = Globals.storeInfo?.loading?.color;
    let bco = Globals.storeInfo?.loading?.bg_color;
    let name = Globals.storeInfo?.loading?.name;

    let color = 'rgba(' + co[0] + ',' + co[1] + ',' + co[2] + ',' + co[3] + ')';

    let bg_color =
      'rgba(' + bco[0] + ',' + bco[1] + ',' + bco[2] + ',' + bco[3] + ')';

    let indicator: Dict<string> = {
      name: name,
      color: color,
      bg_color: bg_color,
    };
    return indicator;
  }

  get provider() {
    return Globals.provider;
  }

  u() {
    return this.productToBuy?.url ?? undefined;
  }

  skyBox?: string = undefined;

  traits: Dict<any>[] | undefined;

  oldUrl = '';

  get customer() {
    return Globals.customerId;
  }

  async ngOnInit() {
    Globals.sInfo.pipe().subscribe((s) => {
      this.storeInfo = s;
      // this.showSpinner();
      // this.rootComponent.setFavIcon(
      //     s?.profileLink?.toString() ?? ''
      // );
    });

    // const storeInfo = this.getStoreName();
    // this.loadService.getUser(
    //   storeInfo?.link,
    //   undefined,
    //   storeInfo?.isCustom,
    //   (user) => {
    //     this.cdr.detectChanges();
    //   }
    // );

    // this.loadService.getPost(
    //   data.full,
    //   (nft?: NFT, collection?: Collection) => {
    //     this.selectedIndex = 0;
    //     if (nft) {
    //       // if (nft.tokenId == 1){
    //       //   this.skyBox = "https://storage.googleapis.com/clothingapp-ed125.appspot.com/Resources/Sample-Walls/cape_hill_1k.hdr"
    //       // }
    //       // else{
    //       //   this.skyBox = "https://storage.googleapis.com/clothingapp-ed125.appspot.com/Resources/Sample-Walls/pool_1k.hdr"
    //       // }

    //       console.log(this.skyBox)
    //       this.productToBuy = nft;
    //       this.cdr.detectChanges();
    //       // this.accordionList[0].description = this.productToBuy.description

    //       // var provider = new ethers.providers.EtherscanProvider();

    //       // // Getting the current Ethereum price
    //       // // provider.tok.getEtherPrice().then(price => {
    //       // //   console.log('Ether price in USD: ' + price);
    //       // //   this.usdDisplayPrice = price * nft.price
    //       // // });

    //       this.collection = collection;

    //       this.traits = [
    //         {
    //           name: 'test',
    //           rarity: 100,
    //           value: "hey"
    //         }
    //       ]

    //       this.checkLoad();
    //     }
    //   },
    //   undefined,
    //   undefined,
    //   undefined,
    //   undefined,
    //   this.provider
    // );

    // this.loadService.getTraitRarity(nft, collection!, traits => {
    //   // this.traits = traits
    //   this.traits = [
    //     {
    //       name: 'test',
    //       rarity: 100,
    //       value: "hey"
    //     }
    //   ]
    //   // this.accordionList[0].isExpanded = !this.isMobile()
    // })

    // this.accordionList[1].description = this.productToBuy.description;

    // this.route.navigate([], {
    //   queryParams: {
    //     id: productID
    //   },
    //   queryParamsHandling: 'merge',
    // });
    // this.router.queryParams.subscribe((params) => {
    //   let linkInfo = params.info as string;
    //   let info = JSON.parse(this.hexToUtf8(linkInfo));

    // });

    let id = this.getProductID().full;

    this.loadService.logView(id);

    if (Globals.customerId) {
      const tokenDecodablePart = Globals.customerId.split('.')[1];
      const d = JSON.parse(
        Buffer.from(tokenDecodablePart, 'base64').toString()
      );
    }

    this.loadService.getPost(id, (product?: NFT, collection?: Collection) => {
      setTimeout(async () => {
        this.productToBuy = Object.assign(new NFT(), product);
        this.collection = Object.assign(new Collection(), collection);
        this.loadService.getPaymentMethods(this.productToBuy.uid, (m) => {
          if (!this.methods || this.methods.length == 0) {
            this.methods = m ?? [];
          }
        });

        if (this.productToBuy.minted) {
          this.owner =
            (await this.loadService.getItemOwner(
              this.productToBuy,
              this.collection
            )) ?? '';
        } else {
          this.owner = '';
        }
        // this.url = info.url ?? '';
        this.cdr.detectChanges();
        // setTimeout(() => {
        //   this.loadService.getEvents(this.productToBuy!, async (txs) => {
        //     this.nftLogs = txs;
        //   });
        // }, 250);
      }, 250);
    });
  }

  methods?: any[];
  billingDetails = {
    billing_address: {
      first_name: undefined,
      last_name: undefined,
      street_1: undefined,
      city: undefined,
      state: undefined,
      zip: undefined,
      country: undefined,
      country_iso2: undefined,
      email: undefined,
    },
    payment: {
      instrument: {
        type: 'card',
        cardholder_name: undefined,
        number: undefined,
        expiry_month: 0,
        expiry_year: 0,
        verification_value: undefined,
        issue_month: 0,
        issue_year: 0,
        issue_number: 0,
      },
      payment_method_id: undefined,
    },
  };

  hexToUtf8(hex: string) {
    return decodeURIComponent('%' + hex.match(/.{1,2}/g)?.join('%'));
  }

  viewOrderDetails() {
    let url = `https://${'shopmythred.com'}/claim/${
      this.productToBuy?.docID
    }`;
    window.parent.parent.postMessage(
      {
        type: 'transfer',
        url,
      },
      '*'
    );
  }

  mode = 0;

  buyItem() {
    this.mode = 1;
  }

  toBilling(method: any) {
    this.billingDetails.payment.payment_method_id = method.code.replace(
      '2',
      ''
    );
    this.mode = 3;
  }

  toCheckout(details: any) {
    this.billingDetails.payment.instrument = details;
    this.mode = 4;

    let data = {
      uid: this.productToBuy?.uid,
      productID: this.productToBuy?.docID,
      billingDetails: this.billingDetails,
    };

    this.loadService.processOrder(data, async (error?: string) => {
      console.log(error);
      if (error == null) {
        this.owner = '0xd31c54efd3a4b5e6a993aaa4618d3700a12ff752'
        // this.owner =
        //   (await this.loadService.getItemOwner(
        //     this.productToBuy!,
        //     this.collection!
        //   )) ?? '';
        this.productToBuy!.minted = true;
        this.mode = 5;
        this.cdr.detectChanges();
        return;
      }
      this.mode = 0;
    });

    // setTimeout(() => {

    // }, 3000);
  }

  toPaymentMethod(details: any) {
    this.billingDetails.billing_address = details;

    this.mode = 2;
  }

  closeItem() {
    if (this.mode == 0) return;

    this.mode -= 1;
  }

  ngAfterViewInit(): void {}

  open() {
    // if (isPlatformBrowser(this.platformID) && this.has3D()){
    //   const modalRef = this.modalService.open(ModelViewerComponent, {size : "lg"});
    //   modalRef.componentInstance.data = {
    //     "template": this.selectedTemplate(),
    //     "product": this.selectedProduct()
    //   };
    // }
  }

  has3D() {
    // if (this.selectedTemplate() instanceof Template){
    //   let temp = this.selectedTemplate() as Template
    //   return temp?.has3D ?? false
    // }
    // return false
  }

  nextweek() {
    var d = new Date();
    return this.format(
      new Date(d.getFullYear(), d.getMonth(), d.getDate() + 10)
    );
  }

  format(d: Date) {
    return (
      Globals.days[d.getDay()] +
      ', ' +
      Globals.months[d.getMonth()] +
      ' ' +
      d.getDate()
    );
  }

  scrollTo(i: number) {
    this.selectedIndex = i;
  }

  formattedInfo() {
    // if (this.selectedTemplate() instanceof Template){
    //   let temp = this.selectedTemplate() as Template
    //   return temp?.moreInfo.replace(/\\n/g, "<br>") ?? "";
    // }
    return '';
  }

  sizes(popFirst: boolean) {
    // if (popFirst){
    //   return this.selectedTemplate()?.sizes.slice(1) ?? []
    // }
    // return this.selectedTemplate()?.sizes ?? []
  }

  isBrowser() {
    return isPlatformBrowser(this.platformID);
  }

  selectedTheme() {
    let co = Globals.storeInfo?.colorStyle?.btn_color;
    let bco = Globals.storeInfo?.colorStyle?.bg_color;
    let name = Globals.storeInfo?.colorStyle?.name;

    let color = 'rgba(' + co[0] + ',' + co[1] + ',' + co[2] + ',' + co[3] + ')';

    let bg_color =
      'rgba(' + bco[0] + ',' + bco[1] + ',' + bco[2] + ',' + bco[3] + ')';

    var theme: Dict<string> = {
      name: name,
      color: color,
      bg_color: bg_color,
    };
    return theme;
  }

  isSpinning = false;

  showSpinner() {
    if (!this.isSpinning) {
      this.isSpinning = true;
      if (isPlatformBrowser(this.platformID)) {
        this.spinner.show();
      }
    }
  }

  hideSpinner() {
    if (this.isSpinning) {
      this.isSpinning = false;
      // this.spinner.hide()
    }
  }

  getStoreName() {
    var request = '';
    if (isPlatformServer(this.platformID)) {
      request = Globals.URL;
    } else {
      request = globalThis.location.host;
    }
    if (
      request != 'localhost:4200' &&
      request != Globals.ngrokId &&
      request != 'shopmythred.com'
    ) {
      return {
        isCustom: true,
        link: request,
      };
    }
    const routeParams = this.router.snapshot.paramMap;
    const storeID = routeParams.get('user') as string;
    return {
      isCustom: false,
      link: storeID,
    };
  }

  @ViewChild('accordion', { static: true }) Accordion?: MatAccordion;

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  selectSize(size: string, $event: { target: any; srcElement: any }) {
    // this.productToBuy.size = size
    // let clickedElement = $event.target || $event.srcElement;
    // if( clickedElement.nodeName === "BUTTON" ) {
    //   let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
    //   // if a Button already has Class: .active
    //   if( isCertainButtonAlreadyActive ) {
    //     isCertainButtonAlreadyActive.classList.remove("active");
    //   }
    //   clickedElement.className += " active";
    // }
  }
  selectQuantity(qty?: number) {
    // this.productToBuy.quantity = Number(qty)
  }

  isZoom = false;

  zoomIn(event: any) {
    return;

    var pre = document.getElementById('preview')!;
    pre.style.visibility = 'visible';

    this.isZoom = true;

    var posX = event.offsetX;
    var posY = event.offsetY;
    pre.style.backgroundPosition = -posX + 'px ' + -posY + 'px';
  }

  zoomOut() {
    var pre = document.getElementById('preview')!;

    pre.style.backgroundPosition = 0 + 'px ' + 0 + 'px';

    this.isZoom = false;
  }

  // quantity(){

  //   return this.productToBuy.quantity ?? "1"
  // }

  adding = false;
  shake = false;
  isMobile() {
    if (isPlatformBrowser(this.platformID)) {
      let height = window.innerHeight;
      let width = window.innerWidth;
      return width < height;
    }
    return false;
  }

  async setProvider() {
    Globals.provider = await Globals.initializeProvider();
  }


  copied = false;
  url = '';
  owner?: string;

  copyURL() {
    this.copied = true;
    this.clipboard.copy(this.url);
  }

  copyWalletURL() {
    this.clipboard.copy(this.owner ?? '');
  }

  addTags(title: string, imgUrl: string, description: string, url: string) {
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:image', content: imgUrl });
    this.metaService.updateTag({ property: 'og:url', content: url });
    this.metaService.updateTag({
      property: 'og:description',
      content: description,
    });
    var newTitle = title;
    if (Globals.storeInfo?.fullName) {
      newTitle += ' - ' + Globals.storeInfo?.fullName ?? '';
    }
    this.titleService.setTitle(newTitle);
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.removeTag("name='robots'");
    this.metaService.removeTag("name='googlebot'");
  }

  formatPrice(price: number, crypto = true) {
    if (!crypto) {
      var priceAsString = new String(
        (price * (this.selectedCurrency()?.rate ?? 1)).toFixed(2)
      );
      // var priceAsString = new String(Number((price * (this.selectedCurrency()?.rate ?? 1)).toFixed(2)).toLocaleString('en'))

      let index = priceAsString.indexOf('.');

      switch (index) {
        case priceAsString.length - 1:
          priceAsString += '00';
          break;
        case priceAsString.length - 2:
          priceAsString += '0';
          break;
        default:
          break;
      }
      return this.numberWithCommas(
        this.getCurrencyForCountry(
          (this.selectedCurrency()?.name ?? 'US') != 'US',
          this.selectedCurrency()
        ) + priceAsString
      );
    } else {
      return price.toString();
    }
  }

  numberWithCommas(x: string) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  getCurrencyForCountry(shouldShowName: boolean, country?: Country) {
    var returnItem = country?.currency_symbol ?? '$';
    if (shouldShowName) returnItem = (country?.name ?? 'US') + ' ' + returnItem;

    return returnItem;
  }

  getProductID() {
    const routeParams = this.router.snapshot.paramMap;
    const id = routeParams.get('product') as string;

    const contractAddress = id.slice(0, 40);

    const token = id.replace(contractAddress, '');
    // Find the product that correspond with the id provided in route.
    return {
      contract: contractAddress,
      token: token,
      full: id,
    };
  }
}
