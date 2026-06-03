let name = "Hulk"
let power = "Gamma_Rays"

console.log(`The name of SuperHero is ${name} and its power is ${power}`)

let castName = "Bruce Banner"

console.log(castName.includes("Bruce"))
console.log(castName.includes("bruce"))
console.log(castName.includes("bru"))

console.log(castName.indexOf('c'));
console.log(castName.indexOf('n'));
console.log(castName.indexOf('z'));

console.log(castName.slice(0,4))  // different from substring only that this support negative indexing
console.log(castName.slice(-6))

console.log(castName.substring(0,7));


console.log(castName.replace("Bruce", "Hulk"));

let nameOne = "  Steve  "
console.log(nameOne.trim())

let nameTwo = "I am the Iron Man"
console.log(nameTwo.split());

console.log(nameTwo.toLocaleUpperCase())

let temp = "Win"
console.log(temp.repeat(4))

