// header scroll Event
$(window).on("scroll",function(){
  const videoHeight = $("video").height();
  if($(window).scrollTop()>videoHeight) {
    $("#header").css({"opacity":"1"});
  } else {
    $("#header").css({"opacity":"0.8"});
  }
});

