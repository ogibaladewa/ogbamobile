<?php

namespace App\Http\Middleware;

use App\Models\Pegawai;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, ...$jabatan)
    {
        $userID = Auth::user()->id;
        $pegawai = Pegawai::where('user_id', $userID)->first();
        // dd($pegawai);

        if (Auth::check()) {
            if (in_array($pegawai->jabatan, $jabatan)) {
                return $next($request);
            } else {
                return redirect()->back()->with('status', 'Maaf akses ditolak, hanya admin yang dapat mengakses');
            }
        } else {
            return redirect()->back()->with('status', 'Please Login First');
        }
    }
}
