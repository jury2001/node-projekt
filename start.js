var http = require('http');
var url = require('url');

function start(router){
	
	console.log("Startet.");
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		router.route(pathname);
		console.log("Anforderung für Pfad " + pathname + " erhalten.");
		response.writeHead(200,{"Content-Type": "text/plain"});
		response.write("Der erste Server!");
		response.end();
	}
	var port= process.env.port || 1337;
	http.createServer(onRequest).listen(port);
	console.log("Ist gestartet.");
}

exports.start = start;