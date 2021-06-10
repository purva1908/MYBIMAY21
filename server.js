var http =require("http") 
function myFunc(request, response){
    console.log("myFunc function get called")
    console.log(request)
    response.write("hello purva")
    response.end()
}

http.createServer(myFunc).listen(8081) //8081 used cz we have kept 8080 usy for serverrahulsexpress file that'y it was not running on 8080