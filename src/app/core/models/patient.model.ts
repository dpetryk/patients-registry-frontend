import {Address} from './address.model';

export class Patient {
  id: number;
  firstName: string;
  lastName: string;
  pesel: string;
  email: string;
  phone: string;
  vip: boolean;
  address: Address;


  constructor(id?: number, firstName?: string, lastName?: string, pesel?: string, email?: string, phone?: string, vip?: boolean, address?: Address) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.pesel = pesel;
    this.email = email;
    this.phone = phone;
    this.vip = vip;
    this.address = address;
  }
}
