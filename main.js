/* Bai 1:
- Đầu vào:
        + Cho 3 số nguyên : a, b, c
- Xử lý:
        + Sắp xếp theo thứ tự tăng dần
- Đầu ra:
        + Xâu kết quả
*/

document.getElementById("xepTang").onclick = function() {
    var a = document.getElementById("so1").value;
    var b = document.getElementById("so2").value;
    var c = document.getElementById("so3").value;
    var soLon = "";
    if (c < b < a) {
        soLon = c < b < a;
        // console.log(a < b);
    } else if (b < c < a) {
        soLon = b < c < a;
        // console.log(a < c);

    } else if (b < a < c) {
        soLon = b < a < c;
        // console.log(b < c);
    } else if (c < a < b) {
        soLon = c < a < b;
        // console.log(a > b > c);
    } else if (a < c < b) {
        soLon = a < c < b;

    } else {
        soLon = a < b < c;
    }

    document.getElementById("footerXepTang").innerHTML = soLon;

}

/* Bài 2:
- Đầu vào: 
        + Chọn thành viên trong gia đình
        + 
- xử lý
- đầu ra:

*/

document.getElementById("chaoHoi").onclick = function() {
    //lấy thông tin từ người dùng
    var bo = document.getElementById("B").value;
    var me = document.getElementById("M").value;
    var anhTrai = document.getElementById("A").value;
    var emGai = document.getElementById("E").value;
    var chaoHoi = "";

    if (bo) {
        chaoHoi = "Xin chào Bố!";
    } else if (me) {
        chaoHoi = "Xin chào Mẹ!";
    } else if (anhTrai) {
        chaoHoi = "Xin chào anh trai!";
    } else {
        chaoHoi = "Xin chào em gái!";
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
    var so1 = document.getElementById("soThu1").value;
    var so2 = document.getElementById("soThu2").value;
    var so3 = document.getElementById("soThu3").value;

    var Countchan = 0;
    var Countle = 0;

    function kiemTraChanLe(number) {
        if (number % 2 === 0) return true
        return false
    }

    if (kiemTraChanLe(so1)) {
        Countchan++
    } else {
        Countle++
    }

    if (kiemTraChanLe(so2)) {
        Countchan++
    } else {
        Countle++
    }

    if (kiemTraChanLe(so3)) {
        Countchan++
    } else {
        Countle++
    }



    document.getElementById("footerDem").innerHTML = "Có " + Countchan + " số chẵn, " + Countle + " số lẻ";

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
    var a = document.getElementById("canh1").value;
    var b = document.getElementById("canh2").value;
    var c = document.getElementById("canh3").value;
    var tamGiac = "";

    if ((a == b) && (b == c)) {
        tamGiac = "Tam giác đều";

    } else if (a == b || a == c || b == c) {
        tamGiac = "Tam giác cân"
    } else if (a * a + b * b == c * c || a * c + c * c == b * b || b * b + c * c == a * c) {
        tamGiac = "Tam giác vuông"

    } else {
        tamGiac = "Tam giác khác";
    }

    document.getElementById("footerDuDoan").innerHTML = tamGiac;

};