import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenureConfigRoutingModule } from './tenure-config-routing.module';
import { TenureListComponent } from './components/tenure-list/tenure-list.component';
import { TenureConfigComponent } from './tenure-config.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MaterialModule } from 'src/app/material/material.module';
import { TenureformComponent } from './components/tenureform/tenureform.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    
    TenureConfigComponent,
    TenureListComponent,
    TenureformComponent,
  
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    TenureConfigRoutingModule,
    
  ],
  providers: [],
})
export class TenureConfigModule { }
