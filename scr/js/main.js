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

var iframeDocCont = iframeDoc.find('.frame-dashed-wrap');

var sizeRab = 'Extralarge';
var frstResize = true;

jQuery(document).ready(function($) {

    var cssIframe = $('.json-text').text();
    var headFrame = iframe.find('head');
    $(JSON.parse(cssIframe)).each(function(index, element) {

        // console.log(element);
        headFrame.append($("<link/>", {
            rel: "stylesheet",
            href: element,
            type: "text/css"
        }));

    });


    $('.container-editor-html').css({
        width: size[sizeRab]['size'],
    });



    $('.bs4-click-add').on('click', function() {
        var calss = $(this).data('class');
        var html = iframeDocCont.html();
        console.log(html);
        iframeDocCont.html(html + '<div class="' + calss + '"></div>');
        load();
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
    $('.container-editor-html div').off("click");
    $('.container-editor-html div').on('click', function(event) {

        $('.container-editor-html div').removeClass('selected');
        $('.bseditor-toolbar').removeClass('d-none');
        $(this).addClass('selected');
        if ($(this).hasClass('container') || $(this).hasClass('row') || $(this).hasClass('container-fluid')) {
            $('.noneCont').addClass('d-none');
        } else {
            $('.noneCont').removeClass('d-none');
        }
        posIlteMenu();
        event.stopPropagation();
    });
    // --------------------------------------------

    // Добавление дочерних эелементов
    $('.clickAddInner').off("click");
    $('.clickAddInner').on('click', function() {
        var calss = $(this).data('class');
        var html = $('.container-editor-html div.selected').html();
        $('.container-editor-html div.selected').html(html + '<div class="' + calss + '"></div>');
        load();
    });
    // --------------------------------------------------

    // Добавление своих дочерних эелементов
    $('.clickAddCostum').off("click");
    $('.clickAddCostum').on('click', function() {
        var dataJson = $(this).data('html');
        var html = dataJson['html'];

        $('.container-editor-html div.selected').html(html);
        if (dataJson['scrypt']) {
            eval(dataJson['scrypt']);
        }
        load();
    });
    // --------------------------------------------------

    // Удаление выделения
    document.querySelector('.container-editor-html').onclick = function(e) {
        if (e.target != this) { return true; }
        $('.container-editor-html div').removeClass('selected');
        $('.bseditor-toolbar').addClass('d-none');
    };
    // --------------------------------------------------------

    // Увеличение колонки
    $('.clickPlusCol').off("click");
    $('.clickPlusCol').on('click', function() {
        var classDiv = $('div.selected').attr('class').split(/\s+/);
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
                console.log(summ);
                var newSumm;
                if (summ < 12) {
                    newSumm = summ + 1;
                    $('div.selected').removeClass(size[sizeRab]['class'] + '-' + summ);
                    // $('div.selected').addClass(classNew);
                    $('div.selected').addClass(size[sizeRab]['class'] + '-' + newSumm);
                    posIlteMenu();
                }

            }
        });

    });
    // ---------------------------------------------------------

    // Уменьшение колонки
    $('.clickMinusCol').off("click");
    $('.clickMinusCol').on('click', function() {
        var classDiv = $('div.selected').attr('class').split(/\s+/);
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
                    $('div.selected').removeClass(classTeml);
                    $('div.selected').addClass(classNew);
                    posIlteMenu();
                }


            }
        });

    });
    // ---------------------------------------------------------


    $('.click-remove-obj').on('click', function() {
        $('.container-editor-html div.selected').remove();
        $('.bseditor-toolbar').addClass('d-none');
    });

    $('.clickAddDiv').on('click', function() {
        $('#exampleModalAddDiv').modal('show');
    });

    $('.clickSetting').on('click', function() {
        $('#exampleModalSetting').modal('show');
    });

}

function posIlteMenu() {
    var position = $('div.selected').offset();

    $(".bseditor-toolbar").offset({ top: position.top - $('.bseditor-toolbar').innerHeight(), left: position.left });
}