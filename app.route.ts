import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './customers/customer.component';
import {CustomerFormComponent} from './customers/customer-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'customer-form/:id', 
  component: CustomerFormComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);