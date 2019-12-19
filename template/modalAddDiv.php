<?php

use yii\helpers\Html;
use yii\helpers\Json;

?>
<!-- Modal Add Div -->
<div class="modal fade" id="exampleModalAddDiv" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabelAddDiv" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabelAddDiv"><i class="far fa-square"></i> Add block</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-3 mb-3">
                        <?= Html::submitButton('Add Row', ['class' => 'btn btn-outline-dark clickAddInner w-100', 'data-class' => 'row']) ?>
                    </div>
                    <div class="col-3 mb-3">
                        <?= Html::submitButton('Add Col 2', ['class' => 'btn btn-outline-dark clickAddInner w-100', 'data-class' => 'col-2']) ?>
                    </div>
                    <div class="col-3 mb-3">
                        <?= Html::submitButton('Add Col 3', ['class' => 'btn btn-outline-dark clickAddInner  w-100', 'data-class' => 'col-3']) ?>
                    </div>
                    <div class="col-3 mb-3">
                        <?= Html::submitButton('Add Col 4', ['class' => 'btn btn-outline-dark clickAddInner  w-100', 'data-class' => 'col-4']) ?>
                    </div>
                    <div class="col-3 mb-3">
                        <?= Html::submitButton('Add Col 6', ['class' => 'btn btn-outline-dark clickAddInner  w-100', 'data-class' => 'col-6']) ?>
                    </div>
                    <div class="col-3 mb-3">
                        <?= Html::submitButton('Add Col 12', ['class' => 'btn btn-outline-dark clickAddInner  w-100', 'data-class' => 'col-12']) ?>
                    </div>
                    <?php if ($this->costumButton != null) : ?>
                        <?php foreach ($this->costumButton as $valueCostum) : ?>
                            <div class="col-3 mb-3">
                                <?= Html::submitButton($valueCostum['name'], ['class' => 'btn btn-outline-dark clickAddCostum  w-100', 'data-class' => 'col-12', 'data-html' => Json::encode($valueCostum)]) ?>
                            </div>
                        <?php endforeach ?>
                    <?php endif ?>
                </div>
            </div>
        </div>
    </div>
</div>