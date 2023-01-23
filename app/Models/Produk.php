<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produk extends Model
{
    use HasFactory;
    protected $table = 'produk';

    protected $fillable = [
        'kategori_id',
        'nama_produk',
        'model',
        'stock',
        'harga',
        'tanggal_rilis',
        'memori',
        'warna',
        'kode_hex',
        'dimensi',
        'bobot',
        'layar',
        'os',
        'chipset',
        'cpu',
        'gpu',
        'kamera_belakang',
        'kamera_depan',
        'baterai',
        'pengisian_daya',
        'status',
    ];

    public function kategori()
    {
        return $this->belongsTo(Kategori::class);
    }

    public function foto()
    {
        return $this->belongsToMany(Foto::class);
    }

    public function penyediaan()
    {
        return $this->hasMany(Penyediaan::class);
    }

    public function transaksi()
    {
        return $this->belongsToMany(Transaksi::class)->withPivot(['qty', 'harga', 'sub_total']);
    }
}
