import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { AddressDetailsComponent } from './components/address-details/address-details.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { AddressConfigComponent } from './components/address-config/address-config.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    AddressDetailsComponent,
    AddressFormComponent,
    AddressConfigComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AddressRoutingModule
  ]
})
export class AddressModule { }
