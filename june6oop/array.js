/*in js we can store different types of data in array unlike other languages cpp java*/
var arr1=["wwf",12,undefined,null,false,10.5];
console.log(arr1) //[ 'wwf', 12, undefined, null, false, 10.5 ]

var student=[]
 student[0]="arwe"
 console.log(student.length)  //1
 student[student.length]="awergwg"
 student.push("23twg")
 console.log(student)  //[ 'arwe', 'awergwg', '23twg' ]

 var employee=[]
 employee.length=3
employee.push(1)
employee.push(11)
employee.push(17)
employee.push(137)
 console.log(employee)


 var teacher=[]
 teacher.length=3
teacher[0]=12
teacher[1]=13
teacher[2]=14
teacher[23]=15
    console.log(teacher)

    var boy=[1,2,3]
  /*  for(let i=0;i<boy.length;i++){
          console.log(boy[i])
    } */


    boy.forEach(element => {
             if(element<11){
                 console.log(element)  
            }
            
         });



         
var  professor= new Array("abva",'WEGE','wgvew','QET24') //prof=var and array is class
console.log(professor.length)

professor.forEach(element => {
    console.log(element)  
})