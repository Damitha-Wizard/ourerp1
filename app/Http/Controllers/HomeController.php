<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\App;

use App\Models\jQueryTheme as jQueryThemeModel;

class HomeController extends Controller
{
    //
    
    public function index(Request $request){
        
        $jQueryUITheme=$request->cookie('jQueryUITheme');       
        
        return view('dashboard')->with('jQueryUITheme',$jQueryUITheme);
    }
    
    public function getLanguage(Request $request){
        
        $Language=$request->cookie('Language');

        return $Language;
    }
    
    public function setLanguage(Request $request){
        
        $Language=$request->post('Language');
        
        $minutes = 60*24*365;
        $response = new Response($Language);
        $response->withCookie('Language', $Language, $minutes);
        
        App::setLocale('chi');

        return $response;
    }
    
    public function getjQueryUIThemes(Request $request){
               
        $jQueryUIThemes=jQueryThemeModel::all();
        
        return json_encode($jQueryUIThemes);
    }
    
    public function setjQueryUITheme(Request $request){
        
        $jQueryUITheme=$request->post('jQueryUITheme');
        $minutes = 60*24*365;
        $response = new Response($jQueryUITheme);
        $response->withCookie('jQueryUITheme', $jQueryUITheme, $minutes);

        return $response;
    }
    
    public function getjQueryTheme(Request $request){
        
        $jQueryUITheme=$request->cookie('jQueryUITheme');
        
        return $jQueryUITheme;
    }
}
