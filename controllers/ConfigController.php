<?php

namespace alex290\bootstrapEditor\controllers;

use alex290\bootstrapEditor\CssParser;
use Yii;
use yii\base\Controller;
use yii\helpers\Json;

class ConfigController extends Controller
{
    public function actionModalSet()
    {
        $this->layout = false;

        $input = Yii::$app->request->get('inputClass');
        $input = str_replace(['\r\n','"'], "", $input);
        $classModal = Json::decode(Yii::$app->request->get('classModal'));
        $inputClass = CssParser::getArr($input);

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
        // debug($input);
        $classNew = [
            'margin-top' => $classModal['margin-top'],
            'margin-bottom' => $classModal['margin-bottom'],
            'margin-left' => $classModal['margin-left'],
            'margin-right' => $classModal['margin-right'],
            'height' => $classModal['height'],
            'width' => $classModal['width'],
        ];

        if ($mediaQuery == null) {

            /*if (array_key_exists('#' . $classModal['id'], $inputClass)) {
                unset($inputClass['#' . $classModal['id']]);
            } */
            $inputClass['#' . $classModal['id']] = $classNew;
            $inputClass['#' . $classModal['id']] = array_diff($inputClass['#' . $classModal['id']], array('', NULL, false));
        } else {
            /*if (array_key_exists($mediaQuery, $inputClass)) {
                $newClassChild = $inputClass[$mediaQuery]['children'];
                if (array_key_exists('#' . $classModal['id'], $newClassChild)) {
                    unset($inputClass[$mediaQuery]['children']['#' . $classModal['id']]);
                }
            }*/

            $inputClass[$mediaQuery]['children']['#' . $classModal['id']] = $classNew;
            $inputClass[$mediaQuery]['children']['#' . $classModal['id']] = array_diff($inputClass[$mediaQuery]['children']['#' . $classModal['id']], array('', NULL, false));
        }
        // debug($inputClass);

        return CssParser::getClass($inputClass);
    }

    public function actionModalGet()
    {
        $this->layout = false;

        $classModal = Json::decode(Yii::$app->request->get('classModal'));
        $inputClass = CssParser::getArr(Yii::$app->request->get('inputClass'));

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
        $newClass = null;

        if ($mediaQuery == null) {
            if (array_key_exists('#' . $classModal['id'], $inputClass)) {
                $newClass = $inputClass['#' . $classModal['id']];
            }
        } else {
            if (array_key_exists($mediaQuery, $inputClass)) {
                $newClassChild = $inputClass[$mediaQuery]['children'];
                if (array_key_exists('#' . $classModal['id'], $newClassChild)) {
                    $newClass = $newClassChild['#' . $classModal['id']];
                }
            }
        }

        return $newClass == null ? '' : Json::encode($newClass);
    }

    public function actionScryptFrame()
    {
        $this->layout = false;
        $scrypt = Json::decode(Yii::$app->request->get('scrypt'));
        $newScrypt = '';
        foreach ($scrypt as $key => $value) {
            $scr = str_replace("$('", "iframeDocCont.find('", $value);
            $newScrypt = $newScrypt . '\r\n' . $scr;
            // debug($newScrypt);
        }
        $newScrypt = str_replace('\r\n', "\r\n", $newScrypt);
        // debug($newScrypt);

        return $newScrypt;
    }
}
