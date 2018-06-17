var http = require("http")
var fs = require("fs")

function myFunk(request,response){
	
	if(request.url=="/"){
		console.log(request)
		response.writeHeader(200,{'Context-Type':'text-plain'});
		
		
	//1	response.write('<html><body> Calistim </body></html>')
	//1	response.end();
		
		fs.createReadStream('./index.html').pipe(response);
		
	}else {
		response.writeHeader(404,{'Context-Type':'text-plain'});
		response.write('<html><body> Hata </body></html>')
	}
}
http.createServer(myFunk).listen(8000);
console.log("sunucu aktif")