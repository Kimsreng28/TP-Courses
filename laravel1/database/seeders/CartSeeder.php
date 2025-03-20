<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Cart;

class CartSeeder extends Seeder
{
    public function run()
    {
        Cart::create([
            'customer_id' => 7,
            'product_id' => 2,
            'quantity' => 2,
        ]);
    }
}