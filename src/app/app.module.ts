import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestService } from './core/services/test.services';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceInterceptor } from './core/interceptor/service.interceptor';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule, MatButtonModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddProductComponent } from './products/add/add.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { ProductService } from './core/services/products.service';
import { RouterModule } from '@angular/router';

const appRoutes=[
  {path: '', component: AuthenticationComponent},
  {path: 'products/add', component: AddProductComponent},
  {path: 'products/list', component: ListProductsComponent},
  {path: '**', component: AuthenticationComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ListProductsComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    StoreModule.forRoot({}),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    TestService, ProductService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
