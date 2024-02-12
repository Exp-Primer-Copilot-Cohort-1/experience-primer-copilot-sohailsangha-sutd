// Create web server 
// using node.js and express.js
// and handlebars.js
// to display comments from a json file

// require the express.js module
var express = require('express');
// create an instance of express.js
var app = express();
// require the file system module
var fs = require('fs');
// require the handlebars.js module
var handlebars = require('express-handlebars');
// set the view engine to handlebars
app.set('view engine', 'handlebars');
// set the layout to main
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
// set the port to 3000
app.set('port', process.env.PORT || 3000);

// create a route to the home page
app.get('/', function(req, res) {
	// read the comments.json file
	fs.readFile('comments.json', function(err, data) {
		// parse the data
		var comments = JSON.parse(data);
		// render the home page
		res.render('home', {comments: comments});
	});
});

// listen for requests on port 3000
app.listen(app.get('port'), function() {
	console.log('Server started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});