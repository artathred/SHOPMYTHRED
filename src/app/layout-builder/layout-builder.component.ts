import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  OnDestroy,
  ElementRef,
  ChangeDetectorRef,
  SecurityContext,
  PLATFORM_ID,
} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Order } from '../models/order.model';
import { Globals } from '../globals';
import { Country } from '../models/shipping-country.model';
import { Product } from '../models/product.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Row } from '../models/row.model';
import { AppComponent } from '../app.component';
import { Dict, LoadService } from '../services/load.service';
import { AdminViewComponent } from '../admin-view/admin-view.component';
import { Banner } from '../models/banner.model';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CropperComponent } from '../cropper/cropper.component';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Button } from '../models/button.model';
import { SummernoteOptions } from 'ngx-summernote/lib/summernote-options';
import { MatRadioChange } from '@angular/material/radio';
import { Page } from '../models/page.model';
import { SEO } from '../models/seo.model';
import { MetaTag } from '../models/meta-tag.model';
import { NFT } from '../models/nft.model';
import { Store } from '../models/store.model';
import { Collection } from '../models/collection.model';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-layout-builder',
  templateUrl: './layout-builder.component.html',
  styleUrls: ['./layout-builder.component.css'],
})
export class LayoutBuilderComponent implements OnInit, OnDestroy {
  rootComponent?: AppComponent;
  admin?: AdminViewComponent;
  loaded = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  editingBlock?: number;

  storeInfo: Store;

  items: Dict<{
    nft: NFT;
    collection: Collection;
  }> = {};

  mode = 0;
  codeMode = false;
  pageDisplay?: string;

  animations() {
    return Globals.rowAnimations;
  }

  urlText(showHttps = false) {
    var url = 'https://shopmythred.com/' + this.storeInfo?.username;

    if (this.storeInfo?.customURL?.status == 2) {
      url =
        this.storeInfo?.customURL.fullURL != undefined
          ? this.storeInfo?.customURL.fullURL
          : url;
    }

    return (
      url +
      '/' +
      (this.layoutForm.controls.url.value
        ? this.layoutForm.controls.url.value
        : '')
    );
  }

  changeSetting() {
    this.mode = this.mode == 0 ? 1 : 0;
  }

  radioChange(event: any) {
    let val = event.value;

    this.layoutForm.controls.isFullscreen.setValue(val);
    this.cdr.detectChanges();
  }

  radioChangeLoader(event: any) {
    let val = event.value;

    this.layoutForm.controls.isLoader.setValue(val);
    this.cdr.detectChanges();
  }

  radioChangeBtn(event: any, index: number) {
    let val = event.value;

    this.buttons[index].submit = val;
    this.setRow();
    this.cdr.detectChanges();
  }

  layoutForm = this.fb.group({
    rows: [[]],
    name: [null, [Validators.required]],
    url: [null, [Validators.required]],
    isFullscreen: [null, [Validators.required]],
    isLoader: [null, [Validators.required]],

    seoTitle: [null, [Validators.required]],
    seoDesc: [null, [Validators.required]],
    seoTags: [[], [Validators.required]],

    metaTitle: [null, [Validators.required]],
    metaDesc: [null, [Validators.required]],
    metaURL: [null, [Validators.required]],
    metaPic: [null, [Validators.required]],
  });

  rowForm = this.fb.group({
    title: [null],
    htmlText: [null],
    html: [null],
    backgroundColor: [null],
    corners: ['0'],
    imgs: [[]],
    type: [null],
    grid: [null],
    buttons: [null],
    animations: [null],
  });

  config: SummernoteOptions = {
    placeholder: '',
    tabsize: 2,
    height: 200,
    toolbar: [
      ['misc', ['undo', 'redo']],
      [['bold', 'italic', 'underline', 'clear']],
      ['font', ['bold', 'italic', 'underline', 'strikethrough', 'clear']],
      ['fontsize', ['fontname', 'fontsize', 'color']],
      ['para', ['style', 'ul', 'ol', 'paragraph', 'height']],
      ['insert', ['table', 'hr']],
    ],
    fontNames: this.storeFonts(),
  };

  config2: SummernoteOptions = {
    placeholder: '',
    tabsize: 2,
    height: 200,
    toolbar: [['misc', ['undo', 'redo', 'codeview']]],
    fontNames: this.storeFonts(),
  };

  corners = [
    {
      name: 'Sharp',
      code: '0',
    },
    {
      name: 'Rounded',
      code: 'rounded',
    },
  ];

  title = 'LAUNCHING LAYOUT BUILDER';

  prods: Array<string> = [];

