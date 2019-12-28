<?php

namespace alex290\bootstrapEditor;

/**
 * This is just an example.
 */
class BootstrapEdit extends \yii\base\Widget
{

    public $content;
    public $costumButton = null;
    public $costumCssScrypt = null;
    public $ckeditor = [];

    protected $registerCssScrypt;

    public function run()
    {
        $this->registerCssScrypt = AssetsBundle::register($this->view);
        // debug($this->costumeStyle);
        return $this->toTemplate($this->content);
    }

    protected function toTemplate($content) {
        ob_start();
        include __DIR__ . '/template/editor.php';
        include __DIR__ . '/template/modalAddDiv.php';
        include __DIR__ . '/template/modalSetting.php';
        return ob_get_clean();
    }
}
