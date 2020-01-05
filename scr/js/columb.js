// Изменение колонок
function resizeColumb() {
    // Увеличение колонки
    bseditorToolbar.find('.clickPlusCol').off("click");
    bseditorToolbar.find('.clickPlusCol').on('click', function () {

        let idDiv = iframeDocCont.find('div.selected').attr('id');
        let classesDiv = htmlContent.find('#' + idDiv);

        let collSmall = null;
        let collLarg = null;
        let resize = false;

        for (let colNumb = 1; colNumb < 13; colNumb++) {
            let classNameCol = size[sizeRab]['class'] + '-' + colNumb;
            let classSmallCol = 'col-' + colNumb;

            if (classesDiv.hasClass(classNameCol)) {
                collLarg = colNumb;
            }
            if (classesDiv.hasClass(classSmallCol)) {
                collSmall = colNumb;
            }
        }

        if (collLarg == null && collSmall < 12) {
            collLarg = collSmall + 1;
            classesDiv.addClass(size[sizeRab]['class'] + '-' + collLarg);
            resize = true;

        } else if (collLarg < 12) {
            classesDiv.removeClass(size[sizeRab]['class'] + '-' + collLarg);
            collLarg++;
            classesDiv.addClass(size[sizeRab]['class'] + '-' + collLarg);
            resize = true;
        }

        if (resize == true) {
            iframeDocCont.html(htmlContent.html());
            $(vidgets).each(function (index, element) {
                // console.log();
                var scryptIframe = element['scrypt'].replace("$('", "iframeDocCont.find('");
                eval(scryptIframe);
            });
        }

        // console.log(classesDiv);
        load();
    });
    // ---------------------------------------------------------

    // Уменьшение колонки

    bseditorToolbar.find('.clickMinusCol').off("click");
    bseditorToolbar.find('.clickMinusCol').on('click', function () {

        let idDiv = iframeDocCont.find('div.selected').attr('id');
        let classesDiv = htmlContent.find('#' + idDiv);

        let collSmall = null;
        let collLarg = null;
        let resize = false;

        for (let colNumb = 1; colNumb < 13; colNumb++) {
            let classNameCol = size[sizeRab]['class'] + '-' + colNumb;
            let classSmallCol = 'col-' + colNumb;

            if (classesDiv.hasClass(classNameCol)) {
                collLarg = colNumb;
            }
            if (classesDiv.hasClass(classSmallCol)) {
                collSmall = colNumb;
            }
        }

        if (collLarg == null && collSmall > 1) {
            collLarg = collSmall - 1;
            classesDiv.addClass(size[sizeRab]['class'] + '-' + collLarg);
            resize = true;

        } else if (collLarg > 1) {
            classesDiv.removeClass(size[sizeRab]['class'] + '-' + collLarg);
            collLarg--;
            classesDiv.addClass(size[sizeRab]['class'] + '-' + collLarg);
            resize = true;
        }

        if (resize == true) {
            iframeDocCont.html(htmlContent.html());
            $(vidgets).each(function (index, element) {
                // console.log();
                var scryptIframe = element['scrypt'].replace("$('", "iframeDocCont.find('");
                eval(scryptIframe);
            });
        }

        // console.log(classesDiv);
        load();
    });

    // ---------------------------------------------------------

}
