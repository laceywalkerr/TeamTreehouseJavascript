// String Concatenation: The process of combining two or more strings to create a bigger string.
// One way to do this, is +
'My Favorite' + 'Movies' == 'My Favorite Movies'

// Lets declare two variables
const name = prompt("What is your name?");
const message = "Hello!";

// Combining two strings 
// String Concatenation
// The process of combining two or more strings to create  a bigger string.
const name = promt("What is your name?");
const message = "Hello" + name + ". Welcome to my music site.";
// this is done with the plus operator aka "+"
// console.log(message);

// Another, much longer example.
const name = promt("What is your name?");
const message = "Hello" + name + ". Welcome to my music site. " + "I'm so happy that you came to visit my site, " + name + ". Feel free to come by again and listen to some more music!";
// console.log(message);

// Lets rewrite this a little
const name = promt("What is your name?");
const message = "Hello" + name + ". Welcome to my music site. ";
const message = message + "I'm so happy that you came to visit my site, " + name + ". Feel free to come by again and listen to some more music!";
// console.log(message);

// We are delcaring the message variable with const, and a variable declared with "const" cannot be changed through reassignment. 
// Uncaught TypeError: Assignment to constant variable
const name = promt("What is your name?");
const message = "Hello" + name + ". Welcome to my music site. ";
message += "I'm so happy that you came to visit my site, ";
message += name;
message += ". Feel free to come by again and listen to some more music!"
console.log(message);

// You would need to use the keyword "let" instead. This would work fine.
const name = promt("What is your name?");
let message = "Hello" + name + ". Welcome to my music site. ";
message += "I'm so happy that you came to visit my site, ";
message += name;
message += ". Feel free to come by again and listen to some more music!"
console.log(message);

//Challenge Task 1 of 3
//Assign your first name to the variable firstName and your last name to lastName.
let firstName;
let lastName;
let role = 'developer';
//Answer
let firstName = "Lacey";
let lastName = "Walker";
let role = 'developer';

