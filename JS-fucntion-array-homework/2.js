// Viết hàm kiểm tra các giá trị 1 mảng có xuất hiện số nguyên tố hay ko?

function checkPrimeInArray(arr) {
    let check = arr.some(function (prime) {
        let flag = true;
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
    return check;
}

let num = [6, 8, 10];

checkPrimeInArray(num);