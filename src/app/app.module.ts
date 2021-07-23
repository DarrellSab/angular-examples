import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import {CounterComponent} from './counter/counter.component';
import { ClothesComponent } from './clothes/clothes.component';
import { FormComponent } from './form/form.component';
import { RegistrationComponent } from './registration/registration.component';
import {UserRegistrationService} from "./user-registration.service";
import {HttpClientModule} from "@angular/common/http";
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditComponent } from './edit/edit.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ClothesComponent,
    FormComponent,
    RegistrationComponent,
    SearchDeleteComponent,
    NavbarComponent,
    HomeComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [UserRegistrationService],
  bootstrap: [AppComponent]
})

export class AppModule {}
