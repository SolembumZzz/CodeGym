function generatingNestedArray(size1, size2, min, max) {
    let arr = [];
    for (let i = 0; i < size1; i++) {
        arr[i] = [];
        for (let j = 0; j < size2; j++) {
            arr[i][j] = Math.floor(Math.random() * (max - min +1) + min);
        }
    }
    return arr;
}

console.log(generatingNestedArray(5, 6, 10, 60));