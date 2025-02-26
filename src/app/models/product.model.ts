export class Product {
  uid: string;
  picID: string;
  description: string;
  productID: string;
  timestamp: Date;
  timestampDiff: string;
  blurred: boolean;
  price: number;
  name: string;
  templateColor: string;
  likes: number;
  liked: boolean;
  //designImage: Data!
  comments: number;
  isAvailable: boolean;
  isPublic: boolean;
  productType: string;
  displaySide: string;
  supportedSides: Array<string>;
  url: URL;
  images: Array<{
    index: number;
    img: URL;
  }> = [];
  custom: boolean = false;

  getUrl(downloadBack: boolean) {
    if (this.uid) {
      if (downloadBack) {
        return (
          'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Users%2F' +
          this.uid +
          '%2FProducts%2F' +
          this.productID +
          '%2FBACK_' +
          this.productID +
          '.png?alt=media'
        );
      }
      return (
        'https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Users%2F' +
        this.uid +
        '%2FProducts%2F' +
        this.productID +
        '%2F' +
        this.productID +
        '.png?alt=media'
      );
    }
    return undefined;
  }

  constructor(
    uid?: string,
    picID?: string,
    description?: string,
    productID?: string,
    timestamp?: Date,
    timestampDiff?: string,
    blurred?: boolean,
    price?: number,
    name?: string,
    templateColor?: string,
    likes?: number,
    liked?: boolean,
    comments?: number,
    isAvailable?: boolean,
    isPublic?: boolean,
    productType?: string,
    displaySide?: string,
    supportedSides?: Array<string>,
    url?: string,
    images?: Array<{
      index: number;
      img: string;
    }>,
    custom?: boolean
  ) {
    this.uid = uid ?? '';
    this.picID = picID ?? '';
    this.description = description ?? '';
    this.productID = productID ?? '';
    this.timestamp = timestamp ?? new Date();
    this.timestampDiff = timestampDiff ?? '';
    this.blurred = blurred ?? false;
    this.price = price ?? 0;
    this.name = name ?? '';
    this.templateColor = templateColor ?? '';
    this.likes = likes ?? 0;
    this.liked = liked ?? false;
    this.comments = comments ?? 0;
    this.isAvailable = isAvailable ?? false;
    this.isPublic = isPublic ?? false;
    this.productType = productType ?? '';
    this.displaySide = displaySide ?? '';
    this.supportedSides = supportedSides ?? [];
    this.url = new URL(url ?? 'https://shopmythred.com');
    this.custom = custom ?? false;

    images?.forEach((image) => {
      this.images.push({
        img: new URL(image.img),
        index: image.index,
      });
    });
  }
}
