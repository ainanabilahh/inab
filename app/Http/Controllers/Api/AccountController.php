<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Http\Requests\AccountRequest;
use App\Http\Resources\AccountResource;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function index()
    {
        return AccountResource::collection(
            Account::all()
        );
    }

    public function store(AccountRequest $request)
    {
        $account = Account::create($request->validated());

        return new AccountResource($account);
    }

    public function show(Account $account)
    {
        return new AccountResource($account);
    }

    public function update(AccountRequest $request, Account $account)
    {
        $account->update($request->validated());

        return new AccountResource($account);
    }

    public function destroy(Account $account)
    {
        $account->delete();

        return response()->noContent();
    }
}
