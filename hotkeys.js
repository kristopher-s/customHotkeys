document.onkeydown = function hotkeys(event) {
    let key = event.which || event.keyCode;
    if(event.ctrlKey && event.shiftKey && key == 76){
        const addLabelBtn = document.querySelector("#page-container > div > section > div > header > section.meta-data-container > div.labels-area > button");
        addLabelBtn.click();
    } else if (event.ctrlKey && event.shiftKey && key == 77){
        const openMacros = document.querySelector("#page-container > div > section > footer > div > div > div.macros-container.button-container > button");
        openMacros.click();
        return;
    }
  }
