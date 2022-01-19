<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Account;

class AccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $accounts = [
            'Budget Accounts' => [
                'Checking',
                'Savings',
                'Cash',
                'Credit Card',
                'Line of Credit'
            ],
            'Mortgages and Loans' => [
                'Mortgage',
                'Student Loan',
                'Personal Loan',
                'Medical Debt',
                'Other Debt'
            ],
            'Tracking Accounts' => [
                'Asset (e.g. Investment)',
                'Liability (e.g. Mortgage)'
            ]
        ];

        foreach ($accounts as $i => $account) {
            foreach ($account as $type) {
                Account::create([
                    'name' => $type,
                    'category' => $i
                ]);
            }
        }
    }
}
