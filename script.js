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
					
				}, 700);
				return false;
			}
		}
	});
	
	$(window).scroll(showOrHide);
});

function showOrHide()
{
	if ($('#static-nav').offset().top - $(window).scrollTop() < 0)
			$('#fixed-nav').show();
	else
		$('#fixed-nav').hide();
}