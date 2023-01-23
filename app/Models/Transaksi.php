<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaksi extends Model
{
    use HasFactory;
    protected $table = 'transaksi';

    protected $fillable = [
        'pelanggan_id', 'pegawai_id', 'tanggal', 'status_transaksi',
    ];

    public function pelanggan()
    {
        return $this->belongsTo(Pelanggan::class);
    }

    public function pegawai()
    {
        return $this->belongsTo(pegawai::class);
    }

    public function produk()
    {
        return $this->belongsToMany(Produk::class)->withPivot(['qty', 'harga', 'sub_total']);
    }
}
