// header(PC)
$('header .pc .gnb li').mouseenter(function(){
  $(this).children(".snb").stop().css("display","block");
});
$('header .pc .gnb li').mouseleave(function(){
  $(this).children(".snb").stop().css("display","none");
});
// header gnb menu
$('header .pc .gnb li').click(function(){
  $(this).children(".snb").stop().toggle(0);
});

// header Side Menu(tab+mobile)
$('header .ham').click(function(){
  $('.overlay').css("display","block");
  $('.sideBox').css("right", "0");
});
$('.sideMenu .exit').click(function(){
  $('.overlay').css("display","none");
  $('.sideBox').css("right", "-120%");
})

