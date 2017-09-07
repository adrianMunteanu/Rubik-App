var lastIndex = 0;

function randomImage() {
  var theImage = document.getElementById('cll-image');
  var imgDir = 'cll-algs/';
  var imgArray = ['bigtv.jpg','caddy.jpg','fatcat.jpg','manhart.jpg','roastdog.jpg'];
  var algLength = 20;
  var algs = new Array();
  var imgIndex = 1;

  if(imgArray.length > 1) {


    imgIndex = Math.floor(Math.random() * 15 + 1);

    lastIndex = imgIndex;

    // var imgPath = imgDir + imgArray[imgIndex];
    var imgPath = imgDir + imgIndex + ".gif";

    theImage.src = imgPath;
    theImage.alt = imgIndex;
  }
}




$(window).keypress(function (e) {
  if (e.keyCode === 0 || e.keyCode === 32) {
    e.preventDefault()
    randomImage();
  }
})
