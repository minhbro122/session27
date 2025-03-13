function missNum(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
      return "dữ liệu không hợp lệ";
    }
    arr.sort((a, b) => a - b);
    let difference = (arr[arr.length - 1] - arr[0]) / arr.length;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] - arr[i] !== difference) {
        return arr[i] + difference;
      }
    }
    return "Không có số nào bị thiếu";
  }
  let arr = [];
  let arrLength = +prompt(`Nhập số lượng số nguyên: `);
  for (let i = 0; i < arrLength; i++) {
    arr.push(+prompt(`Nhập vào số thứ ${i + 1}: `));
  }
  console.log(missNum(arr));