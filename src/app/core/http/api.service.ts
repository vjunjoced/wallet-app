import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  toParams(obj: any) {
    const str = [];

    if (Object.keys(obj).length === 0) {
      return '';
    }

    // tslint:disable-next-line:curly
    for (const p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }

    return '?' + str.join('&');
  }

  getWallets() {
    return this.http.get(environment.urlApi + `wallets`);
  }

  saveWallets(data: any) {
    return this.http.post(environment.urlApi + `wallets`, data);
  }

  updateWallets(id: string, data: any) {
    return this.http.put(environment.urlApi + `wallets/${id}`, data);
  }

  deleteWallets(id: string) {
    return this.http.delete(environment.urlApi + `wallets/${id}`);
  }

  getProducts() {
    return this.http.get(environment.urlApi + `products`);
  }

  getHistory(query = {}) {
    return this.http.get(environment.urlApi + `transactions` + this.toParams(query));
  }

  sendCoins(data: any) {
    return this.http.post(environment.urlApi + `transactions`, data);
  }
}
