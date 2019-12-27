var size = {
    'Extralarge': {
        'size': '100%',
        'class': 'col-xl'
    },
    'Large': {
        'size': '1100px',
        'class': 'col-lg'
    },
    'Medium': {
        'size': '900px',
        'class': 'col-md'
    },
    'Small': {
        'size': '700px',
        'class': 'col-sm'
    },
    'Extrasmall': {
        'size': '400px',
        'class': 'col'
    },
};

var iframe = $('iframe#html-frame').contents();

var iframeDoc = iframe.find('body');
iframeDoc.html('<div class="frame-dashed-wrap"></div>');
var bseditorToolbar = '<div class="bseditor-toolbar d-none">' + $('.bseditor-toolbar').html() + '</div>';
$('.bseditor-toolbar').remove();


var iframeDocCont = iframeDoc.find('.frame-dashed-wrap');
iframeDocCont.after(bseditorToolbar);

bseditorToolbar = iframeDoc.find('.bseditor-toolbar');

var sizeRab = 'Extralarge';
var frstResize = true;


var htmlContent = $('<div/>').html($('input.inputContent').val());

var htmlScrypt = $('input.inputScrypt').val();
var htmlStyle = $('input.inputStyle').val();

jQuery(document).ready(function($) {

    $('.onclickReturnContent').on('click', function() {
        returnContent();
        // return false;
    });
    iframeDocCont.html(htmlContent.html());

    setTimeout(() => loadContent(), 1000);



    // console.log(bseditorToolbar);
    var cssIframe = $('.json-text').text();
    var styleIframe = $('.json-style').text();
    var scryptIframe = $('.json-scrypt').text();
    // console.log(scryptIframe);
    var headFrame = iframe.find('head');
    $(JSON.parse(cssIframe)).each(function(index, element) {

        // console.log(element);
        headFrame.append($("<link/>", {
            rel: "stylesheet",
            href: element,
            type: "text/css"
        }));

    });

    var styleApand = '';
    $(JSON.parse(styleIframe)).each(function(index, element) {
        styleApand = styleApand + element;
    });
    styleApand = '<style>' + styleApand + '</style>';

    $(JSON.parse(scryptIframe)).each(function(index, element) {

        // console.log(element);
        iframeDoc.append($("<scrypt/>", {
            href: element,
        }));

    });


    // console.log(styleApand);
    // headFrame.append(styleApand);
    iframe.find('head').append('<style>' + htmlStyle + '</style>');
    // iframeDocCont.before('<style>' + styleApand + '</style>');


    $('.container-editor-html').css({
        width: size[sizeRab]['size'],
    });



    $('.bs4-click-add').on('click', function() {
        var calss = $(this).data('class');
        var html = iframeDocCont.html();
        let idDiv = 'div-' + randomInteger(100, 99999);
        htmlContent.append($('<div class="' + calss + ' widgetElement" id = "' + idDiv + '"></div>'));
        // console.log(html);
        iframeDocCont.html(htmlContent.html());
        load();
        resize();
    });

    // ;

    $('ul.resolutionBs4Widget li').on('click', function() {
        sizeRab = $(this).data('size');
        $('.container-editor-html').css({
            width: size[sizeRab]['size'],
        });
        frstResize = false;
    });

});


