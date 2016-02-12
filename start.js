var http = require('http');
var url = require('url');

function start(route, handler){
	
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		var content;
		var postData='';
		request.setEncoding("utf8");
		if(request.method === 'POST'){
			request.addListener("data", function(chunk){
				postData += chunk;
			});
			request.addListener("end", function(){
				content= route(handler, pathname, request, response, postData);
			});
		}
		else{
			content = route(pathname, handler, request, response);
			if(!content){
				response.writeHead(404,{"Content-Type": "text/plain"});
				response.write("Not found!");
				response.end();
			}
		}
	var port= process.env.port || 1337;
	http.createServer(onRequest).listen(port);
	console.log("Server gestartet.");
}

exports.start = start;