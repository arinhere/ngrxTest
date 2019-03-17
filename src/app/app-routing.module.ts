import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { AddProductComponent } from './products/add/add.component';
import { ListProductsComponent } from './products/list-products/list-products.component';

const routes: Routes = [
  {path: '', component: AuthenticationComponent},
  {path: 'products/add', component: AddProductComponent},
  {path: 'products/list', component: ListProductsComponent},
  {path: '**', component: AuthenticationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
