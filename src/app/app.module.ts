import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { FormNewItemComponent } from './form-new-item/form-new-item.component';
import { CitiesComponent } from './cities/cities.component';
import { FilterPipe } from './pipe/filter.pipe';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FormNewItemComponent,
    CitiesComponent,
    FilterPipe,
    ContactComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule , AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
