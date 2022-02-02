<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use Illuminate\Support\Facades\Schema;

use Illuminate\Support\Facades\View;
use Illuminate\Http\Request;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(Request $request)
    {
        Schema::defaultStringLength(200);
        
        session_start();
        
        if(!isset($_SESSION['jQueryUITheme'])){
            $_SESSION['jQueryUITheme']='Le Frog';
        }
        
        $jQueryUITheme=$_SESSION['jQueryUITheme'];
        
        if(!isset($_SESSION['Language'])){
            $_SESSION['Language']='en';
        }
        
        $Language=$_SESSION['Language'];
        
        View::share('jQueryUITheme', $jQueryUITheme);
        View::share('Language', $Language);
    }
}
