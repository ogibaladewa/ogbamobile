<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use App\Http\Requests\StoreProdukRequest;
use App\Http\Requests\UpdateProdukRequest;
use App\Http\Resources\ProdukCollection;
use App\Models\Kategori;
use App\Models\Pegawai;
use App\Models\Transaksi;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class GuestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        if (Auth::user()) {
            $pegawaiLogin = Pegawai::join('users', 'pegawai.user_id', '=', 'users.id')
                ->select('users.id', 'users.nama', 'users.email', 'users.no_hp', 'users.tanggal_lahir', 'users.jenis_kelamin', 'users.alamat', 'pegawai.jabatan', 'users.status')->where('pegawai.user_id', Auth::user()->id)->first();
        } else {
            $pegawaiLogin = null;
        }
        // dd($userLogin);

        $model = new ProdukCollection(Produk::select('model')->groupByRaw('model')
            ->paginate(10));

        $produk = [];

        foreach ($model as $m) {
            $produk[] = Produk::select('*')->where('model', $m->model)->get();
        }
        // dd($produk);
        $produkSliced = array_slice($produk, 0, 3);

        $listKategori = Kategori::all();
        // dd($listKategori);

        return Inertia::render('OgbaMobile/Index', [
            'title' => 'OgbaMobile',
            'produk' => $produkSliced,
            'pegawaiLogin' => $pegawaiLogin,
        ]);
    }

    public function catalog(Request $request)
    {
        $authUser = Auth::user();

        $model = new ProdukCollection(Produk::select('model')->groupByRaw('model')
            ->paginate(10));

        $produk = [];

        foreach ($model as $m) {
            $produk[] = Produk::select('*')->where('model', $m->model)->get();
        }
        // dd($produk);



        $listKategori = Kategori::all();
        // dd($listKategori);

        return Inertia::render('OgbaMobile/Catalog', [
            'title' => 'OgbaMobile',
            'produk' => $produk,
        ]);
    }

    public function detail(Request $request)
    {
        $authUser = Auth::user();

        $model = $request->model;

        $produk[] = Produk::select('*')->where('model', $model)->get();

        // dd($produk);

        return Inertia::render('OgbaMobile/DetailProduk', [
            'title' => 'OgbaMobile',
            'produk' => $produk,
        ]);
    }

    public function order(Request $request)
    {
        if (!Auth::user()) {
            return Inertia::render('Auth/Register', []);
        }
        $model = $request->model;
        $warna = $request->warna;
        $memori = $request->memori;
        $jumlah = $request->jumlah;

        $produk = Produk::select('*')->where([['model', $model], ['warna', $warna], ['memori', $memori]])->first();

        // dd($jumlah);

        return Inertia::render('OgbaMobile/Order', [
            'title' => 'Order',
            'produk' => $produk,
            'jumlah' => $jumlah,
        ]);
    }
}
