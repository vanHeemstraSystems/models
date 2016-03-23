/*
 * Models
 * 
 * param: database (e.g. 'rethinkdb')
 */
module.exports = function(database) {
  var database = toLowerCase(database);
  var _Models = {};
  var path = require('../libraries/path');
  var paths = require('../paths/paths');
  config = require(path.join(paths.configurations, '/configurations.js'))(database);
  var common = config.common,
  server_prefix = common.server_prefix || 'PREFIX';
  console.log(server_prefix + " - Models database required.");
  _Models.database = require('./' + database + '.js');
  return _Models;
};//does not call itself
