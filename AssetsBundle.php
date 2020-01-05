<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace alex290\bootstrapEditor;

use yii\web\AssetBundle;

/**
 * Description of GalleryAssetsBundle
 *
 * @author art
 */
class AssetsBundle extends AssetBundle {
    
    public $sourcePath  = '@vendor/alex290/yii2-bootstrap-editor/scr';
    public $css = [
        'css/bootstrap.min.css',
        'css/fontawesome/all.css',
        'css/fontawesome/solid.css',
        'css/main.css',
    ];
    public $js = [
        'js/jquery.min.js',
        'js/parseCss.js',
        'js/main.js',
        'js/columb.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapPluginAsset',
    ];

    public function init()
    {
        parent::init();
        // resetting BootstrapAsset to not load own css files
        \Yii::$app->assetManager->bundles['yii\\bootstrap\\BootstrapAsset'] = [
            'css' => [],
            'js' => []
        ];
        \Yii::$app->assetManager->bundles['yii\\bootstrap\\BootstrapPluginAsset'] = [
            'css' => [],
            'js' => []
        ];
    }
    
}
