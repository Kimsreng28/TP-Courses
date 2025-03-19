<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;


class CategoryTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        // test api category
        $response = $this->get('/api/categories');

        $response->assertStatus(200)->assertJsonFragment(['message' => 'Get all categories']);
    }

    // test create category successfully
    public function test_create_category(): void
{
    $response = $this->postJson('/api/categories', ['name' => 'Test Category']);

    $response->assertStatus(201)
             ->assertJson([
                 'category' => [
                     'name' => 'Test Category',
                 ],
             ]);
    }

    public function test_create_category_failed(): void
    {
        $response = $this->postJson('/api/categories', ['name' => '']);

        $response->assertStatus(422);
    }

}
