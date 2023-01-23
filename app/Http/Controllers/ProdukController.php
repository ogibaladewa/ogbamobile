<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use App\Http\Requests\StoreProdukRequest;
use App\Http\Requests\UpdateProdukRequest;
use App\Http\Resources\ProdukCollection;
use App\Models\Kategori;
use App\Models\Pegawai;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProdukController extends Controller
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
            $produk = new ProdukCollection(Produk::join('kategori', 'produk.kategori_id', '=', 'kategori.id')
                ->select('produk.id', 'produk.nama_produk', 'produk.model', 'kategori.nama_kategori', 'produk.stock', 'produk.harga', 'produk.tanggal_rilis', 'produk.memori', 'produk.warna', 'produk.status')->where('produk.nama_produk', 'LIKE', '%' . $request->cari . '%')->paginate(100));
            $cariBack = $request->cari;
        } else {

            $produk = new ProdukCollection(Produk::join('kategori', 'produk.kategori_id', '=', 'kategori.id')
                ->select('produk.id', 'produk.nama_produk', 'produk.model', 'kategori.nama_kategori', 'produk.stock', 'produk.harga', 'produk.tanggal_rilis', 'produk.memori', 'produk.warna', 'produk.status')
                ->paginate(10));

            $cariBack = "";
        }

        $listKategori = Kategori::all();
        // dd($listKategori);

        return Inertia::render('Produk/Index', [
            'produk' => $produk,
            'listKategori' => $listKategori,
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
     * @param  \App\Http\Requests\StoreProdukRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProdukRequest $request)
    {
        // dd($request);
        // dd($request->memoriA . "/" . $request->memoriB);
        $request->validate([
            'nama_produk' => 'required',
        ]);

        $produk = Produk::create([
            'kategori_id' => $request->kategori,
            'nama_produk' => $request->nama_produk,
            'model' => $request->model,
            'stock' => $request->stock,
            'harga' => $request->harga,
            'tanggal_rilis' => $request->tanggal_rilis,
            'memori' => $request->memoriA . "/" . $request->memoriB,
            'warna' => $request->warna,
            'kode_hex' => $request->kode_hex,
            'dimensi' => $request->dimensi,
            'bobot' => $request->bobot,
            'layar' => $request->layar,
            'os' => $request->os,
            'chipset' => $request->chipset,
            'cpu' => $request->cpu,
            'gpu' => $request->gpu,
            'kamera_belakang' => $request->kamera_belakang,
            'kamera_depan' => $request->kamera_depan,
            'baterai' => $request->baterai,
            'pengisian_daya' => $request->pengisian_daya,
            'status' => $request->status,
        ]);

        event(new Registered($produk));

        return to_route('produk')->with('message', 'Data Berhasil Ditambahkan');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Produk  $produk
     * @return \Illuminate\Http\Response
     */
    public function show(Produk $produk)
    {
        //
    }

    public function detail(Produk $produk, Kategori $kategori, Request $request)
    {
        $userID = Auth::user()->id;
        $userLogin = Pegawai::join('users', 'pegawai.user_id', '=', 'users.id')
            ->select('users.id', 'users.nama', 'users.email', 'users.no_hp', 'users.tanggal_lahir', 'users.jenis_kelamin', 'users.alamat', 'pegawai.jabatan', 'users.status')->where('pegawai.user_id', $userID)->first();

        return Inertia::render('Produk/Detail', [
            'myProduk' => $produk->where('id', $request->id)->first(),
            $a = $produk->where('id', $request->id)->first(),
            'myKategori' => $kategori->where('id', $a->kategori_id)->first(),
            'userLogin' => $userLogin,
        ]);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Produk  $produk
     * @return \Illuminate\Http\Response
     */
    public function edit(Produk $produk, Kategori $kategori, Request $request)
    {
        $userID = Auth::user()->id;
        $userLogin = Pegawai::join('users', 'pegawai.user_id', '=', 'users.id')
            ->select('users.id', 'users.nama', 'users.email', 'users.no_hp', 'users.tanggal_lahir', 'users.jenis_kelamin', 'users.alamat', 'pegawai.jabatan', 'users.status')->where('pegawai.user_id', $userID)->first();

        $listKategori = Kategori::all();
        return Inertia::render('Produk/Edit', [
            'myProduk' => $produk->where('id', $request->id)->first(),
            'listKategori' => $listKategori,
            $a = $produk->where('id', $request->id)->first(),
            'myKategori' => $kategori->where('id', $a->kategori_id)->first(),
            'userLogin' => $userLogin,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProdukRequest  $request
     * @param  \App\Models\Produk  $produk
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProdukRequest $request)
    {
        // dd($request);
        Produk::find($request->id)->update([
            'kategori_id' => $request->id_kategori,
            'nama_produk' => $request->nama_produk,
            'model' => $request->model,
            'stock' => $request->stock,
            'harga' => $request->harga,
            'tanggal_rilis' => $request->tanggal_rilis,
            'memori' => $request->memoriA . "/" . $request->memoriB,
            'warna' => $request->warna,
            'kode_hex' => $request->kode_hex,
            'dimensi' => $request->dimensi,
            'bobot' => $request->bobot,
            'layar' => $request->layar,
            'os' => $request->os,
            'chipset' => $request->chipset,
            'cpu' => $request->cpu,
            'gpu' => $request->gpu,
            'kamera_belakang' => $request->kamera_belakang,
            'kamera_depan' => $request->kamera_depan,
            'baterai' => $request->baterai,
            'pengisian_daya' => $request->pengisian_daya,
            'status' => $request->status,
        ]);

        return to_route('produk')->with('message', 'Data Berhasil Diupdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Produk  $produk
     * @return \Illuminate\Http\Response
     */
    public function destroy(Produk $produk, Request $request)
    {
        // dd($request->id);
        $produk = Produk::find($request->id);

        $produk->delete();

        return redirect()->back()->with('message', 'Data Berhasil Dihapus');
    }
}
