<?php

namespace App\Http\Controllers;

use App\Models\Penyediaan;
use App\Http\Requests\StorePenyediaanRequest;
use App\Http\Requests\UpdatePenyediaanRequest;
use App\Http\Resources\PenyediaanCollection;
use App\Models\Pegawai;
use App\Models\Produk;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PenyediaanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $userID = Auth::user()->id;
        $userLogin = Pegawai::join('users', 'pegawai.user_id', '=', 'users.id')
            ->select('users.id', 'users.nama', 'users.email', 'users.no_hp', 'users.tanggal_lahir', 'users.jenis_kelamin', 'users.alamat', 'pegawai.jabatan', 'users.status')->where('pegawai.user_id', $userID)->first();

        if ($request->has('cari')) {
            $penyediaan = new PenyediaanCollection(Penyediaan::join('users', 'penyediaan.pegawai_id', '=', 'users.id')->join('produk', 'penyediaan.produk_id', '=', 'produk.id')
                ->select('penyediaan.id', 'penyediaan.tanggal', 'produk.nama_produk', 'penyediaan.qty', 'users.email')->where('penyediaan.tanggal', 'LIKE', '%' . $request->cari . '%')->paginate(100));
            $cariBack = $request->cari;
        } else {

            $penyediaan = new PenyediaanCollection(Penyediaan::join('users', 'penyediaan.pegawai_id', '=', 'users.id')
                ->join('produk', 'penyediaan.produk_id', '=', 'produk.id')
                ->select('penyediaan.id', 'penyediaan.tanggal', 'produk.nama_produk', 'penyediaan.qty', 'users.email')
                ->paginate(10));

            $cariBack = "";
        }

        $listProduk = Produk::all();

        return Inertia::render('Penyediaan/Index', [
            'penyediaan' => $penyediaan,
            'listProduk' => $listProduk,
            'cariBack' => $cariBack,
            'userLogin' => $userLogin,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorePenyediaanRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePenyediaanRequest $request)
    {
        // dd(Produk::find($request->produk))->select("stock");
        $request->validate([
            'produk' => 'required',
            'qty' => 'required',
            'tanggal' => 'required',
        ]);

        $produk = Produk::find($request->produk);
        $currentStock = $produk->stock;
        // dd($currentStock + $request->qty);

        $penyediaan = Penyediaan::create([
            'pegawai_id' => Auth::user()->id,
            'produk_id' => $request->produk,
            'qty' => $request->qty,
            'tanggal' => $request->tanggal,
        ]);

        event(new Registered($penyediaan));

        Produk::find($request->produk)->update([
            'stock' => $currentStock + $request->qty,
        ]);

        return to_route('penyediaan')->with('message', 'Data Berhasil Ditambahkan');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Penyediaan  $penyediaan
     * @return \Illuminate\Http\Response
     */
    public function show(Penyediaan $penyediaan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Penyediaan  $penyediaan
     * @return \Illuminate\Http\Response
     */
    public function edit(Penyediaan $penyediaan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePenyediaanRequest  $request
     * @param  \App\Models\Penyediaan  $penyediaan
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePenyediaanRequest $request, Penyediaan $penyediaan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Penyediaan  $penyediaan
     * @return \Illuminate\Http\Response
     */
    public function destroy(Penyediaan $penyediaan, Request $request)
    {
        $penyediaan = Penyediaan::find($request->id);
        $produk = Produk::find($penyediaan->produk_id);
        $currentStock = $produk->stock;
        // dd($currentStock - $penyediaan->qty);

        Produk::find($penyediaan->produk_id)->update([
            'stock' => $currentStock - $penyediaan->qty,
        ]);

        $penyediaan->delete();

        return redirect()->back()->with('message', 'Data Berhasil Dihapus');
    }
}
