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