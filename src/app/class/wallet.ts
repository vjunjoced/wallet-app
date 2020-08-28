import { Product } from './product';

export class Wallet {
  id: string;
  name: string;
  quantity: number;
  createdAt: string;
  address: string;
  product: Product;

  constructor(data) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.quantity = data.quantity;
      this.createdAt = data.createdAt;
      this.address = data.address;

      if (data.product && typeof data.product === 'object' && data.product.constructor === Object) {
        this.product = new Product(data.product);
      } else {
        this.product = data.Product;
      }
    }
  }
}