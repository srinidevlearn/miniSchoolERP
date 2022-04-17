import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeesComponentConfigComponent } from './components/fees-component-config/fees-component-config.component';
import { FeesdetailsComponent } from './components/feesdetails/feesdetails.component';

const routes: Routes = [{
  path:'',component:FeesComponentConfigComponent,children:[
    { path: 'list', component: FeesdetailsComponent },
    { path: 'list/:action', component: FeesdetailsComponent },
    {path:'',redirectTo:'list',pathMatch:'full'},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeesComponentConfigRoutingModule { }
