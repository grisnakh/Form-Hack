
function ShowInputs() {
	var arr = document.getElementsByTagName("input");
	for (var i = 0; i < arr.length; i++) {
		if ( arr[i].type == 'hidden' ) {
			
			arr[i].setAttribute('type','text');
		}
			
	}
	return true;
}

document.getElementById("switch").onclick = function() {ShowInputs()};