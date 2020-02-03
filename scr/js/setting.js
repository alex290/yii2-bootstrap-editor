function settingModalShow() {
    var settingId = null;
    bseditorToolbar.find('.clickSetting').off("click");
    bseditorToolbar.find('.clickSetting').on('click', function() {
        var idDiv = iframeDocCont.find('div.selected').attr('id');
        settingId = idDiv;



        $('.zaglTicleModalSetting').text("#" + idDiv);

        let classesDiv = htmlContent.find('#' + idDiv);

        var valClass = classesDiv.attr('class').replace('selected', '');
        $('.classesModalSetting').val(valClass);

        var inputModalSet = {
            'sizeRab': sizeRab,
            'id': idDiv,
        };

        getModalSetting(inputModalSet).then(valSetClass => {
            if (!(valSetClass == null || valSetClass == '')) {
                let getModClass = JSON.parse(valSetClass);
                $('.marginTopModalSetting').val(getModClass['margin-top']);
                $('.marginBottomModalSetting').val(getModClass['margin-bottom']);
                $('.marginLeftModalSetting').val(getModClass['margin-left']);
                $('.marginRightModalSetting').val(getModClass['margin-right']);
                $('.heightModalSetting').val(getModClass['height']);
                $('.widthModalSetting').val(getModClass['width']);
                console.log(getModClass);
            } else {
                $('.marginTopModalSetting').val(null);
                $('.marginBottomModalSetting').val(null);
                $('.marginLeftModalSetting').val(null);
                $('.marginRightModalSetting').val(null);
                $('.heightModalSetting').val(null);
                $('.widthModalSetting').val(null);
            }

            $('button.applyModalSetting').off("click");
            $('button.applyModalSetting').on('click', function() {
                inputModalSet = {
                    'sizeRab': sizeRab,
                    'id': idDiv,
                    'classes': valClass,
                    'margin-top': $('.marginTopModalSetting').val(),
                    'margin-bottom': $('.marginBottomModalSetting').val(),
                    'margin-left': $('.marginLeftModalSetting').val(),
                    'margin-right': $('.marginRightModalSetting').val(),
                    'height': $('.heightModalSetting').val(),
                    'width': $('.widthModalSetting').val(),
                };

                var newDivClass = $('.classesModalSetting').val();

                if (valClass != newDivClass) {
                    htmlContent.find('#' + idDiv).removeClass(valClass).addClass(newDivClass);
                    iframeDocCont.find('#' + idDiv).removeClass(valClass).addClass(newDivClass);

                }

                setModalSetting(inputModalSet).then(valGetClass => {
                    inputStyleObj = valGetClass;

                    $('.inputStyle').text(inputStyleObj);

                    reloadSstyle();
                });
            });

            $('#exampleModalSetting').modal('show');
        });


    });

}


function getModalSetting(classModal) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: "/bs4-editor/config/modal-get",
            data: { 'classModal': JSON.stringify(classModal), 'inputClass': inputStyleObj },
            success: function(response) {
                resolve(response);
            }
        });
    })
}


function setModalSetting(classModal) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: "/bs4-editor/config/modal-set",
            data: { 'classModal': JSON.stringify(classModal), 'inputClass': JSON.stringify(inputStyleObj) },
            success: function(response) {
                resolve(response);
            }
        });
    })
}

function reloadSstyle() {

    let headFrame = iframe.find('head');

    headFrame.find('style').remove();

    let styleApand = '<style>' + ArrClass + inputStyleObj + '</style>';

    headFrame.append(styleApand);

}