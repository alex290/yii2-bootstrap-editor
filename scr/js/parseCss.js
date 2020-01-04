

function paseStyle() {
    let inputStyle = $('input.inputStyle').val();
    let allStyle = JSON.parse($('.json-widgetScrypt').text());
    $.ajax({
        type: "GET",
        url: "/bs4-editor/css-parser",
        data: { 'css': inputStyle },
        success: function (response) {
            console.log(response);
        }
    });
    let regexp = "#\{([^}]*?)\}#i";
    let styleMatch = inputStyle.matchAll(regexp);
    let arrStyle = Array.from(styleMatch);
    
}