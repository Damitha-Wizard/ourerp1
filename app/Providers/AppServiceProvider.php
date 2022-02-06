<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use Illuminate\Support\Facades\Schema;

use Illuminate\Support\Facades\View;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Crypt;

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
        
        $Language= $request->cookie('Language');
        
        $Lang=Crypt::decrypt($Language, false);
        
        $Language=substr($Lang, strpos($Lang,'|')+1);
        
        app()->setLocale($Language);
        
        
    }
}
