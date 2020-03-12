// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("./connection.js");

// ORM
// =============================================================

var tableName = "burgers";

var orm = {

  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  getBurgers: function(callback) {
    var qry = "SELECT * FROM " + tableName;

    connection.query(qry, function(err, result) {

      callback(result);

    });
  },

  addBurger: function(burger, callback) {
    var qry = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";
    connection.query(qry, [
      burger.burger_name, burger.devoured
    ], function(err, result) {

      callback(result);

    });
  },

  editBurger: function(burger, callback) {
    var qry = "UPDATE " + tableName + " SET devoured=? WHERE id=?";

    connection.query(qry, [
      burger.devoured, burger.id
    ], function(err, result) {

      callback(result);

    });
  }

};

module.exports = orm;
