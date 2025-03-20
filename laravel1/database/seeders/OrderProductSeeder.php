<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\OrderProduct;

class OrderProductSeeder extends Seeder
{
    public function run()
    {
        OrderProduct::create([
            'order_id' => 1,
            'product_id' => 2,
            'price' => 99.99,
            'quantity' => 2,
        ]);
    }
}
