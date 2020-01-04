Bootstrap 4 editor
==================
Bootstrap 4 editor text Area

Installation
------------

The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```
php composer.phar require --prefer-dist alex290/yii2-bootstrap-editor "*"
```

or add

```
"alex290/yii2-bootstrap-editor": "*"
```

to the require section of your `composer.json` file.


Подключение
-----------

в файле `web.php` в папке `config`

вставить параметр

```php
'modules' => [
    'bs4-editor' => [
        'class' => 'alex290\bootstrapEditor\Module',
    ],
],
```


Usage
-----

Once the extension is installed, simply use it in your code by  :

```php
<?php
    use alex290\bootstrapEditor\BootstrapEdit;
?>
<?= BootstrapEdit::widget(['content' => $content ]) ?>
```



Поле с классом `inputContent` - загружает Html - Bootstrap 4 верстку

```php
<textarea id="Content" class="form-control" class="inputContent""></textarea>
```


Дополнительные параметры

Своя кнопка
-----------

```php
'costumButton' => [
    [
        'name' => 'Название кнопки',
        'html' => 'HTML код',
        'scrypt' => 'Скрипт активации например слайдер', // Необязательный параметр
        'style' => 'Стили для конкретного виджета', // Необязательный параметр
    ],
    ...
]
```

```php
<?php
    use alex290\bootstrapEditor\BootstrapEdit;
?>
<?= BootstrapEdit::widget(['content' => $content, 'costumButton' => $costumButton ]) ?>
```

Свои стили и скирпты
--------------------

```php
'costumCssScrypt' = [
    'css' => [
        "/web/css/slick.css",
    ],
    'js' => [
        "/web/js/slick.min.js",
    ]
];
```

```php
<?php
    use alex290\bootstrapEditor\BootstrapEdit;
?>
<?= BootstrapEdit::widget(['content' => $content, 'costumCssScrypt' => $costumCssScrypt]) ?>
```

Редактор CKEDITOR
-----------------

```php
'ckeditor' => [
    'path' => '/web/lib/ckeditor/ckeditor.js',
    'customConfig': '/web/lib/ckeditor/ckeditor_config.js', // Своя конфигурация - Необязательный параметр
],
```

Дополнительные скрипты и стили
------------------------------

Можно добавить дополнительные стили с скрипты при помощи полей форм

Поле с классом `inputScrypt` - загружает JavaScrypt

```php
<textarea id="Scrypt" class="form-control" class="inputScrypt""></textarea>
```

Поле с классом `inputStyle` - загружает сss стили

```php
<textarea id="Style" class="form-control" class="inputStyle""></textarea>
```


Возврат данных при сохранении
-----------------------------

Кнопка с классом `onclickReturnContent` - Возвращает во все поля обновленные данные (Верстка, стили и скрипты);

```php
<button type="submit" class="btn btn-success onclickReturnContent">Сохранить</button>
```


Парсер CSS стилей
-----------------

У модуля есть функция парсинга CSS стилей в массив для работы с элементами

```php
$classNew = CssParser::getJson($css);
```

в результате мы получаем json массива стилей