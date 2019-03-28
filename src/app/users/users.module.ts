import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule, MatButtonModule, MatDialogModule, MatSelectModule, MatFormFieldModule, MatSnackBarModule} from '@angular/material';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddUserComponent } from './add/add.component';
import { EditUserComponent } from './edit/edit.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ListUsersComponent } from './listUsers/list-users.component';

@NgModule({
  declarations: [
    AddUserComponent,
    ListUsersComponent,
    UserDetailComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  exports:[
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  providers: []
})

export class UserModule { }
