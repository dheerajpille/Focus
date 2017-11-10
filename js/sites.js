$(document).ready(function(){
    if ($('textarea').get(0)) {
        chrome.storage.local.get('sites', function(result){
            var values = result.sites.join('\n');
            console.log(values);
            $('textarea').val(values);
        });
        $('button').on('click',function(){
            var sites = $('textarea')[0].value.replace(/\s+/g,' ').replace(/>(\s)</g,'>\n<').toLowerCase().split(/\s+/);
            chrome.storage.local.set({'sites': sites});
            location.reload();
        });
    } else if ($('div.col-xs-6 ul').get(0)) {
        chrome.storage.local.get('sites', function(result){
            var values = result.sites;
            if (values.length === 0 || values[0] === "") {
                $('div.col-xs-6 ul').append(
                    '<li class="list-group-item" style="display: block; word-break: break-all;">No websites blocked</li>'
                );
            } else {
                values.forEach(function(index){
                    $('div.col-xs-6 ul').append(
                        '<li class="list-group-item" style="display: block; word-break: break-all;">'+index+'</li>'
                    );
                });
            }
        });
    }
});