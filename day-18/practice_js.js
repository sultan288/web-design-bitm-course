

var img1 = document.getElementById('img1');
img1.onclick = function () {
    var img = document.getElementById('img1').getAttribute('src');
    document.getElementById('mainImage').setAttribute('src',img);
}

var img2 = document.getElementById('img2');
img2.onclick = function () {
    var img = document.getElementById('img2').getAttribute('src');
    document.getElementById('mainImage').setAttribute('src',img)
}

var img3 = document.getElementById('image3');
img3.onclick = function () {
    var img3 = document.getElementById('image3').getAttribute('src');
    document.getElementById('mainImage').setAttribute('src',img3);
}


var img4 = document.getElementById('img4');
img4.onclick = function () {
    var img4 = document.getElementById('img4').getAttribute('src');
    document.getElementById('mainImage').setAttribute('src',img4);
}


// var homeBtn = document.getElementById('homeBtn');
// homeBtn.onclick = function () {
//    document.getElementById('heading').innerHTML = 'This is home Heading';
//    document.getElementById('paragraph').innerHTML = 'This is home paragraph';
// }
// var aboutBtn = document.getElementById('aboutBtn');
// aboutBtn.onclick = function () {
//     document.getElementById('heading').innerHTML = 'This is about Heading';
//     document.getElementById('paragraph').innerHTML = 'This is About paragraph';
// }


// var redBtn = document.getElementById('redBtn');
// redBtn.onclick = function () {
//     var divOne = document.getElementById('divOne');
//     divOne.style.backgroundColor = 'red';
// }
// var greedBtn = document.getElementById('greenBtn');
// greedBtn.onclick = function() {
//     var divOne = document.getElementById('divOne');
//     divOne.style.backgroundColor = 'green';
//     divOne.style.height = '300px';
// }
// var deeppBtn = document.getElementById('deeppinkBtn');
// deeppBtn.onclick = function () {
//     var divOne = document.getElementById('divOne');
//     divOne.style.backgroundColor = 'deeppink';
//
// }
// var skyBtn = document.getElementById('skyBtn');
// skyBtn.onclick = function () {
//     var divOne = document.getElementById('divOne');
//     divOne.className = 'div-three';
//     divOne.style.backgroundColor = 'blue';
// }



// var btnElement = document.getElementById('btn');
// btnElement.onclick = function () {
//     var startNum = document.getElementById('startingNumber').value;
//     var endNumb = document.getElementById('endingNumber').value;
//
//     var res =' ';
//     for(i=startNum; i<=endNumb; i++) {
//         res = res+i+',';
//        document.getElementById('result').value = res;
//     }
// }