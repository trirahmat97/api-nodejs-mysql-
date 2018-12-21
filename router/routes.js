'use strict';

module.exports = function(app) {
    var todoList = require('../controller/controller');

    app.route('/')
        .get(todoList.index);

    /* app.route('/customers')
        .get(todoList.customers);

    app.route('/test').post(todoList.testpost);
    app.route('/customer').post(todoList.insertCustomer);
    app.route('/customer/:id').get(todoList.getCustomerById);
    app.route('/customer').put(todoList.updateCustomer); */
};