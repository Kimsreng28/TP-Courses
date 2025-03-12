<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    protected $fillable = ['ratings', 'article_id', 'user_id'];

    public function article(){
        return $this->belongsTo(Article::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
}