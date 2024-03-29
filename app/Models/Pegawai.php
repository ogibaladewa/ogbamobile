<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pegawai extends Model
{
    use HasFactory;
    protected $table = 'pegawai';

    protected $fillable = [
        'user_id', 'jabatan',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function penyediaan()
    {
        return $this->hasMany(Penyediaan::class);
    }

    public function transaksi()
    {
        return $this->hasMany(Transaksi::class);
    }
}
