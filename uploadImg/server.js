var http=require('http');
var url=require('url')
//把整体放在一个start的函数里面
function start(router,handle){
http.createServer(function(request,response){
	   var pathname = url.parse(request.url).pathname;
       var postData="";
       request.setEncoding('utf8')
       request.addListener('data',function(postDataChunk){
       postData+=postDataChunk;
       console.log("received POST data chunk"+postDataChunk);

       });
       request.addListener('end',function(){
       	router(handle,pathname,response,request);
       })




    /*console.log("Request for " + pathname + " received.");*/
   /*  router(handle,pathname,response);*/
	/*console.log("print in function")*/
	/*respons.writeHead(200,{"Content-Type":"text/plain"});
	respons.write(content);

	respons.end();*/
}).listen(8888);
console.log('please open browser!')
}
//作为一个模块必须有这样的
exports.start=start;