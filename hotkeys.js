// Determine Page Type
// Prevents hotkeys from returning error on non-ticket pages.
document.onkeydown = function detectPageType(event) {
    key = event.which || event.keyCode;
    let pageURI = document.documentURI;
    if (pageURI.search('ticket/') != -1) {
        console.log("this is a ticket page")
        detectHotkeys(event, key);
    } else {
        console.log("this is not a ticket page")
    }
  }

// Detect Hotkeys and Perform Action
// Additional hotkeys specified here via additional else if statements
function detectHotkeys(event, key) {
    if(event.ctrlKey && event.shiftKey && key == 76){
        const addLabelBtn = document.querySelector("#page-container > div > section > div > header > section.meta-data-container > div.labels-area > button");
        addLabelBtn.click();
    } else if (event.ctrlKey && event.shiftKey && key == 77){
        const openMacros = document.querySelector("#page-container > div > section > footer > div > div > div.macros-container.button-container > button");
        openMacros.click();
    }

}
