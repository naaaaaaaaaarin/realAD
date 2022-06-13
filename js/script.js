;(function($){
	$(function(){
        emailjs.init("LmMo_rtEwFWcTsDkh");

		$("#send_btn").click(function(e){
			e.preventDefault();

			emailjs.sendForm('connectlab1111@gmail.com', 'template_8pzarvl', '#contact-mail')
			.then(function(response) {
				alert("문의가 완료되었습니다. 최대한 빠르게 연락 드리겠습니다.");
			}, function(error) {
				alert("메일의 전송이 실패하였습니다.");
			});

		});
});
})(jQuery);