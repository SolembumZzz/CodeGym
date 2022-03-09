function swap(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
}

let num1 = 12;
let num2 = 9;
swap(num1, num2)