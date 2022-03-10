//Viết hàm tính tổng các giá trị có trong 1 mảng

function sumArray(arr) {
   let sum = arr.reduce(function(total, element) {
        return total + element;
    }
    )
    return sum;
}
let num = [12, 34, 45, 98, 0, 69, -22]
console.log(sumArray(num))