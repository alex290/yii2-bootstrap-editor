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
<?= BootstrapEdit::widget(['content' => $content ]) ?>```

Дополнительные параметры

Своя кнопка

    $costumButton => [
        01 => [
            'name' => 'Название кнопки',
            'html' => 'HTML код',
            'scrypt' => 'Скрипт активации например слайдер', // Необязательный параметр
        ],
        ...
    ]


    <?= BootstrapEdit::widget(['content' => $content, 'costumButton' => $costumButton ]) ?>