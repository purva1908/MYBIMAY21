var student={
    name: "Puvra" ,
    address: "google",
    isGraduated: true ,
    details: function(){
        console.log(this.name)
        console.log(this.address)
        console.log(this.isGraduated)
    } ,

    marks:{
        name:"10th" ,
       
      /*  details :()=>{   //cz of arrow fun it wont work
            console.log(this.name)
            console.log(this.English)
        } */

        detailss :function(){
            console.log(name)
            
        }
    }

}

student.details()
student.marks.detailss()