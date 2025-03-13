let arr = [];
function inputNum() {
  arr = [];
  let arrLength = +prompt(`Nhập số lượng số nguyên: `);
  for (let i = 0; i < arrLength; i++) {
    arr.push(+prompt(`Nhập vào số thứ ${i + 1}: `));
  }
}
function avgArr() {
  if (arr.length === 0) {
    return "Mảng trống.";
  }
  let sum = arr.reduce((acc, num) => acc + num, 0);
  return `Giá trị trung bình: ${sum / arr.length}`;
}
function findMaxEven() {
  let evenNumbers = arr.filter((num) => num % 2 === 0);
  if (evenNumbers.length > 0) {
    return `Số chẵn lớn nhất: ${Math.max(evenNumbers)}`;
  }
  return "Không có số chẵn trong mảng.";
}
function findMinOdd() {
  let oddNumbers = arr.filter((num) => num % 2 !== 0);
  if (oddNumbers.length > 0) {
    return `Số lẻ nhỏ nhất: ${Math.min(oddNumbers)}`;
  }
  return "Không có số lẻ trong mảng.";
}
function displayMenu() {
  console.log(`1. Nhập danh sách số nguyên.`);
  console.log(`2. Tính trung bình các số.`);
  console.log(`3. Tìm số chẵn lớn nhất.`);
  console.log(`4. Tìm số lẻ nhỏ nhất.`);
  console.log(`5. Thoát.`);
}
let choice;
do {
  displayMenu();
  choice = +prompt(`Nhập lựa chọn của bạn: `);
  switch (choice) {
    case 1:
      inputNum();
      break;
    case 2:
      console.log(avgArr());
      break;
    case 3:
      console.log(findMaxEven());
      break;
    case 4:
      console.log(findMinOdd());
      break;
    case 5:
      console.log("Thoát chương trình.");
      break;
    default:
      console.log(`Vui lòng nhập lại.`);
  }
} while (choice !== 5);