$(document).ready(function() {
    chrome.storage.local.get('state', function(result){
        $('input').bootstrapSwitch('state', result.state);
    });
    $('input:checkbox').on('switchChange.bootstrapSwitch', function (event, state) {
        chrome.storage.local.set({'state': state});
    });
});