<?php

use yii\helpers\Html;
use yii\helpers\Json;

$cssArr = [];
$jsArr = [];
$scryptArr = [];
foreach ($this->registerCssScrypt->css as $valueCss) {
    $cssArr[] = '/web' . $this->registerCssScrypt->baseUrl . '/' . $valueCss;
}

foreach ($this->registerCssScrypt->js as $valueJs) {
    $jsArr[] = '/web' . $this->registerCssScrypt->baseUrl . '/' . $valueJs;
}
if ($this->costumCssScrypt != null) {
    foreach ($this->costumCssScrypt['css'] as $valueCss) {
        $cssArr[] = $valueCss;
    }

    foreach ($this->costumCssScrypt['js'] as $valueScrypt) {
        
        $scryptArr[] = $valueScrypt;
    }
}

$jsonScrypt = Json::encode($scryptArr);
$jsonCss = Json::encode($cssArr);

?>
<div class="json-text"><?= $jsonCss ?></div>
<div class="json-js d-none"><?= $jsArr[0] ?></div>
<div class="json-style"><?= $this->costumeStyle ?></div>
<div class="json-scrypt d-none"><?= $jsonScrypt ?></div>
<div class="json-widgetScrypt d-none"><?= Json::encode($this->costumButton) ?></div>
<div class="card border border-info w-100 bg-dark">
    <div class="card-header d-flex justify-content-between bg-light">
        <div class="addButton">
            <?= Html::submitButton('<i class="fas fa-plus"></i> add Container Fluid', ['class' => 'bs4-click-add btn btn-outline-dark', 'data-class' => 'container-fluid']) ?>
            <?= Html::submitButton('<i class="fas fa-plus"></i> add Container', ['class' => 'bs4-click-add btn btn-outline-dark', 'data-class' => 'container']) ?>
        </div>
        <div class="remote">
            <ul class="resolutionBs4Widget d-flex">
                <li data-size="Extralarge" title="Extra large"><i class="fas fa-tv fa-2x"></i></li>
                <li data-size="Large" title="Large"><i class="fas fa-desktop fa-2x"></i></li>
                <li data-size="Medium" title="Medium"><i class="fas fa-tablet-alt fa-2x"></i></li>
                <li data-size="Small" title="Small"><i class="fas fa-mobile-alt fa-rotate-90 fa-2x"></i></li>
                <li data-size="Extrasmall" title="Extra small"><i class="fas fa-mobile-alt fa-2x"></i></li>
            </ul>
        </div>
    </div>
    <div class="card-body d-flex justify-content-center">
        <div class="container-editor-html bg-light" data-select="none" data-style="<?= $jsonCss ?>">
            <iframe allowfullscreen="allowfullscreen" id="html-frame" width="100%" scrolling="no"></iframe>
        </div>
    </div>
</div>

<div class="bseditor-toolbar d-none">
    <div class="fas fa-arrow-up item"></div>
    <div class="fas fa-plus item noneCont clickPlusCol"></div>
    <div class="fas fa-minus item noneCont clickMinusCol"></div>
    <div class="fas fa-arrows-alt item"></div>
    <div class="far fa-clone item"></div>
    <div class="far fa-plus-square item clickAddDiv"></div>
    <div class="fas fa-cog item clickSetting"></div>
    <div class="fas fa-trash-alt item click-remove-obj"></div>
</div>