var toolBelt = toolBelt || {};

toolBelt.bookmarks = toolBelt.bookmarks || {};

//Build a global variable for the current tab Obj

toolBelt.bookmarks.tabNode = chrome.tabs;

//Build a global variable for the current tab Obj
toolBelt.bookmarks.currentTabURL = "";
toolBelt.bookmarks.getCurrentTab = function()
{
    chrome.tabs.query({
        'active': true,
        'currentWindow': true
    }, function (tabs) {
        toolBelt.bookmarks.currentTabURL = tabs[0].url;
    });
}
toolBelt.bookmarks.getCurrentTab();
//Build a global variable for the current tab Obj

//Utility Functions
    toolBelt.bookmarks.openTab = function(builtURL){
        toolBelt.bookmarks.tabNode.create({
            url: builtURL
        });
    }

    // 2. Build URL builder method

    toolBelt.bookmarks.urlBuilder = function(beg = "",targetPage = "",end = ""){
        var builtURL = beg + encodeURI(targetPage).toString() + end;
        return builtURL;
    }

//Utility Functions



// Add event listeners to buttons

    document.getElementById("PSIScoreMP").addEventListener(
        "click",
        function(){
            var PSIURL = toolBelt.bookmarks.urlBuilder("https://developers.google.com/speed/pagespeed/insights/?url=",toolBelt.bookmarks.currentTabURL,"&tab=mobile");
            toolBelt.bookmarks.openTab(PSIURL);
        }
    )
    document.getElementById("PSIScoreDT").addEventListener(
        "click",
        function(){
            var PSIURL = toolBelt.bookmarks.urlBuilder("https://developers.google.com/speed/pagespeed/insights/?url=",toolBelt.bookmarks.currentTabURL,"&tab=desktop");
            toolBelt.bookmarks.openTab(PSIURL);
        }
    )
    document.getElementById("MFriendlyLink").addEventListener(
        "click",
        function(){
            var PSIURL = toolBelt.bookmarks.urlBuilder("https://search.google.com/test/mobile-friendly?url=",toolBelt.bookmarks.currentTabURL);
            toolBelt.bookmarks.openTab(PSIURL);
        }
    )


    
    document.getElementById("SDataTestingTool").addEventListener(
        "click",
        function(){
            var PSIURL = toolBelt.bookmarks.urlBuilder("https://search.google.com/structured-data/testing-tool/u/0/#url=",toolBelt.bookmarks.currentTabURL);
            toolBelt.bookmarks.openTab(PSIURL);
        }
    )


// Add event listeners to buttons