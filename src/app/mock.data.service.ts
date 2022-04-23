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
      orgConfig,
      feesComponentConfig,
      organizationConfig,
    };
  }
}
export const organizationConfig = Array(1000)
  .fill(0)
  .map((i) => {
    let orgFormModel: any = {
      name: 'test org',
      category: 'school',
      address: 'test',
      city: 'Chennai',
      state: 'TN',
      country: 'IN',
      pincode: '600119',
    };
    return orgFormModel;
  });
export const feesComponentConfig = Array(1000)
  .fill(0)
  .map((itm, ind) => {
    let tenureNum = 2020 + ind;
    let temp = {
      tenurePeriod: `${tenureNum}-${tenureNum + 1}`,
      term1: 20000,
      term2: 10000,
      term3: 5000,
      books: 2500,
      uniform: 1000,
      shoes: 500,
    };
    return temp;
  });

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

export const tenure = Array(10)
  .fill(0)
  .map((itm, ind) => {
    let tenureNum = 2020 + ind;
    return `${tenureNum}-${tenureNum + 1}`;
  });

export const orgConfig = Array(1000)
  .fill(0)
  .map((itm, ind) => {
    let temp = {
      orgName: 'Orgname' + ind + 1,
      username: 'abc',
      email: 'abc@gmail.com',
      password: 'abc@gmail.com',
    };
    return temp;
  });
let printAddressDist  = (ind:number) => {
  if (ind % 2 == 0) return 'Madurai';
  if (ind % 3 == 0) return 'Erode';
  if (ind % 1 == 0) return 'Theni';
  if (ind % 5 == 0) return 'Trichy';
  return 'Chennai'
};
export const address = new Array(100).fill(0).map((i, ind) => {
  return {
    addmissionNo: ind + 1,
    studentName: `Student ${ind + 1}`,
    printAddressType: ind % 2 == 0 ? 'Residents' : 'Permanent',
    printAddressAdd1: `Loreum ipsum building\door no\Flat no`,
    printAddressAdd2: `Loreum ipsum street info`,
    printAddressAdd3: `landmark optional`,
    printAddressAdd4: `city name`,
    printAddressDist:printAddressDist(ind),
    printAddressAdd5: 'Tamil Nadu',
     printAddressPstlCd:600091
  };
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
