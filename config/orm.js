// ******************************************************************************************************
// orm.js [Config]
// ******************************************************************************************************

// Dependencies
// =============================================================
var connection = require("./connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}


// ORM
// =============================================================

var tableName = "burgers";

var orm = {

  all: function (tableInput, cb) {
    var qry = "SELECT * FROM " + tableInput + ";";
    connection.query(qry, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  create: function (table, cols, vals,cb) {
    var qry = "INSERT INTO " + table;

      qry += " (";
      qry += cols.toString();
      qry += ") ";
      qry += "VALUES (";
      qry += printQuestionMarks(vals.length);
      qry += ") ";
  
      console.log(qry);
      connection.query(qry, vals, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
  },

  update: function(table, objColVals, condition, cb) {
    var qry = "UPDATE " + table;

    qry += " SET ";
    qry += objToSql(objColVals);
    qry += " WHERE ";
    qry += condition;

    console.log(qry);
    connection.query(qry, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }

};

module.exports = orm;
