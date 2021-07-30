// bài 2: Tính giá trị trung bình
/*
Khối 1: input
    5 số thực

Khối 2: 
    B1: tạo biến và gán các giá trị 
        var btn = document.getElementById('btn');
        var total = 0;

        var valNumber1 = parseInt(document.getElementById('num1').value);
        var valNumber2 = parseInt(document.getElementById('num2').value);
        var valNumber3 = parseInt(document.getElementById('num3').value);
        var valNumber4 = parseInt(document.getElementById('num4').value);
        var valNumber5 = parseInt(document.getElementById('num5').value);
    B2: Tính toán
        function calcNumber() {
            var valNumber1 = parseInt(document.getElementById('num1').value);
            var valNumber2 = parseInt(document.getElementById('num2').value);
            var valNumber3 = parseInt(document.getElementById('num3').value);
            var valNumber4 = parseInt(document.getElementById('num4').value);
            var valNumber5 = parseInt(document.getElementById('num5').value);

            total = (valNumber1 + valNumber2 + valNumber3 + valNumber4 + valNumber5)/5;
        
            console.log(total)
        );
}

Khối 3: 
    Trung bình tổng 5 số.
*/ 
var btn = document.getElementById('btn');
var total = 0;

btn.addEventListener('click',calcNumber);

function calcNumber() {
    var valNumber1 = parseInt(document.getElementById('num1').value);
    var valNumber2 = parseInt(document.getElementById('num2').value);
    var valNumber3 = parseInt(document.getElementById('num3').value);
    var valNumber4 = parseInt(document.getElementById('num4').value);
    var valNumber5 = parseInt(document.getElementById('num5').value);

    total = (valNumber1 + valNumber2 + valNumber3 + valNumber4 + valNumber5)/5;
    
    console.log(total);
}