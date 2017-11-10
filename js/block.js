document.documentElement.style.visibility='hidden';

$(document).ready(function() {
    var site = window.location.href.toLowerCase();
    chrome.storage.local.get('sites', function (result) {
        var sites = result.sites;
        var block = false;
        chrome.storage.local.get('state', function(result) {
            var state = result.state;
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
        });
        if (!block) {
            document.documentElement.style.visibility = 'visible';
        }
    });
});