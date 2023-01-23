<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Pelanggan;
use App\Models\User;
use App\Http\Resources\PelangganCollection;
use App\Models\Pegawai;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PelangganController extends Controller
{
    public function index(Request $request)
    {
        $userID = Auth::user()->id;
        $userLogin = Pegawai::join('users', 'pegawai.user_id', '=', 'users.id')
            ->select('users.id', 'users.nama', 'users.email', 'users.no_hp', 'users.tanggal_lahir', 'users.jenis_kelamin', 'users.alamat', 'pegawai.jabatan', 'users.status')->where('pegawai.user_id', $userID)->first();

        if ($request->has('cari')) {
            $pelanggan = new PelangganCollection(Pelanggan::join('users', 'pelanggan.user_id', '=', 'users.id')
                ->select('users.id', 'users.nama', 'users.email', 'users.no_hp', 'users.tanggal_lahir', 'users.jenis_kelamin', 'users.alamat', 'users.status')->where('users.nama', 'LIKE', '%' . $request->cari . '%')->paginate(100));
            $cariBack = $request->cari;
            // dd($pelanggan);
        } else {
            // $pelanggan = new PelangganCollection(Pelanggan::select('user_id')->paginate(10));-
            $pelanggan = new PelangganCollection(Pelanggan::join('users', 'pelanggan.user_id', '=', 'users.id')
                ->select('users.id', 'users.nama', 'users.email', 'users.no_hp', 'users.tanggal_lahir', 'users.jenis_kelamin', 'users.alamat', 'users.status')
                ->paginate(10));
            // dd($pelanggan);
            $cariBack = "";
        }

        // $pelanggan = Pelanggan::all(['id', 'nama_kategori']);
        // dd($pelanggan);
        // $pelanggan = new PelangganCollection(Pelanggan::all(['id', 'nama_kategori'])->paginate());
        return Inertia::render('Pelanggan/Index', [
            'pelanggan' => $pelanggan,
            'cariBack' => $cariBack,
            'userLogin' => $userLogin,
        ]);
    }

    public function search(Request $request)
    {
        $pelanggan = Pelanggan::where('nama_kategori', 'LIKE', '%' . $request->cari . '%')->get();

        return Inertia::render('Kategori/Index', [
            'pelanggan' => $pelanggan,
        ]);
    }

    public function detail(Pelanggan $pelanggan, User $user, Request $request)
    {
        $userID = Auth::user()->id;
        $userLogin = Pegawai::join('users', 'pegawai.user_id', '=', 'users.id')
            ->select('users.id', 'users.nama', 'users.email', 'users.no_hp', 'users.tanggal_lahir', 'users.jenis_kelamin', 'users.alamat', 'pegawai.jabatan', 'users.status')->where('pegawai.user_id', $userID)->first();

        // dd($pelanggan->where('user_id', $request->id)->first());
        return Inertia::render('Pelanggan/Detail', [
            'myPelanggan' => $pelanggan->where('user_id', $request->id)->first(),
            'myPelangganUser' => $user->where('id', $request->id)->first(),
            'userLogin' => $userLogin,
        ]);
    }

    public function edit(Pelanggan $pelanggan, User $user, Request $request)
    {
        $userID = Auth::user()->id;
        $userLogin = Pegawai::join('users', 'pegawai.user_id', '=', 'users.id')
            ->select('users.id', 'users.nama', 'users.email', 'users.no_hp', 'users.tanggal_lahir', 'users.jenis_kelamin', 'users.alamat', 'pegawai.jabatan', 'users.status')->where('pegawai.user_id', $userID)->first();

        // dd($pelanggan->where('user_id', $request->id)->first());
        return Inertia::render('Pelanggan/Edit', [
            'myPelanggan' => $pelanggan->where('user_id', $request->id)->first(),
            'myPelangganUser' => $user->where('id', $request->id)->first(),
            'userLogin' => $userLogin,
        ]);
    }

    public function update(ProfileUpdateRequest $request)
    {
        // dd($request);
        User::find($request->id)->update([
            'nama' => $request->nama,
            'email' => $request->email,
            'no_hp' => $request->no_hp,
            'tanggal_lahir' => $request->tanggal_lahir,
            'jenis_kelamin' => $request->jenis_kelamin,
            'alamat' => $request->alamat,
            'status' => $request->status,
        ]);

        return to_route('pelanggan')->with('message', 'Data Berhasil Diupdate');
    }

    public function destroy(Pelanggan $pelanggan, User $user, Request $request)
    {
        // dd($pelanggan->where('user_id', $request->id)->first());
        $pelanggan = $pelanggan->where('user_id', $request->id)->delete();

        $user = User::find($request->id);

        $user->delete();

        return redirect()->back()->with('message', 'Data Berhasil Dihapus');
    }
}
