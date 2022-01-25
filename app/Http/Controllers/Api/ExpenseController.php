<?php

namespace App\Http\Controllers\Api;

use App\Models\Expense;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Http\Requests\ExpenseRequest;
use App\Http\Resources\ExpenseResource;

class ExpenseController extends Controller
{
    public function index(Request $request)
    {
        Log::info($request->all());
        $month = date('m');
        $year = date('Y');

        if ($request->month && $request->year) {
            $month = $request->month;
            $year = $request->year;
        }

        return ExpenseResource::collection(
            Expense::with(['sub_category', 'account'])
                ->whereMonth('date', $month)
                ->whereYear('date', $year)
                ->where('account_id', $request->account_id)
                ->orderByDesc('date')
                ->get()
        );
    }

    public function store(ExpenseRequest $request)
    {
        $expense = Expense::create($request->validated());

        return new ExpenseResource($expense);
    }

    public function show(Expense $expense)
    {
        return new ExpenseResource($expense);
    }

    public function update(ExpenseRequest $request, Expense $expense)
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
