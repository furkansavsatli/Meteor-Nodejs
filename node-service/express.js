var express = require('express');
var app = express();
var fs = require("fs")
// writelardan iflerden kurtulmuş durumdayız
//https://www.w3schools.com/nodejs/nodejs_filesystem.asp
https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
app.get('/listele',function(req,res){
	
	//res.end('kullanicilar listelenecek'); 
	fs.readFile('et.json','utf8', function(err,data){
	
		console.log(data);
		res.end(data);
		
		
	});
});

app.get('/ekle',function(req,res){
	
	res.end('kullanici eklenecek'); 
	
});

app.get('/sil',function(req,res){
	
	res.end('kullanici silinecek'); 
	
});


var server = app.listen(8000,function() {
	
	console.log("calisiyorum");
	
	});