$(document).ready(function(){
    $('body').on('click', 'button', function(){
        var sites = $('textarea')[0].value;
        chrome.storage.sync.set({'sites': sites}, function() {
            alert(sites);
        });
    });
});