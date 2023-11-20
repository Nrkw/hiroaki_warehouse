<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Route::get('/greet', function()
{
    echo "GREET";
    return view("greet");
});
Route::get('/', function () {
    return view('index');
});



Route::get('adduserview', "App\Http\Controllers\UserController@addUserView");
Route::post('adduser', "App\Http\Controllers\UserController@addUser");

Route::get("/login", "App\Http\Controllers\UserController@login");
Route::post("/trylogin", "App\Http\Controllers\UserController@trylogin");

Route::get("/logout", "App\Http\Controllers\UserController@logout");
Route::get("/profile/{username}", [App\Http\Controllers\UserController::class, "showProfile"]);
Route::get("/profile/icon/{username}", [App\Http\Controllers\UserController::class, "returnIcon"]);
Route::get("/profile/upload/introduction/{name}/{text}", [App\Http\Controllers\UserController::class, "uploadIntroduction"]);
Route::get("/profile/upload/email/{name}/{text}", [App\Http\Controllers\UserController::class, "uploadEmail"]);

Route::get('/err', function()
{
    $msg = "直接エラーページにアクセスしましたね？";
    return view('error', compact("msg"));
});


Route::get('/mywordbook', "App\Http\Controllers\MyWordbook\MyWordbookController@index");
                                         //$name, $word, $wordtype, $gender, $meaning
Route::get('/mywordbook/upload/word/{name}/{word}/{wordtype}/{gender}/{meaning}', [App\Http\Controllers\MyWordbook\MyWordbookController::class, "uploadWord"]);

//TODO:下のGETのURL、要修正。
Route::get('/mywordbook/update/word/{name}/{id}/{wordtype}/{gender}/{meaning}/{plural}/{other}', [App\Http\Controllers\MyWordbook\MyWordbookController::class, "updateWord"]);