function load() {
    // Выделение элементов по клику
    iframeDocCont.find('div.widgetElement').off("click");
    iframeDocCont.find('div.widgetElement').on('click', function(event) {

        let idDiv = $(this).attr('id');

        htmlContent.find('div').removeClass('selected');
        iframeDocCont.find('div').removeClass('selected');
        bseditorToolbar.removeClass('d-none');
        $(this).addClass('selected');
        htmlContent.find('#' + idDiv).addClass('selected');
        // console.log(htmlContent.html());
        if ($(this).hasClass('container') || $(this).hasClass('row') || $(this).hasClass('container-fluid')) {
            bseditorToolbar.find('.noneCont').addClass('d-none');
        } else {
            bseditorToolbar.find('.noneCont').removeClass('d-none');
        }
        posIlteMenu();
        event.stopPropagation();
    });
    // --------------------------------------------

    // Добавление дочерних эелементов
    $('.clickAddInner').off("click");
    $('.clickAddInner').on('click', function() {
        var calss = $(this).data('class');

        let idDiv = 'div-' + randomInteger(100, 99999);
        htmlContent.find('div.selected').append($('<div class="' + calss + ' widgetElement" id = "' + idDiv + '"></div>'));
        iframeDocCont.html(htmlContent.html());
        load();
        resize();
    });
    // --------------------------------------------------

    // Добавление своих дочерних эелементов
    $('.clickAddCostum').off("click");
    $('.clickAddCostum').on('click', function() {
        var dataJson = $(this).data('html');
        var html = dataJson['html'];

        let idDiv = 'div-' + randomInteger(100, 99999);
        htmlContent.find('div.selected').append($('<div class="d-flex widgetElement" id = "' + idDiv + '">' + html + '</div>'));
        iframeDocCont.html(htmlContent.html());

        // iframeDocCont.find('div.selected').html(html);
        if (dataJson['scrypt']) {
            var scryptIframe = dataJson['scrypt'].replace("$", "iframeDocCont.find");
            // console.log(scryptIframe);
            htmlScrypt = '// виджет - ' + dataJson['name'] + '\n' + htmlScrypt + dataJson['scrypt'] + '\n//=========================================== \n\n';
            eval(scryptIframe);
        }

        if (dataJson['style']) {
            htmlStyle = '/* виджет - ' + dataJson['name'] + '*/\n' + htmlStyle + dataJson['style'] + '\n/*=========================================== */\n\n';
            iframe.find('head').append('<style>' + htmlStyle + '</style>');
        }
        load();
        resize();
    });
    // --------------------------------------------------

    // Удаление выделения

    iframeDoc.off("click");
    iframeDoc.on('click', function(e) {
        if (e.target != this) { return true; }
        iframeDocCont.find('div').removeClass('selected');
        bseditorToolbar.addClass('d-none');
    });

    $(document).off("click");
    $(document).on('click', function(e) {
        iframeDocCont.find('div').removeClass('selected');
        bseditorToolbar.addClass('d-none');
        $('#exampleModalAddDiv').modal('hide');
    });
    /*document.querySelector('.container-editor-html').onclick = function(e) {

        
    };*/
    // --------------------------------------------------------

    // Увеличение колонки
    bseditorToolbar.find('.clickPlusCol').off("click");
    bseditorToolbar.find('.clickPlusCol').on('click', function() {
        var classDiv = iframeDocCont.find('div.selected').attr('class').split(/\s+/);
        $(classDiv).each(function(index, element) {

            if (element.search('col') != -1) {
                var classTeml = element;
                var classNewArr = element.split('-');
                var classNewSize;
                var summ = Number(classNewArr[classNewArr.length - 1]);
                if (element.search(size[sizeRab]['class']) == -1) {
                    classNewSize = size[sizeRab]['class'] + '-' + summ;
                } else {
                    classNewArr = element.split(size[sizeRab]['class']);
                    var str = classNewArr[classNewArr.length - 1];
                    summ = Number(str.replace('-', ''));
                }
                // console.log(summ);
                var newSumm;
                if (summ < 12) {
                    newSumm = summ + 1;
                    iframeDocCont.find('div.selected').removeClass(size[sizeRab]['class'] + '-' + summ);
                    // $('div.selected').addClass(classNew);
                    iframeDocCont.find('div.selected').addClass(size[sizeRab]['class'] + '-' + newSumm);
                    posIlteMenu();
                }

            }
        });
        resize();

    });
    // ---------------------------------------------------------

    // Уменьшение колонки
    bseditorToolbar.find('.clickMinusCol').off("click");
    bseditorToolbar.find('.clickMinusCol').on('click', function() {
        var classDiv = iframeDocCont.find('div.selected').attr('class').split(/\s+/);
        $(classDiv).each(function(index, element) {

            if (element.search('col') != -1) {
                var classTeml = element;
                var classNewArr = element.split('-');
                var classNew;
                if (classNewArr[classNewArr.length - 1] > 1) {
                    classNewArr[classNewArr.length - 1] = Number(classNewArr[classNewArr.length - 1]) - 1;
                    $(classNewArr).each(function(index, element) {
                        if (index == 0) {
                            classNew = element;
                        } else {
                            classNew = classNew + '-' + element;
                        }
                    });
                    iframeDocCont.find('div.selected').removeClass(classTeml);
                    iframeDocCont.find('div.selected').addClass(classNew);
                    posIlteMenu();
                }


            }
        });
        resize();

    });
    // ---------------------------------------------------------


    bseditorToolbar.find('.click-remove-obj').on('click', function() {
        htmlContent.find('div.selected').remove();
        iframeDocCont.find('div.selected').remove();
        bseditorToolbar.addClass('d-none');
        resize();
    });

    bseditorToolbar.find('.clickAddDiv').on('click', function() {
        $('#exampleModalAddDiv').modal('show');
    });

    bseditorToolbar.find('.clickSetting').on('click', function() {
        $('#exampleModalSetting').modal('show');
    });

}

function posIlteMenu() {
    var position = iframeDocCont.find('div.selected').offset();
    var innerHeightEl = bseditorToolbar.innerHeight();
    // console.log(innerHeightEl);

    bseditorToolbar.offset({ top: position.top - innerHeightEl, left: position.left });
}

function resize() {
    var heightBody = iframe.find('.frame-dashed-wrap').outerHeight();
    $('iframe#html-frame').css({
        height: heightBody + 'px',
    });

}

function randomInteger(min, max) {
    // случайное число от min до (max)
    let rand = min + Math.random() * (max - min);
    return Math.floor(rand);
}

function returnContent() {
    $('input.inputContent').val(htmlContent.html());
    $('input.inputScrypt').val(htmlScrypt);
    $('input.inputStyle').val(htmlStyle);
}

function loadContent() {
    let scryptIframeHtml = htmlScrypt
    scryptIframeHtml = scryptIframeHtml.replace("$('", "iframeDocCont.find('");
    eval(scryptIframeHtml);
    resize();
    load();
}