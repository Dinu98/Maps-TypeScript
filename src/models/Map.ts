import { User } from './User';
import { Company } from './Company';

export class Map {
  private map: google.maps.Map;

  constructor(divId: string) {
    this.map = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.map,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.map,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      },
    });
  }
}
