import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgConfigRoutingModule } from './org-config-routing.module';
import { OrgListComponent } from './components/org-list/org-list.component';
import { OrgConfigComponent } from './components/org-config/org-config.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [OrgListComponent, OrgConfigComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    OrgConfigRoutingModule,
  ],
})
export class OrgConfigModule {}
