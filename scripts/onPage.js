var toolBelt = toolBelt || {};

toolBelt.onPage = toolBelt.onPage || {};

toolBelt.onPage.tabNode = chrome.tabs;

toolBelt.onPage.exposeResultsPanel = function(){
        var resultsPanel = document.getElementById("resultsPanel");
        resultsPanel.classList.remove("hidden");
}

chrome.tabs.getSelected(null, function (tab) {
        toolBelt.onPage.tabNode = tab;
      });
toolBelt.onPage.printTitle = function(){
    if(!document.getElementById("printedTitle")){
        var tabTitle = toolBelt.onPage.tabNode.title;
        var length = " - " + tabTitle.length + " chars";
        length = document.createTextNode(length);
        var titleSpan = document.createElement("span");
        titleSpan.classList.add("bold");
        var div = document.createElement("div");
        div.classList.add("showTitle");
        var text = "Title Tag: "
        var message = document.createTextNode(text);
        var tabText = document.createTextNode(tabTitle);
        titleSpan.appendChild(message);
        div.appendChild(titleSpan); 
        div.appendChild(tabText);
        div.appendChild(length);
        div.id = "printedTitle"
        toolBelt.onPage.exposeResultsPanel();
        resultsPanel.appendChild(div);
    }

}
document.getElementById('showTitle').addEventListener(
        "click",
        function(){
                toolBelt.onPage.printTitle();
        })