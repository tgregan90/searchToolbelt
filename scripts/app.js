var toolBelt = toolBelt || {};

toolBelt.common = toolBelt.common || {};

//create utility templateSwitcher function and assign to heading links
// 1. Build template switcher method

toolBelt.common.templateSwitcher = function(newTemplateID) {
    document.getElementById(newTemplateID).classList.remove("hidden");
}

// 2. assign method to click event of each heading tab
var tabs = document.getElementById("viewBar").getElementsByTagName("li");
for(let i = 0; i < tabs.length; i++){
  tabs[i].addEventListener(
    "click",
     function(){
      var tabLabel = this.classList.value;
      var containerNode = document.getElementById("containerNode");
      
      //Check and remove first page
      if(!containerNode.classList.contains("hidden"))
      {
        containerNode.classList.add("hidden");
      }

      document.getElementById("On-Page").classList.add("hidden");
      document.getElementById("Bookmarks").classList.add("hidden");
      document.getElementById("Tools").classList.add("hidden");

      toolBelt.common.templateSwitcher(tabLabel);
    }
  )
}
