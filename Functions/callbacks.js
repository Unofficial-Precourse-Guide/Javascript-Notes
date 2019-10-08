// ARGUMENTS v PARAMETERS 

function add(parameter1, parameter2) {
    return parameter1 + parameter2
  } 
  
  // add(1, 2) // 1 and 2 are arguments
  
  
  // CALLBACKS 
  
  function multiply(num1, num2) {
    return num1 * num2
  }
  
  
  function mathEquation(num1, num2, operator) {
      return operator(num1, num2)
  } // operator is the callback function 
  
  // mathEquation(3, 4, add)
  
  function eatCandy(candy1, candy2, candy3) {
    return `I like to eat ${candy1} ${candy2} and ${candy3}!`
  }
  
  function eatFruit(fruit1, fruit2, fruit3) {
    return `I like to eat ${fruit1}, ${fruit2}, and ${fruit3}`
  }
  
  function callbackExample(parameter1, parameter2, parameter3, parameter4) {
    return parameter1(parameter2, parameter3, parameter4)
  }
  
  //eatCandy("skittles", "m&ms", "kitkats")
  
  //callbackExample(eatCandy, "jelly beans", "reese's", "snickers")
  
  // callbackExample(mathEquation, 10, 11, multiply) // 
  
  
  
  // console.log(mathEquation(3,4, add)) 
  
  function sayHello() {
    console.log("hello!");
    console.log("Hellooo!");
    console.log("Helloooooo!");
    return "Hi."
  }
  
  // sayHello();
  
  function greet(timeOfDay) {
    if (timeOfDay === "morning") {
      return "good morning!"
    } else if (timeOfDay === "afternoon") {
      return "good afternoon!"
    } else if (timeOfDay === "evening") {
      return "good evening!"
    } else return "goodnight"
  } 
  
  // a callback is just a function that is passed into another function as a parameter and the function it's passed into can take any other number of functions.
  
  
  function helloWorld() {
    return "Hello world!"
  }
  
  function AtLambda() {
     helloWorld();
      // function sayHiAtLambda() {
      //   return "Hi. I'm at Lambda!"
      // } 
      // console.log(sayHiAtLambda());
     
  }
  
  
  
  AtLambda();