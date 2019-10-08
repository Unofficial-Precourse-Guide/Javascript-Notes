//  ██████╗██╗      █████╗ ███████╗███████╗███████╗███████╗
// ██╔════╝██║     ██╔══██╗██╔════╝██╔════╝██╔════╝██╔════╝
// ██║     ██║     ███████║███████╗███████╗█████╗  ███████╗
// ██║     ██║     ██╔══██║╚════██║╚════██║██╔══╝  ╚════██║
// ╚██████╗███████╗██║  ██║███████║███████║███████╗███████║
//  ╚═════╝╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚══════╝
                                                        
​
class Pet{
	//property 
	constructor(name, sound, color){
		this.name = name;
		this.sound = sound;
		this.color = color; 
	}
	//method
	speak(){
		return this.sound
	}
};
​
class Automobile{
	constructor(make, model, color){
		this.make = make;
		this.model = model;
		this.color = color; 
	}
	drive(){
		return 'vroom'
	}
}
​
//Create a object from Classe
let Dog = new Pet('PupPup', 'woof', 'brown');
let Cat = new Pet('Sylvester', 'meow', 'orange');
let Bird = new Pet('Tweety', 'chirp', 'green');
​
let Truck = new Automobile('Chevrolet', 'S10', 'White')
let Car = new Automobile('Chevy', 'Camaro', 'Cherry Red')
​
​
console.log(Dog.name);
console.log(Dog.sound);
console.log(Dog.color);
console.log(Dog.speak());
console.log('\n');
​
console.log(Cat.name);
console.log(Cat.sound);
console.log(Cat.color);
console.log(Cat.speak());
console.log('\n');
​
console.log(Truck.make);
console.log(Car.model);
console.log(Car.color);
console.log('\n');