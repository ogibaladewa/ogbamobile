<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Penyediaan extends Model
{
    use HasFactory;
    protected $table = 'penyediaan';

    protected $fillable = [
        'pegawai_id',
        'produk_id',
        'tanggal',
        'qty',
    ];

    public function pegawai()
    {
        return $this->belongsTo(Pegawai::class);
    }

    public function produk()
    {
        return $this->belongsTo(Produk::class);
    }
}
