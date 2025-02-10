import { faker } from '@faker-js/faker';

export class User {
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
