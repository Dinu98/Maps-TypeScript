import { faker } from '@faker-js/faker';
import { Mappable } from './Map';

//Using 'implements' so TypeScript can point us to the root cause of the error in case of failing to implement the Interface
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
      <h1>I'm an user and my name is ${this.name}</h1> 
      <h2>I'm located at lat ${this.location.lat} and lng ${this.location.lng}</h2>
    </div>
    `;
  }
}
