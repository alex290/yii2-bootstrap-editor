<?php

namespace alex290\bootstrapEditor\controllers;

use yii\web\Controller;

class DefaultController extends Controller
{
    public function actionIndex()
    {
        if (\Yii::$app->request->isAjax) {
                        
        }
        return TRUE;
    }

}
