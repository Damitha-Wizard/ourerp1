<?php
$Lang=request()->cookie('Language');
xdebug_break();
?>
<!DOCTYPE html>
<html lang="{{ request()->cookie('Language') }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Corvo ERP') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">

        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}" defer></script>
        <script src="<?php echo env('MY_URL') ?>/resources/jQuery/jquery-3.6.0.min.js"></script>
        
    </head>
    <body>
        <div class="font-sans text-gray-900 antialiased">
            {{ $slot }}
        </div>
        <?php 
            $Language = request()->cookie('Language');
        ?>
        <script>
            $(function(){
                $('input[type="email"]')
                .on('invalid', function(){
                    if('<?php echo $Language ?>'=='chi'){
                        return this.setCustomValidity('需要电子邮件');
                    }else{
                        return this.setCustomValidity('E-Mail is required!');
                    }
                })
                .on('input', function(){
                    return this.setCustomValidity('');
                });
                
            });
        </script>
    </body>
</html>
