//  ██████╗ ██████╗      ██╗███████╗ ██████╗████████╗███████╗
// ██╔═══██╗██╔══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝
// ██║   ██║██████╔╝     ██║█████╗  ██║        ██║   ███████╗
// ██║   ██║██╔══██╗██   ██║██╔══╝  ██║        ██║   ╚════██║
// ╚██████╔╝██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║
//  ╚═════╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝
                                                          
​
  const cat = {
  	name: '',
  	sound: ''
  };
​
  const dog = {
  	name: ''
  };
​
  const bird = {};
​
/// Add Properties
 cat.name = 'Catherine';
 dog.name = 'Lloyd';
 bird.name = 'America';
​
/// Add Method 
 bird.chirp = function(){
 	console.log('chirp')
 };
​
 dog.bark = function(){
 	console.log('woof')
 };
​
 let sound = 'meow';
​
 cat.meow = function(s){
 	console.log(s)
 }
​
​
/// Call Property 
console.log(cat.name());
console.log(dog.name());
console.log(bird.name());
​
/// Call Method
cat.meow(sound);
dog.bark();
bird.chirp();
​
/// Log Object 
console.table(dog)
console.table(cat)
console.table(bird)