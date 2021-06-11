class Student{
    constructor(name, address, rollNumber, isGraduated){
        this.name=name
        this.address=address
        this.rollNumber=rollNumber
        this.isGraduated=isGraduated
    } 
    details(){
     console.log(this.name)
     console.log(this.address)
     console.log(this.isGraduated)
     console.log(this.rollNumber)
    }
    getName(lastname){
        return this.name+ " " +lastname
    }
 }
 var student1 = new Student("Faraz", "google", 11, true)
 student1.details()
 console.log(student1.getName("abc"))
 