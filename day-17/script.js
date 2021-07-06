

var plusBtn = document.getElementById('plus');
plusBtn.onclick = function () {
    document.getElementById('operator').value = 'plus';
};

var minusBtn = document.getElementById('minus');
minusBtn.onclick = function () {
    document.getElementById('operator').value = 'minus';
};

var mulBtn = document.getElementById('multiplication');
mulBtn.onclick = function () {
    document.getElementById('operator').value = '*';
};

var divBtn = document.getElementById('division');
divBtn.onclick = function () {
    document.getElementById('operator').value = '/';
};

var remBtn = document.getElementById('remainder');
remBtn.onclick = function () {
    document.getElementById('operator').value = '%';
};

var equalBtn = document.getElementById('equalBtn');
equalBtn.onclick = function () {
 var operat = document.getElementById('operator').value;
 var res = myCalculator(operat);
 document.getElementById('result').value = res;
}

var clearBtn = document.getElementById('clearBtn');
clearBtn.onclick = function () {
    document.getElementById('firstNumber').value = ' ';
    document.getElementById('secondNumber').value = ' ';
    document.getElementById('operator').value = ' ';
    document.getElementById('result').value = ' ';
}




function myCalculator(bitmoroperator) {
    var num1 = Number(document.getElementById('firstNumber').value);
    var num2 = Number(document.getElementById('secondNumber').value);
    switch (bitmoroperator) {
        case 'plus':
            var result = num1+num2;
            break;
        case 'minus':
            var result = num1-num2;
            break;
        case '*':
            var result = num1*num2;
            break;
        case '/':
            var result = num1/num2;
            break;
        case '%':
            var result = num1%num2;
            break;
    }
        return result;
    
}

// var plusBtn = document.getElementById('plus');
// plusBtn.onclick =function () {
//     //var result = myCalculator('+');
//     document.getElementById('result').value = myCalculator('+');
// };
//
// var minusBtn = document.getElementById('minus');
// minusBtn.onclick =function () {
//     //var result = myCalculator('+');
//     document.getElementById('result').value = myCalculator('-');
// };
//




// var plusBtn = document.getElementById('plus');
// plusBtn.onclick = function() {
//     var firstNumber = Number(document.getElementById('firstNumber').value);
//     var secondNumber = Number(document.getElementById('secondNumber').value);
//     var sum = firstNumber+secondNumber;
//     document.getElementById('result').value = sum;
// }
//
// var minusBtn = document.getElementById('minus');
// minusBtn.onclick = function() {
//     var firstNumber = Number(document.getElementById('firstNumber').value);
//     var secondNumber = Number(document.getElementById('secondNumber').value);
//     var min= firstNumber-secondNumber;
//     document.getElementById('result').value = min;
// }
//
// var multiplicationBtn = document.getElementById('multiplication');
// multiplicationBtnBtn.onclick = function() {
//     var firstNumber = Number(document.getElementById('firstNumber').value);
//     var secondNumber = Number(document.getElementById('secondNumber').value);
//     var mul = firstNumber*secondNumber;
//     document.getElementById('result').value = mul;
// }
