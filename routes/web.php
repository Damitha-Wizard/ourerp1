<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', [HomeController::class,'index'])->middleware(['auth'])->name('dashboard');

Route::post('/set-language', [HomeController::class,'setLanguage'])->name('set-language');

Route::get('/get-jquery-themes', [HomeController::class,'getjQueryUIThemes'])->name('get-jquery-themes');

require __DIR__.'/auth.php';
