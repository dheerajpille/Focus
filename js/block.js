$(document).ready(function(){
    var site = window.location.href;
    chrome.storage.local.get('sites', function(result) {
        var values = result.sites;
        values.forEach(function (index) {
            if (site.indexOf(index) !== -1) {
                $('head').empty();
                $('head').append('<title>Blocked website</title>');
                $('head').append(
                    '<link rel="stylesheet" ' +
                    'href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">'
                );
                $('body').empty();
                $('body').append(
                    '<br>' +
                    '<div class="text-center">' +
                    '<i class="glyphicon glyphicon-eye-close" style="font-size: 10em;"></i>' +
                    '<h4>This website is blocked.</h4>' +
                    '</div>'
                );
            }
        });
    });
});