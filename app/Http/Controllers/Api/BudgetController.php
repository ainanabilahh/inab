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
        $budget = Budget::create($request->validated());

        return new BudgetResource($budget);
    }

    public function show(Budget $budget)
    {
        return new BudgetResource($budget);
    }

    public function update(BudgetRequest $request, Budget $budget)
    {
        $budget->update($request->validated());

        return new BudgetResource($budget);
    }

    public function destroy(Budget $budget)
    {
        $budget->delete();

        return response()->noContent();
    }
}
