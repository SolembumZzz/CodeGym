// viết hàm tạo ra 1 mảng 1 chiều có size do người dùng nhập vào
// và các giá trị trong mảng được sinh trong khoảng [min, max]

function generatingArray(size, min, max) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return arr;
} 

console.log(generatingArray(5, 35, 69));

// Viết hàm kiểm tra các giá trị 1 mảng có xuất hiện số nguyên tố hay ko?

function checkPrimeInArray(arr) {
    let check = arr.some(function (prime) {
        let flag = true;
        if(prime < 2) {
            flag = false;
        }
        for (let i = 2; i < prime; i++) {
            if (prime % i == 0) {
                flag = false;
                break;
            }
        }
        return flag;
    })
    if (check == true) {
        console.log(`Mảng có chứa số nguyên tố`);
    } else {
        console.log(`Mảng không chứa số nguyên tố`);
    }
}

let num = [0,1,6];
checkPrimeInArray(num);

//Viết hàm tính tổng các giá trị có trong 1 mảng

function sumArray(arr) {
    let sum = arr.reduce(function(total, element) {
         return total + element;
     }
     )
     return sum;
 }
 let num2 = [12, 34, 45, 98, 0, 69, -22];
 console.log(sumArray(num));

 //Viết hàm đếm số lượng số chẵn có trong 1 mảng.

function countEvenNumber(arr) {
    temp = arr.filter(function (even) {
        return even % 2 == 0;
    })
    console.log(temp);
    return temp.length;
}

let num3 = [1, 2, 3, 4, 5, 6, 9, 10, 12, 11, 15, 19, 20]

console.log(countEvenNumber(num));