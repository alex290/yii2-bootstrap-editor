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


Usage
-----

Once the extension is installed, simply use it in your code by  :

```php
<?php
    use alex290\bootstrapEditor\BootstrapEdit;
?>
<?= BootstrapEdit::widget(['content' => $content ]) ?>
```

Дополнительные параметры

Своя кнопка
-----------

```php
$costumButton => [
    01 => [
        'name' => 'Название кнопки',
        'html' => 'HTML код',
        'scrypt' => 'Скрипт активации например слайдер', // Необязательный параметр
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
$costumCssScrypt = [
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

```php
$costumCss = <<<CSS
.block-content-collect1 {
    float: left;
    width: 100%;
    box-shadow: 0px 3.58109px 3.58109px rgba(0, 0, 0, 0.25);
    -webkit-border-radius: 10px;
    border-radius: 10px;
}

.galery-collection1 {
    float: left;
    width: 100%;
    padding: 0 0 0 0;
    margin: 0 0 0 0;
}

.galery-collection1 li {
    display: block;
    width: 100%;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    height: 600px;
}
CSS;
```

```php
<?php
    use alex290\bootstrapEditor\BootstrapEdit;
?>
<?= BootstrapEdit::widget(['content' => $content, 'costumeStyle' => json_encode([$costumCss, ...])]) ?>
```