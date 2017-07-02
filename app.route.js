"use strict";
var router_1 = require('@angular/router');
var customer_form_component_1 = require('./customers/customer-form.component');
exports.routes = [
    { path: '', redirectTo: 'customer', pathMatch: 'full' },
    { path: 'customer-form/:id',
        component: customer_form_component_1.CustomerFormComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.route.js.map