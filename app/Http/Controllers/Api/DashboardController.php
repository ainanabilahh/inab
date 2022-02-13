<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Expense;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Carbon;

class DashboardController extends Controller
{
    public function index()
    {
        $expenses_per_month = Expense::selectRaw('CONCAT(monthname(date), " ", year(date)) month, DATE_FORMAT(DATE,"%Y%m") month_year, sum(amount) value')
            // ->whereYear('date', Carbon::parse(today())->format('Y'))
            ->whereNotIn('sub_category_id', [32])
            ->groupBy('month')
            ->groupBy('month_year')
            ->orderBy('month_year')
            ->take(12)
            ->get();

        return response()->json(['expenses_per_month' => $expenses_per_month]);
    }
}
