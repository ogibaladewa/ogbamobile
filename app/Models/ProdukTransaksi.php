<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProdukTransaksi extends Model
{
    protected $table = 'produk_transaksi';
    protected $fillable = [
        'produk_id',
        'transaksi_id',
        'qty',
        'harga',
        'sub_total',
    ];

    use HasFactory;
}
