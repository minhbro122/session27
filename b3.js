let choice = -1;
const PI = 3.14;

const circularArea = () => {
    let r;
    do {
        r = +prompt('Mời bạn nhập bán kính hình tròn');
        if(isNaN(r) || r <= 0){
            alert('Dữ liệu không hợp lệ');
        }
    } while (isNaN(r) || r <= 0);

    let S = PI * r**2;
    alert(`Diện tích hình tròn là: ${S.toFixed(3)}`);
};

const circularCircumference = () => {
    let r;
    do {
        r = +prompt('Mời bạn nhập bán kính hình tròn');
        if(isNaN(r) || r <= 0){
            alert('Dữ liệu không hợp lệ');
        }
    } while (isNaN(r) || r <= 0);

    let C = 2 * PI * r;
    alert(`Chu vi hình tròn là: ${C.toFixed(3)}`);
};

const rectangleArea = () => {
    let length;
    let width;

    do {
        length = +prompt('Mời bạn nhập chiều dài hình chữ nhật');
        width = +prompt('Mời bạn nhập chiều rộng hình chữ nhật');
        if(isNaN(length) || length <= 0 || isNaN(width) || width <= 0){
            alert('Dữ liệu không hợp lệ');
        }
    } while (isNaN(length) || length <= 0 || isNaN(width) || width <= 0);

    let S = length * width;
    alert(`Diện tích hình chữ nhật là: ${S.toFixed(3)}`);
};

const rectangleCircumference = () => {
    let length;
    let width;

    do {
        length = +prompt('Mời bạn nhập chiều dài hình chữ nhật');
        width = +prompt('Mời bạn nhập chiều rộng hình chữ nhật');
        if(isNaN(length) || length <= 0 || isNaN(width) || width <= 0){
            alert('Dữ liệu không hợp lệ');
        }
    } while (isNaN(length) || length <= 0 || isNaN(width) || width <= 0);

    let C = (length + width) * 2;
    alert(`Chu vi hình chữ nhật là: ${C.toFixed(3)}`);
};

do {
    choice = +prompt(`MENU
1. Tính diện tích hình tròn.
2. Tính chu vi hình tròn.
3. Tính diện tích hình chữ nhật.
4. Tính chu vi hình chữ nhật.
5. Thoát.
Chọn chức năng`);
    switch(choice){
        case 1:
            circularArea();
            break;
        case 2:
            circularCircumference();
            break;
        case 3:
            rectangleArea();
            break;
        case 4:
            rectangleCircumference();
            break;
        case 5:
            alert('Thoát thành công');
            break;
        default:
            alert('Không hợp lệ');
            break;
    }
} while (choice !== 5);