$(document).ready(function(){
    chrome.storage.local.get('sites', function(result){
        var values = result.sites;
        $('textarea').val(values);
    });
    $('button').on('click',function(){
        var sites = $('textarea')[0].value.replace(/\s+/g,' ').replace(/>(\s)</g,'>\n<');
        chrome.storage.local.set({'sites': sites});
        location.reload();
    });
});