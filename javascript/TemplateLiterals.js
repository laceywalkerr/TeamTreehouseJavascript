// Template literals are defined with backticks, instead of quotes. ` vs "

const name = prompt('What is your name?');

const message = `Hello, ${name}. Quick Maths! 2+2 is 4 minus 1 that's: ${2 + 2 - 1}`;
// ${} marks the dynamic values of a template literal
// This process is known as interpolation
// Interpolation: the insertion of something of a different nature into something else.

console.log(message);