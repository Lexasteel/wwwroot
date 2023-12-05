var jsddm_timeout    = 500;
var jsddm_closetimer = 0;
var jsddmenuitem = 0;

function jsddm_open()
{  
	jsddm_canceltimer();
	jsddm_close();
	jsddmenuitem = $(this).find('ul').css('visibility', 'visible');
}

function jsddm_close()
{  
	if(jsddmenuitem) jsddmenuitem.css('visibility', 'hidden');
}

function jsddm_timer()
{  
	jsddm_closetimer = window.setTimeout(jsddm_close, jsddm_timeout);
}

function jsddm_canceltimer()
{  
	if (jsddm_closetimer)
	{  
		window.clearTimeout(jsddm_closetimer);
		jsddm_closetimer = null;
	}
}

$(document).ready(function() {
    $('#jsddm > li').bind('mouseover', jsddm_open);
    $('#jsddm > li').bind('mouseout', jsddm_timer);
});

 document.onclick = jsddm_close;