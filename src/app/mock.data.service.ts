import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    return {
      products,
      tenureConfig,
      orgConfig
    };
  }
}

export const tenureConfig = Array(10)
  .fill(0)
  .map((itm, ind) => {
    let tenureNum = 2020 + ind;
    let stFullYear = (): Date =>
      new Date(new Date().setFullYear(tenureNum, 3, 1));
    let endFullYear = (): Date =>
      new Date(new Date().setFullYear(tenureNum + 1, 4, 31));

    let temp = {
      tenurePeriod: `${tenureNum}-${tenureNum + 1}`,
      effectiveStartDate: stFullYear().getTime(),
      effectiveEndDate: endFullYear().getTime(),
    };
    return temp;
  });

export const orgConfig = Array(1000)
  .fill(0)
  .map((itm, ind) => {
    let temp = {
     orgName:'Orgname' +ind+1,
     username:'abc',
     email:'abc@gmail.com',
     password:'abc@gmail.com',
    };
    return temp;
  });

export const products = [
  {
    id: 1,
    name: 'Seaman Cap',
    description:
      'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
    price: '$40',
  },
  {
    id: 2,
    name: 'T-shirt',
    description: 'amet consectetur adipisicing elit.Lorem ipsum dolor sit ',
    price: '$80',
  },
  {
    id: 3,
    name: 'Back Pack',
    description:
      'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
    price: '$30',
  },
];
