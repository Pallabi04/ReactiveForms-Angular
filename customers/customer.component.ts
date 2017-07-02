import { Component,OnInit } from '@angular/core';
import { ICustomer } from './customer';
import  {CustomerService} from './customer.service';

@Component({
    selector: 'my-signup',
    templateUrl: './app/customers/customer.component.html'
})
export class CustomerComponent implements OnInit  {
	constructor(private _custService: CustomerService){

	}
    customer:ICustomer[];

    ngOnInit(): void {
        this._custService.getCustomers()
            .subscribe(
                customer => this.customer = customer)
        
        this._custService.newCribsSubject
            .subscribe(
                data => this.customer = [data, ...this.customer]
    )     
    }
}

