function router(handle,pathname,response,request) {
	console.log('about a response for :'+pathname);
	if (typeof(handle[pathname])=='function') {
		return handle[pathname](response,request);
	}
	else{
		console.log('no request handle found for'+pathname);
		return '404 Not Found!'
	}

}
exports.router=router;