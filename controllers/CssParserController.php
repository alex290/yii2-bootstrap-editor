<?php

namespace alex290\bootstrapEditor\controllers;

use alex290\bootstrapEditor\CssParser;
use yii\helpers\Json;
use yii\web\Controller;

class CssParserController extends Controller
{
    public function actionIndex()
    {
        $this->layout = false;
        $dataGet = \Yii::$app->request->get('css');
        $classNew = CssParser::getJson($dataGet);
        return $classNew;
    }
}
