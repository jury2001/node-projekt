function route(pathname,handler,request, response){
	console.log("Route für Pfad angefordert: " + pathname);
	if(typeof handler[pathname] === 'function'){
		return handler[pathname](request, response);
	}
	else{
		console.log("Keine Methode gefunden für " + pathname);
		return null;
	}
}
exports.route = route;