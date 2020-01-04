<?php

namespace alex290\bootstrapEditor\controllers;

use yii\web\Controller;

class DefaultController extends Controller
{
    public function actionIndex()
    {
        $this->layout = false;

        if (\Yii::$app->request->isAjax) {

        }
        return true;
    }
}
