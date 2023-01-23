import Content from "@/Components/Dashboard/Content";
import DetailArea from "@/Components/Dashboard/DetailArea";
import Navbar from "@/Components/Dashboard/Navbar";
import Sidebar from "@/Components/Dashboard/Sidebar";
import InputLabel from "@/Components/InputLabel";
import { Link, Head, useForm } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";

export default function Detail(props) {
  console.log("props di detail: ", props);
  const { data, setData, post, processing, errors, reset } = useForm({
    id: props.myProduk.id,
    nama_produk: props.myProduk.nama_produk,
    model: props.myProduk.model,
    nama_kategori: props.myKategori.nama_kategori,
    stock: props.myProduk.stock,
    harga: props.myProduk.harga,
    tanggal_rilis: props.myProduk.tanggal_rilis,
    memori: props.myProduk.memori,
    warna: props.myProduk.warna,
    kode_hex: props.myProduk.kode_hex,
    dimensi: props.myProduk.dimensi,
    bobot: props.myProduk.bobot,
    layar: props.myProduk.layar,
    os: props.myProduk.os,
    chipset: props.myProduk.chipset,
    cpu: props.myProduk.cpu,
    gpu: props.myProduk.gpu,
    kamera_belakang: props.myProduk.kamera_belakang,
    kamera_depan: props.myProduk.kamera_depan,
    baterai: props.myProduk.baterai,
    pengisian_daya: props.myProduk.pengisian_daya,
    status: props.myProduk.status,
  });

  const [isNotif, setIsNotif] = useState(false);

  const [sidebarClass, setsidebarClass] = useState("");
  const [leftContentClass, setleftContentClass] = useState("");
  const [rightContentClass, setrightContentClass] = useState("");

  const [photoClass, setphotoClass] = useState(
    'w-4/12 lg:w-4/12 xl:w-3/12 mx-auto h-0 pt-[35%] lg:pt-[27%] mb-4 border-0 border-slate-400 cursor-pointer bg-[url("../img/' +
      props.myProduk.model.replace(/ /g, "") +
      props.myProduk.warna.replace(/ /g, "") +
      '.png")] bg-no-repeat bg-contain bg-center'
  );

  const childToParent2 = (childdata) => {
    setsidebarClass(childdata);
  };
  const childToParent3 = (childdata) => {
    setleftContentClass(childdata);
  };
  const childToParent4 = (childdata) => {
    setrightContentClass(childdata);
  };

  const photo = "+tambah foto";
  return (
    <>
      <div className="bg-[url('../img/OgbaP40ProDeepSeaBlue.png')] bg-[#134264]"></div>
      <div className="bg-[url('../img/OgbaP40ProSilverFrost.png')] bg-[#808080]"></div>
      <div className="bg-[url('../img/OgbaNova4RedCandy.png')] bg-[#6e0707]"></div>
      <Head title="Data Produk" />
      <div className='w-full min-h-screen bg-[url("../img/dashbg.jpg")] bg-cover bg-fixed'>
        {/* <div className='w-full min-h-screen bg-gradient-to-r from-sky-800  to-sky-900'> */}
        <Sidebar
          sidebarClass={sidebarClass}
          userLoginJabatan={props.userLogin.jabatan}
        />
        <Navbar
          childToParent2={childToParent2}
          childToParent3={childToParent3}
          childToParent4={childToParent4}
        />
        <Content
          leftContentClass={leftContentClass}
          rightContentClass={rightContentClass}
        >
          <DetailArea dataName="Produk" pageFor="Detail">
            <div className={photoClass}>
              {/* <div className="-mt-[70%]">{photo}</div> */}
            </div>
            <div className="w-full lg:w-10/12 grid grid-cols-5 gap-2 mb-4 sm:flex-row items-center mx-auto sm:justify-center text-left">
              <InputLabel forInput="id" value="ID" className="" />
              <span className="w-fit">:</span>
              <InputLabel
                forInput="id"
                value={data.id}
                className="w-full col-span-3"
              />

              <InputLabel
                forInput="nama_produk"
                value="Nama Produk"
                className=""
              />
              <span className="w-fit">:</span>
              <InputLabel
                forInput="nama_produk"
                value={data.nama_produk}
                className="w-full col-span-3"
              />

              <InputLabel forInput="model" value="Model" className="" />
              <span>:</span>
              <InputLabel
                forInput="model"
                value={data.model}
                className="w-full col-span-3"
              />

              <InputLabel
                forInput="nama_kategori"
                value="Kategori"
                className=""
              />
              <span>:</span>
              <InputLabel
                forInput="nama_kategori"
                value={data.nama_kategori}
                className="w-full col-span-3"
              />

              <InputLabel forInput="stock" value="Stock" className="" />
              <span>:</span>
              <InputLabel
                forInput="stock"
                value={data.stock ? data.stock : "0"}
                className="w-full col-span-3"
              />

              <InputLabel forInput="harga" value="Harga" />
              <span>:</span>
              <InputLabel
                forInput="harga"
                value={data.harga}
                className="w-full col-span-3"
              />

              <InputLabel forInput="tanggal_rilis" value="Tanggal Rilis" />
              <span>:</span>
              <InputLabel
                forInput="tanggal_rilis"
                value={data.tanggal_rilis}
                className="w-full col-span-3"
              />

              <InputLabel forInput="memori" value="Memori" />
              <span>:</span>
              <InputLabel
                forInput="memori"
                value={data.memori}
                className="w-full col-span-3"
              />

              <InputLabel forInput="warna" value="Warna" />
              <span>:</span>
              <InputLabel
                forInput="warna"
                value={data.warna}
                className="w-full col-span-3"
              />

              <InputLabel forInput="kode_hex" value="Kode Hex" />
              <span>:</span>
              <InputLabel
                forInput="kode_hex"
                value={data.kode_hex}
                className="w-full col-span-3"
              />

              <InputLabel forInput="dimensi" value="Dimensi" />
              <span>:</span>
              <InputLabel
                forInput="dimensi"
                value={data.dimensi}
                className="w-full col-span-3"
              />

              <InputLabel forInput="bobot" value="Bobot" />
              <span>:</span>
              <InputLabel
                forInput="bobot"
                value={data.bobot}
                className="w-full col-span-3"
              />

              <InputLabel forInput="layar" value="Layar" />
              <span>:</span>
              <InputLabel
                forInput="layar"
                value={data.layar}
                className="w-full col-span-3"
              />

              <InputLabel forInput="os" value="OS" />
              <span>:</span>
              <InputLabel
                forInput="os"
                value={data.os}
                className="w-full col-span-3"
              />

              <InputLabel forInput="chipset" value="Chipset" />
              <span>:</span>
              <InputLabel
                forInput="chipset"
                value={data.chipset}
                className="w-full col-span-3"
              />

              <InputLabel forInput="cpu" value="CPU" />
              <span>:</span>
              <InputLabel
                forInput="cpu"
                value={data.cpu}
                className="w-full col-span-3"
              />

              <InputLabel forInput="gpu" value="GPU" />
              <span>:</span>
              <InputLabel
                forInput="gpu"
                value={data.gpu}
                className="w-full col-span-3"
              />

              <InputLabel forInput="kamera_belakang" value="Kamera Belakang" />
              <span>:</span>
              <InputLabel
                forInput="kamera_belakang"
                value={data.kamera_belakang}
                className="w-full col-span-3"
              />

              <InputLabel forInput="kamera_depan" value="Kamera Depan" />
              <span>:</span>
              <InputLabel
                forInput="kamera_depan"
                value={data.kamera_depan}
                className="w-full col-span-3"
              />

              <InputLabel forInput="baterai" value="Baterai" />
              <span>:</span>
              <InputLabel
                forInput="baterai"
                value={data.baterai}
                className="w-full col-span-3"
              />

              <InputLabel forInput="pengisian_daya" value="Pengisian Daya" />
              <span>:</span>
              <InputLabel
                forInput="pengisian_daya"
                value={data.pengisian_daya}
                className="w-full col-span-3"
              />

              <InputLabel forInput="status" value="Status" />
              <span>:</span>
              <InputLabel
                forInput="status"
                value={data.status}
                className="w-full col-span-3"
              />

              <Link
                href={route(`edit.produk`)}
                method="get"
                data={{ id: data.id }}
                as="button"
                className="flex justify-center col-span-5 lg:col-span-4 px-4 py-1 rounded-lg border-[#3ca75a]/50 border-2 text-[#3ca75a]/90 hover:bg-[#3bcd64] hover:text-white "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
                <span className="ml-2">Edit</span>
              </Link>
            </div>
            {isNotif && props.flash.message && (
              <div className="w-full h-12 bg-[#6ae082]/90 border-[#0e652e] border-2 rounded-md text-[#10421a] leading-10">
                <span>{props.flash.message}</span>
              </div>
            )}
          </DetailArea>
        </Content>
      </div>
    </>
  );
}
