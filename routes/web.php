<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ContactController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Main Pages
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/privacy-policy', [HomeController::class, 'privacy'])->name('privacy');
Route::get('/terms-of-service', [HomeController::class, 'terms'])->name('terms');

// Contact Form
Route::post('/contact', [ContactController::class, 'submit'])->name('contact.submit');

// Fallback route for any unmatched routes
Route::fallback(function () {
    return redirect()->route('home');
});