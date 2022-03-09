function checkPositiveInteger(num) {
    let result = false;
    if (Number.isInteger(num) && num >= 0) {
        result = true;
    }
    return result;
}

console.log(checkPositiveInteger(20))