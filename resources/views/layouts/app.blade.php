<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Corvo ERP') }}</title>
        
        <link href="<?php echo env('MY_URL') ?>/resources/jQuery/<?php echo $jQueryUITheme ?>/jquery-ui-1.13.1.custom/jquery-ui.min.css" rel="stylesheet"/>
        <script src="<?php echo env('MY_URL') ?>/resources/jQuery/jquery-3.6.0.min.js"></script>
        <script src="<?php echo env('MY_URL') ?>/resources/jQuery/<?php echo $jQueryUITheme ?>/jquery-ui-1.13.1.custom/jquery-ui.min.js"></script>

        <?php
        
         if(strpos(url()->current().'','/dashboard')>-1){
                
                $Meta="<base href=\"".env('MY_URL')."/public/dashboard/\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"icon\" type=\"image/x-icon\" href=\"" . env('MY_URL')  ."/resources/ClientApp/dist/client-app/favicon.ico\">";
                
                echo $Meta;
                
                
        ?>
        
        @yield('jQueryUITheme')
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.css">
        
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
                
                
            }else{
                ?>
        
                <!-- Fonts -->
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        
                <?php
            }
        
        ?>
    </head>
    <body class="font-sans antialiased">
        
        
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
                
                ?>
        
                    
                    {{ $slot }}
                    
                    <script src="//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.js"></script>
                <?php
                
            }else{
                
                ?>
        
        <div class="min-h-screen bg-gray-100">
            @include('layouts.navigation')

             Page Heading 
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {{ $header }}
                </div>
            </header>

             Page Content 
            <main>
                {{ $slot }}
            </main>
        </div>
        
        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}" defer></script>
                
        
                <?php
            }
        
        ?>
    </body>
</html>
