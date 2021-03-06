document.documentElement.style.visibility='hidden';
var site = window.location.href.toLowerCase();
chrome.storage.local.get(['sites', 'state'], function (result) {
    var sites = result.sites;
    var state = result.state;
    var block = false;
    if (state) {
        if (sites !== undefined) {
            sites.forEach(function (index) {
                if (index !== "" && site.indexOf(index) > -1) {
                    block = true;
                    $(location).attr('href', chrome.runtime.getURL('html/block.html'));
                }
            });
        }
    }
    if (!block) {
        document.documentElement.style.visibility = 'visible';
    }
});