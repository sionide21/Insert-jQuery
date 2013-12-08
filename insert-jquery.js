chrome.contextMenus.onClicked.addListener(function(info, tab) {
    chrome.tabs.executeScript(tab.id, {file: "snippets/runInPage.js"});
});
chrome.contextMenus.create({"title": "Inject jQuery"});
