import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgConfigComponent } from './components/org-config/org-config.component';
import { OrgListComponent } from './components/org-list/org-list.component';

const routes: Routes = [
  {
    path: '',
    component: OrgConfigComponent,
    children: [
      { path: 'list', component: OrgListComponent },
      { path: 'list/:action', component: OrgListComponent },
      {path:'',redirectTo:'list',pathMatch:'full'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgConfigRoutingModule { }
