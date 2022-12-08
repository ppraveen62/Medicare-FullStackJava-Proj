export class Cart {
    cartid!: number;
    username!: string;
    productid!: number;
    productcategory!: string;
    productname!: string;
    productprice!: number;

    productimageurl!: string;

    totalprice!: number;

    qty!: number;
    orderno!: string;

    dateofpurchase!: string;
    payment: string="notpaid";
}
