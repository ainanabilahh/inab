<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            'Dining Out',
            'Gaming',
            'Music',
            'Fun Money',
            'Fitness',
            'Vacation',
            'Education',
            'Student Loan',
            'Auto Loan',
            'Auto Maintenance',
            'Home Maintenance',
            'Renter\'s/Home Insurance ',
            'Medical ',
            'Clothing ',
            'Gifts ',
            'Giving ',
            'Computer Replacement ',
            'Software Subscriptions ',
            'Stuff I Forgot to Budget For ',
            'Rent/Mortgage ',
            'Electric ',
            'Water ',
            'Internet ',
            'Groceries ',
            'Transportation ',
            'Interest & Fees'
        ];

        foreach ($categories as $key => $category) {
            Category::create([
                'name' => $category,
            ]);
        }
    }
}
