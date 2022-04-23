import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressConfigComponent } from './components/address-config/address-config.component';
import { AddressDetailsComponent } from './components/address-details/address-details.component';

const routes: Routes = [
  {
    path: '',
    component: AddressConfigComponent,
    children: [
      { path: 'list', component: AddressDetailsComponent },
      { path: 'list/:action', component: AddressDetailsComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddressRoutingModule {}
