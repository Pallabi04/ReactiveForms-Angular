import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customers/customer.component';
import { CustomerFormComponent } from './customers/customer-form.component';
import { CustomerService } from './customers/customer.service';
import { routing, appRoutingProviders } from './app.route';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerFormComponent
  ],
  providers: [CustomerService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
