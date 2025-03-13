let choice = -1;
let arr = [];

const checkAlpha = (name) => {
    const regex = /^[\p{L}\s]+$/u; 
    return regex.test(name);
};

const addStudent = () => {
    let numberStudent;
    do{
        numberStudent = +prompt(`Mời bạn nhập số lượng sinh viên`);
        if(isNaN(numberStudent) || numberStudent <= 0){
            alert('Mời bạn nhập số lượng sinh viên hợp lệ');
        }
    }while(isNaN(numberStudent) || numberStudent <= 0);
    for (let i = 0; i < numberStudent; i++) {
        let name;
        do {
            name = prompt(`Mời bạn nhập tên sinh viên thứ ${i+1}`);
            if (!checkAlpha(name)) {
                alert('Tên không hợp lệ!');
            }
        } while (!checkAlpha(name));
        arr.push(name);
    }
};

const findStudent = () => {
    let checkName;
    do{
        checkName = prompt('Nhập tên cần tìm kiếm');
        if (!checkAlpha(checkName) || checkName === '') {
            alert('Tên không hợp lệ!');
        }
    }while(!checkAlpha(checkName));
    
    let foundStudent = arr.filter(name => name.toLowerCase().includes(checkName.toLowerCase()));

    if (foundStudent.length > 0) {
        alert(`Các sinh viên cần tìm kiếm:
${foundStudent.join('\n')}`);
    }else{
        alert('Sinh viên không có trong danh sách');
    }
};

const deleteStudent = () => {
    let deleteName;
    do{
        deleteName = prompt('Nhập tên sinh viên cần xóa');
        if (!checkAlpha(deleteName) || deleteName === '') {
            alert('Tên không hợp lệ!');
        }
    }while(!checkAlpha(deleteName));

    let index = arr.findIndex(name => name.toLowerCase() === deleteName.toLowerCase());
    console.log(index);
    

    if (index !== -1) {
        arr.splice(index, 1);
        alert(`Đã xóa sinh viên "${deleteName}" khỏi danh sách!`);
    } else {
        alert('Sinh viên không có trong danh sách.');
    }
};

do{
    choice = +prompt(`MENU
1. Nhập danh sách sinh viên.
2. Hiển thị danh sách sinh viên.
3. Tìm sinh viên theo tên.
4. Xóa sinh viên khỏi danh sách.
5. Thoát.
Chọn chức năng`)
    switch(choice){
        case 1:
            addStudent();
            alert('Danh sách sinh viên đã được cập nhật');
            break;
        case 2:
            if (arr.length === 0) {
                alert('Không có danh sách để hiển thị');
            }else{
                alert(arr.join("\n"));
            }
            break;
        case 3:
            if (arr.length === 0) {
                alert('Không có danh sách');
            }else{
                findStudent();
            }
            break;
        case 4:
            if (arr.length === 0) {
                alert('Không có danh sách');
            }else{
                deleteStudent();
            }
            break;
        case 5:
            alert('Thoát thành công');
            break;
        default:
            alert('Không hợp lệ');
            break;
    }
}
while(choice != 5);