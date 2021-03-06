<?php

namespace App\Http\Controllers\Api;

use App\Models\Expense;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Http\Requests\ExpenseRequest;
use App\Http\Resources\ExpenseResource;
use App\Models\Balance;

class ExpenseController extends Controller
{
    public function index(Request $request)
    {
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

        if ($request->transfer_to_id) {
            $lastAccountHistories = Balance::where('account_id', $request->transfer_to_id)->orderByDesc('id')->first();

            Balance::create([
                'account_id' => $request->transfer_to_id,
                'balance' => $lastAccountHistories->balance + $request->amount,
                'date' => $request->date,
            ]);
        }

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
