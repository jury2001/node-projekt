var fs = require('fs');
function home(request, response){
console.log(response);
	if(request.method !== 'GET'){
		response.writeHead("405");
		response.end();
	}
	fs.readFile('views/home.html',
	function(err,data){
		response.writeHead(200,{"Content-Type":"text/html"});
		response.write(data);
		response.end();
	});
return true;
}

function show(request, response){

if(request.method !== 'GET'){
		response.writeHead("405");
		response.end();
	}

fs.readdir('files', 
	function(err,list){
		if(err){
			console.log(err.message);
			return null;
		}
		response.writeHead(200,{"Content-Type":"text/html"});
		var html='<html><head></head><body>';
		html +='<h1>Dateimanager</h1>';
		if(list.length){
			html+='<ul>';
			for(i = 0; i < list.length; i++){
				html += '<li><a href="/show?fn=' + list[i] + '">' + list[i] + '</a></li>';
			}
			html+='</ul>';
			html+='<a href="/">Home</a>';
		}
		else{
			html += '<h2>Keine Dateien gefunden!';
		}
		html +='</body></html>';
		response.write(html);
		response.end();
	});
	return true;

}

function upload(request, response){
if(request.method !== 'POST'){
		response.writeHead("405");
		response.end();
	}

	console.log("Anforderung 'upload' aufgerufen.");
}
exports.home= home;
exports.show= show;
exports.upload= upload;