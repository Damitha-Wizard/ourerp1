<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    //
    
    public function index(Request $request){
        
       
        
        return view('dashboard');
    }
    
    public function getLanguage(Request $request){
        
        $Language=$request->session()->get('Language');
        
        return $Language;
    }
    
    public function setLanguage(Request $request){
        
        $Language=$request->post('Language');
        
        $request->session()->put('Language',$Language);
        
        return $Language;
    }
}
