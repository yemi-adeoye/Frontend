export class UserInfo{
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export class Address{
  street: string;
  city: string;
  suite: string;
  zipcode: string;
  geo: Geo;
}

export class Geo{
  lat: string | number;
  lng: string | number;
}

export class Company{
  name: string;
  catchPhrase: string;
  bs: string;
}
