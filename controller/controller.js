//'use strict';

var response = require('../model/res');
var connection = require('../db/conn');

var util = require('util');

const sqlGetById = "SELECT * FROM customer where customer_number = ?";
const sqlUpdate = "UPDATE customer set ? where customer_number = ?";

function getById(id, callback) {
    connection.query(sqlGetById,id, function (error, rows){
        if(error){
            console.log(error);
            return callback(error);
        } 
        callback(null, rows[0]);
    });
};

exports.customers = function(req, res) {
    connection.query('SELECT * FROM customer', function (error, rows){
        if(error){
            console.log('error while select: '+error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.getCustomerById = function(req, res) {
    getById(req.params['id'], function(err, data){
        if(err){
            console.log('error call getById : '+err);
        } 
        response.ok(data, res);
    });

};

exports.updateCustomer = function(req, res) {
    getById(req.body.customer_number, function(err, data){
        if(err || data==null){
            console.log('error call getById : '+err);
            response.ok('error / data kosong', res);
        } else{
            connection.query(sqlUpdate,[req.body, req.body.customer_number], function (error, rows){
                if(error){
                    console.log(error);
                } 
                response.ok(rows, res);
            });
        }
    });

};

exports.insertCustomer= function(req, res) {
    connection.query('insert into customer set ?', req.body , function (error, rows){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};

exports.testpost = function(req, res) {
    response.ok("post masuk : "+util.inspect(req.body), res)
};

