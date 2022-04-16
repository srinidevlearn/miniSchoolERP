import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenureListComponent } from './components/tenure-list/tenure-list.component';
import { TenureConfigComponent } from './tenure-config.component';

const routes: Routes = [
  {
    path: '',
    component: TenureConfigComponent,
    children: [
      { path: 'list', component: TenureListComponent },
      { path: 'list/:action', component: TenureListComponent },
      {path:'',redirectTo:'list',pathMatch:'full'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenureConfigRoutingModule {}
