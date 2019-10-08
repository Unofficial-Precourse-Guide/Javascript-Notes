// ES5 syntax, ES5 function
function example1(parameter1) {
    console.log("This is " + parameter1)
  } 
  
  const example6 = function() {
    console.log("This is an anonymous function.")
  }
  
  // ES6 or arrow syntax 
  const example2 = parameter1 => console.log("This is " + parameter1) 
  
  // ES6 or arrow syntax 
  const example3 = parameter1 => {
    console.log("This is " + parameter1)
  }
  
  const example4 = (parameter1, parameter2) => console.log(parameter1, parameter2)
  
  let example5 = () => console.log("Hi I don't have parameters.")
  
  example6()  

  