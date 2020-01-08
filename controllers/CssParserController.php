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
        $dataGet = \Yii::$app->request->post('css');
        $classNew = CssParser::getArr($dataGet);
        return Json::encode($classNew);
    }

    public function actionGetStyle()
    {
        $this->layout = false;
        $dataGet = Json::decode(\Yii::$app->request->post('css'));
        return CssParser::getClass($dataGet);
    }
}
