export class Address{
  id: number;
  city: string;
  street: string;
  postal: string;
  house: string;
  apartment: number;


  constructor(id?: number, city?: string, street?: string, postal?: string, house?: string, apartment?: number) {
    this.id = id;
    this.city = city;
    this.street = street;
    this.postal = postal;
    this.house = house;
    this.apartment = apartment;
  }
}
