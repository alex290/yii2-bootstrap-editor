<?php

namespace alex290\bootstrapEditor\controllers;

use Yii;
use yii\base\Controller;

class WidgetController extends Controller
{
    public function actionIndex()
    {
        $this->layout = 'main';
        $costumButton = Yii::$app->request->get('costumButton');
        return $this->render('index', [
            'costumButton' => $costumButton,
        ]);
    }
}
