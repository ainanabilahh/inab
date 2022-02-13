<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Http\Requests\AccountRequest;
use App\Http\Resources\AccountResource;
use App\Models\AccountHistory;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function index()
    {
        return AccountResource::collection(
            Account::with(['account_histories', 'expenses'])->get()
        );
    }

    public function store(AccountRequest $request)
    {
        // $account = Account::create($request->validated());

        $account = Account::create([
            'name' => $request->name,
            'category' => $request->category,
        ]);

        AccountHistory::create([
            'account_id' => $account->id,
            'balance' => $request->balance,
        ]);

        return new AccountResource($account);
    }

    public function show(Account $account)
    {
        return new AccountResource($account);
    }

    public function update(AccountRequest $request, Account $account)
    {
        // $account->update($request->validated());

        Account::where('id', $account->id)->update([
            'name' => $request->name,
            'category' => $request->category,
        ]);

        AccountHistory::create([
            'account_id' => $account->id,
            'balance' => $request->balance,
        ]);

        return new AccountResource($account);
    }

    public function destroy(Account $account)
    {
        $account->delete();

        return response()->noContent();
    }
}
