import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgConfigRoutingModule } from './org-config-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrgConfigComponent } from './components/org-config/org-config.component';
import { OrgConfigformComponent } from './components/org-configform/org-configform.component';
import { OrgConfigDetailsComponent } from './components/org-config-details/org-config-details.component';

@NgModule({
  declarations: [
    OrgConfigComponent,
    OrgConfigformComponent,
    OrgConfigDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    OrgConfigRoutingModule,
  ],
})
export class OrgConfigModule {}
