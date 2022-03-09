function factorialize(a) {
    let a = parseInt(prompt('Input a number: '))
    let i = 2;
    let result = 1;
    if (a < 0) {
        return -1;
    }
    else if (a == 0) {
        return 1;
    }
    else {
        while (i <= a) {
            result *= i;
            i++;
        }
        return result;

    }
}

console.log(factorialize(4));