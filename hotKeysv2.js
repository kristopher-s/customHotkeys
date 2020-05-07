answersBackofficeSdk.addListener(answersBackofficeSdk.eventTypes.ticketLoaded, function () {
    document.onkeydown = function detectPageType(event) {
        key = event.which || event.keyCode;
        let pageURI = document.documentURI;
        if (pageURI.search('ticket/') != -1) {
            detectHotkeys(event, key);
        };
    }
    const detectHotkeys = (event, key) => {
        const checkWin = event.view.clientInformation.platform.indexOf('Win') !== -1
        const checkMac = event.view.clientInformation.platform.indexOf('Mac') !== -1
        if (event.ctrlKey && event.shiftKey && key == 76 && checkWin || event.metaKey && event.shiftKey && key == 76 && checkMac)
         {
            $('.ticket-page-header .meta-data-container .labels-area .add-label.btn').click();
         } else if (event.ctrlKey && event.shiftKey && key == 77 && checkWin || event.metaKey && event.shiftKey && key == 77 && checkMac){
            $('.ticket-page>.main-wrapper .ticket-page-footer .button-container button.toggle-macros').click();
        }
    };
    });
