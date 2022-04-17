import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeesComponentConfigRoutingModule } from './fees-component-config-routing.module';
import { FeesComponentConfigComponent } from './components/fees-component-config/fees-component-config.component';
import { FeesdetailsComponent } from './components/feesdetails/feesdetails.component';
import { FeesformsComponent } from './components/feesforms/feesforms.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FeesComponentConfigComponent,
    FeesdetailsComponent,
    FeesformsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FeesComponentConfigRoutingModule
  ]
})
export class FeesComponentConfigModule { }
