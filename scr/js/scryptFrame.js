function loadContent() {
    let scryptIframe = [];
    $(vidgets).each(function(index, element) {
        // let scryptIframe = element['scrypt'].replace("$('", "iframeDocCont.find('");
        scryptIframe[index] = element['scrypt'];
    });
    scryptFrame(scryptIframe).then(valscrypt => {
        // console.log(valscrypt);
        eval(valscrypt);
    });

    // iframeDoc.append('<script src="' + jqueryPatch + '"></script>');

    /*$(scryptIframe).each(function (index, element) {
        iframeDoc.append('<script>' + element + '</script>');
    }); */

    load();
}


function scryptFrame(scryptTeml) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: "/bs4-editor/config/scrypt-frame",
            data: { 'scrypt': JSON.stringify(scryptTeml) },
            success: function(response) {
                resolve(response);
            }
        });
    })

}