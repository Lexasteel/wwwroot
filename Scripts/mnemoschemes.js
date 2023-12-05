var mselector = "div[id^='svgdiv']";
var refreshAttribute = "refresh";
var urlAttribute = "src";
var stateAttribute = "state";
var mtimers = [];

$(document).ready(function() {
    $(mselector).each(function() {
        var container = $(this);
        var refreshTimeout = parseInt(container.attr(refreshAttribute));
        if (refreshTimeout < 500) {
            refreshTimeout = 500;
        }
        var url = container.attr(urlAttribute);
        if ((url != undefined) && (url.length > 0)) {
            
            container.append("<div id=\"front\"></div>");
            container.append("<div id=\"back\" style=\"display:none\"></div>");
            
            var visDiv = container.children("div:visible");
            var hidDiv = container.children("div:hidden");
			
			
            container.attr(stateAttribute, "load");
            visDiv.load(url, function() {
                container.attr(stateAttribute, "idle");
               
            });
			
			//visDiv.load = showHide(visDiv, hidDiv);
			//hidDiv.load = showHide(hidDiv, visDiv);
			
            mtimers.push(setInterval(function() {
                var visDiv = container.children("div:visible");
                var hidDiv = container.children("div:hidden");

                if (container.attr(stateAttribute) == "idle") {
                    container.attr(stateAttribute, "load");
                    hidDiv.load(url, function() {
                        try
						{
							var visDiv = container.children("div:visible");
							var hidDiv = container.children("div:hidden");
							
							var image = hidDiv.children("img");
							if ((image.size() != 0) && (!$.browser.opera))
							{
								image.unbind();
								image.load(function() {showHide(hidDiv, visDiv); container.attr(stateAttribute, "idle");});
							}
							else
							{	
								showHide(hidDiv, visDiv); 
								container.attr(stateAttribute, "idle");
							}
						}
						catch (e) 
						{
							showHide(hidDiv, visDiv); 
							container.attr(stateAttribute, "idle");
						}
						
                    });
                }
            }, refreshTimeout));
        }
    });
    setInterval(emulateBlink, 1000);

});

function showHide(toShow, toHide){
	toShow.show();
	toShow.context.style.zIndex = 10;
	toHide.context.style.zIndex = 0;
	toHide.hide();
};

function emulateBlink() {
    var h = $("span.blink:hidden");
    var v = $("span.blink:visible");
    h.show(); v.hide();
}
