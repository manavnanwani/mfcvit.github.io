
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("mainDiv").style.display = "block";
}


$(function(){
	$(document).scroll(function(){
		var $nav = $("#mainNav");
		$nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
	})
})

const words = ["DEVELOPERS", "DESIGNERS", "CODERS","EVERYONE!!"];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 200);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 100);
	};
	loopDeleting();
};

typingEffect();


$(".nav-it").click(function(){
	$(".nav-it").removeClass("selected");
	$(this).toggleClass("selected");
});

$(function(){
	$(document).scroll(function(){
		$(".nav-it").removeClass("selected");
		$("#towork").toggleClass("selected", $(this).scrollTop() > "735" && $(this).scrollTop() < "2210");
		$("#tohome").toggleClass("selected", $(this).scrollTop() < "735");
		$("#tolearn").toggleClass("selected", $(this).scrollTop() > "2210" && $(this).scrollTop() < "3110");
		$("#tosome").toggleClass("selected", $(this).scrollTop() > "3110" && $(this).scrollTop() < "4010");
		$("#tocont").toggleClass("selected", $(this).scrollTop() > "4010");
	})
});

$(function(){
	$(document).hover(function(){
		$(".nav-ele").toggleClass("small", $(window).width() < "991");
		$("#mainNav").toggleClass("smallBack", $(window).width() < "991");
		})
	});


$(function(){
	$(document).hover(function(){
		$("#gg,#word,#blinking").toggleClass("flex-small", $(window).width() < "991");
		})
	});

$(function(){
	$(document).hover(function(){
		$("#flex").toggleClass("flex-div", $(window).width() < "991");
		})
	});



$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        placement : 'top',
        trigger: 'hover'
    })
});
// <div class="owl-stage" style="transform: translate3d(-2820px, 0px, 0px); transition: all 0.25s ease 0s; width: 5660px; padding-left: 10px; padding-right: 10px;">