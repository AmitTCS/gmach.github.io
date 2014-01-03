// JavaScript Document
$(document).ready(function(){if($(window).width()>970){setParaHeight();$(window).resize(function(){setParaHeight()})}});function setParaHeight(){$("section").css("min-height",$(window).height());$("section").css("height","auto");if($(window).height()>480){$("section").css("min-height",$(window).height())}}
jQuery(function( $ ){
			$.localScroll({
				queue:true,
				duration:1000,
				hash:true,
				onBefore:function( e, anchor, $target ){
					// The 'this' is the settings object, can be modified
				},
				onAfter:function( anchor, settings ){
					// The 'this' contains the scrolled element (#content)
				}
			});
		});