$('#heading').click(function () {
    //$('#heading').css('color', 'red');
    $('#heading').css({
        'color' : 'red',
        'font-size' : '100px',
        'background-color' : 'green'
    })

})


// var heading = document.getElementById('heading');
// heading.onclick = function () {
//     var content = document.getElementById('heading');
//     content.style.color = 'red';
// }




//var data = new Array();
// var dataTime = new Date();
// var hours = dataTime.getHours();
// var minutes = dataTime.getMinutes();
// var secondes = dataTime.getSeconds();
// document.getElementById('watch').innerHTML = hours+ ' : ' +minutes+ ' : ' +secondes;

//alert(dataTime);
//alert(dataTime.getHours());


function watch() {
    var dataTime = new Date();
    var hours = dataTime.getHours();
    var minutes = dataTime.getMinutes();
    var secondes = dataTime.getSeconds();
    document.getElementById('watch').innerHTML = hours+ ' : ' +minutes+ ' : ' +secondes;
}
setInterval(watch, 1000);

var imageData = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg']
var index = 0;

function changeImage() {
    var mainImage = document.getElementById('mainImage');
    mainImage.setAttribute('src',imageData[index]);
    index++
    if (index >= imageData.length) {
        index = 0;
    }

}
setInterval(changeImage, 1000)

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


//PRACTICE OF THIS DAY-19 (JS AND JQUERY)

function Clock() {
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    document.getElementById('watch1').innerHTML = hours + ':' + minutes + ':' + seconds;
}
setInterval(Clock,1000);

var imageData1 = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg'];
var index1 = 0;
function changeImage1() {
    var mainImage = document.getElementById('mainImage1');
    mainImage.setAttribute('src',imageData1[index1]);
    index1++;
    if (index1 >=imageData1.length) {
        index1 = 0;
    }
}
setInterval(changeImage1, 1000);



var img1 = document.getElementById('img11');
img1.onclick = function (){
    var img1 = document.getElementById('img11').getAttribute('src');
    document.getElementById('mainImage1').setAttribute('src',img1);
}
var img2 = document.getElementById('img21');
img2.onclick = function () {
    var img2 = document.getElementById('img21').getAttribute('src');
    document.getElementById('mainImage1').setAttribute('src',img2);
}
var img3 = document.getElementById('image31');
img3.onclick = function () {
    var img3 = document.getElementById('image31').getAttribute('src');
    document.getElementById('mainImage1').setAttribute('src',img3);
}
var img4 = document.getElementById('img41');
img4.onclick = function () {
    img4 = document.getElementById('img41').getAttribute('src');
    document.getElementById('mainImage1').setAttribute('src', img4);
}