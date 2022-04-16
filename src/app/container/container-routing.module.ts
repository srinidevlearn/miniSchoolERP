import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootContainerComponents } from './container.component';

const routes: Routes = [
  {
    path: '',
    component: RootContainerComponents,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'students',
        loadChildren: () =>
          import('./students/students.module').then((m) => m.StudentsModule),
      },
      {
        path: 'fees',
        loadChildren: () =>
          import('./fees/fees.module').then((m) => m.FeesModule),
      },
      {
        path: 'parents',
        loadChildren: () =>
          import('./parents/parents.module').then((m) => m.ParentsModule),
      },
      {
        path: 'siblings',
        loadChildren: () =>
          import('./siblings/siblings.module').then((m) => m.SiblingsModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: 'address',
        loadChildren: () =>
          import('./address/address.module').then((m) => m.AddressModule),
      },
      {
        path: 'busRoute',
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
