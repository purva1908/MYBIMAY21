var arr=[1,2,3,4,5,6]

arr.forEach(num=>{
    if(num%2==0)
    console.log(num)
})

function iEven(num){
    if(num%2==0)
    {
        return true
    }
    else{
        return false
    }
}

console.log(arr.filter(isEven))