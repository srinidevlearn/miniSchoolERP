import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterString } from 'src/app/utility/enums/routerStringDeclaration.enum';
import { RoleConfigModule } from './container/role-config/role-config.module';
import { RootSettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path: '',
    component: RootSettingsComponent,
    children: [
      {
        path: RouterString.ROLECONFIG,
        loadChildren: () =>
          import('./container/role-config/role-config.module').then(
            (m) => m.RoleConfigModule
          ),
      },
      {
        path: RouterString.ORGCONFIG,
        loadChildren: () =>
          import('./container/org-config/org-config.module').then(
            (m) => m.OrgConfigModule
          ),
      },
      {
        path: RouterString.TENURECONFIG,
        loadChildren: () =>
          import('./container/tenure-config/tenure-config.module').then(
            (m) => m.TenureConfigModule
          ),
      },

      {
        path: RouterString.FEESCOMPONENTCONFIG,
        loadChildren: () =>
          import(
            './container/fees-component-config/fees-component-config.module'
          ).then((m) => m.FeesComponentConfigModule),
      },
      { path: '', redirectTo: RouterString.TENURECONFIG, pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
