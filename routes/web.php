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

Auth::routes();

Route::get('/logout', function () {
    Auth::logout(); // Logout the user
    return redirect()->route('login'); // Redirect to the login page
})->name('logout');

Route::get('/{catch?}', function () {
    return view('home'); // your start view
})->where('catch', '^(?!api).*$');

