$('input').bootstrapSwitch();

$(document).ready(function(){
    $('body').on('click', 'a', function(){
        chrome.tabs.create({url: $(this).attr('href')});
    });
});