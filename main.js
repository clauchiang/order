//漢堡選單
const optionMeat = document.getElementById('optionMeat');
//漢堡數量
const meatNum = document.getElementById('meatNum');
//漢堡小計
const meatPrice = document.getElementById('meatPrice');

//薯條選單
const optionSide = document.getElementById('optionSide');
//薯條數量
const sideNum = document.getElementById('sideNum');
//薯條小計
const sidePrice = document.getElementById('sidePrice');

//可樂選單
const optionDrink = document.getElementById('optionDrink');
//可樂數量
const drinkNum = document.getElementById('drinkNum');
//可樂小計
const drinkPrice = document.getElementById('drinkPrice');




//總額
const resultTotal = document.getElementById('result');
//表單
const mainForm = document.getElementById('mainForm');

//送出後
mainForm.addEventListener('submit', function (e) {
    e.preventDefault();

    //漢堡數量的值
    let burgerNum = parseInt(meatNum.value);
    //抓漢堡的價格 html裡的id是optionMeat
    let optionBurger = optionMeat.value;

    let resultNum1 = 0;

    switch (optionBurger) {
        case "70":
            let meatC = document.getElementById('meatC');
            resultNum1 = meatC.value * burgerNum;
            break;
        case "90":
            let meatF = document.getElementById('meatF');
            resultNum1 = meatF.value * burgerNum;
            break;
        case "85":
            let meatP = document.getElementById('meatP');
            resultNum1 = meatP.value * burgerNum;
        default:
            break;
    }
    //漢堡小計
    meatPrice.value = resultNum1;


    //薯條數量的值
    let friesNum = parseInt(sideNum.value);
    //抓薯條的價格 html裡的id是optionSide
    let optionFries = optionSide.value;

    let resultNum2 = 0;

    switch (optionFries) {
        case "30":
            let sideS = document.getElementById('sideS');
            resultNum2 = sideS.value * friesNum;
            break;
        case "50":
            let sideB = document.getElementById('sideB');
            resultNum2 = sideB.value * friesNum;
            break;
        default:
            break;
    }
    //薯條小計
    sidePrice.value = resultNum2;


    //可樂數量的值
    let colaNum = parseInt(drinkNum.value);
    //抓薯條的價格 html裡的id是optionDrink
    let optionCola = optionDrink.value;

    let resultNum3 = 0;

    switch (optionCola) {
        case "25":
            let drinkM = document.getElementById('drinkM');
            resultNum3 = drinkM.value * colaNum;
            break;
        case "40":
            let drinkB = document.getElementById('drinkB');
            resultNum3 = drinkB.value * colaNum;
        default:
            break;
    }
    //可樂小計
    drinkPrice.value = resultNum3;

    let allTotal = parseInt(meatPrice.value) + parseInt(sidePrice.value) + parseInt(drinkPrice.value);

    //確認購買
    Swal.fire({
        title: '確定要購買嗎?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '確定',
        cancelButtonText: '取消'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                '今日全店8折，\n 本次消費金額為' + allTotal * 0.8 + "元"
            )
            //總額 確認購買打8折
            resultTotal.innerText = allTotal * 0.8 + "元";
        } else {
            Swal.fire(
                '已取消'
            )
        }
    })

})



function totalFun() {

    //漢堡小計
    meatTotal = parseInt(meatNum.value) * optionMeat.value;

    meatPrice.value = meatTotal;


    //薯條小計
    sideTotal = parseInt(sideNum.value) * optionSide.value;

    sidePrice.value = sideTotal;


    //可樂小計
    drinkTotal = parseInt(drinkNum.value) * optionDrink.value;

    drinkPrice.value = drinkTotal;

    //總額
    let allTotal = parseInt(meatPrice.value) + parseInt(sidePrice.value) + parseInt(drinkPrice.value);


    resultTotal.innerHTML = allTotal + "元";
    return allTotal;

}

// 清空之後將總額歸零
function resetFun(){
    resultTotal.innerHTML = "0";
}