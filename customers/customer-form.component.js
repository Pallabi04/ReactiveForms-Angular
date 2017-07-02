"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var customer_service_1 = require('./customer.service');
var CustomerFormComponent = (function () {
    function CustomerFormComponent(fb, _custService, route) {
        this.fb = fb;
        this._custService = _custService;
        this.route = route;
        this.showTableUp = false;
    }
    CustomerFormComponent.prototype.save = function (data) {
        this._custService.saveCustomers(data);
        this.customerForm.reset();
    };
    /*showTable(id:number):void {
        this.showTableUp = true;
        this._custService.getCustomerWithId(id).subscribe(
            (customer:ICustomer) => this.onCustomerRetreived(customer) );
    }*/
    CustomerFormComponent.prototype.onCustomerRetreived = function (customer) {
        this.customer = customer;
        this.customerForm.patchValue({
            firstName: this.customer.firstName,
            lastName: this.customer.lastName,
            email: this.customer.email
        });
    };
    CustomerFormComponent.prototype.resetValues = function () {
        this.customerForm.reset();
    };
    CustomerFormComponent.prototype.addNew = function () {
        this.resetValues();
        /*this.customerForm = this.fb.group({
          firstName: [{value: this.customer.firstName, disabled:true}]
    });*/
    };
    CustomerFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            _this._custService.getCustomerWithId(_this.id).subscribe(function (customer) { return _this.onCustomerRetreived(customer); });
        });
        this.customerForm = this.fb.group({
            firstName: '',
            lastName: '',
            email: ''
        });
    };
    CustomerFormComponent = __decorate([
        core_1.Component({
            templateUrl: './app/customers/customer-form.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, customer_service_1.CustomerService, router_1.ActivatedRoute])
    ], CustomerFormComponent);
    return CustomerFormComponent;
}());
exports.CustomerFormComponent = CustomerFormComponent;
//# sourceMappingURL=customer-form.component.js.map