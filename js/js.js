$(document).ready(function(){

	$('.aside-slider-left').on('click', function(){
		
		if($(this).hasClass('.open')) {
            $(".left-aside").animate({left: '-300px'}, 500);
            $(".aside-slider-left").removeClass('.open');
        }
        else{
            $(".left-aside").animate({left: '0px'}, 500);
            $(".aside-slider-left").addClass('.open');
        }

	});// function move left aside

	
	$('.aside-slider-right').on('click', function(){
		if($(this).hasClass('.open')){
			$('.right-aside').animate({right:'-300px'},500);
			$('.aside-slider-right').removeClass('.open');
		}
		else{
			$('.right-aside').animate({right:'0px'},500);
			$('.aside-slider-right').addClass('.open');
		}
	});// function move right aside

});

   $('.banner').scroolly([
        {
            to: 'con-top',
            css: {
                position: 'absolute',
                top: '',
                right: '10px'
            }
        },
        {
            from: 'con-top',
            css: {
                position: 'fixed',
                top: '40px',
                right: '172px'
            }
        }
    ], $('.content'))// end scrolly-sticky