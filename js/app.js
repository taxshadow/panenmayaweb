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
        backgroundColorAttr: 'data-background'
      });
});