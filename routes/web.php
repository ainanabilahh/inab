<?php

use Illuminate\Support\Facades\Route;

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

Route::middleware(['auth'])->group(function () {
    // Route::view('/{any}', 'dashboard')->where('any', '.*');

    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');

    Route::get('/budgets', function () {
        return view('budgets');
    })->name('budgets');

    Route::get('/accounts', function () {
        return view('accounts');
    })->name('accounts');

    Route::get('/expenses', function () {
        return view('expenses');
    })->name('expenses');
});

require __DIR__ . '/auth.php';
