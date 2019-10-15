

// ███████╗██╗   ██╗███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
// ██╔════╝██║   ██║████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
// █████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
// ██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
// ██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
// ╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
                                                                          

//ES5 Syntax 
// function fun(params){ 
// // var declarations 
// 	let var1 = 0
// 	let var2 = []
// 	let var3 = {}
// 	let var4 = ''

// // logic 
// 	for(){}
// 	if(){}
//  	switch(){}
//  	while(){}

// // return 
// 	console.log()
// 	return
// }

// fun(arguments)

// //ES6 Syntax 
// const fun1 = (params) => {
// 	// var declarations 
// 	let var1 = 0
// 	let var2 = []
// 	let var3 = {}
// 	let var4 = ''

// // logic 
// 	if(){}
//  	switch(){}

//  	for(){}
//  	while(){}

// // return 
// 	console.log()
// 	return
// }


// fun1(args)



function doMath(num, num1, num2){
	// Vars  
	num = 1
	num1 = 1
	num2 = 1

	
	let num3 = 2
	let num4 = 2
	let str = `some text ` + 'more text ' + num	
	
	//Logic 
	// num ++
	// num1 += 1 
	// num2 = num2 + 1 


	num3 **= num4
	num3 = num3 ** num4

	// Returns 
	console.log(`num: ${num} num1: ${num1}, num2: ${num2} num3: ${num3}`)
	console.log(str)

	return ( num, num1, num2, num3 )
}

doMath(0,0,0)