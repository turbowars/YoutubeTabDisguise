//Save the current tabt title and favicon
var real_title = document.title;

// give the current tab the title and favicon of the google homepage
document.title = 'Google';
var linkItem = document.createElement('link');
linkItem.rel = 'shortcut icon';
linkItem.type = 'image/x-icon';
linkItem.href = 'http://google.com/favicon.ico';
linkItem.className= 'disguise-favicon';
var headObject = document.getElementsByTagName('head')[0];
headObject.insertBefore(linkItem,headObject.firstChild);
