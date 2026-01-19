<?php

use App\Http\Controllers\ProjectionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::get('projections', [ProjectionController::class, 'index'])->name('projections');
    Route::get('projections/{ticker}', [ProjectionController::class, 'show'])->name('projections.show');

    Route::post('company/{company:ticker}', [ProjectionController::class, 'update'])->name('company.update');
});

require __DIR__.'/settings.php';
