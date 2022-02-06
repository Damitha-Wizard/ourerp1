<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\View;
use Illuminate\Http\Request;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    
    public static function initialCookie(Request $request){
        if(!Cookie::get('jQueryUITheme'))
    	{
            $jQueryTheme='Le Frog';
            $minutes = 60*24*365;
            return back()->cookie('jQueryUITheme', $jQueryTheme, $minutes);
    	}
    	else{
            return back();
    	}
    	if(!Cookie::get('Language'))
    	{
            $Language='en';
            $minutes = 60*24*365;
            return back()->cookie('Language', $Language, $minutes);
    	}
    	else{
            return back();
    	}
        
        
    }
}
