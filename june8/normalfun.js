function greet(name)
{
    console.log("hello"+name) //hellopurva will print as we passed purva as name to greet()
}
greet("purva")

function greett(name)
{
    console.log("hello"+arguments) //hello [object Arguments]
}
greett("purva")

/*The arguments object is a local variable available within all non-arrow functions. You can refer to a function's
 arguments inside that function by using its arguments object. It has entries for each argument the function was
  called with, with the first entry's index at 0 . ... The arguments object is not an Array */

  function printargobj(){
      console.log(arguments)
  }

  printargobj("Purva")

  function emptyargobj(){
      console.log(arguments)
  }
  emptyargobj()