$(document).ready(function(){
	$(".preview").focus(function(){
		$("#image").css(
			{"background-image": "url('"+this.src+"')", "background-size": "cover"});
		$("#image").html(this.alt);
	})

	$(".preview").blur(function(){
		$("#image").css("background-image", "url('')");
		$("#image").html("Hover over an image below.");
	})

	$(".preview").hover(function(){
		$("#image").css(
			{"background-image": "url('"+this.src+"')", "background-size": "cover"});
		$("#image").html(this.alt);
	},
	function(){
		$("#image").css("background-image", "url('')");
		$("#image").html("Hover over an image below.");
	})

	});
