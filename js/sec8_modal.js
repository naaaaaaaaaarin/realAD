// Section_8 모달
$("#sec8 .click").click(function(){
  $('.info_modal').removeClass('none');
  $('body').css({"overflow":"hidden"});
});
$('.check').click(function(){
  $('.info_modal').addClass('none');
  $('body').css({"overflow":"auto"});
})