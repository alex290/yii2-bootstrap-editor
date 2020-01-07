
function settingModalShow() {
    var settingId = null;
    bseditorToolbar.find('.clickSetting').off("click");
    bseditorToolbar.find('.clickSetting').on('click', function () {
        let idDiv = iframeDocCont.find('div.selected').attr('id');
        settingId = idDiv;
        $('.zaglTicleModalSetting').text("#" + idDiv);

        let classesDiv = htmlContent.find('#' + idDiv);

        let valClass = classesDiv.attr('class').replace('selected', '');
        $('.classesModalSetting').val(valClass);

        $('button.applyModalSetting').off("click");
        $('button.applyModalSetting').on('click', function () {
            let inputModalSet = {
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

            setModalSetting(inputModalSet).then(valGetClass => {
                inputStyleObj = JSON.parse(valGetClass);
                // console.log(inputStyleObj);
                let array1 = inputStyleObj;
                let array2 = ArrClass;
                let array3 = Object.assign(array1, array2);

                getStyle(inputStyleObj).then(valueStyleThenn => {
                    console.log(valueStyleThenn);
                    $('.inputStyle').text(valueStyleThenn);
                });


                reloadSstyle(array3);
            });
        });

        $('#exampleModalSetting').modal('show');
    });

}


function getModalSetting() {

}


function setModalSetting(classModal) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: "/bs4-editor/config/modal-set",
            data: { 'classModal': JSON.stringify(classModal), 'inputClass': JSON.stringify(inputStyleObj) },
            success: function (response) {
                resolve(response);
            }
        });
    })
}

function reloadSstyle(allClasses) {
    let arrClassNew = {};
    $(allClasses).each(function (index, element) {
        const array3 = Object.assign(arrClassNew, element);
        arrClassNew = array3;
    });

    let headFrame = iframe.find('head');

    headFrame.find('style').remove();

    getStyle(arrClassNew).then(function (value) {
        styleApand = '<style>' + value + '</style>';
        headFrame.append(styleApand);
    });
}