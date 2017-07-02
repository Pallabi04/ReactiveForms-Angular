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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var Subject_1 = require('rxjs/Subject');
var CustomerService = (function () {
    function CustomerService(_http) {
        this._http = _http;
        this.newCribsSubject = new Subject_1.Subject();
        this.url = 'app/customers/customers.json';
    }
    CustomerService.prototype.getCustomers = function () {
        return this._http.get(this.url)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    CustomerService.prototype.getCustomerWithId = function (id) {
        return this.getCustomers()
            .map(function (customer) { return customer.find(function (p) { return p.customerId === id; }); });
    };
    CustomerService.prototype.saveCustomers = function (data) {
        data.customerId = 7;
        this.newCribsSubject.next(data);
    };
    CustomerService.prototype.errorHandler = function (error) {
        console.error(error);
    };
    CustomerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CustomerService);
    return CustomerService;
}());
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map