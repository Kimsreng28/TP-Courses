<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Instructor extends Model
{
    public function courses()
    {
        return $this->hasMany(Course::class);
    }

    public function lessons()
    {
        return $this->hasManyThrough(Lesson::class, Course::class);
    }

    public function certificates()
    {
        return $this->hasManyThrough(Certificate::class, Course::class);
    }
}