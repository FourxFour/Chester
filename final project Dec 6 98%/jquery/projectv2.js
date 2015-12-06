$(document).ready(function(){
		$('a[href="#blog"],a[href="#rational"],a[href="#prototype"],a[href="#project"],a[href="#intro"]').on('click',function(e){
			e.preventDefault();
			var target = this.hash;
			var $target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top},900,'swing',function(){
					window.location.hash = target;
			});
		});

	$('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');

		var amountScrolled = 300;

		$(window).scroll(function() {
			if ($(window).scrollTop() > amountScrolled) {
				$('a.back-to-top').fadeIn('slow');
			} else {
				$('a.back-to-top').fadeOut('slow');
			}
		});

		$('a.back-to-top').click(function() {		
			$('html, body').animate({
				'scrollTop': 0
			}, 800);
			return false;
		});


		$('.hover1').hover(function(){
			$('.description1').fadeTo(100,1);
		},

			function(){
				$('.description1').fadeTo(10,0);
			}

		);

		$('.hover2').hover(function(){
			$('.description2').fadeTo(100,1);
		},

			function(){
				$('.description2').fadeTo(10,0);
			}

		);


		$('.hover3').hover(function(){
			$('.description3').fadeTo(100,1);
		},

			function(){
				$('.description3').fadeTo(10,0);
			}

		);

		$('.hover4').hover(function(){
			$('.description4').fadeTo(100,1);
		},

			function(){
				$('.description4').fadeTo(10,0);
			}

		);

	});