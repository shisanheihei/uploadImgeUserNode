
//the base construction
/*function start(response){
	console.log("resquest handler 'start' was called");
	function sleep(milliSeconds){
		var startTime=new Date().getTime();//现在时间聚1970的毫秒数
		while(new Date().getTime()<startTime+milliSeconds);
	}
		sleep(10000);
		response.writeHead(200,{'content-type':'text/plain'});
		response.write("hello start");

	/*return "hello start";*/
/*}
function upload(){
	console.log("resquest handler 'upload' was called");
	return "hello upload"
}
exports.start=start;
exports.upload=upload;*/
var querystring=require('querystring');
var fs=require('fs');
var formidable=require('formidable');
//提交信息
/*function start(response){
	
	 var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
   response.writeHead(200,{'content-type':'text/html'});


   response.end();
}*/

//上传图片
function start(response){
	var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';
response.writeHead(200,{'Content-Type':'text/html'});
response.write(body);
response.end();
}



//上传图书
function upload(response,resquest){
	console.log("resquest handler 'upload' was called");
     var form=new formidable.IncomingForm();
     form.parse(resquest,function(error,fields,files){
     	fs.renameSync('tmp/1.jpg','tmp/test.png');
     
	response.writeHead(200,{'content-type':'text/html'});
/*	response.write('you have sent the text:'+querystring.parse(postData).text);*/
     response.write("received image:<br>");
     response.write("<img src='/show'")
	response.end();
});
}

//展示上传的图片
function show(response){
	fs.readFile('tmp/1.jpg','binary',function(error,file){
		if(error){
			response.writeHead(500,{'content-type':'text/plain'});
			response.write(error+'/n');
			response.end();
		}else{
			response.writeHead(200,{'content-type':'image/png'});
			response.write(file,"binary");
			response.end();
		}
	});

}
exports.start=start;
exports.upload=upload;
exports.show=show;