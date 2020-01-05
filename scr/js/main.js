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
var ArrClass = [];


var htmlContent = $('<div/>').html($('input.inputContent').val());

var htmlScrypt = $('input.inputScrypt').val();
var htmlStyle = $('input.inputStyle').val();
var vidgets = JSON.parse($('.json-widgetScrypt').text());

jQuery(document).ready(function ($) {

    $('.onclickReturnContent').on('click', function () {
        returnContent();
        // return false;
    });
    iframeDocCont.html(htmlContent.html());

    // console.log(bseditorToolbar);
    var cssIframe = $('.json-text').text();
    // var styleIframe = $('.json-style').text();
    // var scryptIframe = $('.json-scrypt').text();
    // console.log(scryptIframe);
    var headFrame = iframe.find('head');
    $(JSON.parse(cssIframe)).each(function (index, element) {

        // console.log(element);
        headFrame.append($("<link/>", {
            rel: "stylesheet",
            href: element,
            type: "text/css"
        }));

    });


    let styleApand = '';

    $(vidgets).each(function (index, element) {
        styleApand = styleApand + element['style'];
    });

    
    paseStyle(htmlStyle+styleApand).then(values => {

        let arrClassNew = [];
        $(values).each(function (index, element) {
            ArrClass = element;
            // console.log(element);
            
        });

        // console.log(ArrClass);

        let TecArrClass = ArrClass;    

        getStyle(TecArrClass).then(function (value) {
            styleApand = '<style>' + value + '</style>';
            headFrame.append(styleApand);
        });
    })



    // headFrame.append(styleApand);
    setTimeout(() => loadContent(), 1000);


    $('.container-editor-html').css({
        width: size[sizeRab]['size'],
    });



    $('.bs4-click-add').on('click', function () {
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

    $('ul.resolutionBs4Widget li').on('click', function () {
        sizeRab = $(this).data('size');
        $('.container-editor-html').css({
            width: size[sizeRab]['size'],
        });
        frstResize = false;
        setTimeout(() => resize(), 1000);
    });

});


function load() {
    resizeColumb();
    setTimeout(() => resize(), 300);
    // Выделение элементов по клику
    iframeDocCont.find('div.widgetElement').off("click");
    iframeDocCont.find('div.widgetElement').on('click', function (event) {

        let idDiv = $(this).attr('id');

        htmlContent.find('div').removeClass('selected');
        iframeDocCont.find('div').removeClass('selected');
        bseditorToolbar.removeClass('d-none');
        $(this).addClass('selected');
        htmlContent.find('#' + idDiv).addClass('selected');
        let colClass = false;

        for (let indexColl = 1; indexColl < 13; indexColl++) {
            if (iframeDocCont.find('div.selected').hasClass('col-'+indexColl)) {
                colClass = true;
            }
            
        }

        // console.log(colClass);

        if (colClass == false) {
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
    $('.clickAddInner').on('click', function () {
        var calss = $(this).data('class');

        let idDiv = 'div-' + randomInteger(100, 99999);
        htmlContent.find('div.selected').append($('<div class="' + calss + ' widgetElement" id = "' + idDiv + '"></div>'));
        iframeDocCont.html(htmlContent.html());

        $(vidgets).each(function (index, element) {
            // console.log();
            var scryptIframe = element['scrypt'].replace("$('", "iframeDocCont.find('");
            eval(scryptIframe);
        });

        load();
        
    });
    // --------------------------------------------------

    // Добавление своих дочерних эелементов
    $('.clickAddCostum').off("click");
    $('.clickAddCostum').on('click', function () {
        var dataJson = $(this).data('html');
        var html = dataJson['html'];

        let idDiv = 'div-' + randomInteger(100, 99999);
        htmlContent.find('div.selected').append($('<div class="d-flex widgetElement" id = "' + idDiv + '">' + html + '</div>'));
        iframeDocCont.html(htmlContent.html());

        // iframeDocCont.find('div.selected').html(html);
        $(vidgets).each(function (index, element) {
            // console.log();
            var scryptIframe = element['scrypt'].replace("$('", "iframeDocCont.find('");
            eval(scryptIframe);
        });

        load();
        

    });
    // --------------------------------------------------

    // Удаление выделения

    iframeDoc.off("click");
    iframeDoc.on('click', function (e) {
        if (e.target != this) { return true; }
        iframeDocCont.find('div').removeClass('selected');
        htmlContent.find('div').removeClass('selected');
        bseditorToolbar.addClass('d-none');
    });

    $(document).off("click");
    $(document).on('click', function (e) {
        iframeDocCont.find('div').removeClass('selected');
        bseditorToolbar.addClass('d-none');
        htmlContent.find('div').removeClass('selected');
        $('#exampleModalAddDiv').modal('hide');
    });
    /*document.querySelector('.container-editor-html').onclick = function(e) {

        
    };*/
    // --------------------------------------------------------

   


    bseditorToolbar.find('.click-remove-obj').on('click', function () {
        htmlContent.find('div.selected').remove();
        iframeDocCont.find('div.selected').remove();
        bseditorToolbar.addClass('d-none');
        resize();
    });

    bseditorToolbar.find('.clickAddDiv').on('click', function () {
        $('#exampleModalAddDiv').modal('show');
    });

    bseditorToolbar.find('.clickSetting').on('click', function () {
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
    $(vidgets).each(function (index, element) {
        var scryptIframe = element['scrypt'].replace("$('", "iframeDocCont.find('");
        eval(scryptIframe);
    });
    load();
}