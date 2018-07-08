import {Address} from './address.model'

export class Patient{
  id: number;
  firstName: string;
  lastName: string;
  pesel: string;
  address: Address;


  constructor(id?: number, firstName?: string, lastName?: string, pesel?: string, address?: Address) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.pesel = pesel;
    this.address = address;
  }
}
