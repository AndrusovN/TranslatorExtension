function getSelectionText() {
    var text = "";
    var activeEl = document.activeElement;
    var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
    if (
      (activeElTagName == "textarea") || (activeElTagName == "input" &&
      /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&
      (typeof activeEl.selectionStart == "number")
    ) {
        text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
    } else if (window.getSelection) {
        text = window.getSelection().toString();
    }
    return text;
}

function changeLanguage(data) {
	var english = "qwertyuiop[]asdfghjkl;'zxcvbnm,./QWERTYUIOP{}ASDFGHJKL:" + '"ZXCVBNM<>?!@#$%^&*()~`'
	
	var russian = "йцукенгшщзхъфывапролджэячсмитьбю.ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ,!" + '"№;%:?*()Ёё'
		
	var res = '';
	
	for (var i = 0; i < data.length; i++){
		var found = false;
		for (var j = 0; j < english.length; j++){
			if(english[j] == data[i]){
				res += russian[j];
				found = true;
				break;
			}
		}
		if(!found){
			res += data[i];
		}
	}
	
	return res;
}

document.onmouseup = function() {
	var s = changeLanguage(getSelectionText());
	if(s != ""){
		alert(s);
	}
};
