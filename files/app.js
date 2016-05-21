var http = require('http'); // http server
var skelly = require('skellyjs'); // skellyjs framework

// initialize skelly
skelly.init();

// create the server
var server = http.createServer(function(req, res) {
  skelly.router(req,res);
});

// accept incoming traffic
server.listen({port: process.env.PORT || 5000}, function() {
	skelly.log.debug('Listening on port:', server.address().port);
	skelly.log.debug("Hash:",skelly.hash);
});
