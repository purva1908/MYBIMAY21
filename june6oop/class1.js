  

var student={
    //key:value .. value can be any datatype value
    name:"Purva",
    Address:"Google",
    RollNo:11,
    isGraduated: true,
    details: function(){
        console.log(this.name)
        console.log(this.Address)
        console.log(this.isGraduated)
        console.log(this.RollNo)
    },
    marks:{
        name:"10th",
        English:20,
        Maths:40,
        //TODO: discuss arrow function vs function keyweord
        details:function(){
            console.log(this.name)
            console.log(this.English)
            console.log(this.Maths)
        }
    }
}
student.details()
student.marks.details()