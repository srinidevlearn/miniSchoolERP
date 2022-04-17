import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { RootSettingsComponent } from './settings.component';
import { TenureConfigModule } from './container/tenure-config/tenure-config.module';
import { RoleConfigModule } from './container/role-config/role-config.module';
import { FeesComponentConfigModule } from './container/fees-component-config/fees-component-config.module';
import { UserConfigModule } from './container/user-config/user-config.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrgConfigModule } from './container/org-config/org-config.module';
import { ClassBasedFeesConfigModule } from './container/class-based-fees-config/class-based-fees-config.module';

@NgModule({
  declarations: [RootSettingsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SettingsRoutingModule,
    SharedModule,
    TenureConfigModule,
    RoleConfigModule,
    FeesComponentConfigModule,
    UserConfigModule,
    ClassBasedFeesConfigModule,
    OrgConfigModule
  ]
})
export class SettingsModule { }
