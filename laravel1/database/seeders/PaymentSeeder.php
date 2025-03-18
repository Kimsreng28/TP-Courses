<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Payment;

class PaymentSeeder extends Seeder
{
    public function run()
    {
        Payment::create([
            'order_id' => 1,
            'customer_id' => 1,

            'payment_method' => 'Credit Card',
            'amount' => 199.98,
        ]);
    }
}
