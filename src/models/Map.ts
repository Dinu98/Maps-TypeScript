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

  addMarker(user: User | Company): void {
    new google.maps.Marker({
      map: this.map,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }
}
