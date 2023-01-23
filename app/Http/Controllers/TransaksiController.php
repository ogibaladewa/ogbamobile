<?php

namespace App\Http\Controllers;

use App\Models\Transaksi;
use App\Http\Requests\StoreTransaksiRequest;
use App\Http\Requests\UpdateTransaksiRequest;
use App\Http\Resources\ProdukTransaksiCollection;
use App\Http\Resources\TransaksiCollection;
use App\Models\Pegawai;
use App\Models\Produk;
use App\Models\ProdukTransaksi;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class TransaksiController extends Controller
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
            $transaksi = new TransaksiCollection(Transaksi::join('users as a', 'transaksi.pelanggan_id', '=', 'a.id')->join('users as b', 'transaksi.pegawai_id', '=', 'b.id')
                ->select('transaksi.id', 'transaksi.tanggal', 'a.email as pegawai_email', 'b.email as pelanggan_email', 'transaksi.status_transaksi')->where('transaksi.tanggal', 'LIKE', '%' . $request->cari . '%')->paginate(100));
            $cariBack = $request->cari;
        } else {
            $transaksi = new TransaksiCollection(Transaksi::join('users as a', 'transaksi.pelanggan_id', '=', 'a.id')->join('users as b', 'transaksi.pegawai_id', '=', 'b.id')
                ->select('transaksi.id', 'transaksi.tanggal', 'a.email as pegawai_email', 'b.email as pelanggan_email', 'transaksi.status_transaksi')
                ->paginate(10));

            $cariBack = "";
        }
        // dd($transaksi);

        return Inertia::render('Transaksi/Index', [
            'transaksi' => $transaksi,
            'cariBack' => $cariBack,
            'userLogin' => $userLogin,
        ]);
    }

    public function detail(ProdukTransaksi $produkTransaksi, Produk $produk, Request $request)
    {
        $userID = Auth::user()->id;
        $userLogin = Pegawai::join('users', 'pegawai.user_id', '=', 'users.id')
            ->select('users.id', 'users.nama', 'users.email', 'users.no_hp', 'users.tanggal_lahir', 'users.jenis_kelamin', 'users.alamat', 'pegawai.jabatan', 'users.status')->where('pegawai.user_id', $userID)->first();

        $myProdukTransaksi = new ProdukTransaksiCollection(ProdukTransaksi::join('produk', 'produk_transaksi.produk_id', '=', 'produk.id')
            ->select('produk.nama_produk', 'produk_transaksi.harga as harga_produk', 'produk_transaksi.qty', 'produk_transaksi.sub_total')
            ->where('produk_transaksi.transaksi_id', $request->id)
            ->paginate(10));

        // dd($produkTransaksi->leftjoin('produk', 'produk_transaksi.produk_id', '=', 'produk.id')
        //     ->select('produk.nama_produk', 'produk_transaksi.harga as harga_produk', 'produk_transaksi.qty', 'produk_transaksi.sub_total')
        //     ->where('produk_transaksi.transaksi_id', $request->id)->get());
        // dd($pelanggan->where('user_id', $request->id)->first());
        return Inertia::render('Transaksi/Detail', [
            'myProdukTransaksi' => $myProdukTransaksi,
            'userLogin' => $userLogin,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreTransaksiRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTransaksiRequest $request)
    {
        $transaksi = Transaksi::create([
            'pelanggan_id' => Auth::user()->id,
            'tanggal' => now()->format('Y-m-d'),
            'status_transaksi' => "Menunggu Pembayaran"
        ]);

        event(new Registered($transaksi));

        $transaksi_id = DB::getPdo()->lastInsertId();

        $produk_transaksi = ProdukTransaksi::create([
            'produk_id' => $request->produk_id,
            'transaksi_id' => $transaksi_id,
            'qty' => $request->jumlah,
            'harga' => $request->harga,
            'sub_total' => $request->harga * $request->jumlah,
        ]);

        event(new Registered($produk_transaksi));

        $current_transaksi = ProdukTransaksi::where('transaksi_id', $transaksi_id)->first();
        // dd($current_transaksi);

        return Inertia::render('OgbaMobile/Payment', [
            'title' => 'Payment',
            'current_transaksi' => $current_transaksi,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Transaksi  $transaksi
     * @return \Illuminate\Http\Response
     */
    public function show(Transaksi $transaksi)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Transaksi  $transaksi
     * @return \Illuminate\Http\Response
     */
    public function edit(Transaksi $transaksi)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTransaksiRequest  $request
     * @param  \App\Models\Transaksi  $transaksi
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTransaksiRequest $request, Transaksi $transaksi)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Transaksi  $transaksi
     * @return \Illuminate\Http\Response
     */
    public function destroy(Transaksi $transaksi, Request $request)
    {
        // dd($request->id);
        $produk_transaksi = ProdukTransaksi::where('transaksi_id', $request->id)->delete();

        $transaksi = Transaksi::find($request->id);

        $transaksi->delete();

        return redirect()->back()->with('message', 'Data Berhasil Dihapus');
    }
}
