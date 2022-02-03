<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\jQueryTheme as jQueryThemeModel;

class HomeController extends Controller
{
    //
    
    public function index(Request $request){
        
       
        
        return view('dashboard');
    }
    
    
    
    public function setLanguage(Request $request){
        
        $Language=$request->post('Language');
        
        $minutes = 60*24*30;
        $response = new Response($Language,200);
        $response->withCookie(cookie('Language', $Language, $minutes));

        return $response;
    }
    
    public function getjQueryUIThemes(Request $request){
               
        $jQueryUIThemes=jQueryThemeModel::all();
        
        return json_encode($jQueryUIThemes);
    }
}
