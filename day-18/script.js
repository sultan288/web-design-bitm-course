

var img1 = document.getElementById('img1');
img1.onclick = function () {
    var img = document.getElementById('img1').getAttribute('src');
    document.getElementById('mainImage').setAttribute('src',img);
}

var img2 = document.getElementById('img2');
img2.onclick = function () {
    var img2 = document.getElementById('img2').getAttribute('src');
    document.getElementById('mainImage').setAttribute('src',img2);
}

var img3 = document.getElementById('img3');
img3.onclick = function () {
    var img3= document.getElementById('img3').getAttribute('src');
    document.getElementById('mainImage').setAttribute('src',img3);
}

var img4 = document.getElementById('img4');
img4.onclick = function () {
    var img4 = document.getElementById('img4').getAttribute('src');
    document.getElementById('mainImage').setAttribute('src',img4);
}



//This is created By me but not dynamic, It is static.

// var mainImage = document.getElementById('mainImage');
// mainImage.setAttribute('src','images/3.jpg');

// var img1 = document.getElementById('img1');
// img1.onclick = function () {
//     mainImage.setAttribute('src','images/1.jpg');
// }
//
// var img2 = document.getElementById('img2');
// img2.onclick = function () {
//     mainImage.setAttribute('src','images/2.jpg');
// }
//
// var img3 = document.getElementById('img3');
// img3.onclick = function() {
//     mainImage.setAttribute('src','images/3.jpg');
// }
//
// var img4 = document.getElementById('img4');
// img4.onclick = function () {
//     mainImage.setAttribute('src','images/4.jpg');
// }

// var mainImage = document.getElementById('mainImage');
// // var srcAttributeValue = mainImage.getAttribute('height');
// // alert(srcAttributeValue);
// mainImage.setAttribute('src','images/2.jpg');

// var mainIm = document.getElementById('mainImage');
// mainIm.onclick = function () {
//     mainImage.setAttribute('src','images/1.jpg');
// }


// var homeBtn = document.getElementById('homeBtn');
// homeBtn.onclick = function () {
//     document.getElementById('heading').innerHTML = 'This is Home Heading';
//     document.getElementById('paragraph').innerHTML = 'This is home Paragraph';
// };
//
// var aboutElement = document.getElementById('aboutBtn');
// aboutElement.onclick = function () {
//     document.getElementById('heading').innerHTML = 'This is about heading';
//     document.getElementById('paragraph').innerHTML = 'This is about paragraph';
//   }
//
// var conElement = document.getElementById('contactBtn');
// conElement.onclick = function () {
//     document.getElementById('heading').innerHTML = 'This is contact heading';
//     document.getElementById('paragraph').innerHTML = 'This is contact paragraph';
// }

// var redBtn = document.getElementById('redBtn');
// redBtn.onclick = function() {
//     var divOne = document.getElementById('divOne');
//     divOne.className = 'class-one';
//     //divOne.className = 'class-one class-two';
//
// }
//
// var greenBtn = document.getElementById('greenBtn');
// greenBtn.onclick = function () {
//     var divOne = document.getElementById('divOne');
//     divOne.style.backgroundColor = 'green';
//     divOne.style.borderRadius = '10px';
// }
//
// var blueBtn =  document.getElementById('blueBtn');
// blueBtn.onclick = function () {
//     var divOne = document.getElementById('divOne');
//     divOne.style.backgroundColor = 'blue';
//
// }
//
// var defaultBtn = document.getElementById('defaultBtn');
// defaultBtn.onclick = function() {
//     var divOne = document.getElementById('divOne')
//     divOne.style.backgroundColor = 'white';
// }



// var btnElement = document.getElementById('btn');
// btnElement.onclick = function () {
//    var startNum = document.getElementById('startingNumber').value;
//    var endNum = document.getElementById('endingNumber').value;
//
//    var res = '';
//    for (var i=startNum; i<=endNum; i++) {
//        res = res+i+', ';
//         document.getElementById('result').innerHTML = res;
//    }
// }

