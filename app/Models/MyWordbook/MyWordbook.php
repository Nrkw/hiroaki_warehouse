<?php

namespace App\Models\MyWordbook;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MyWordbook extends Model
{
    use HasFactory;

    protected $fillable = ['whomade', 'wordtype', 'german', 'japanese', 'gender', 'other'];
    protected $hidden = ['created_at', 'updated_at'];
    protected $table = "german_words";
}
