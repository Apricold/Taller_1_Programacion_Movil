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
        Schema::create('Observations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("categories_id");
            $table->foreign("categories_id")->references("id")->on("Categories");
            $table->string("description");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('_observations');
    }
};
