<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use App\Http\Requests\StoreKategoriRequest;
use App\Http\Requests\UpdateKategoriRequest;
use App\Http\Resources\KategoriCollection;
use App\Models\Pegawai;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class KategoriController extends Controller
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
            $kategori = new KategoriCollection(Kategori::select('id', 'nama_kategori')->where('nama_kategori', 'LIKE', '%' . $request->cari . '%')->paginate(100));
            $cariBack = $request->cari;
            // dd($kategori);
        } else {
            $kategori = new KategoriCollection(Kategori::select('id', 'nama_kategori')->paginate(10));
            $cariBack = "";
        }

        // $kategori = Kategori::all(['id', 'nama_kategori']);
        // dd($kategori);
        // $kategori = new KategoriCollection(Kategori::all(['id', 'nama_kategori'])->paginate());
        return Inertia::render('Kategori/Index', [
            'kategori' => $kategori,
            'cariBack' => $cariBack,
            'userLogin' => $userLogin,
        ]);
    }

    public function search(Request $request)
    {
        $kategori = Kategori::where('nama_kategori', 'LIKE', '%' . $request->cari . '%')->get();

        return Inertia::render('Kategori/Index', [
            'kategori' => $kategori,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        return Inertia::render('Kategori/Add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreKategoriRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreKategoriRequest $request)
    {
        // dd($request);
        $request->validate([
            'nama_kategori' => 'required|string|max:255|unique:' . Kategori::class,
        ]);
        $kategori = Kategori::create([
            'nama_kategori' => $request->nama_kategori,
        ]);
        event(new Registered($kategori));
        // dd($kategori->id);
        // return redirect('/kategori');
        return redirect()->back()->with('message', 'Data Berhasil Dibuat');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Kategori  $kategori
     * @return \Illuminate\Http\Response
     */
    public function show(Kategori $kategori)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Kategori  $kategori
     * @return \Illuminate\Http\Response
     */
    public function edit(Kategori $kategori, Request $request)
    {
        $userID = Auth::user()->id;
        $userLogin = Pegawai::join('users', 'pegawai.user_id', '=', 'users.id')
            ->select('users.id', 'users.nama', 'users.email', 'users.no_hp', 'users.tanggal_lahir', 'users.jenis_kelamin', 'users.alamat', 'pegawai.jabatan', 'users.status')->where('pegawai.user_id', $userID)->first();

        return Inertia::render('Kategori/Edit', [
            'myKategori' => $kategori->find($request->id),
            'userLogin' => $userLogin,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateKategoriRequest  $request
     * @param  \App\Models\Kategori  $kategori
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateKategoriRequest $request)
    {
        // dd($request->id);
        Kategori::find($request->id)->update([
            'nama_kategori' => $request->nama_kategori
        ]);

        return to_route('kategori')->with('message', 'Data Berhasil Diupdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Kategori  $kategori
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kategori $kategori, Request $request)
    {
        // dd($request->id);
        $kategori = Kategori::find($request->id);

        $kategori->delete();

        return redirect()->back()->with('message', 'Data Berhasil Dihapus');
    }
}
