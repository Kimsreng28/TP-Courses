<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Wishlist;

class WishlistSeeder extends Seeder
{
    public function run()
    {
        Wishlist::create([
            'customer_id' => 7,
            'product_id' => 2,
        ]);
    }
}
