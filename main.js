function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function getImageData() {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = "green";
  ctx.fillRect(10, 10, 100, 100);
 
  return ctx.getImageData(50, 50, 100, 100);
}

function updateIcon() {

	if (!hidden_inputs) {
		chrome.browserAction.setIcon({
			96: "icons/icon-96.png"
		})
	} else {
		chrome.browserAction.setIcon({
			96: "icons/icon-96-enabled.png"	
		})
	} 

}

chrome.browserAction.onClicked.addListener(function(tab) {
// No tabs or host permissions needed!

    chrome.tabs.executeScript({
        code: 'function hasClass(a,b){return(" "+a.className+" ").indexOf(" "+b+" ")>-1}for(var arr=document.getElementsByTagName("input"),form_hacked="form_hacked",hidden_inputs=!0,i=0;i<arr.length;i++)hasClass(arr[i],form_hacked)?(updateIcon(),arr[i].setAttribute("type","hidden"),arr[i].className-="form_hacked",hidden_inputs=!0):"hidden"==arr[i].type&&(updateIcon(),arr[i].setAttribute("type","text"),arr[i].className+=" form_hacked",hidden_inputs=!1);'
        // function: ShowInputs();
    });
	
	
});


/*chrome.browserAction.onClicked.addListener(() => {
  chrome.browserAction.setIcon({imageData: getImageData()});
});*/