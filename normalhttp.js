var http =require("http") 
function myFunc(request,response){
    console.log("myFunc function get called")
    console.log(request)
    response.write("hello purva")
    response.end()
}

http.createServer(myFunc).listen(8080) 