import { Component, OnInit } from '@angular/core';
import { action } from 'src/app/utility/custom-types';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss']
})
export class AddressDetailsComponent implements OnInit {
  action!: action;
  actionState: boolean = true;
  loading: boolean = false;
  addressLists: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
