// For detecting when hotkey is pressed
window.addEventListener("keydown", function (event) {
    
    
    var modifier = event.ctrlKey || event.metaKey;
    var isShift = event.shiftKey;
    if (!isShift && modifier && event.keyCode == 81) {
        
        chrome.runtime.sendMessage({disguised: true}, function(response) {});
    }
    else if (isShift && modifier && event.keyCode == 81) {
        
        chrome.runtime.sendMessage({disguised: false}, function(response) {});
    }
}, false);
