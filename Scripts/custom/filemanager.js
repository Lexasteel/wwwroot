// Always test EVERYTHING! Script errors suck.

function PrintContent() {
    if (window.frames['OutContent'].innerHTML != "") {
        var clone = window.frames['OutContent'].cloneNode(true);
        var win = window.open('about:blank');
        win.document.replaceChild(clone, win.document.documentElement);
        win.print();

        //window.frames['OutContent'].focus();
        //window.frames['OutContent'].print();
    }
    else {
        setTimeout(PrintContent, 1000);
    }
}


function HiddenShow() {
    if (document && document.getElementById("file-browser")) {
        var fBrowser = document.getElementById("file-browser");
        var fContent = document.getElementById("file-content");

        if (fBrowser.style.visibility == "visible" || fBrowser.style.visibility == "") {
            document.hide_img.src = "../../Content/images/show.png";
            fBrowser.style.visibility = "hidden";
            fBrowser.style.position = "absolute";
            fContent.style.width = "100%";
        }
        else {
            document.hide_img.src = "../../Content/images/hide.png";
            fBrowser.style.visibility = "visible";
            fBrowser.style.position = "relative";
            fContent.style.width = "74%";
        }
    }
    $("iframe").attr("height", fBrowser.clientHeight);
}

function HiddenShowAll() {
    if (document && document.getElementById("file-browser")) {
        var fBrowser = document.getElementById("file-browser");
        var fHeader = document.getElementById("header");
        var fContent = document.getElementById("file-content");
        var fWrapper = document.getElementById("wrapper");

        if (fHeader.style.visibility == "visible" || fHeader.style.visibility == "") {
            document.hide_all.src = "../../Content/images/minimize.png";
            document.hide_img.src = "../../Content/images/show.png";

            fBrowser.style.position = "absolute";
            fBrowser.style.visibility = "hidden";

            fHeader.style.position = "absolute";
            fHeader.style.visibility = "hidden";

            fContent.style.width = "100%";
            fContent.style.minHeight = "600px";

        }
        else {
            document.hide_all.src = "../../Content/images/maximize.png";
            document.hide_img.src = "../../Content/images/hide.png";

            fBrowser.style.position = "relative";
            fBrowser.style.visibility = "visible";

            fHeader.style.position = "relative";
            fHeader.style.visibility = "visible";

            fContent.style.width = "74%";
            fContent.style.minHeight = "500px";
        }
    }
    $("iframe").attr("height", fBrowser.clientHeight);
}

function MakeRedirect(url) {
    window.open(url, url, "width=1000, height=500, resizeable, scrollbars");
}