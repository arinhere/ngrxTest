import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './users/add/add.component';
import { EditUserComponent } from './users/edit/edit.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { ListUsersComponent } from './users/listUsers/list-users.component';

const routes: Routes = [
  {path: 'user/add', component: AddUserComponent},
  {path: 'user/list', component: ListUsersComponent},
  {path: 'user/:id/edit', component: AddUserComponent},
  {path: '', component: ListUsersComponent},
  {path: '**', component: ListUsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
