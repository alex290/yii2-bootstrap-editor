<?php

use yii\helpers\Html;
?>
<div class="card border border-info w-100 bg-dark">
    <div class="card-header d-flex justify-content-between bg-light">
        <div class="addButton">
            <?= Html::submitButton('<i class="fas fa-plus"></i> add Container Fluid', ['class' => 'bs4-click-add btn btn-outline-dark', 'data-class' => 'container-fluid']) ?>
            <?= Html::submitButton('<i class="fas fa-plus"></i> add Container', ['class' => 'bs4-click-add btn btn-outline-dark', 'data-class' => 'container']) ?>
        </div>
        <div class="remote">
            <h1>Hello</h1>
        </div>
    </div>
    <div class="card-body">
        <div class="container-editor-html bg-light" data-select="none"></div>
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

