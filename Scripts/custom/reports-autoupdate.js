var idTimer;

$(document).ready(function() {
    SetTimer();
});

function SetTimer()
{
    var time = document.getElementById("update-time").value;
    if (document.getElementById("is-update").checked && (time) && (time != "")) {
        if (time < 1) {
            time = 1;
        }
        idTimer = setTimeout(function() { window.location.reload(); }, time * 60000);
        }
}

function CheckChanged()
{
    clearInterval(idTimer);
    SetTimer();
}

function onlyNumbers(evt)
{
    var e = evt || window.event; // for trans-browser compatibility
    var charCode = e.which || e.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
