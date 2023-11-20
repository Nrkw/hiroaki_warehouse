<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class german_word extends Model
{
    use HasFactory;
    protected $fillable = ['whomade', 'wordtype', 'german', 'japanese', 'gender', 'other'];
    protected $guarded = ['id'];
    
}
