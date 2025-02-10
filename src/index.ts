import { User } from './models/User';
import { Company } from './models/Company';

const user = new User();
const company = new Company();

console.log(user);
console.log(company);

new google.maps.Map(document.getElementById('map') as HTMLElement, 
  {
    zoom: 1,
    center: {
      lat: 0,
      lng: 0
    }
  }
); 