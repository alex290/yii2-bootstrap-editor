jQuery(document).ready(function($) {
    $('.bs4-click-add').on('click', function() {
        var calss = $(this).data('class');
        var html = $('.container-editor-html').html();
        $('.container-editor-html').html(html + '<div class="' + calss + '"></div>');
        load();
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
                var classNew;
                if (classNewArr[classNewArr.length - 1] < 12) {
                    classNewArr[classNewArr.length - 1] = Number(classNewArr[classNewArr.length - 1]) + 1;
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