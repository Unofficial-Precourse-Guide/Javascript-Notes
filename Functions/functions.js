// FUNCTIONS 

function example() {
    console.log("this is a function called example")
  } 
  
  const example2 = () => {
    console.log("This is a function called example2")
  }
  
  // example() 
  // example2()
  
  
  function example3(param1, param2) {
    let newNumber = param1 + 7;
    console.log(newNumber)
    let newNumber2 = param2 + 20;
    console.log(newNumber2)
    return newNumber + newNumber2
  } // function declaration // to declare a function 
  
  
  // example3(3, 10) // function invocation // to invoke a function or to call a function 
  
  // console.log VS return 
  
  
  
  // CALLBACKS 
  
  function add(num1, num2) {
    return num1 + num2
  }
  
  function multiply(num1, num2) {
    return num1 * num2 
  }
  
  // this equation should take in a math equation function that has 2 parameters and return what that function returns.
  function mathEquation(callback, num1, num2) {
    return callback(num1, num2)
  } 
  
  // mathEquation(add, 30, 15) 
  // mathEquation(multiply, 2, 3)
  
  function names(firstName, lastName) {
    return firstName + " " + lastName
  } 
  
  
  function eat(food, food2, food3) {
    return "I eat food like " + food + " " + food2 + " " + food3
  }
  
  function drink(beverage) {
    return "I drink things like " + beverage
  }
  
  // mathEquation(drink, "coffee")