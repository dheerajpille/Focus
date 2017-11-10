document.documentElement.style.visibility='hidden';

$(document).ready(function(){
    var site = window.location.href;
    chrome.storage.local.get('sites', function(result) {
        var values = result.sites;
        var block = false;
        values.forEach(function (index) {
            if (index !== "" && site.indexOf(index) > -1) {
                block = true;
            }
        });
        if (!block) {
            document.documentElement.style.visibility='';
        }
    });
});