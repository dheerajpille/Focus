$(document).ready(function() {
    chrome.storage.local.get('state', function(result){
        var state = result.state;
        $('input').bootstrapSwitch('state', state);
    });
    $('input:checkbox').on('switchChange.bootstrapSwitch', function (event, state) {
        chrome.storage.local.set({'state': state});
    });
});