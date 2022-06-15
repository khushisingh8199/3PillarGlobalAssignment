const firstName = "Khushi"
const lastName = "Singh"
firstName.length > lastName.length ? console.log(`your first Name is greater than your family name`) : console.log(`your last name is greater than your name`);

//allowed to drive
let age = Number(prompt("what is your age"));
if (age > 18) {
    console.log("you are allowed to drive");
} else {
    console.log(`you are ${age}, you will be allowed to drive after ${18 - age} years`)
}

//time object
let date = new Date();
console.log(`year:${date.getFullYear()}`);
console.log(`year:${date.getMonth()}`);
console.log(`year:${date.getDate()}`);
console.log(`year:${date.getDay()}`);
console.log(`year:${date.getHours()}`)
console.log(`year:${date.getMinutes()}`)
console.log(`year:${date.getSeconds()}`);
let YYYMMDD = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
let DDMMYYYY = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
let DdMmYYy = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
console.log(YYYMMDD);
console.log(DDMMYYYY);
console.log(DdMmYYy);