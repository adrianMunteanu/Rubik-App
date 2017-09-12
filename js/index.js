var lastIndex = 0;
var timer;
var spaces = 0;
function randomImage() {
  var theImage = document.getElementById('cll-image');
  var imgDir = 'cll-algs/';
  var imgArray = ['bigtv.jpg','caddy.jpg','fatcat.jpg','manhart.jpg','roastdog.jpg'];
  var algs = [
    'R U R\' U R U2 R\'',
    '(U\') R\' F R2 F\' R U2 R\' U\' R2',
    'F R\' F\' R U2 R U2 R\'',
    'R U\' R\' F L\' U\' L',
    '(U2) R U\' R U\' R\' U R\' U\' y R U\' R\'',
    'L\' U2 L U2 L F\' L\' F',
    'R U2 R\' U\' R U\' R\'',
    'R\' U R U\' R2\' F R F\' R U R\' U\' R',
    'F\' L F L\' U2 L\' U2 L',
    'R\' F R F\' R U R\'',
    'R\' F2 R F\' R\' F2 R U\' R\' F R F\'',
    'R U2 R\' U2 R\' F R F\'',
    'R2 U2 R U2\' R2\'',
    'F R U R\' U\' R U R\' U\' R U R\' U\'F\'',
    'R U R\' U R U R\' F R\' F\' R',
    'R\' U2 R y R\' U R\' U\' R U\' R'
  ];
  var imgIndex = 1;

  if(imgArray.length > 1) {

    var cllCase = 0;

    while(!isCaseSelected(cllCase) || (lastIndex == imgIndex)){
      // alert(lastIndex + " "  + imgIndex)
      imgIndex = Math.floor(Math.random() * 40 + 1);

      cllCase = Math.floor(imgIndex / 6.01 +1) ;
      // alert(lastIndex + " "  + imgIndex + " " + cllCase)

    }
    lastIndex = imgIndex;

    // var imgPath = imgDir + imgArray[imgIndex];
    var imgPath = imgDir + imgIndex + ".gif";

    theImage.src = imgPath;
    theImage.alt = imgIndex;
    $('#algorithm').hide();
    $('#algorithm').text(imgIndex + ":  " + algs[imgIndex - 1]);
    $('#algorithm').fadeIn(4500);
    if (timer != null) timer.stop();
    timer = new Timer();
    timer.start({precision: 'secondTenths', callback: function (values) {
      $('#timer').html(values.toString([ 'seconds', 'secondTenths']));
    }});
    timer.addEventListener('secondsUpdated', function (e) {
      $('#timer').html(timer.getTimeValues().toString());
    });
  }
}




$(window).keypress(function (e) {
  spaces++;
  if (e.keyCode === 0 || e.keyCode === 32) {
    e.preventDefault()
    if(spaces % 2 ==0){

      randomImage();
    }
    else{
      timer.pause();
      $('#algorithm').show();
      $(results).prepend("<div class='impact-font row'><div class='float-red'>" + timer.getTimeValues().toString([ 'seconds', 'secondTenths']) + "</div><div class='raleway-font'>s&nbsp;&nbsp;&nbsp; " + getFormattedDate() +"</div></div>");    }
    }
  })


  function getFormattedDate() {
    var date = new Date();
    var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    return str;
  }


  function isCaseSelected(cllCasee){
    if(cllCasee == 0) return false;

    if($(".radio:nth-child(" + cllCasee + ") .radio-option").hasClass("click")){
      console.log("isCase -> " + cllCasee);
      return true;
    }
    console.log("!isCase -> " + cllCasee);
    return false;
  }


  $(document).ready(function () {
    $('.radio-option').click(function () {
      $(this).not(this).removeClass('click');
      $(this).toggleClass("click");
    });



    // $('li').click(function () {
    //   alert($(this).index())
    // });

  });
