var server = require('./start');
var router = require('./router');
var requestHandler = require("./handlers");
var handler = {};
handler["/"] = requestHandler.home;
handler["/show"] = requestHandler.show;
handler["/upload"] = requestHandler.upload;
server.start(router.route, handler);