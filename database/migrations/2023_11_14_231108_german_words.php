<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
        Schema::create('german_words', function(Blueprint $table)
        {
                $table->id();
                $table->string('whomade');
                $table->string('wordtype');
                $table->string('german');
                $table->string('japanese');
                $table->string('gender');
                $table->string('other');
                $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::dropIfExists('german_words');
    }
};
