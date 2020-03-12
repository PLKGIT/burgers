// Dependencies
// =============================================================
var orm = require("../config/orm.js");

// Find all the pets ordering by the lowest price to the highest price.
orm.getBurgers("burger_name", "devoured");

// Find a pet in the pets table by an animal_name of Rachel.
orm.addBurger("burger_name", "devoured");

// Find the buyer with the most pets.
orm.editBurger("burger_name", "devoured");

module.exports = burgers;