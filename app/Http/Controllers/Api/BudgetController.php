<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Budget;
use App\Http\Resources\BudgetResource;
use App\Http\Requests\BudgetRequest;

class BudgetController extends Controller
{
    public function index()
    {
        return BudgetResource::collection(
            Budget::all()
        );
    }

    public function store(BudgetRequest $request)
    {
        $expense = Budget::create($request->validated());

        return new BudgetResource($expense);
    }

    public function show(Budget $expense)
    {
        return new BudgetResource($expense);
    }

    public function update(BudgetRequest $request, Budget $expense)
    {
        $expense->update($request->validated());

        return new BudgetResource($expense);
    }

    public function destroy(Budget $expense)
    {
        $expense->delete();

        return response()->noContent();
    }
}
