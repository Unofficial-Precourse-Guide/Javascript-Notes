// ARRAYS 

const food = ['pizza', 'donuts', 'chicken', 'candy']

// shift -- mutates original array

//food.shift() // returns 'pizza'

// unshift -- mutates original array / adds item to beginning of array 

console.log(food.unshift('taco')); // returns '5'

console.log(food); // returns array with taco in it

// push -- mutates original array

console.log(food.push('banana')); // adds banana to the end of the food array -- returns 6
console.log(food); // return the array with banana at the end

// pop 
console.log(food.pop()) // returns banana (takes the last one off the end) 

// shift and pop are the same but shift is at the beginning and pop is at the end

// unshift and push are the same but unshift is at the beginning and push is at the end 


const people = ["Lloyd", "Omid", "CoBe", "Faisal", "Megan", "Cat", "Shaurice", "Caleb", "Justin", "Joe", "", "Joseph"]

// people[0] // Lloyd 


const ingredients = ["beef", "sweet potato", "potato", "chicken", "corn"]

// MAP 
// takes a callback -- takes an array and makes a new version based on the callback (makes a new array)

const newPeople = people.map( function(person)  {return person + " Lambda" }  )

const newerPeople = people.map(function(person) {
 return person.split("").reverse().join("")
})

 const firstMeal = ingredients.map( ingredient => { return "fried " + ingredient } ); 

const secondMeal = ingredients.map(i => "fried" + i)

console.log(secondMeal);

const thirdMeal = ingredients.map(ingredient => {
  if (ingredient === "beef" || ingredient === "chicken") {
    return "stir fried " + ingredient
  } 
  if (ingredient === "corn") {
    return "steamed " + ingredient
  } 
  else return "french fried " 
}) 

 console.log(thirdMeal);

console.log(newerPeople)

console.log(newerPeople.reverse())

console.log("chair".split(''))
console.log("chair".split("").reverse())
console.log("chair".split("").reverse().join(""))


// FOR EACH 
// takes a callback 


// each person should jump
people.forEach(function(jumpingPerson) {
  console.log(jumpingPerson + " jumps!")
}) 

// for each person whose name starts with J, capitalize their name 

const givePresent = function(person) {
  return person + " gets Lambda Swag!"
}


const presents = [];

people.forEach( function(person) {
  if (person[0] === "J") {
 presents.push(givePresent(person));
  }
}) 

people.forEach( function(person) {
  if (person[0] === "J") {
 presents.unshift(givePresent(person));
  }
}) 

console.log(presents)

console.log(people.forEach(person => givePresent(person)));  


console.log(presents)

people.forEach( function(person) {
  if (person.slice(0, 1) === "J") {
    console.log(person)
  }
}
 )

const sliceHello = 'hello'.slice(0, 1)

const spliceHello = 'hello'.split('').splice(0, 1)

console.log(spliceHello)


// SPLICE IS SLICE FOR ARRAYS 


 console.log(jumpingPeople);



const food = { meat: ["beef", "chicken"], vegetable: "sweet potato", otherVegetable: "potato", otherOtherVegetable: "corn" }


// FILTER 

const strainedFood = food.meat.filter(item => item === "potato" )


console.log(strainedFood);

const longIngredients = ingredients.filter(item => item.length > 5)

console.log(longIngredients);




// ORDER OF OPERATIONS 
const fruit = (('b' + 'a') + (+ 'a') + 'a'); 
const nan = ( + + 'zzzzz' + 'n' + 'y')