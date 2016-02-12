var server = require('./start');
var router = require('./router');
var requestHandlers = require("./handlers");
var handler = {};
handler["/"] = requestHandlers.home;
handler["/show"] = requestHandlers.show;
handler["/upload"] = requestHandlers.upload;
console.log(requestHandlers);
server.start(router.route, handler);