let name = "Thi";
let gender = false;
let married = true;

// if (gender) {
//     console.log("Hello Mr." + name);
// } else console.log("Hello Ms." + name);

console.log(`Hello ${(gender) ? "Mr" : (married) ? "Mrs" : "Ms"}.${name}`);