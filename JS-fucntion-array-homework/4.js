//Viết hàm đếm số lượng số chẵn có trong 1 mảng.

function countEvenNumber(arr) {
    temp = arr.filter(function (even) {
        return even % 2 == 0;
    })
    console.log(temp);
    return temp.length;
}

let num = [1, 2, 3, 4, 5, 6, 9, 10, 12, 11, 15, 19, 20]

console.log(countEvenNumber(num));