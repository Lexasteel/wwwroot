 function enableEditor()
 {
	$("#editorAnchor").text("Выйти из редактора");
	$("div").draggable({ disabled: false, distance: 20 });
	//$("div").resizable({ disabled: false});
	$("div.user").css("border", "dotted 1px black");
 }
 
 function disableEditor()
 {
	$("#editorAnchor").text("Режим редактора");
	$("div").draggable({disabled: true});
	//$("div").resizable({ disabled: true});
	
	$("div.user").css("border", "");
}

$(function() {
    $.getJSON("/Account/IsAdmin", null, function(result) {
        if (result.isadmin) {
            if ($('#jsddm').length == 0) {
                var list = document.createElement("ul");
                list.setAttribute("id", "jsddm");
                var li = document.createElement("li");

                var lbOperations = document.createElement("a");
                lbOperations.setAttribute("href", "#");
                lbOperations.appendChild(document.createTextNode("Действия"));

                var innerList = document.createElement("ul");
                innerList.setAttribute("id", "innerlist");

                var liSave = document.createElement("li");
                var lbSave = document.createElement("a");
                lbSave.appendChild(document.createTextNode("Сохранить"));
                lbSave.setAttribute("id", "action-save");
                lbSave.setAttribute("href", "#");
                liSave.appendChild(lbSave);
                innerList.appendChild(liSave);

                var liReload = document.createElement("li");
                var lbReload = document.createElement("a");
                lbReload.appendChild(document.createTextNode("Перезагрузить"));
                lbReload.setAttribute("id", "action-reload");
                lbReload.setAttribute("href", "#");
                liReload.appendChild(lbReload);
                innerList.appendChild(liReload);

                var liEditor = document.createElement("li");
                var lbEditor = document.createElement("a");
                lbEditor.appendChild(document.createTextNode("Режим редактора"));
                lbEditor.setAttribute("id", "action-editor");
                lbEditor.setAttribute("href", "#");
                liEditor.appendChild(lbEditor);
                innerList.appendChild(liEditor);

                li.appendChild(lbOperations);
                li.appendChild(innerList);

                list.appendChild(li);
                document.body.appendChild(list);
				
				$('data')
                saveMnemoscheme();
            }
        }
    });
});
 
 
 function saveMnemoscheme() {
/*    
	if (window.location.pathname.search("/Get/") == -1) {
         alert("Извините, но сохранение возможно лишь в обычном Файл-менеджере!");
     }
     else {
         disableEditor();
         
         $("#innerlist").css("visibility", "");
         
         var submitForm = document.createElement("FORM");
         submitForm.method = "POST";
         submitForm.action = window.location.pathname.replace("/Get/", "/Save/");

         var _content = document.createElement("INPUT");
         _content.setAttribute("type", "hidden");
         _content.setAttribute("name", "content");
         _content.value = '<html>\n' + document.documentElement.innerHTML + '\n</html>';
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
	 */
 }
 
 
 function editorMode()
 {
	 if (typeof editorMode.state == 'undefined')
		 editorMode.state = true;
	 else
		 editorMode.state = !editorMode.state;

	 if (editorMode.state == true)
	 {
	   enableEditor();
	 }
	 else
	 {
	   disableEditor();
	 }        
 }
 
 $(document).ready(function() {
	$("#action-save").click(saveMnemoscheme);
	$("#action-reload").click(function() { window.location.reload(); });
	$("#action-editor").click(editorMode);
});