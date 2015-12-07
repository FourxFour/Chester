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


		$('.description1').hover(function(){
			$('.hover1').fadeTo(1000,0);
			$('.description1').fadeTo(1000,1);
		},

			function(){
				$('.description1').fadeTo(1000,0);
				$('.hover1').fadeTo(1000,1);
			}

		);

		$('.description2').hover(function(){
			$('.hover2').fadeTo(1000,0);
			$('.description2').fadeTo(1000,1);
		},

			function(){
				$('.description2').fadeTo(100,0);
				$('.hover2').fadeTo(1000,1);
			}

		);


		$('.description3').hover(function(){
			$('.hover3').fadeTo(1000,0);
			$('.description3').fadeTo(1000,1);
		},

			function(){
				$('.description3').fadeTo(100,0);
				$('.hover3').fadeTo(1000,1);
			}

		);

		$('.description4').hover(function(){
			$('.hover4').fadeTo(1000,0);
			$('.description4').fadeTo(1000,1);
		},

			function(){
				$('.description4').fadeTo(1000,0);
				$('.hover4').fadeTo(1000,1);
			}

		);

	});