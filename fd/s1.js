
function myFunc(request, response){
    console.log("____________________myFunc function get called_____")
    console.log(request)
    response.send("Hello  express Rahul")
}


var express=require("express")
const server=express()
server.get("/",myFunc)
server.listen(8082)