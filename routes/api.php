<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ExpenseController;
use App\Http\Controllers\Api\SubCategoryController;
use App\Http\Controllers\Api\BudgetController;
use App\Http\Controllers\Api\AccountController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/expenses/index', [ExpenseController::class, 'index'])->name('expenses.index');
Route::apiResource('expenses', ExpenseController::class)->except(['index']);
Route::apiResource('sub_categories', SubCategoryController::class);
Route::apiResource('budgets', BudgetController::class);
Route::apiResource('accounts', AccountController::class);
