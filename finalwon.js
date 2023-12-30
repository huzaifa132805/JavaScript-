var firstName = prompt("Enter the first name: ")
var lastName = prompt("Enter Your last name: ")
var age = prompt("Enter your age: ")
var height = prompt("Enter your height: ")
var petName = prompt("Enter the pet name: ")
alert("Thank you so much for the information")

var condName = null;
var condAge = null;
var condHeight = null;
var condPet = null;

if (firstName[0] === lastName[0]) {
	condName = true;
}else {
	condName = false;
}

if (age > 20 && age < 30) {
	condAge = true;
}else {
	condAge = false;
}

if (height >= 170) {
	condHeight = true;
}else {
	condHeight = false;
}

if (petName[petName.length-1] ==="y") {
	condPet = true;	
}else {
	condPet = false;
}

if (condName && condAge && condHeight && condPet){
  // My secret message
  console.log("Welcome Comrade! You've passed the Spy Test")
}else{
  console.log("Sorry, nothing to see here.")
}
