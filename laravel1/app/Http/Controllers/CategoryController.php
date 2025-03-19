<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getCategories()
    {
        $categories = Category::all();
        return response()->json(['message' => 'Get all categories', 'categories' => $categories], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function createCategory(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255'
        ]);

        $category = Category::create([
            'name' => $validatedData['name'],
        ]);


        return response()->json(['message' => 'Creating a new category', 'category' => $category], 201);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function getCategory( $categoryId)
    {
        $category = Category::find($categoryId);
        return response()->json($category);
    }

    /**
     * Display the specified resource.
     */
    public function updateCategory(Request $request, $categoryId)
    {
        $category = Category::find($categoryId);

        $category->update($request -> all());
        return response()->json(['message' => 'Category updated successfully', 'category' => $category]);
    }

    public function deleteCategory( $categoryId)
    {
        $category = Category::find($categoryId);
        $category->delete();
        return response()->json(['message' => 'Category deleted successfully']);
    }

}
