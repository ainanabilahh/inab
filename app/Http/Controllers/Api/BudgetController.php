<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Budget;
use App\Http\Resources\BudgetResource;
use App\Http\Requests\BudgetRequest;
use App\Http\Requests\SubCategoryRequest;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

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
        Log:info($request->all());
        $budget = Budget::create($request->validated());

        foreach ($request->category_name as $key => $category_name) {
            Category::create([
                'name' => $category_name
            ]);
        }

        return new BudgetResource($budget);
    }

    public function show(Budget $budget)
    {
        return new BudgetResource($budget);
    }

    public function update(Request $request, Budget $budget)
    {
        Log:info($request->all());
        $budget->update($request->validated());

        return new BudgetResource($budget);
    }

    public function destroy(Budget $budget)
    {
        $budget->delete();

        return response()->noContent();
    }
}
