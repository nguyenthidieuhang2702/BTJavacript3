/* Bai 1:
- Đầu vào:
        + Cho 3 số nguyên : a, b, c
- Xử lý:
        + Sắp xếp theo thứ tự tăng dần
- Đầu ra:
        + Xâu kết quả
*/


document.getElementById("xepTang").onclick = function() {
    //lấy thông tin từ người dùng
    var so1 = document.getElementById("so1");
    var so2 = document.getElementById("so2");
    var so3 = document.getElementById("so3");
    var xepTang = "";

    if (so1 > so2 && so1 > so3) {
        //
        if (so2 > so3) {
            xepTang = so3 + "<" + so2 + "<" + so1;
        } else {
            xepTang = so2 + "<" + so3 + "<" + so1;
        }
    } else {
        //
        if (so2 > so3) {
            xepTang = so1 + "<" + so3 + "<" + so2;
        } else {
            xepTang = so1 + "<" + so2 + "<" + so3;
        }
    }

    //show kết quả
    document.getElementById("footerXepTang").innerHTML = xepTang;
};

/* Bài 2:
- Đầu vào: 
        + Chọn thành viên trong gia đình
        + 
- xử lý
- đầu ra:

*/

document.getElementById("chaoHoi").onclick = function() {
    //lấy thông tin từ người dùng
    var bo = document.getElementById("B");
    var me = document.getElementById("M");
    var anhTrai = document.getElementById("A");
    var emGai = document.getElementById("E");
    var chaoHoi = "";

    if (chaoHoi === bo) {
        chaoHoi = "Xin chào Bố!";
    } else if (chaoHoi === me) {
        chaoHoi = "Xin chào Mẹ!";
    } else if (chaoHoi === anhTrai) {
        chaoHoi = "Xin chào anh trai!";
    } else if (chaoHoi === emGai) {
        chaoHoi = "Xin chào em gái!";
    } else {
        chaoHoi = "";
    }

    document.getElementById("footerChaoHoi").innerHTML = chaoHoi;
};

/* Bài 3:
-Đầu ra:
        + cho 3 số
-Xử lý:
        + số chẵn: 
*/
document.getElementById("dem").onclick = function() {
    //lấy thông tin từ người dùng
    var so1 = document.getElementById("so1");
    var so2 = document.getElementById("so2");
    var so3 = document.getElementById("so3");
    var dem = "";

    // if (chaoHoi === ) {
    //     console.log("Xin chào Bố!");
    // } else if (chaoHoi === me) {
    //     console.log("Xin chào Mẹ!");
    // } else if (chaoHoi === anhTrai) {
    //     console.log("Xin chào anh trai!");
    // } else if (chaoHoi === emGai) {
    //     console.log("Xin chào em gái!");
    // } else {
    //     console.log("");
    // }
    document.getElementById("footerDem").innerHTML = dem;

};

/* Bài 4:
-Đầu ra:
        + cho 3 canh
-Xử lý:
        + Đều: Nếu 3 cạnh bằng nhau. Vd:a = 3, b=3 c=3
        + Cân: Nếu 2 cạnh bằng nhau. Vd: a=2, b=2, c=1
        + Vuông: c^2 = a^2 + b^2. Vd: a=3, b=4, c=5
- Đầu ra:
        + Đưa ra loại tam giác
*/
document.getElementById("dem").onclick = function() {
    //lấy thông tin từ người dùng
    var canh1 = document.getElementById("canh1");
    var canh2 = document.getElementById("canh2");
    var canh3 = document.getElementById("canh3");
    var duDoan = "";

    if (canh1 == canh2 && canh2 == canh3) {
        duDoan = "Tam giac đều";
    } else if (canh1 == canh2) {
        duDoan = "Tam giac cân";
    } else if (canh1 * canh1 == canh2 * canh2 + canh3 * canh3) {
        duDoan = "Tam giác vuông";
    } else {
        duDoan = "";
    }

    document.getElementById("footerDuDoan").innerHTML = duDoan;

};