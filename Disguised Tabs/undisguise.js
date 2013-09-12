console.log('undisguise tabs');

if (window.location.pathname=='/') {document.title = window.location.hostname;}
else {document.title = window.location.hostname+window.location.pathname;}

//reset favicon
document.querySelector(".disguise-favicon").href='http://g.etfv.co/'+ window.location.href;