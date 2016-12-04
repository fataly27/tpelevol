$(function() {
	$('nav ul li a').click(function()
	{
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)
		{
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length)
			{
				$('html, body').animate(
				{
					scrollTop: target.offset().top - $('#fixed-nav').outerHeight(true)
					
				}, 1500);
				return false;
			}
		}
	});
	
	$(window).scroll(showOrHide);
	$(window).resize(showOrHide);
	
	showOrHide();
});

function showOrHide()
{
	if ($('#static-nav').offset().top - $(window).scrollTop() < 0)
			$('#fixed-nav').show();
	else
		$('#fixed-nav').hide();
}

$("video").hover(function()
{
  $(this).prop("controls", true);
  
}, function()
{
	$(this).prop("controls", false);

});

$("video").click(function()
{
	if( this.paused)
		this.play();
	else
		this.pause();
});
$('video').on('ended', function()
{
	var v = this.currentSrc;
    this.src='';
    this.src = v;
});