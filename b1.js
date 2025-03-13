let choice = -1;
const sum = (a,b) => a + b;
const difference = (a,b) => a - b;
const product = (a,b) => a * b;
const quotient = (a,b) => a / b;
do{
    let a = +prompt(`Mời bạn nhập số thứ nhất`);
    let b = +prompt(`Mời bạn nhập số thứ hai`);
    choice = +prompt(`MENU
1. Cộng hai số.
2. Trừ hai số.
3. Nhân hai số.
4. Chia hai số.
5. Thoát.
Chọn chức năng`)
    switch(choice){
        case 1:
            if(isNaN(a) || isNaN(b)){
                alert(`Dữ liệu không hợp lệ`);
            }else{
                alert(sum(a,b));
            }
            break;
        case 2:
            if(isNaN(a) || isNaN(b)){
                alert(`Dữ liệu không hợp lệ`);
            }else{
                alert(difference(a,b));
            }
            break;
        case 3:
            if(isNaN(a) || isNaN(b)){
                alert(`Dữ liệu không hợp lệ`);
            }else{
                alert(product(a,b));
            }
            break;
        case 4:
            if(isNaN(a) || isNaN(b)){
                alert(`Dữ liệu không hợp lệ`);
            }else{
                alert(quotient(a,b));
            }
            break;
        case 5:
            alert('Thoát thành công');
            break;
        default:
            alert('Nhập không hợp lệ');
            break;
    }
}while(choice != 5);