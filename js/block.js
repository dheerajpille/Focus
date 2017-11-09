$(document).ready(function(){
    var site = window.location.href;
    chrome.storage.local.get('sites', function(result) {
        var values = result.sites;
        values.forEach(function (index) {
            if (site.indexOf(index) !== -1) {
                $('body').hide();
            }
        });
    });
});