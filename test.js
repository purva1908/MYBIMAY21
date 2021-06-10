var http=require('http'); 
http.createServer(function(req,res){ //requesting to create server
    res.write("welcome to node js world"); //on respond it print msg 
    res.end();   //res will end
}).listen(8080); //ip address of com uter is ommon bt evry api it needs one port on which it will host