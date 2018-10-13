//Dropdown эффект меню
$(".barsHeader").click(function(){
   $('.navWrapper').slideToggle(400);
});

$(".barsLink").click(function(){
   $('.linkBlock ul').slideToggle(400);
});

//Меню и социальные сети адаптив
var menu1 = $(".navWrapper");
var menu2 = $('.linkBlock ul');
var wid = $(window).width();

$(window).resize(function() {
	if(wid){
		menu1.removeAttr('style');
		menu2.removeAttr('style');
	}
});

// if(wid < 768){
// 	$(".socialLinks").appendTo(".logo");
// }

