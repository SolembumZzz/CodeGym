let ARR = [1, 3, -7, 8, -22, 9, 21];

function findsmallestnum(arr) {
    let min = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}

console.log(findsmallestnum(ARR));