var toolBelt = toolBelt || {};

toolBelt.bookmarks = toolBelt.bookmarks || {};

// 0. Cache current tab

toolBelt.bookmarks.tabNode = chrome.tabs;


// 1. Build open new tab and visit given URL method

toolBelt.bookmarks.openTab = function(builtURL){
    toolBelt.bookmarks.tabNode.create({
        url: builtURL
    });
}

// 2. Build URL builder method

toolBelt.bookmarks.urlBuilder = function(beg,targetPage,end){
    var builtURL = beg + encodeURI(targetPage) + end;
    return builtURL;
}

toolBelt.bookmarks.getCurrentTab = function(){
    chrome.tabs.query({
        'active': true,
        'currentWindow': true
    }, function (tabs) {
        toolBelt.bookmarks.currentTabURL = tabs[0].url;
    });
}

// 3. Add event listeners to links
document.getElementById("PSIScore").addEventListener(
    "click",
    function(){
        toolBelt.bookmarks.getCurrentTab();
        var url =  toolBelt.bookmarks.currentTabURL;
        var PSIURL = toolBelt.bookmarks.urlBuilder("https://developers.google.com/speed/pagespeed/insights/?url=",url);
        toolBelt.bookmarks.openTab(PSIURL);
    }
)