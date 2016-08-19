
console.log('Loading function');

exports.handler = function(event, context, callback) {
	var url = JSON.stringify(event.url); // Get the url passed to lambda as a string.
	// TODO: Maybe do some sort of filtering here on the url string.

	var Shariff = require('shariff-backend-node');

	console.log('Getting counts for URL: ' + url);

	Shariff.getCounts(url, true).then(function(counts) {
		console.log('Successfully retrieved counts for URL: ' + url + '. ', counts);
		callback(null, counts);
	}, function(err) {
		console.log('Error retrieving counts for URL: ' + url + '. ', err);
		callback(err);
	});
}