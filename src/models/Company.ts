import { faker } from '@faker-js/faker';

export class Company {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
      <h1>I'm a company named ${this.name}</h1> 
      <h2>I'm located at lat ${this.location.lat} and lng ${this.location.lng}</h2>
      <h3>My catchPhrase is ${this.catchPhrase}</h3>
    </div>
    `;
  }
}
