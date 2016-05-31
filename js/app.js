$(document).ready(function(){
	$("#content-1").on({
		mouseenter: function(){
			$("#content-1").hide();
			$("#hover-1").show();
		}
	});
	$("#hover-1").on({
		mouseleave: function(){
			$("#content-1").show();
			$("#hover-1").hide();
		}
	});
	$("#content-2").on({
		mouseenter: function(){
			$("#content-2").hide();
			$("#hover-2").show();
		}
	});
	$("#hover-2").on({
		mouseleave: function(){
			$("#content-2").show();
			$("#hover-2").hide();
		}
	});
	$("#content-3").on({
		mouseenter: function(){
			$("#content-3").hide();
			$("#hover-3").show();
		}
	});
	$("#hover-3").on({
		mouseleave: function(){
			$("#content-3").show();
			$("#hover-3").hide();
		}
	});
	$("#content-4").on({
		mouseenter: function(){
			$("#content-4").hide();
			$("#hover-4").show();
		}
	});
	$("#hover-4").on({
		mouseleave: function(){
			$("#content-4").show();
			$("#hover-4").hide();
		}
	});
	$("#content-5").on({
		mouseenter: function(){
			$("#content-5").hide();
			$("#hover-5").show();
		}
	});
	$("#hover-5").on({
		mouseleave: function(){
			$("#content-5").show();
			$("#hover-5").hide();
		}
	});
	$("#content-6").on({
		mouseenter: function(){
			$("#content-6").hide();
			$("#hover-6").show();
		}
	});
	$("#hover-6").on({
		mouseleave: function(){
			$("#content-6").show();
			$("#hover-6").hide();
		}
	});
	$("#content-7").on({
		mouseenter: function(){
			$("#content-7").hide();
			$("#hover-7").show();
		}
	});
	$("#hover-7").on({
		mouseleave: function(){
			$("#content-7").show();
			$("#hover-7").hide();
		}
	});
	$("#content-8").on({
		mouseenter: function(){
			$("#content-8").hide();
			$("#hover-8").show();
		}
	});
	$("#hover-8").on({
		mouseleave: function(){
			$("#content-8").show();
			$("#hover-8").hide();
		}
	});
	$(".navbar-toggle").on({
		click: function(){
			$(".collapse").toggle();
		}
	})

	$("#scroll-1").click(function(){
        $(this).hide();
        $("#section-1").slideUp(700);
        $("#scroll-2").show();
        $("#section-2").slideDown(700);
      });
      $("#scroll-2").click(function(){
        $(this).hide();
        $("#section-2").slideUp(700);
        $("#scroll-1").show();
        $("#section-1").slideDown(700);
      });
      $('.content').sliphover({
        backgroundColor: 'rgba(30, 184, 196, 0.8)'
      });
});