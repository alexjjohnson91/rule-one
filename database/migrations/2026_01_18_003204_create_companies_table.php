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
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('ticker');
            $table->timestamps();

            /* $table->string('name'); */
            /* $table->decimal('revenue', 15, 2); */
            /* $table->decimal('revenue_growth', 8, 2); */
            /* $table->decimal('net_income', 15, 2); */
            /* $table->decimal('net_income_growth', 8, 2); */
            /* $table->decimal('net_income_margins', 8, 2); */
            /* $table->decimal('shares_outstanding', 20, 0); */
            /* $table->decimal('eps', 10, 4); */
            /* $table->decimal('pe_low', 8, 2); */
            /* $table->decimal('pe_high', 8, 2); */
            /* $table->decimal('share_price_low', 10, 2); */
            /* $table->decimal('share_price_high', 10, 2); */
            /* $table->decimal('cagr_low', 8, 2); */
            /* $table->decimal('cagr_high', 8, 2); */

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};
