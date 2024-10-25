//Bài 1
// const PI = Math.PI;

// let r = Number(prompt("Nhập bán kính của đường tròn: "));

// let c = 2 * PI * r;
// let s = PI * r * r;

// console.log("Chu vi hình tròn: " + c);
// console.log("Diện tích hình tròn: " + s);

// bài 2
// let width = Number(prompt("Mời nhập width: "));
// let height = Number(prompt("Mời nhập height: "));

// let c = (width + height) * 2;
// let s = width * height;

// console.log(c);
// console.log(s);

//Bài 3
let diemToan = Number(prompt("Nhập điểm toán: "));
let diemVan = Number(prompt("Nhập điểm văn: "));
let diemAnh = Number(prompt("Nhập điểm anh: "));

let tb = (diemAnh + diemToan + diemVan) / 3;

//làm tròn kết quả 2 chữ số sau dấu phẩy
tb = tb.toFixed(2);
console.log(tb);

//hàm ceil() (trần): làm tròn lên số nguyên gần nhất
//hàm floor() (sàn): làm tròn xuống số nguyên gần nhất
//round() làm tròn nếu phần thập phân từ 0.5 trở lên
