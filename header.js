$(document).ready(function(){
    

    var entered_apps = false;
	$("#request_text").fadeOut();

	// initialize links to plain black
	$("#home_link").css("color", "black");
	$("#cont_link").css("color", "black");
	$("#res_link").css("color", "black");
	$("#apps_link").css("color", "black");
	$("#serv_link").css("color", "black");
	$("#links_link").css("color", "black");

	$("#home_link").css("text-decoration", "none");
	$("#cont_link").css("text-decoration", "none");
	$("#res_link").css("text-decoration", "none");
	$("#apps_link").css("text-decoration", "none");
	$("#serv_link").css("text-decoration", "none");
	$("#links_link").css("text-decoration", "none");
	
	$("#app_bar").hide();

	$("#app_bar").mouseover(function()
	{
		var offset = window.pageYOffset;
		if(offset > 0)
		{
			$("#app_bar").css("margin-top", "70px");
		}
		else
		{
			$("#app_bar").css("margin-top", "100px");
		}
		$("#app_bar").fadeIn();
		entered_apps = true;
	})

	$("#message_div").click(function()
	{
		console.log("message");
	})
	
	$(document).mousemove(function(e)
	{
		var offset = window.pageYOffset;

		if(e.pageY > 155 + offset)
		{
			$("#app_bar").fadeOut();
		}
	})

	$(document).hover(function()
	{
		$("#app_bar").fadeOut();
		console.log("hovered over document");
	})


	// link handlers
	$("#links").mouseover(function()
	{
		clear_decorations();
		$("#links").css("text-decoration", "overline");
	})

	$("#links").mouseleave(function()
	{
		clear_decorations();
	})


	// contactr handlers
	$("#contact").mouseover(function()
	{
		clear_decorations();
		$("#contact").css("text-decoration", "overline");
	})

	$("#contact").mouseleave(function()
	{
		clear_decorations();
	})

	$("#dev").mouseover(function()
	{
		clear_decorations();
		$("#dev").css("text-decoration", "overline");
	})

	$("#dev").mouseleave(function()
	{
		clear_decorations();

	})


	// app handlers
	$("#app").mouseover(function()
	{
		clear_decorations();
		$("#app_bar").fadeIn();
		$("#app").css("text-decoration", "overline");
	})

	$("#app").mouseleave(function()
	{
		clear_decorations();
	})


	// resume handlers
	$("#resume").mouseover(function()
	{
		clear_decorations();
		$("#resume").css("text-decoration", "overline");
		$("#app_bar").fadeOut();
	})

	$("#resume").mouseleave(function()
	{
		clear_decorations();

	})

	// service handlers
	$("#serv").mouseover(function()
	{
		clear_decorations();
		$("#serv").css("text-decoration", "overline");
		$("#app_bar").fadeOut();

	})

	$("#serv").mouseleave(function()
	{
		clear_decorations();

	})

	$(window).scroll(function()
	{
		if(window.pageYOffset != 0)
		{
			//$("#tab_bar").animate({opacity: '0.9'});
			$("#tab_bar").css("height", "70px");
			$("#tab_bar").css("line-height", "70px");
			
		}
		else
		{
			//$("#tab_bar").animate({opacity: '0.9'});
			$("#tab_bar").css("height", "100px");
			$("#tab_bar").css("line-height", "100px");
			
		}
	})


	function clear_decorations()
	{
		$("#app").css("text-decoration", "none");
		$("#contact").css("text-decoration", "none");
		$("#serv").css("text-decoration", "none");
		$("#links").css("text-decoration", "none");
		$("#resume").css("text-decoration", "none");
	}

});