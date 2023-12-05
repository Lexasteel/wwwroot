function ExportToExcel() {

    $("a#export").hide();
    var bodyContent = '<html>' + document.documentElement.innerHTML + '</html>';
    $("a#export").show();

    var submitForm = document.createElement("FORM");
    submitForm.method = "POST";
    submitForm.action = window.location.pathname.replace("/Get/", "/AsExcelFile/");

    var _content = document.createElement("INPUT");
    _content.setAttribute("type", "hidden");
    _content.setAttribute("name", "content");
    _content.value = bodyContent;
    submitForm.appendChild(_content);

    var _displayedName = document.createElement("INPUT");
    _displayedName.setAttribute("type", "hidden");
    _displayedName.setAttribute("name", "displayedName");
    _displayedName.value = document.title;
    submitForm.appendChild(_displayedName);

    submitForm.setAttribute("style", "display:none;");

    document.body.appendChild(submitForm);
    submitForm.submit();
    document.body.removeChild(submitForm);
}

function CreateTable() {
    var currentUID = $("#uid").attr("value");

    var devices = $.ajax({
        url: '/Devices/EntireList',
        dataType: 'json',
        success: function(data) {
            $.each(data, function(index, element) {
                if (element.uid.toLowerCase() == currentUID.toLowerCase()) {
                    $("thead:not('." + element.series + "')").remove();
                    $('thead.' + element.series).show();
                }
            });
            $("#export").click(function() {
                ExportToExcel();
                return true;
            });
        }
    });
}

$(document).ready(function() {
    CreateTable();
});