<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getArticles()
    {
        //return messages
        return response()->json(['message' => 'Hello from the articles controller']);
    }
}
