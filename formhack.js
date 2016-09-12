document.body.style.border = "5px solid red";


var arr = document.getElementsByTagName("input");
for (var i = 0; i < arr.length; i++) {
    if ( arr[i].type == 'hidden' ) {
		
		arr[i].setAttribute('type','text');
	}
		
}