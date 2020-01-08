

function paseStyle(cssClass) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: "/bs4-editor/css-parser",
            data: { 'css': cssClass },
            success: function (response) {
                resolve(JSON.parse(response));
            }
        });
    })
}

function getStyle(arrClassTempl) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: "/bs4-editor/css-parser/get-style",
            data: { 'css': JSON.stringify(arrClassTempl) },
            success: function (response) {
                resolve(response);
            }
        });
    })
}
