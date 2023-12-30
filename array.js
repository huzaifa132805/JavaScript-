function factorial (x) {
	if (x === 0) {
		return 1
	}else {
		return x*factorial(x-1)
	} 
}

for (var i = 1 ; i < 101; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz")
	}else if (i % 3 === 0) {
		console.log("Fizz")
	}else if (i % 5 === 0) {
		console.log("Buzz")
	}else {
		console.log(i)
	}
	
}
var num = 1;
while (num < 101) {
	if (num % 2 === 0) {
		console.log("even")
	}else if (num%3 === 0) {
		console.log("odd")
	}else {
		console.log(num)
	}
	num++;
}
