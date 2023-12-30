///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
//
// Do this with a While Loop and a For Loop

// While Loop
var x = 1;
while (x<6) {
	console.log("Hello")
	x++;
}
// for loop

for (var i = 0; i < 5; i++) {
	console.log("Hello with for")
}

/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop

// METHOD ONE
// While Loop

var y = 0;
while (y<26) {
	if (y%2 === 1) {

		console.log(y)
	}
	y++;
}

// METHOD TWO
// For Loop

for (var i = 0; i < 26; i++) {
	if (i%2 === 1) {
		console.log(i)
	}
}
