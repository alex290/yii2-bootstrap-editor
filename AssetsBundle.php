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
        'css/main.css',
    ];
    public $js = [
        'js/main.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
    ];

    
}
