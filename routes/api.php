<?php

use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function () {
//    Route::post('/user', 'RegisterController@register');
    Route::any('/login', function () {
        return 123;
    })->name('login'); // Route to registrate new user
});
    Route::post('/register', [RegisterController::class, 'register']); // Route to registrate new user
    Route::post('/auth', [LoginController::class, 'auth']); // Route to authenticate user
