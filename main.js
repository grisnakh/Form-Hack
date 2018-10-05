function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

chrome.browserAction.onClicked.addListener(function(tab) {
// No tabs or host permissions needed!

    chrome.tabs.executeScript({
        code: `
            function hasClass(a,b){
                return(" "+a.className+" ").indexOf(" "+b+" ")>-1
            }

            for(var arr=document.getElementsByTagName("input"),form_hacked="form_hacked",hidden_inputs=!0,i=0;i<arr.length;i++)
            
                hasClass(arr[i],form_hacked)?
                    (arr[i].setAttribute("type","hidden"),
                            elem = document.getElementById("explainText"),
                            arr[i].parentNode.removeChild(elem),
                            arr[i].classList.remove("form_hacked"),
                            hidden_inputs=!0
                    ):
                "hidden"==arr[i].type&&(
                    arr[i].setAttribute("type","text"),
                        arr[i].classList.add("form_hacked"),            
                        explainText = arr[i].getAttribute("name") ? arr[i].getAttribute("name") : (arr[i].id ? arr[i].id : "(not-set)"),
                        arr[i].insertAdjacentHTML("beforebegin", "<div id='explainText' style='color: gray;display: block;z-index: 999; '>" + explainText + ":</div>"),
                        hidden_inputs=!1
                );
        `
    });
});
