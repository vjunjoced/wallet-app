

export class Product {
  id: string;
  name: string;
  symbol: string;
  price: number;
  image: string;

  constructor(data) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.symbol = data.symbol;
      this.price = data.price;
      this.image = data.image;
    }
  }
}