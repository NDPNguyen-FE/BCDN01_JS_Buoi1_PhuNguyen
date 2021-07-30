/**
Khối 1: input
    nhập 1 số có 2 chữ số

Khối 2: 
    b1: khai báo và gán giá trị cho các biến
        var btn = document.getElementById("btn");
        var total = 0;

        var numInput = parseInt(document.getElementById("number").value);

        var hangChuc = parseInt(numInput / 10);
        var hangDonVi = numInput % 10;
    b2: Tính tổng 2 ký số
         total = hangChuc + hangDonVi;
Khối 3: output
    In ra tổng 2 ký số
        console.log(total);
 
 */

var btn = document.getElementById("btn");
var total = 0;

btn.addEventListener("click", calcNumber);

function calcNumber() {
  var numInput = parseInt(document.getElementById("number").value);

  var hangChuc = parseInt(numInput / 10);
  var hangDonVi = numInput % 10;

  total = hangChuc + hangDonVi;

  console.log(total);
}
