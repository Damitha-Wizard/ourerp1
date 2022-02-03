<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Corvo ERP') }}</title>
        
        
        <?php
        
         
                
                $Meta="<base href=\"".env('MY_URL')."/public/dashboard/\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"icon\" type=\"image/x-icon\" href=\"" . env('MY_URL')  ."/resources/ClientApp/dist/client-app/favicon.ico\">";
                
                echo $Meta;
                
                
        ?>
        
        
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.css">
        <link href="<?php echo env('MY_URL') ?>/resources/jQuery/<?php echo $jQueryUITheme ?>/jquery-ui-1.13.1.custom/jquery-ui.min.css" rel="stylesheet"/>
        <script src="<?php echo env('MY_URL') ?>/resources/jQuery/jquery-3.6.0.min.js"></script>
        <script src="<?php echo env('MY_URL') ?>/resources/jQuery/<?php echo $jQueryUITheme ?>/jquery-ui-1.13.1.custom/jquery-ui.min.js"></script>

                <?php
                
                $indexHtmlOfAngularAppPath = base_path();
                
                if(DIRECTORY_SEPARATOR=='\\'){

                    $indexHtmlOfAngularAppPath .= '\\resources\\ClientApp\\dist\\client-app\\index.html';

                }else if(DIRECTORY_SEPARATOR=='/'){

                    $indexHtmlOfAngularAppPath .= '/resources/ClientApp/dist/client-app/index.html';

                }else{

                    throw new Exception('Directory Seperator not supported');

                }

                $indexHtmlOfAngularApp = fopen($indexHtmlOfAngularAppPath, 'r') or die('Unable to open file!');
                $html = fread($indexHtmlOfAngularApp,filesize($indexHtmlOfAngularAppPath));
                fclose($indexHtmlOfAngularApp);

                $Favicon = "<link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\">";
                $StartIndex=strpos($html,$Favicon)+strlen($Favicon);

                $AfterFavicon=substr($html,$StartIndex);

                $HeadClosingStart=strpos($AfterFavicon,"</head>");

                $Style=substr($AfterFavicon,0,$HeadClosingStart);

                $hRefStartBit="href=\"";
                $hRefStart=strpos($Style,$hRefStartBit)+strlen($hRefStartBit);

                $FromHrefStart=substr($Style,$hRefStart);

                $hRefEnd=strpos($FromHrefStart,"\"");

                $existedHRef=substr($FromHrefStart,0,$hRefEnd);
                
                if(strpos($existedHRef,'http')>-1){
                    $NewStyle = $Style;
                }else{
                    $NewStyle = str_replace($existedHRef, env('MY_URL') . '/resources/ClientApp/dist/client-app/' . $existedHRef, $Style);
                }

                
                echo $NewStyle;
                
                
            
        
        ?>
    </head>
    <body class="font-sans antialiased">
        
    <app-root></app-root>
        <?php 
        
            if(strpos(url()->current().'','/dashboard')>-1){
                
                $indexHtmlOfAngularAppPath = base_path();
                
                if(DIRECTORY_SEPARATOR=='\\'){

                    $indexHtmlOfAngularAppPath .= '\\resources\\ClientApp\\dist\\client-app\\index.html';

                }else if(DIRECTORY_SEPARATOR=='/'){

                    $indexHtmlOfAngularAppPath .= '/resources/ClientApp/dist/client-app/index.html';

                }else{

                    throw new Exception('Directory Seperator not supported');

                }

                $indexHtmlOfAngularApp = fopen($indexHtmlOfAngularAppPath, 'r') or die('Unable to open file!');
                $html = fread($indexHtmlOfAngularApp,filesize($indexHtmlOfAngularAppPath));
                fclose($indexHtmlOfAngularApp);

                $ClosingTagOfRootComponent="</app-root>";

                $PositionOfScriptStart=strpos($html,$ClosingTagOfRootComponent)+strlen($ClosingTagOfRootComponent);

                $ClosingTagOfBody="</body>";

                $PositionOfClosingTagOfBody=strpos($html,$ClosingTagOfBody);

                $scripts=substr($html,$PositionOfScriptStart,$PositionOfClosingTagOfBody);

                $newScripts= str_replace("src=\"", "src=\"" . env('MY_FOLDER') . "/resources/ClientApp/dist/client-app/", $scripts);

                echo $newScripts;
                
                
                
            }
                
                ?>
        
        
    </body>
</html>


