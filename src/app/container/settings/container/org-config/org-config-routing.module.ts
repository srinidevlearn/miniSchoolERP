import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgConfigDetailsComponent } from './components/org-config-details/org-config-details.component';
import { OrgConfigComponent } from './components/org-config/org-config.component';


const routes:Routes=[{
  path:'',component:OrgConfigComponent,children:[
    { path: 'list', component: OrgConfigDetailsComponent },
    { path: 'list/:action', component: OrgConfigDetailsComponent },
    {path:'',redirectTo:'list',pathMatch:'full'},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgConfigRoutingModule { }
