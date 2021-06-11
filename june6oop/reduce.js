var arr=[1,2,3,4,5,6]
var prod=1
arr.forEach(num=>{
    prod=prod*num
})

console.log(prod)


function findprod(a,b){
        console.log(a + " X "+ b)
         return a*b
     }
     var prod=arr.reduce(findprod)
     console.log(prod)
     for(let i=0;i<arr.length;i++){
         arr[i]=arr[i]*arr[i]
     }
     console.log(arr)