<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Expense;
use App\Http\Resources\ExpenseResource;
use Illuminate\Http\Request;

class ExpenseController extends Controller
{
    public function index()
    {
        return ExpenseResource::collection(Expense::all());
    }

    public function store(StoreExpenseRequest $request)
    {
        $expense = Expense::create($request->validated());

        return new ExpenseResource($expense);
    }

    public function show(Expense $expense)
    {
        return new ExpenseResource($expense);
    }

    public function update(StoreExpenseRequest $request, Expense $expense)
    {
        $expense->update($request->validated());

        return new ExpenseResource($expense);
    }

    public function destroy(Expense $expense)
    {
        $expense->delete();

        return response()->noContent();
    }
}
