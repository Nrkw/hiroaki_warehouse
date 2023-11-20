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
        Schema::create('users', function(Blueprint $table)
        {
            $table->id(); //integer型
            $table->string("name");
            $table->string("email");
            $table->string("password");
            $table->string("role");
            $table->string("remember_token");

            //以下、自己紹介文とアイコンを追加
            $table->string("introduction");
            //アイコンはファイル名
            $table->string("icon");
            
            $table->string("email_verified_at");
            $table->string("created_at");  //datetime型
            $table->string("updated_at");  //datetime型
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::dropIfExists('users');
    }
};
