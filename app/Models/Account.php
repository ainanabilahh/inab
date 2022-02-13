<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function expenses()
    {
        return $this->hasMany(Expense::class);
    }

    public function account_histories()
    {
        return $this->hasMany(AccountHistory::class);
    }
}
