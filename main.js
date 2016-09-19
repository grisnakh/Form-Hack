function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

chrome.browserAction.onClicked.addListener(function(tab) {
// No tabs or host permissions needed!
    console.log('Turning ' + tab.url + ' red!');
    chrome.tabs.executeScript({
        code: 'var arr = document.getElementsByTagName("input");for (var i = 0; i < arr.length; i++) {if ( arr[i].type=="hidden" ) {arr[i].setAttribute("type","text");}}'
        // function: ShowInputs();
    });
});