// Gives us full page context so we can check for existing jQuery
var tag = document.createElement('script');
tag.src = chrome.extension.getURL("snippets/appendScript.js");
document.getElementsByTagName('head')[0].appendChild(tag);
