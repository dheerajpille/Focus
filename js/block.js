document.documentElement.style.visibility='hidden';

$(document).ready(function() {
    var site = window.location.href.toLowerCase();
    chrome.storage.local.get('sites', function (result) {
        var values = result.sites;
        var block = false;
        if (values !== undefined) {
            values.forEach(function (index) {
                if (index !== "" && site.indexOf(index) > -1) {
                    block = true;
                    $(location).attr('href', chrome.runtime.getURL('html/block.html'));
                }
            });
        }
        if (!block) {
            document.documentElement.style.visibility = 'visible';
        }
    });
});