<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('produk', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('kategori_id');
            $table->string('nama_produk', 150);
            $table->string('model', 150);
            $table->integer('stock');
            $table->integer('harga');
            $table->string('memori', 10);
            $table->string('warna', 150);
            $table->string('kode_hex', 10);
            $table->string('dimensi', 150);
            $table->string('bobot', 150);
            $table->string('layar', 150);
            $table->string('os', 150);
            $table->string('chipset', 150);
            $table->string('cpu', 150);
            $table->string('gpu', 150);
            $table->string('kamera_belakang', 200);
            $table->string('kamera_depan', 200);
            $table->string('baterai', 100);
            $table->string('pengisian_daya', 100);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('produk');
    }
};
