<?php

namespace alex290\bootstrapEditor;

use yii\helpers\Json;

class CssParser
{

    public static function getArr($css)
    {
        $result = null;
        $classNew = [];
        $cssStyle = str_replace(["\r\n", "\r", "\n", "\t", '  ', '    ', '    '], '', $css);

        preg_match_all('/\s*(.*)\s*\{\s*(.*)\s*\}/sU', $cssStyle, $match);
        $reg = '/\b([-a-z]+)\s*:\s((?:(?:\(.*?\))*|(?:\'.*?\')*|(?:\".*?\")*|.)*?)\s*;/s';


        if (!empty($match[1])) {
            foreach ($match[1] as $key => $valueArra) {

                $pos = strpos($valueArra, '@media');
                if (!($pos === false)) {
                    preg_match_all('/\s*(.*)\s*\{\s*(.*)\s*\}/sU', $match[2][$key] . '}', $matchTwo);
                    if (!empty($matchTwo[1])) {
                        foreach ($matchTwo[1] as $key => $valueTwoArra) {
                            preg_match_all($reg, $matchTwo[2][$key], $content);
                            $result = array_combine($content[1], $content[2]);
                            $classNew[str_replace("}", '', $valueArra)]['children'] = [trim($valueTwoArra) => $result];
                        }
                    }
                } else {
                    preg_match_all($reg, $match[2][$key], $content);
                    $result = array_combine($content[1], $content[2]);
                    $classNew[trim(str_replace("}", '', $valueArra), ' ')] = $result;
                }
            }
        }
        return $classNew;
    }

    public static function getClass($arrClass)
    {
        $css = '';
        // debug($dataGet);
        foreach ($arrClass as $key => $valueParent) {
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
