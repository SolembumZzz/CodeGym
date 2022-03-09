function getSmallestNumer(a, b, c) {
    if (a<b && a<c) {
        return `${a} is the smallest number`;
    } else if (b<c) {
        return `${b} is the smallest number`;
    } else {
        return `${c} is the smallest number`;
    }
}

console.log(getSmallestNumer(10, 7, 5));