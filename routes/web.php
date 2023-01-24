<?php

use App\Http\Controllers\GuestController;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\PegawaiController;
use App\Http\Controllers\PelangganController;
use App\Http\Controllers\PenyediaanController;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TransaksiController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/homepage', function () {
    return Inertia::render('Homepage', [
        'title' => 'OgbaMobile',
    ]);
});

Route::group(['middleware' => ['auth', 'checkUser']], function () {
    Route::get('/pelanggan', [PelangganController::class, 'index'])->name("pelanggan");
    Route::get('/pelanggan/search', [PelangganController::class, 'search'])->name("search.pelanggan");
    Route::get('/pelanggan/detail', [PelangganController::class, 'detail'])->name("detail.pelanggan");

    Route::get('/kategori', [KategoriController::class, 'index'])->name("kategori");
    Route::get('/kategori/search', [KategoriController::class, 'search'])->name("search.kategori");
    Route::get('/kategori/add', [KategoriController::class, 'create']);
    Route::post('/kategori/add/process', [KategoriController::class, 'store'])->name("addkategori");
    Route::get('/kategori/edit', [KategoriController::class, 'edit'])->name("edit.kategori");
    Route::post('/kategori/update', [KategoriController::class, 'update'])->name("update.kategori");
    Route::post('/kategori/delete', [KategoriController::class, 'destroy'])->name("delete.kategori");

    Route::get('/produk', [ProdukController::class, 'index'])->name("produk");
    Route::get('/produk/search', [ProdukController::class, 'search'])->name("search.produk");
    Route::get('/produk/add', [ProdukController::class, 'create']);
    Route::post('/produk/add/process', [ProdukController::class, 'store'])->name("add.produk");
    Route::get('/produk/detail', [ProdukController::class, 'detail'])->name("detail.produk");
    Route::get('/produk/edit', [ProdukController::class, 'edit'])->name("edit.produk");
    Route::post('/produk/update', [ProdukController::class, 'update'])->name("update.produk");
    Route::post('/produk/delete', [ProdukController::class, 'destroy'])->name("delete.produk");

    Route::get('/penyediaan', [PenyediaanController::class, 'index'])->name("penyediaan");
    Route::get('/penyediaan/search', [PenyediaanController::class, 'search'])->name("search.penyediaan");
    Route::get('/penyediaan/add', [PenyediaanController::class, 'create']);
    Route::post('/penyediaan/add/process', [PenyediaanController::class, 'store'])->name("add.penyediaan");
    Route::post('/penyediaan/delete', [PenyediaanController::class, 'destroy'])->name("delete.penyediaan");

    Route::get('/transaksi', [TransaksiController::class, 'index'])->name("transaksi");
    Route::get('/transaksi/search', [TransaksiController::class, 'search'])->name("search.transaksi");
    Route::get('/transaksi/add', [TransaksiController::class, 'create']);
    Route::post('/transaksi/add/process', [TransaksiController::class, 'store'])->name("add.transaksi");
    Route::get('/transaksi/detail', [TransaksiController::class, 'detail'])->name("detail.transaksi");
    Route::post('/transaksi/delete', [TransaksiController::class, 'destroy'])->name("delete.transaksi");
    Route::post('/transaksi/detail/delete', [TransaksiController::class, 'destroy'])->name("delete.detail_transaksi");
});

Route::group(['middleware' => ['auth', 'checkUser', 'checkRole:admin']], function () {
    Route::get('/pegawai', [PegawaiController::class, 'index'])->name("pegawai");
    Route::get('/pegawai/search', [PegawaiController::class, 'search'])->name("search.pegawai");
    Route::get('/pegawai/add', [PegawaiController::class, 'create']);
    Route::post('/pegawai/add/process', [PegawaiController::class, 'store'])->name("add.pegawai");
    Route::get('/pegawai/detail', [PegawaiController::class, 'detail'])->name("detail.pegawai");
    Route::get('/pegawai/edit', [PegawaiController::class, 'edit'])->name("edit.pegawai");
    Route::post('/pegawai/update', [PegawaiController::class, 'update'])->name("update.pegawai");
    Route::post('/pegawai/delete', [PegawaiController::class, 'destroy'])->name("delete.pegawai");

    Route::get('/pelanggan/edit', [PelangganController::class, 'edit'])->name("edit.pelanggan");
    Route::post('/pelanggan/update', [PelangganController::class, 'update'])->name("update.pelanggan");
    Route::post('/pelanggan/delete', [PelangganController::class, 'destroy'])->name("delete.pelanggan");
});

Route::group(['middleware' => ['auth', 'checkUser', 'checkRole:pegawai']], function () {
});

Route::group(['middleware' => ['auth']], function () {
    Route::get('/order', [GuestController::class, 'order'])->name('ogbamobile.order');
    Route::get('/payment', [TransaksiController::class, 'store'])->name('ogbamobile.payment');
});

Route::get('/', [GuestController::class, 'index'])->name('ogbamobile');
Route::get('/catalog', [GuestController::class, 'catalog'])->name('ogbamobile.catalog');
Route::get('/productDetail', [GuestController::class, 'detail'])->name('ogbamobile.productDetail');
Route::get('/about', [GuestController::class, 'about'])->name('ogbamobile.about');
Route::get('/contact', [GuestController::class, 'contact'])->name('ogbamobile.contact');


require __DIR__ . '/auth.php';
