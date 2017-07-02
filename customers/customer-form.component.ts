import { Component,OnInit } from '@angular/core';
import {FormGroup, FormControl,FormBuilder,ReactiveFormsModule,Validators} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { ActivatedRoute } from '@angular/router';
import { ICustomer } from './customer';
import  {CustomerService} from './customer.service';

@Component({
    templateUrl: './app/customers/customer-form.component.html'
})
export class CustomerFormComponent implements OnInit  {
	constructor(private fb:FormBuilder,
				private _custService: CustomerService,
                private route: ActivatedRoute){

	}
    private sub: Subscription;
    customer: any;
    id:number;
    showTableUp:boolean = false;
    customerForm: FormGroup;
    save(data:any):void {
        this._custService.saveCustomers(data);
        this.customerForm.reset();
    }

    /*showTable(id:number):void {
        this.showTableUp = true;
        this._custService.getCustomerWithId(id).subscribe(
            (customer:ICustomer) => this.onCustomerRetreived(customer) );
    }*/
    onCustomerRetreived(customer:ICustomer) : void {
        this.customer = customer;

        this.customerForm.patchValue({
            firstName:this.customer.firstName,
            lastName : this.customer.lastName,
            email : this.customer.email
        });
    }
    resetValues():void {
        this.customerForm.reset();
    }
    addNew():void {
        this.resetValues();
        /*this.customerForm = this.fb.group({
          firstName: [{value: this.customer.firstName, disabled:true}]
    });*/
    }
    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
          this.id = +params['id']; // (+) converts string 'id' to a number
          this._custService.getCustomerWithId(this.id).subscribe(
            (customer:ICustomer) => this.onCustomerRetreived(customer) );
    });

    	this.customerForm = this.fb.group({
    		firstName: '',
    		lastName:'',
    		email:''
    	})

    }
}

