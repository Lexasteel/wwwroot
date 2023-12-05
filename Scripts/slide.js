$(document).ready(function() {

    // Expand Panel
    $("#open").click(function() {
        $("div#panel").slideDown("slow");
        $(".tab ul.login").css("top", "-1.5em");
    });

    // Collapse Panel
    $("#close").click(function() {
        $(".tab ul.login").css("top", "0em");
        $("div#panel").slideUp("slow");
    });

    // Switch buttons from "Log In | Register" to "Close Panel" on click
    $("#toggle a").click(function() {
        $("#toggle a").toggle();
    });

});
