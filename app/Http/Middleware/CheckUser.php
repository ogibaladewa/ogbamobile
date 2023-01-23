<?php

namespace App\Http\Middleware;

use App\Models\Pegawai;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckUser
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */

    public function handle(Request $request, Closure $next)
    {
        $userID = Auth::user()->id;
        $check = Pegawai::where('user_id', $userID)->first() != null;
        // dd($check);

        if (Auth::check()) {
            if ($check) {
                return $next($request);
            } else {
                return redirect('/')->with('status', 'Maaf akses ditolak, hanya admin yang dapat mengakses');
            }
        } else {
            return redirect('/')->with('status', 'Please Login First');
        }
    }
}
