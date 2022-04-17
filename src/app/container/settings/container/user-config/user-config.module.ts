import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserConfigRoutingModule } from './user-config-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserConfigComponent } from './components/user-config/user-config.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserListComponent, UserConfigComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    UserConfigRoutingModule,
  ],
})
export class UserConfigModule {}
