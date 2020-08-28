import {  Product } from './product';

export class Transaction {
  id: string;
  quantity: number;
  createdAt: string;
  type: string;
  status: string;
  addressTo: string;
  addressFrom: string;
  product: Product;

  constructor(data) {
    if (data) {
      this.id = data.id;
      this.quantity = data.quantity;
      this.createdAt = data.createdAt;
      this.type = data.type;
      this.status = data.status;
      this.addressTo = data.addressTo;
      this.addressFrom = data.addressFrom;

      if (data.product && typeof data.product === 'object' && data.product.constructor === Object) {
        this.product = new Product(data.product);
      } else {
        this.product = data.Product;
      }
    }
  }
}
