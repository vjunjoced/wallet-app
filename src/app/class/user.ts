export class User {
  id: number;
  name: string;
  surname: string;
  email: string;
  statusKYC: string;
  tier: string;
  currencyCode: string;
  lastBuy: string;
  countryCode: string;
  province: string;
  city: string;
  address: string;
  phoneNumber: string;
  language: string;
  birthDate: string;
  postalCode: string;
  lastPasswordChange: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  tc: boolean;
  createdAt: string;

  languageText: string;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.surname = data.surname;
    this.email = data.email;
    this.statusKYC = data.statusKYC;
    this.tier = data.tier;
    this.currencyCode = data.currencyCode;
    this.lastBuy = data.lastBuy;
    this.countryCode = data.countryCode;
    this.province = data.province;
    this.city = data.city;
    this.address = data.address;
    this.phoneNumber = data.phoneNumber;
    this.language = data.language;
    this.birthDate = data.birthDate;
    this.postalCode = data.postalCode;
    this.lastPasswordChange = data.lastPasswordChange;
    this.emailVerified = data.emailVerified;
    this.phoneVerified = data.phoneVerified;
    this.tc = data.tc;
    this.createdAt = data.createdAt;
  }
}
