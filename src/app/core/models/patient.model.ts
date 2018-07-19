import {Address} from './address.model';
import {Visit} from "./visit.model";

export class Patient {
  id: number;
  firstName: string;
  lastName: string;
  pesel: string;
  address: Address;
  visits: Visit[];


  constructor(id?: number, firstName?: string, lastName?: string, pesel?: string, address?: Address, visits?: Visit[]) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.pesel = pesel;
    this.address = address;
    this.visits = visits;
  }
}
