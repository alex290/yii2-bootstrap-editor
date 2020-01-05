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

    public function actionGetStyle()
    {
        $this->layout = false;
        $dataGet = Json::decode(\Yii::$app->request->get('css'));
        $css = '';
        // debug($dataGet);
        foreach ($dataGet as $key => $valueParent) {
            if (array_key_exists("children", $valueParent)) {
                $css = $css . $key . ' { \r\n';
                foreach ($valueParent['children'] as $key => $valueChildTwo) {
                    $css = $css . '    ' . $key . ' { \r\n';
                    foreach ($valueChildTwo as $key => $valueChildTree) {
                        $css = $css . '        ' . $key . ': ' . $valueChildTree . '; \r\n';
                    }
                    $css = $css . '    ' . '} \r\n';
                }
                $css = $css . '} \r\n\r\n';
                // debug($dataGet[$key]['children']);
            } else {
                $css = $css . $key . ' { \r\n';
                foreach ($valueParent as $key => $valueChild) {
                    $css = $css . '    ' . $key . ': ' . $valueChild . '; \r\n';
                }
                $css = $css . '} \r\n\r\n';
            }
        }
        $css = str_replace('\r\n', "\r\n", $css);
        return $css;
    }
}
