/*
 * models.js
 *
 * Input: model, e.g. 'rethinkdb'
 */
var path = require('../libraries/path');
var paths = require('../paths/paths'); 
// Bluebird has the incredibly useful functionality of enabling you to ‘promisfy’ modules which do not return promises. 
// For example, to promisfy the fs module, simply require bluebird and a promisified version of fs.
var Promise = require(path.join(paths.libraries, '/bluebird.js'));
//var fs = Promise.promisifyAll(require(path.join(paths.libraries, '/fs.js')));

module.exports = function(model) {
  console.log('Models - called');
  console.log('Models - model: ', model);
  var _Models = {};
  // Create a new Promise
  return new Promise(function(resolve) {
	  console.log('Models - inside Promise');
    var model_file = path.resolve(__dirname, model+'.js');
 	  console.log('Models - model_file: ', model_file);
		_Models.model = require(model_file);
		console.log('Models - resolve');	
		resolve(_Models); 
  });// eof Promise
}
