<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Cart;

class CartSeeder extends Seeder
{
    public function run()
    {
        Cart::create([
            'customer_id' => 1,
            'product_id' => 1,
            'quantity' => 2,
        ]);
    }
}