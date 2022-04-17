import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterString } from '../utility/enums/routerStringDeclaration.enum';
import { RootContainerComponents } from './container.component';

const routes: Routes = [
  {
    path: '',
    component: RootContainerComponents,
    children: [
      {
        path: RouterString.DASHBOARD,
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: RouterString.STUDENTS,
        loadChildren: () =>
          import('./students/students.module').then((m) => m.StudentsModule),
      },
      {
        path: RouterString.FEES,
        loadChildren: () =>
          import('./fees/fees.module').then((m) => m.FeesModule),
      },
      {
        path: RouterString.PARENTS,
        loadChildren: () =>
          import('./parents/parents.module').then((m) => m.ParentsModule),
      },
      {
        path: RouterString.SIBILINGS,
        loadChildren: () =>
          import('./siblings/siblings.module').then((m) => m.SiblingsModule),
      },
      {
        path: RouterString.SETTINGS,
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: RouterString.ADDRESS,
        loadChildren: () =>
          import('./address/address.module').then((m) => m.AddressModule),
      },
      {
        path: RouterString.BUSROUTE,
        loadChildren: () =>
          import('./bus-route/bus-route.module').then((m) => m.BusRouteModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContainerRoutingModule {}
