// if, else if, nested if and else statements examples

var hot = false
var temp = 11
if (temp > 80 ) {
	console.log("Hot Outside!");
}else if (temp <= 80 && temp>= 50) {
	console.log("Average temp Outside")
}else if (temp < 50 && temp >= 32) {
	console.log("It's pretty cold out")
}else{
	console.log("it is vety cold")
}

// while loop 

var x = 0;
while (x < 5) {
	console.log("x is currently: "+ x);
	if (x===3) {
		console.log("X IS EQUAL TO THREE");
		break;
	}
	console.log("x is still less than 5, adding 1 to x");
	x = x+1;
}

// while loop exercise
var y = 0;
while (y < 11) {
	if (y % 2 === 0) {
		console.log("The Y is equal to "+y)
	}
	y = y+1;
}

// for loop

for (var i = 0; i < 5 ; i++) {
	console.log("The number will be: "+i)
}

var word = "ABCDEFGHIJK"
for (var i = 0; i < word.length; i++) {
	console.log(word[i])
}

var miss = "ABABABABAB"
for (var a = 0; a < miss.length; a = a+2) {
	console.log(miss[a])
} 