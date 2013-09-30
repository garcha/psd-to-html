/*
 *
 * (c) 2013 Copyright 2013 Lunada Biomedical. All Rights Reserved.
 * Author: Lunada Biomedical
 * Owner: Lunada Biomedical
 * Version: 0.2.0
 * Site Release: 2
 * 
 * Legal: Any use of the code written here-in belongs to the developer
 * and is hereby the owner.  If used, one must have strict
 * approval by the developer of the code written here-in.
 * The developer may at anytime change, modify, add, or delete
 * any content contained within.
 * 
 * Notice: Note that this page contains general information about
 * web page copyright. If you are in any doubt about having permission
 * to copy something then contact the site owner or seek legal advice.
 * 
 */

var validationSettings = {
	errorMessagePosition : 'element',
	borderColorOnError : ''
}; 

function set_view_details ()
{
	$('.content .overview .data').hide ();
	$('.data', $(this).parent ()).show ();
	$('.transaction .overview > ul').height ($('.data', $(this).parent ()).prop ('scrollHeight') + 40);
	$('.content .overview li > a div').removeClass ('active');
	$('div', $(this)).addClass ('active')

	return false;
}

function set_view_testimonials ()
{
	var reviews = this;

	$('.testimonials .reviews').fadeToggle ('fast',
		function ()
		{

			$('.testimonials .' + $(reviews).attr ('action')).fadeIn ('slow');
		}
	);
	return false;
}

function set_view_testimonials_other ()
{
	var reviews = this;

	$(this.parentNode.parentNode).fadeToggle ('fast',
		function ()
		{

			$('.testimonials .' + $(reviews).attr ('action')).fadeToggle ({duration:'slow',easing:'linear'});
		}
	);
	return false;
}

$(document).ready (

	function ()
	{
		$('.content .overview li > a').click (set_view_details);
		$('.testimonials .reviews a').click (set_view_testimonials);
		$('.testimonials .list a').click (set_view_testimonials_other);

		complexLoad (
			[
				'/img/main_nav_bg_hover.jpg',
				'/img/try_amberen_hover.png',
				'/img/main_nav_open.jpg',
				'/img/main_nav_close.jpg',
				'/img/link_learn_more_hover.png',
				'/img/play_video_hover.png',
				'/img/ingredients_hover.png'
			]
		);

		$("a[rel^='prettyPhoto']").prettyPhoto();
		$("a[rel^='newsletter']").prettyPhoto(
			{
					social_tools: null
			}
		);


		$('form#subscribe input[type="input"]').focus(
			function ()
			{
				if ($(this).val () == 'Enter Your Email Address')
				{
					$(this).val ('');
				}
			}
		);

		$('form#subscribe input[type="input"]').blur(
			function ()
			{
				if ($(this).val () == '')
				{
					$(this).val ('Enter Your Email Address');
				}
			}
		);
		$('form#subscribe').submit(
			function()
			{
				if (!$(this).validate(false, validationSettings))
				{
					return false;
				}

				var form = this;
				$.post ($(this).attr ('action'),
					$(this).serializeArray (),
					function (response)
					{

						response = $.parseJSON (response);

						if (response.result.status == 'success')
						{
							$('input[type="input"]', $(form)).val (response.result.message)
							$('input[type="input"]', $(form)).effect ('highlight')
						}
						else if (response.result.status == 'failure')
						{
							$('input[type="input"]', $(form)).val (response.result.message);
							$('input[type="input"]', $(form)).css ('background','#f00');
							return false;
						}
					}
				);

				return false;
			}
		).validateOnBlur(false, validationSettings).showHelpOnFocus(); 
	}
);


function complexLoad(fileNames)
{
	for (var x = 0; x < fileNames.length; x++)
	{
		$('<img>').attr(
			{
				id: fileNames[x],
				src: fileNames[x]
			}
		)
			.appendTo('body')
			.css(
				{
					display: 'none'
				}
			);
	}
}

/* begin [ merge from production site ] */
function popup(mylink, windowname)
{
if (! window.focus)return true;
var href;
if (typeof(mylink) == 'string')
   href=mylink;
else
   href=mylink.href;
window.open(href, windowname, 'width=500,height=400,scrollbars=yes');
return false;
}
/* end [ merge from production site ] */
