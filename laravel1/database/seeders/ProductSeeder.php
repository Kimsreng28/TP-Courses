<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run()
    {
        Product::create([
            'name' => 'Wireless Earbuds',
            'pricing' => 99.99,
            'description' => 'High-quality wireless earbuds with noise cancellation.',
            'images' => json_encode(['earbuds1.jpg', 'earbuds2.jpg']),
            'category_id' => 1,
        ]);
    }
}