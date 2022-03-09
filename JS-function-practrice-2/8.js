function reverseArr(arr) {
    let tempArr = [];
    for (let i = 0, k = arr.length - 1; i < arr.length; i++, k--) {
        console.log(i);
        console.log(k);
        tempArr[i] = arr[k];
    }
    return tempArr;

}

let arr = [2, 3, 8, true, 10, false, 'monkey'];

console.log(reverseArr(arr));