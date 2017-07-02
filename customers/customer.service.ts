import {Injectable} from '@angular/core';
import  {ICustomer} from './customer';
import  {Http, Response} from  '@angular/http';
import  {Observable} from  'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CustomerService {
	public newCribsSubject = new Subject <any>();
	constructor(private _http : Http){}
	url:string = 'app/customers/customers.json';

	getCustomers() : Observable<ICustomer[]> {
		return this._http.get(this.url)
					.map((response: Response) => <ICustomer[]> response.json())
					.catch(this.errorHandler);
	}
	getCustomerWithId(id: number): Observable<ICustomer> {
        return this.getCustomers()
            .map((customer: ICustomer[]) => customer.find(p => p.customerId === id));
    }
    saveCustomers(data:any) {
    	data.customerId = 7;
  		this.newCribsSubject.next(data);
    }
	errorHandler(error:Response) : any {
		console.error(error);
	}
}