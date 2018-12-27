const routes = require("next-routes");

/*
 *
 * Name       Page      Pattern
 * ----       ----      -----
 * about      about     /about
 * customer   profile   /customer/:id
 * 
 */

// define named routes
module.exports = routes()
  .add("about")
  .add('customer', '/customer/:id', 'profile')
