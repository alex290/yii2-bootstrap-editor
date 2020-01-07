<?php

use yii\helpers\Html;

?>
<!-- Modal Setting -->
<div class="modal fade" id="exampleModalSetting" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabelSetting" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content bg-dark">
      <div class="modal-header text-white">
        <h5 class="modal-title" id="exampleModalLabelSetting"><i class="fas fa-cogs"></i> Setting - ID = <span class="zaglTicleModalSetting"></span></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <!-- ================================================================================================================ -->

        <?= Html::textInput('classes', null, ['class' => 'form-control classesModalSetting']) ?>
        <h4 class="mt-4 mb-0 text-white">Внешние отступы</h4>
        <hr class="mt-1 text-white">
        <div class="row">
          <div class="col-6">
            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="marginTop-sm">Сверху</span>
              </div>
              <?= Html::textInput('marginTop', null, ['class' => 'form-control marginTopModalSetting', 'aria-describedby' => "marginTop-sm"]) ?>
            </div>
          </div>
          <div class="col-6">
            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="marginBottom-sm">Снизу</span>
              </div>
              <?= Html::textInput('marginBottom', null, ['class' => 'form-control marginBottomModalSetting', 'aria-describedby' => "marginBottom-sm"]) ?>
            </div>
          </div>
          <div class="col-6">
            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="marginLeft-sm">Слева</span>
              </div>
              <?= Html::textInput('marginLeft', null, ['class' => 'form-control marginLeftModalSetting', 'aria-describedby' => "marginLeft-sm"]) ?>
            </div>
          </div>
          <div class="col-6">
            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="marginRight-sm">Справа</span>
              </div>
              <?= Html::textInput('marginRight', null, ['class' => 'form-control marginRightModalSetting', 'aria-describedby' => "marginRight-sm"]) ?>
            </div>
          </div>
        </div>

        <h4 class="mt-4 mb-0 text-white">Размеры</h4>
        <hr class="mt-1 text-white">
        <div class="row">
          <div class="col-6">
            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="height-sm">Высота</span>
              </div>
              <?= Html::textInput('height', null, ['class' => 'form-control heightModalSetting', 'aria-describedby' => "height-sm"]) ?>
            </div>
          </div>
          <div class="col-6">
            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="width-sm">Ширина</span>
              </div>
              <?= Html::textInput('width', null, ['class' => 'form-control widthModalSetting', 'aria-describedby' => "width-sm"]) ?>
            </div>
          </div>
        </div>
        <!-- ================================================================================================================ -->
      </div>
      <div class="modal-footer">
        <?= Html::submitButton('Применить', ["class" => "btn btn-secondary applyModalSetting"]) ?>
      </div>
    </div>
  </div>
</div>