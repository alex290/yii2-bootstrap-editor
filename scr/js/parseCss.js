

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

function getStyle(arrClass) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: "/bs4-editor/css-parser/get-style",
            data: { 'css': JSON.stringify(arrClass) },
            success: function (response) {
                resolve(response);
            }
        });
    })
}