  storeFonts() {
    var fonts: Array<string> = [];

    Globals.fonts.forEach((font) => {
      fonts.push(font);
    });
    return fonts;
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value != '0' && value != '1' && value != '2') {
      this.prods.push(value);
    } else {
      this.prods = [value];
    }
    // Clear the input value
    event.chipInput!.clear();
    this.setRow();
    this.productCtrl.setValue(null);
  }

  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    const tags: Array<string> = this.layoutForm.controls.seoTags.value ?? [];

    tags.push(value);
    this.layoutForm.controls.seoTags.setValue(tags);

    // Clear the input value
    event.chipInput!.clear();
    this.tagCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.prods.indexOf(fruit);

    if (index >= 0) {
      this.prods.splice(index, 1);
    }
    this.setRow();
  }

  removeTag(fruit: string): void {
    const tags = this.layoutForm.controls.seoTags.value ?? [];
    const index = tags.indexOf(fruit);

    if (index >= 0) {
      tags.splice(index, 1);
    }
    this.layoutForm.controls.seoTags.setValue(tags);
  }

  hoverIndex?: number = undefined;

  changeStyle($event: Event, index: number) {
    // this.color = $event.type == 'mouseover' ? 'yellow' : 'red';
    let p = document.getElementById('p-' + index);

    if ($event.type == 'mouseover') {
      this.hoverIndex = index;
      setTimeout(async () => {
        if (p) {
          p.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start',
          });
        } else {
        }
      }, 0);
    } else {
      this.hoverIndex = undefined;
    }
  }

  productName(id: any) {
    if (id === '1') {
      return 'HOTTEST PRODUCTS';
    } else if (id === '0') {
      return 'NEWEST PRODUCTS';
    } else if (id === '2') {
      return 'ALL PRODUCTS';
    }
    return this.items[id]?.nft.name ?? 'NFT';
  }

  allSelected() {
    return this.prods.find((j) => {
      return j == '1' || j == '0' || j == '2';
    });
  }

  selectColor(value: string, isPrimary: boolean) {
    console.log(this.rowForm.controls.backgroundColor);
    if (isPrimary) {
      this.rowForm.controls.backgroundColor.setValue(value ?? '#FFFFFF');
    } else {
      // this.rowForm.controls.backgroundColor.setValue(value ?? "#FFFFFF");
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (
      event.option.value != '0' &&
      event.option.value != '1' &&
      event.option.value != '2'
    ) {
      this.prods.push(event.option.value);
    } else {
      this.prods = [event.option.value];
    }

    this.productInput!.nativeElement.value = '';

    this.setRow();
    this.productCtrl.setValue(null);
  }

  private _filter(value: string): NFT[] {
    const filterValue = ((value as string) ?? '').toLowerCase();

    let nft = Object.values(this.items).find((n) =>
      (n.nft.name ?? '').toLowerCase().includes(filterValue)
    )?.nft;

    var returnArr = new Array<NFT>();

    if (nft) {
      returnArr.push(nft);
    }
    return returnArr;
  }

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LayoutBuilderComponent>,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal,
    private loadService: LoadService,
    private cdr: ChangeDetectorRef,
    public sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformID: Object
  ) {
    this.admin = data.admin;
    this.rootComponent = data.rootComponent;
    this.storeInfo = Globals.storeInfo!;

    // this.spinner.show('loader');
    this.mode = 1;

    for (let i = 1; i < 5; i++) {
      this.grid.push({
        name: String(i),
        row: i,
      });
    }

    this.filteredProducts = this.productCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) =>
        fruit
          ? this._filter(fruit)
          : Object.values(this.items)
              .map((c) => c.nft)
              .slice()
      )
    );
  }

  selectable = true;
  removable = true;
  productCtrl = new FormControl();
  filteredProducts: Observable<NFT[]>;
  tagCtrl = new FormControl();

  @ViewChild('productInput') productInput?: ElementRef<HTMLInputElement>;

  types = [
    {
      name: 'Text Block',
      code: 2,
    },
    {
      name: 'Image Block',
      code: 1,
    },
    {
      name: 'Video Block',
      code: 4,
    },
    {
      name: 'Product Block',
      code: 0,
    },
  ];

  btnTypes = [
    {
      name: 'Pill',
      code: 0,
    },
    {
      name: 'Rounded Corners',
      code: 1,
    },
    {
      name: 'Square Corners',
      code: 2,
    },
    {
      name: 'Circle',
      code: 3,
    },
  ];

  images = new Array<{
    isActive: boolean;
    img: string;
    link: string;
  }>();

  videos = new Array<{
    isActive: boolean;
    link: string;
  }>();

  buttons = new Array<Button>();

  grid: Array<{
    name: string;
    row: number;
  }> = [];

  matchingType(type: number) {
    return this.types.find((t) => {
      return t.code == type;
    });
  }

  ngOnDestroy(): void {
    this.interval = undefined;
    this.aRow.index = undefined;
    this.aRow.row = undefined;
    this.rowForm.reset();
    this.layoutForm.reset();
    this.admin = undefined;
    this.rootComponent = undefined;
  }

  selectedTheme: Dict<any> = {};

  mapItems(arr: Collection[]) {
    let items: Dict<{
      nft: NFT;
      collection: Collection;
    }> = {};
    arr.forEach((c) => {
      Object.values(c.NFTs).forEach((n) => {
        items[`${n.docID}`] = { nft: n, collection: c };
      });
    });
    return items;
  }

  ngOnInit(): void {
    this.selectedTheme = this.selectedThemeFn();

    this.items = this.mapItems(this.admin?.collections ?? []);

    this.layoutForm.controls.rows.setValue(
      Object.assign([], this.data.page?.rows ?? [])
    );

    this.layoutForm.controls.name.setValue(this.data.page?.title);

    this.pageDisplay = this.data.page?.img ?? '';

    this.layoutForm.controls.url.setValue(
      this.data.page?.url ? this.data.page?.url : null
    );

    this.layoutForm.controls.url.setValue(
      this.data.page?.url ? this.data.page?.url : null
    );

    this.layoutForm.controls.seoTitle.setValue(
      this.data.page?.seo?.title
        ? this.data.page?.seo!.title
        : (this.data.page?.title ?? '').trim() != ''
        ? this.storeInfo?.fullName + ' - ' + this.data.page?.title
        : this.storeInfo?.fullName
    );

    this.layoutForm.controls.seoDesc.setValue(
      this.data.page?.seo?.description
        ? this.data.page?.seo!.description
        : this.storeInfo?.bio
    );

    this.layoutForm.controls.metaTitle.setValue(
      this.data.page?.seo?.meta.title
        ? this.data.page?.seo!.meta.title
        : (this.data.page?.title ?? '').trim() != ''
        ? this.storeInfo?.fullName + ' - ' + this.data.page?.title
        : this.storeInfo?.fullName
    );

    this.layoutForm.controls.metaDesc.setValue(
      this.data.page?.seo?.meta.description
        ? this.data.page?.seo!.meta.description
        : this.storeInfo?.bio
    );

    this.layoutForm.controls.seoTags.setValue(
      this.data.page?.seo?.keywords ? this.data.page?.seo!.keywords : []
    );

    this.layoutForm.controls.isFullscreen.setValue(
      this.data.page?.fullscreen ?? false
    );

    this.layoutForm.controls.isLoader.setValue(this.data.page?.loader ?? true);

    setTimeout(() => {
      this.loaded = true;
      // this.spinner.hide('loader');
    }, 500);
    // if (this.storeInfo?.banners.length > 0) {
    //   this.setInterval();
    // }

    this.cdr.detectChanges();
    this.onValueChanges();
  }

  closeDialog() {
    if (this.mode == 0) {
      this.mode = 1;
      return;
    }
    this.interval = undefined;
    this.dialogRef.close();
  }

  removeRows(index: number) {
    (this.layoutForm.controls.rows.value ?? [])?.splice(index, 1);
    this.cdr.detectChanges();
  }

  async edit(index: number) {
    if (this.editingBlock == index) {
      return;
    }
    this.editingBlock = index;

    this.cdr.detectChanges();

    let matchingRow = ((this.layoutForm.controls.rows.value as Array<Row>) ??
      [])[index];

    this.rowForm.controls.title.setValue(matchingRow.text ?? '');

    if (matchingRow.products ?? []) {
      this.prods = matchingRow.products ?? [];
    }

    if (matchingRow.buttons ?? []) {
      this.buttons = matchingRow.buttons ?? [];
    }

    if (matchingRow.smart_products != undefined) {
      this.prods = [String(matchingRow.smart_products)];
    }

    this.rowForm.controls.htmlText.setValue(matchingRow.html ?? '');

    this.rowForm.controls.backgroundColor.setValue(
      matchingRow.backgroundColor ?? '#FFFFFF'
    );
    this.rowForm.controls.corners.setValue(matchingRow.corners ?? '0');

    const promises = (matchingRow.imgs ?? []).map(
      async (image: string, index: number) => {
        let img = {
          isActive: true,
          img: image.toString(),
          link: (matchingRow.imgLinks ?? [])[index]?.toString() ?? '',
        };
        this.images.push(img);
      }
    );
    await Promise.all(promises);

    const promises2 = (matchingRow.vids ?? []).map(async (link: string) => {
      let vid = {
        isActive: true,
        link: link.toString(),
      };
      this.videos.push(vid);
    });
    await Promise.all(promises2);

    let row = matchingRow.grid_row ?? 1;

    let name = String(row);

    this.rowForm.controls.grid.setValue(name);

    this.rowForm.controls.type.setValue(matchingRow.type ?? 0);

    this.rowForm.controls.html.setValue(
      matchingRow.htmlTemplate ?? '<div></div>'
    );

    if (matchingRow.type == 1) {
      let matchGrid = this.grid.find((g) => g.name == name);

      let diff = (matchGrid?.row ?? 1) - this.images.length;
      if (diff > 0) {
        for (let i = 0; i < diff; i++) {
          this.images.push({
            isActive: false,
            img: '',
            link: '',
          });
        }
      }
    }
    if (matchingRow.type == 4) {
      let matchGrid = this.grid.find((g) => g.name == name);

      let diff = (matchGrid?.row ?? 1) - this.videos.length;
      if (diff > 0) {
        for (let i = 0; i < diff; i++) {
          this.videos.push({
            isActive: false,
            link: '',
          });
        }
      }
    }
    if (matchingRow.type == 3) {
      let matchGrid = this.grid.find((g) => g.name == name);

      let diff = (matchGrid?.row ?? 1) - this.buttons.length;

      if (diff > 0) {
        // for (let i = 0; i < diff; i++) {
        //   this.buttons.push(new Button(this.selectedTheme.bg_color, '', this.selectedTheme.color, 0, '', 12));
        // }
      }
    }

    setTimeout(async () => {
      let p = document.getElementById('p-' + index);
      if (p) {
        p.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'start',
        });
      } else {
      }
    }, 100);
  }

  height() {
    let matchGrid = this.grid.find(
      (g) => g.name == this.rowForm.controls.grid.value ?? '1'
    );

    return (
      (document.getElementById('label')?.offsetHeight ?? 0) /
      (matchGrid?.row ?? 1)
    );
  }

  removeImg(img: { isActive: boolean; img: string; link: string }) {
    img.img = '';
    img.isActive = false;

    let index = this.images.indexOf(img);
    this.setRow();
    moveItemInArray(this.images, index, this.images.length - 1);
  }

  fileChangeEvent(
    event: any,
    image: {
      isActive: boolean;
      img: string;
      link: string;
    }
  ): void {
    const modalRef = this.modalService.open(CropperComponent, { size: 'lg' });
    modalRef.componentInstance.imageChangedEvent = event;

    modalRef.componentInstance.width = 2560;
    modalRef.componentInstance.height = 2560;

    let sub = modalRef.dismissed.subscribe((img: string) => {
      sub.unsubscribe();
      if (img != '0') {
        image.img = img;
        image.isActive = true;
      }
      this.setRow();
    });
  }

  vidChangeEvent(
    event: any,
    vid: {
      isActive: boolean;
      link: string;
    }
  ): void {
    vid.link = event.target.value;
    vid.isActive = event.target.value && event.target.value.trim() != '';

    this.setRow();
  }

  canCancel(isBtn = false) {
    if (isBtn) {
      return (
        this.buttons.filter((btn) => {
          return (btn.text ?? '').trim() != '';
        }).length > 1
      );
    }
    return (
      this.images.filter((img) => {
        return img.isActive;
      }).length > 1
    );
  }

  onValueChanges(): void {
    this.rowForm.valueChanges.subscribe((val) => {
      this.setRow();
      this.cdr.detectChanges();
    });
  }

  removeBtn(btn: Button) {
    let index = this.buttons.indexOf(btn);
    this.buttons[index] = new Button(
      this.selectedTheme.bg_color,
      '',
      this.selectedTheme.color,
      0,
      '',
      12
    );
    this.setRow();
    moveItemInArray(this.images, index, this.images.length - 1);
  }

  matchingStyle(style: number) {
    if (style == 0) {
      return 'rounded-pill';
    }
    if (style == 1) {
      return 'rounded';
    }
    if (style == 2) {
      return 'rounded-0';
    }
    return 'rounded-circle';
  }

  changed(event?: any, event2?: any) {
    let type = this.rowForm.controls.type.value ?? event2.value;
    let grid = this.rowForm.controls.grid.value ?? event.value;

    if (type == undefined) {
      type = event2?.value;
    }
    if (grid == undefined) {
      grid = event.value;
    }

    if (type == 1) {
      let matchGrid = this.grid.find((g) => g.name == grid);

      let newSize = matchGrid?.row ?? 1;

      if (newSize > this.images.length) {
        for (let i = 0; i < newSize; i++) {
          if (!this.images[i]) {
            this.images.push({
              isActive: false,
              img: '',
              link: '',
            });
          }
        }
      } else if (newSize < this.images.length) {
        this.images = this.images.slice(0, newSize);
      }
    } else if (type == 4) {
      let matchGrid = this.grid.find((g) => g.name == grid);

      let newSize = matchGrid?.row ?? 1;

      if (newSize > this.videos.length) {
        for (let i = 0; i < newSize; i++) {
          if (!this.videos[i]) {
            this.videos.push({
              isActive: false,
              link: '',
            });
          }
        }
      } else if (newSize < this.videos.length) {
        this.videos = this.videos.slice(0, newSize);
      }
    } else if (type == 3) {
      let matchGrid = this.grid.find((g) => g.name == grid);

      let newSize = matchGrid?.row ?? 1;

      if (newSize > this.buttons.length) {
        for (let i = 0; i < newSize; i++) {
          if (!this.buttons[i]) {
            this.buttons.push(
              new Button(
                this.selectedTheme.bg_color,
                '',
                this.selectedTheme.color,
                0,
                '',
                12
              )
            );
          }
        }
      } else if (newSize < this.buttons.length) {
        this.buttons = this.buttons.slice(0, newSize);
      }
    }
    this.setRow();
  }

  cornerName(c: string) {
    return this.corners.find((x) => x.code == c)?.name ?? 'Sharp';
  }

  editorOptions = {
    theme: 'hc-black',
    language: 'html',
    automaticLayout: true,
    minimap: {
      enabled: false,
    },
    lineNumbers: 'off',
    glyphMargin: false,
    folding: false,
  };

  deleting = false;

  deletePage() {
    this.deleting = true;
    this.loadService.deletePage(this.data.page, (success) => {
      this.dialogRef.close('DELETE');
      this.deleting = false;
    });
  }

  finishedEditing(isDelete: boolean = false) {
    if (this.editingBlock == undefined) {
      return;
    }

    let rows = (this.layoutForm.controls.rows.value as Array<Row>) ?? [];

    switch (isDelete) {
      // @ts-ignore
      case false:
        let name = (this.rowForm.controls.title.value as string) ?? '';
        let type = (this.rowForm.controls.type.value as number) ?? 0;
        let html = (this.rowForm.controls.htmlText.value ?? '').replace(
          /style="/g,
          'style="overflow-wrap: break-word;'
        );
        let backgroundColor =
          this.rowForm.controls.backgroundColor.value ?? '#FFFFFF';
        console.log(backgroundColor);
        let corners = this.rowForm.controls.corners.value ?? '0';

        let htmlTemplate = this.rowForm.controls.html.value ?? '';

        let imgs = (this.images ?? [])
          .filter((i) => i.img != undefined && i.img.trim() != '')
          .map((i) => i.img);
        let vids = (this.videos ?? [])
          .filter((i) => i.link != undefined && i.link.trim() != '')
          .map((i) => i.link);
        let btns = this.buttons ?? [];
        let imgLinks = (this.images ?? [])
          .filter((i) => i.link != undefined && i.link.trim() != '')
          .map((i) => i.link);

        let products = this.prods ?? [];

        if (
          !(
            (type == 0 && products.length == 0) ||
            (type == 1 && imgs.length == 0) ||
            (type == 4 && vids.length == 0) ||
            (type == 2 && html.trim() == '') ||
            (type == 7 && htmlTemplate.trim() == '')
          )
        ) {
          let grid = (this.rowForm.controls.grid.value as string) ?? '1';

          let matchGrid = this.grid.find((g) => g.name == grid)?.row;

          let row = new Row(
            name,
            Object.assign([], products),
            undefined,
            type,
            Object.assign([], imgs),
            matchGrid,
            html,
            backgroundColor,
            corners,
            '',
            imgLinks,
            btns,
            vids,
            htmlTemplate
          );

          if (
            products.find((i) => i == '0') ||
            products.find((i) => i == '1') ||
            products.find((i) => i == '2')
          ) {
            row.products = [];
            row.smart_products = parseInt(products[0]);
          }

          if (this.editingBlock != undefined) {
            rows[this.editingBlock] = row;
          }

          this.layoutForm.controls.rows.setValue(rows);
          break;
        }
      default:
        if (rows[this.editingBlock] != undefined)
          this.removeRows(this.editingBlock);
    }

    this.rowForm.reset();
    this.prods = [];
    this.images = [];
    this.videos = [];
    this.buttons = [];
    this.editingBlock = undefined;
    this.aRow.row = undefined;
    this.aRow.index = undefined;
  }

  aRow: {
    row?: Row;
    index?: number;
  } = {
    row: undefined,
    index: undefined,
  };

  setRow(gridVal?: string) {
    let name = (this.rowForm.controls.title.value as string) ?? '';
    let type = (this.rowForm.controls.type.value as number) ?? 0;
    let html = (this.rowForm.controls.htmlText.value ?? '').replace(
      /style="/g,
      'style="overflow-wrap: break-word;'
    );
    let backgroundColor =
      this.rowForm.controls.backgroundColor.value ?? '#FFFFFF';
    let corners = this.rowForm.controls.corners.value ?? '0';

    console.log(backgroundColor);
    let imgs = (this.images ?? [])
      .filter((i) => i.img != undefined && i.img.trim() != '')
      .map((i) => i.img);
    let vids = (this.videos ?? [])
      .filter((i) => i.link != undefined && i.link.trim() != '')
      .map((i) => i.link);
    let imgLinks = (this.images ?? [])
      .filter((i) => i.link != undefined && i.link.trim() != '')
      .map((i) => i.link);
    let htmlTemplate = this.rowForm.controls.html.value ?? '';

    let btns = this.buttons ?? [];

    let products = this.prods ?? [];

    let grid = gridVal ?? (this.rowForm.controls.grid.value as string) ?? '1';

    let matchGrid = this.grid.find((g) => g.name == grid)?.row;

    let row = new Row(
      name,
      Object.assign([], products),
      undefined,
      type,
      Object.assign([], imgs),
      matchGrid,
      html,
      backgroundColor,
      corners,
      '',
      imgLinks,
      btns,
      vids,
      htmlTemplate
    );

    if (
      products.find((i) => i == '0') ||
      products.find((i) => i == '1') ||
      products.find((i) => i == '2')
    ) {
      row.products = [];
      row.smart_products = parseInt(products[0]);
    }

    this.aRow.row = row;
    this.aRow.index = this.editingBlock;
  }

  resizeIframe(index: number) {
    let obj = document.getElementById('frame' + index) as HTMLIFrameElement;
    let c = document.getElementById('c' + index) as HTMLElement;

    if (obj) {
      c.style.height =
        (obj.contentWindow?.document.body.scrollHeight ?? 0) + 'px';
    }
  }

  addBlock() {
    let rows = (this.layoutForm.controls.rows.value as Array<Row>) ?? [];
    rows.push(
      new Row(
        '',
        [],
        undefined,
        0,
        [],
        1,
        '',
        '#FFFFFF',
        '0',
        '',
        [],
        [],
        [],
        ''
      )
    );
    this.layoutForm.controls.rows.setValue(rows);

    this.edit(rows.length - 1);
  }

  selectedIndicator() {
    if (!Globals.storeInfo) {
      return {
        name: '',
        color: '',
        bg_color: '',
      };
    }
    let co = this.storeInfo?.loading?.color;
    let bco = this.storeInfo?.loading?.bg_color;
    let name = this.storeInfo?.loading?.name;

    let color = 'rgba(' + co[0] + ',' + co[1] + ',' + co[2] + ',' + co[3] + ')';

    let bg_color =
      'rgba(' + bco[0] + ',' + bco[1] + ',' + bco[2] + ',' + bco[3] + ')';

    var indicator: Dict<string> = {
      name: name,
      color: color,
      bg_color: bg_color,
    };
    return indicator;
  }

  async getBase64ImageFromUrl(imageUrl: string) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', imageUrl, true);
      xhr.responseType = 'arraybuffer';

      xhr.onerror = function (e) {
        alert('error');
      };

      xhr.onload = function (e) {
        if (this.status == 200) {
          var uInt8Array = new Uint8Array(this.response);
          var i = uInt8Array.length;
          var biStr = new Array(i);
          while (i--) {
            biStr[i] = String.fromCharCode(uInt8Array[i]);
          }
          var data = biStr.join('');
          var base64 = window.btoa(data);

          xhr.onerror = function (e) {
            reject(e);
          };

          resolve('data:image/png;base64,' + base64);
        }
      };
      xhr.send();
    });
  }

  saving = false;

  async close() {
    this.saving = true;

    if (this.mode == 0) {
      try {
        this.finishedEditing();

        let rowInfo = (this.layoutForm.controls.rows.value as Array<Row>) ?? [];

        const promises = rowInfo.map(async (r: Row) => {
          if (r.type == 1) {
            let promises2 = (r.imgs ?? []).map(
              async (i: string, index: number) => {
                if (
                  !this.loadService.isBase64(
                    i?.replace(/^[\w\d;:\/]+base64\,/g, '')
                  )
                ) {
                  var im = (await this.getBase64ImageFromUrl(
                    i?.toString()
                  )) as any;
                  (r.imgs ?? [])[index] = im;
                }
              }
            );
            await Promise.all(promises2);
          }
        });

        await Promise.all(promises);

        this.layoutForm.controls.rows.setValue(rowInfo);

        this.cdr.detectChanges();

        setTimeout(() => {
          let element = document.querySelector('#capture') as HTMLElement;

          html2canvas
            .default(element, { allowTaint: true, useCORS: true })
            .then((canvas) => {
              let img = canvas.toDataURL('image/jpeg', 0.8);

              this.layoutForm.controls.rows.setValue(
                Object.assign([], rowInfo ?? [])
              );

              this.pageDisplay = img;

              this.mode = 1;
              this.saving = false;
            });
        }, 3000);
      } catch (error) {
        this.saving = false;
      }
    } else if (this.mode == 1) {
      try {
        let name = (this.layoutForm.controls.name.value as string) ?? 'Page';
        let url = (this.layoutForm.controls.url.value as string) ?? 'new-page';

        let fullscreen =
          (this.layoutForm.controls.isFullscreen.value as boolean) ?? false;
        let loader =
          (this.layoutForm.controls.isLoader.value as boolean) ?? true;

        let seoTitle =
          (this.layoutForm.controls.seoTitle.value as string) ??
          this.storeInfo?.fullName ??
          '';
        let seoDesc =
          (this.layoutForm.controls.seoDesc.value as string) ??
          this.storeInfo?.bio ??
          '';
        let seoTags =
          (this.layoutForm.controls.seoTags.value as Array<string>) ?? [];

        let metaTitle =
          (this.layoutForm.controls.metaTitle.value as string) ??
          this.storeInfo?.fullName ??
          '';
        let metaDesc =
          (this.layoutForm.controls.metaDesc.value as string) ??
          this.storeInfo?.bio ??
          '';
        let metaURL = (this.layoutForm.controls.metaURL.value as string) ?? '';
        let metaPic = this.layoutForm.controls.metaPic.value as string;

        let meta = new MetaTag(metaTitle, metaDesc, metaURL, metaPic);

        let seo = new SEO(seoTitle, seoDesc, meta, seoTags, false);

        let page = new Page(
          name.toLowerCase(),
          name,
          this.pageDisplay ?? '',
          this.data.page?.id ?? undefined,
          url,
          this.layoutForm.controls.rows.value ?? [],
          fullscreen,
          loader,
          seo,
          this.data.page?.bigcId
        );

        this.loadService.addLayout(
          page,
          (success) => {
            this.saving = false;
            if (success)
              this.dialogRef.close({
                page: page,
              });
          },
          this.storeInfo?.uid
        );
      } catch (error) {
        console.log(error);
        this.saving = false;
      }
    }
  }

  toast(m: string) {
    this.loadService.openSnackBar(m);
  }

  drop(event: any, isImage = false, isButton = false) {
    if (isImage) {
      moveItemInArray(this.images, event.previousIndex, event.currentIndex);
      return;
    }
    if (isButton) {
      moveItemInArray(this.buttons, event.previousIndex, event.currentIndex);
      return;
    }
    let arr = this.layoutForm.controls.rows.value;
    moveItemInArray(arr, event.previousIndex, event.currentIndex);
    this.layoutForm.controls.rows.setValue(arr);
  }

  formatPrice(price: number, short = false, order?: Order) {
    var priceAsString = new String(
      Number(
        (price * (Globals.selectedCurrency?.rate ?? 1)).toFixed(2)
      ).toLocaleString('en')
    );
    if (!short) {
      priceAsString = new String(
        Number((price * (Globals.selectedCurrency?.rate ?? 1)).toFixed(2))
      );
    }
    let index = priceAsString.indexOf('.');

    switch (index) {
      case priceAsString.length - 1:
        priceAsString += '00';
        break;
      case -1:
        priceAsString += '.00';
        break;
      case priceAsString.length - 2:
        priceAsString += '0';
        break;
      default:
        break;
    }
    return (
      this.getCurrencyForCountry(
        Globals.selectedCurrency?.name != 'US',
        Globals.selectedCurrency
      ) + priceAsString
    );
  }

  autoCoupon(product: Product) {
    var autoCoupon = this.storeInfo?.coupons
      ?.filter((coupon) => {
        return coupon.products.includes(product.productID) && coupon.auto;
      })
      .sort(function (a, b) {
        if (a.amt < b.amt) {
          return 1;
        }
        if (a.amt > b.amt) {
          return -1;
        }
        return 0;
      })[0];
    return autoCoupon;
  }

  mainPrice(product: Product) {
    let coupon = this.autoCoupon(product);
    if (coupon) {
      if (coupon.style == 0) {
        return (
          (product.price ?? 0) / 100 - ((product.price ?? 0) / 100) * coupon.amt
        );
      } else if (coupon.style == 1) {
        return (product.price ?? 0) / 100 - (coupon.amt ?? 0) * 100;
      }
    }
    return (product.price ?? 0) / 100;
  }

  getCurrencyForCountry(shouldShowName: boolean, country?: Country) {
    var returnItem = country?.currency_symbol ?? '$';
    if (shouldShowName) returnItem = (country?.name ?? '') + ' ' + returnItem;

    return returnItem;
  }

  fontSize(row: Row) {
    if (this.rootComponent?.isMobile() || (row.grid_row ?? 1) >= 2) {
      return 12;
    }
    return (0.5 / (row.grid_row ?? 1)) * 100;
  }

  titleFontSize(row: Row) {
    if (this.rootComponent?.isMobile() || (row.grid_row ?? 1) >= 2) {
      return 12;
    }
    return (0.3 / (row.grid_row ?? 1)) * 100;
  }

  // widthM(){
  //   return (1680 / window.innerWidth) * window.innerWidth

  // }

  // heightM(){
  //   return (939 / window.innerHeight) * window.innerHeight
  // }

  // products(smartProducts?: number, products?: Array<String>) {
  //   if (smartProducts !== undefined) {
  //     if (smartProducts == 0) {
  //       return this.newArrivalProducts();
  //     } else if (smartProducts == 1) {
  //       return this.featuredProducts();
  //     }
  //   }
  //   var prod = Array<NFT>();
  //   products?.forEach((p) => {
  //     let pro = Object.values(
  //       this?.collections?.find((pr) => {
  //         let k = Object.values(pr.NFTs)?.find((n) => {
  //           return n.docID == p;
  //         });
  //         return k;
  //       })?.NFTs ?? {}
  //     )?.find((n) => {
  //       return n.docID == p;
  //     });
  //     if (pro) {
  //       prod.push(pro);
  //     }
  //   });
  //   return prod;
  // }

  selectedThemeFn() {
    let co = this.storeInfo?.colorStyle?.btn_color;
    let bco = this.storeInfo?.colorStyle?.bg_color;
    let name = this.storeInfo?.colorStyle?.name;

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

  @ViewChild('carousel', { read: DragScrollComponent })
  ds?: DragScrollComponent;

  moveLeft() {
    this.ds!.moveLeft();
  }

  moveRight() {
    if (this.ds?.currIndex == (this.storeInfo?.banners?.length ?? 0) - 1) {
      this.ds?.moveTo(0);
    } else {
      this.ds?.moveRight();
    }
  }

  didMove() {
    // this.selectedColor = this.selectedTemplate?.colors[this.ds?.currIndex ?? 0]
  }

  interval: any;

  setInterval() {
    if (this.interval) {
      return;
    }
    if (this.storeInfo?.bannerStyle == 0) {
      this.interval = setInterval(() => {
        this.moveRight();
      }, 3000);
    } else {
      this.initScroll();
    }
  }

  initScroll() {
    this.interval = 0;
    let outer = document.querySelector('#outer') as HTMLElement;

    if (outer) {
      let content = outer.querySelector('#content') as HTMLElement;

      this.repeatContent(content, outer.offsetWidth);

      let el = outer.querySelector('#loop');
      if (el) {
        el.innerHTML = el.innerHTML + el.innerHTML;
      }
    }
  }

  repeatContent(el: HTMLElement, till: number) {
    let html = el.innerHTML;
    let counter = 0; // prevents infinite loop

    while (el.offsetWidth < till && counter < 100) {
      el.innerHTML += html;
      counter += 1;
    }
  }

  arrLength() {
    if (this.storeInfo?.banners.length == 0) {
      return [];
    }

    return Array(12 / this.storeInfo?.banners.length).fill(0);
  }

  // newArrivalProducts() {
  //   return Object.values((this?.collections ?? [])[0].NFTs)
  //     ?.sort(function (a, b) {
  //       // if (a.timestamp > b.timestamp) {
  //       //   return -1;
  //       // }
  //       // if (a.timestamp < b.timestamp) {
  //       //   return 1;
  //       // }
  //       return 1;
  //     })
  //     .slice(0, 4);
  // }

  // featuredProducts() {
  //   return Object.values((this?.collections ?? [])[0].NFTs)
  //     ?.sort(function (a, b) {
  //       // if (a.likes > b.likes) {
  //       //   return -1;
  //       // }
  //       // if (a.likes < b.likes) {
  //       //   return 1;
  //       // }
  //       return 1;
  //     })
  //     .slice(0, 4);
  // }

  // allProducts() {
  //   return this.storeInfo?.collections;
  // }
}
