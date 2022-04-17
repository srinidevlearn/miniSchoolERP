import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserConfigComponent } from './components/user-config/user-config.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: UserConfigComponent,
    children: [
      { path: 'list', component: UserListComponent },
      { path: 'list/:action', component: UserListComponent },
      {path:'',redirectTo:'list',pathMatch:'full'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserConfigRoutingModule { }
