/**
 * Khối 1: input 
 *  nhập số tiền USD
 * 
 * Khối 2: 
 *      B1: khai báo và gán giá trị biến
 *          var btn = document.getElementById("btn");
 *          var moneyUSD = 0;
            var usdPrice = 23500;
 *      B2: Viết function chuyển đổi
 *          function exchangeVDN() {
                var inputValue = parseInt(document.querySelector("input").value);
                moneyUSD = inputValue * usdPrice;
                console.log(moneyUSD);
            }   

            btn.addEventListener("click", exchangeVDN);
 *  Khối 3: xuất ra số tiền sau quy đổi
 */

var btn = document.getElementById("btn");
var moneyUSD = 0;
var usdPrice = 23500;
function exchangeVDN() {
  var inputValue = parseInt(document.querySelector("input").value);

  moneyUSD = inputValue * usdPrice;
  console.log(moneyUSD);
}

btn.addEventListener("click", exchangeVDN);
