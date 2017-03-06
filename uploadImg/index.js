var server=require('./server');//server 是js文件的名字
var router=require('./router');
var formidable=require('formidable') 
var requestHandlers=require('./requestHandlers');
var handle={};
handle['/']=requestHandlers.start;
handle['/start']=requestHandlers.start;
handle['/upload']=requestHandlers.upload;
handle['/show']=requestHandlers.show;
server.start(router.router,handle);
