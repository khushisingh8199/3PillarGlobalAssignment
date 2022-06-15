let arr1 = ["school", "uni", "library", "books", "degree"];
console.log(arr1.length);
let firstItem = console.log(arr1[0]);
let middleItem = console.log(arr1[3]);
let lastItem = console.log(arr1[arr1.length - 1]);

let mixedDataType = ["khushi", 21, true, null, {
    favoritearr1: ["eating", "sleeping", "travelling"]
}, undefined]

let techCompanies = ["Facebook", "Google" , "microsoft", "oracle", "amazon", "ibm", "oracle", "apple"];
console.log(techCompanies);
console.log(techCompanies.length);
console.log(techCompanies[0]);
console.log(techCompanies[4]);
console.log(techCompanies[techCompanies.length - 1]);
let searchTechComp = prompt("enter company to search");
if (techCompanies.includes(searchTechComp)) {
    console.log(searchTechComp)
} else {
    console.log("company not found")
}

let oo = []
for (let i = 0; i < techCompanies.length; i++) {
    oo.push(techCompanies[i].includes("oo"));
}
techCompanies.sort();
techCompanies.reverse();
techCompanies.slice(0, 3);
techCompanies.slice(techCompanies.length - 1, 3)
techCompanies.slice(Math.floor(techCompanies.length / 2), 1);
techCompanies.pop();
techCompanies.length = 0;

