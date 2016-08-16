

'use strict';
console.log('Loading function');

exports.handler = function(event, context, callback) {
	var url = JSON.stringify(event.url); // Get the url passed to lambda as a string.
	// TODO: Maybe do some sort of filtering here on the url string.

	var Shariff = require('shariff-backend-node');

	Shariff.getCounts(url.then(function(counts) {callback(null, 'Success, counts:' + counts);}, function(err) {callback(err);});


	callback(null, "Success"); // Indicates success with information returned to the caller.
}