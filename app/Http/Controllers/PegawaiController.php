<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Http\Resources\PegawaiCollection;
use App\Models\Pegawai;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class PegawaiController extends Controller
{
    public function index(Request $request)
    {
        $userID = Auth::user()->id;
        $userLogin = Pegawai::join('users', 'pegawai.user_id', '=', 'users.id')
            ->select('users.id', 'users.nama', 'users.email', 'users.no_hp', 'users.tanggal_lahir', 'users.jenis_kelamin', 'users.alamat', 'pegawai.jabatan', 'users.status')->where('pegawai.user_id', $userID)->first();

        if ($request->has('cari')) {
            $pegawai = new PegawaiCollection(Pegawai::join('users', 'pegawai.user_id', '=', 'users.id')
                ->select('users.id', 'users.nama', 'users.email', 'users.no_hp', 'users.tanggal_lahir', 'users.jenis_kelamin', 'users.alamat', 'pegawai.jabatan', 'users.status')->where('users.nama', 'LIKE', '%' . $request->cari . '%')->paginate(100));
            $cariBack = $request->cari;
        } else {

            $pegawai = new PegawaiCollection(Pegawai::join('users', 'pegawai.user_id', '=', 'users.id')
                ->select('users.id', 'users.nama', 'users.email', 'users.no_hp', 'users.tanggal_lahir', 'users.jenis_kelamin', 'users.alamat', 'pegawai.jabatan', 'users.status')
                ->paginate(10));

            $cariBack = "";
        }


        return Inertia::render('Pegawai/Index', [
            'pegawai' => $pegawai,
            'cariBack' => $cariBack,
            'userLogin' => $userLogin,
        ]);
    }

    public function store(Request $request)
    {
        // dd($request);
        $request->validate([
            'nama' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'nama' => $request->nama,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'no_hp' => $request->no_hp,
            'tanggal_lahir' => $request->tanggal_lahir,
            'jenis_kelamin' => $request->jenis_kelamin,
            'alamat' => $request->alamat,
            'avatar' => $request->avatar,
            'status' => $request->status,
        ]);

        event(new Registered($user));

        $pegawai_id = $user->id;
        $jabatan = $request->jabatan;

        $pegawai = Pegawai::create([
            'user_id' => $pegawai_id,
            'jabatan' => $jabatan,
        ]);

        event(new Registered($pegawai));

        return to_route('pegawai')->with('message', 'Data Berhasil Ditambahkan');
    }

    public function detail(Pegawai $pegawai, User $user, Request $request)
    {
        $userID = Auth::user()->id;
        $userLogin = Pegawai::join('users', 'pegawai.user_id', '=', 'users.id')
            ->select('users.id', 'users.nama', 'users.email', 'users.no_hp', 'users.tanggal_lahir', 'users.jenis_kelamin', 'users.alamat', 'pegawai.jabatan', 'users.status')->where('pegawai.user_id', $userID)->first();

        // dd($pelanggan->where('user_id', $request->id)->first());
        return Inertia::render('Pegawai/Detail', [
            'myPegawai' => $pegawai->where('user_id', $request->id)->first(),
            'myPegawaiUser' => $user->where('id', $request->id)->first(),
            'userLogin' => $userLogin,
        ]);
    }

    public function edit(Pegawai $pegawai, User $user, Request $request)
    {
        $userID = Auth::user()->id;
        $userLogin = Pegawai::join('users', 'pegawai.user_id', '=', 'users.id')
            ->select('users.id', 'users.nama', 'users.email', 'users.no_hp', 'users.tanggal_lahir', 'users.jenis_kelamin', 'users.alamat', 'pegawai.jabatan', 'users.status')->where('pegawai.user_id', $userID)->first();

        // dd($pelanggan->where('user_id', $request->id)->first());
        return Inertia::render('Pegawai/Edit', [
            'myPegawai' => $pegawai->where('user_id', $request->id)->first(),
            'myPegawaiUser' => $user->where('id', $request->id)->first(),
            'userLogin' => $userLogin,
        ]);
    }

    public function update(ProfileUpdateRequest $request)
    {
        // dd($request->status);
        User::find($request->id)->update([
            'nama' => $request->nama,
            'email' => $request->email,
            'no_hp' => $request->no_hp,
            'tanggal_lahir' => $request->tanggal_lahir,
            'jenis_kelamin' => $request->jenis_kelamin,
            'alamat' => $request->alamat,
            'status' => $request->status,
        ]);

        Pegawai::where('user_id', $request->id)->update([
            'jabatan' => $request->jabatan,
        ]);

        return to_route('pegawai')->with('message', 'Data Berhasil Diupdate');
    }

    public function destroy(Pegawai $pegawai, User $user, Request $request)
    {
        // dd($pegawai->where('user_id', $request->id)->first());
        $pegawai = $pegawai->where('user_id', $request->id)->delete();

        $user = User::find($request->id);

        $user->delete();

        return redirect()->back()->with('message', 'Data Berhasil Dihapus');
    }
}
