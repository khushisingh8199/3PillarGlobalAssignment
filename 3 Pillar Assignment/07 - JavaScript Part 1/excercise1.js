let age = Number(prompt("enter age"));
if (age > 18) {
    console.log("you are old enough to drive")
} else {
    console.log(`you are left with ${18-age} year(s) to drive`)
}

let yourAge = 30;
if (age > yourAge) {
    console.log("i'm older than you with ${age - yourAge}")
} else {
    console.log(`you are ${yourAge - age} years older than me`)
}

let a = 4;
let b = 3;
if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is less than b");

}

let num = Number(prompt("enter number to kno if it's even/odd"))
if (num % 2 === 0) {
    console.log(`${num} is an even number`)
} else if (num % 2 !== 0) {
    console.log(`${num} is an odd number`)
}