<?php

namespace alex290\bootstrapEditor\controllers;

use Yii;
use yii\base\Controller;
use yii\helpers\Json;

class ConfigController extends Controller
{
    public function actionModalSet()
    {
        $this->layout = false;

        $classModal = Json::decode(Yii::$app->request->get('classModal'));
        $inputClass = Json::decode(Yii::$app->request->get('inputClass'));

        $mediaQuery = null;

        if ($classModal['sizeRab'] == 'Large') {
            $mediaQuery = '@media (min-width: 992px) and (max-width: 1199.98px)';
        } else if ($classModal['sizeRab'] == 'Medium') {
            $mediaQuery = '@media (min-width: 768px) and (max-width: 991.98px)';
        } else if ($classModal['sizeRab'] == 'Small') {
            $mediaQuery = '@media (min-width: 576px) and (max-width: 767.98px)';
        } else if ($classModal['sizeRab'] == 'Extrasmall') {
            $mediaQuery = '@media (max-width: 575.98px)';
        }

        $classNew = [
            'margin-top' => $classModal['margin-top'],
            'margin-bottom' => $classModal['margin-bottom'],
            'margin-left' => $classModal['margin-left'],
            'margin-right' => $classModal['margin-right'],
            'height' => $classModal['height'],
            'width' => $classModal['width'],
        ];

        if ($mediaQuery == null) {

            $inputClass['#' . $classModal['id']] = $classNew;
            $inputClass['#' . $classModal['id']] = array_diff($inputClass['#' . $classModal['id']], array('', NULL, false));
        } else {
            $inputClass[$mediaQuery]['children']['#' . $classModal['id']] = $classNew;
            $inputClass[$mediaQuery]['children']['#' . $classModal['id']] = array_diff($inputClass[$mediaQuery]['children']['#' . $classModal['id']], array('', NULL, false));
        }


        return Json::encode($inputClass);
    }
}
