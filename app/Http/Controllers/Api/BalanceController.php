<?php

namespace App\Http\Controllers\Api;

use App\Models\Balance;
use App\Http\Controllers\Controller;
use App\Http\Resources\BalanceResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class BalanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        Log::info($request->all());
        return BalanceResource::collection(
            Balance::where('account_id', $request->account_id)->get()
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Balance  $accountHistory
     * @return \Illuminate\Http\Response
     */
    public function show(Balance $accountHistory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Balance  $accountHistory
     * @return \Illuminate\Http\Response
     */
    public function edit(Balance $accountHistory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Balance  $accountHistory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Balance $accountHistory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Balance  $accountHistory
     * @return \Illuminate\Http\Response
     */
    public function destroy(Balance $accountHistory)
    {
        //
    }
}
