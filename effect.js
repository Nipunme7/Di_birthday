$(window).load(function () {
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function () {
	var vw;
	function positionLetterBalloons() {
		// Center the 7 "HBDXOLA" balloons and keep them inside the viewport.
		var $bs = $('#b11,#b22,#b33,#b44,#b55,#b66,#b77');
		if ($bs.length === 0) return;

		var w = $(window).width();
		var bw = $bs.first().outerWidth() || 80;
		var gap = Math.max(4, Math.round(bw * 0.15));
		var count = $bs.length;
		var total = (count * bw) + ((count - 1) * gap);
		var startLeft = Math.max(0, Math.round((w - total) / 2));
		var top = 240;

		$bs.each(function (i) {
			$(this).stop(true, false).animate({ top: top, left: startLeft + i * (bw + gap) }, 500);
		});
	}

	function randBetween(min, max) {
		return min + Math.random() * (max - min);
	}

	function balloonBounds() {
		var w = $(window).width();
		var h = $(window).height();
		var bw = $('.balloons').first().outerWidth() || 80;
		var bh = $('.balloons').first().outerHeight() || 140;
		return { w: w, h: h, bw: bw, bh: bh };
	}

	$(window).resize(function () {
		vw = $(window).width() / 2;
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		positionLetterBalloons();
	});

	$('#turn_on').click(function () {
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function () {
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function () {
		var audio = $('.song')[0];
		audio.play();
		$('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color', '#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function () {
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function () {
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function () {
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var b = balloonBounds();
		var randleft = randBetween(0, Math.max(0, b.w - b.bw));
		var randtop = randBetween(0, Math.max(0, b.h - b.bh));
		$('#b1').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopOne();
		});
	}
	function loopTwo() {
		var b = balloonBounds();
		var randleft = randBetween(0, Math.max(0, b.w - b.bw));
		var randtop = randBetween(0, Math.max(0, b.h - b.bh));
		$('#b2').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopTwo();
		});
	}
	function loopThree() {
		var b = balloonBounds();
		var randleft = randBetween(0, Math.max(0, b.w - b.bw));
		var randtop = randBetween(0, Math.max(0, b.h - b.bh));
		$('#b3').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopThree();
		});
	}
	function loopFour() {
		var b = balloonBounds();
		var randleft = randBetween(0, Math.max(0, b.w - b.bw));
		var randtop = randBetween(0, Math.max(0, b.h - b.bh));
		$('#b4').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopFour();
		});
	}
	function loopFive() {
		var b = balloonBounds();
		var randleft = randBetween(0, Math.max(0, b.w - b.bw));
		var randtop = randBetween(0, Math.max(0, b.h - b.bh));
		$('#b5').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopFive();
		});
	}

	function loopSix() {
		var b = balloonBounds();
		var randleft = randBetween(0, Math.max(0, b.w - b.bw));
		var randtop = randBetween(0, Math.max(0, b.h - b.bh));
		$('#b6').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopSix();
		});
	}
	function loopSeven() {
		var b = balloonBounds();
		var randleft = randBetween(0, Math.max(0, b.w - b.bw));
		var randtop = randBetween(0, Math.max(0, b.h - b.bh));
		$('#b7').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopSeven();
		});
	}

	$('#balloons_flying').click(function () {
		$('.balloon-border').animate({ top: -500 }, 8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();

		$(this).fadeOut('slow').delay(5000).promise().done(function () {
			$('#cake_fadein').fadeIn('slow');
		});
	});

	$('#cake_fadein').click(function () {
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function () {
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function () {
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function () {
			$('#wish_message').fadeIn('slow');
		});
	});


	$('#wish_message').click(function () {
		vw = $(window).width() / 2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id', 'b11');
		$('#b2').attr('id', 'b22')
		$('#b3').attr('id', 'b33')
		$('#b4').attr('id', 'b44')
		$('#b5').attr('id', 'b55')
		$('#b6').attr('id', 'b66')
		$('#b7').attr('id', 'b77')
		positionLetterBalloons();
		$('.balloons').css('opacity', '0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function () {
			$('#story').fadeIn('slow');
		});
	});

	$('#story').click(function () {
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function () {
			$('.message').fadeIn('slow', function () {
				// Show images when messages start displaying - set display to flex for side-by-side layout
				$('.message-images').css({ display: 'flex', opacity: 0 }).animate({ opacity: 1 }, 'slow');
			});
		});

		var i = 0;
		var $messages = $('.message p');
		var totalMessages = $messages.length;

		function msgLoop(i) {
			if (i < totalMessages) {
				$messages.eq(i).fadeIn('slow').delay(1000).promise().done(function () {
					if (i < totalMessages - 1) {
						// Not the last message - fade out and continue
						$messages.eq(i).fadeOut('slow').delay(800).promise().done(function () {
							msgLoop(i + 1);
						});
					} else {
						// Last message - fade it out then show cake
						$messages.eq(i).fadeOut('slow', function () {
							setTimeout(function () {
								$('.cake').fadeIn('fast');
							}, 800);
						});
					}
				});
			}
		}

		msgLoop(i);

	});
});




//alert('hello');