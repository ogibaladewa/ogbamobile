import { Link, useForm } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";
import TextInput from "../TextInput";

const ProductCardDetail = (props) => {
  // const { data, setData, post, processing, errors, reset } = useForm({
  //   jumlahAdd: "1",
  // });

  // const onHandleChange = (event) => {
  //   console.log("pcd ondHandleChange: ", event.target.value);
  //   if (event.target.value > 0 && event.target.value < 3) {
  //     setData(
  //       event.target.name,
  //       event.target.type === "radio" ? event.target.value : event.target.value
  //     );
  //   }
  // };

  // console.log("ini props di product card: ", props);
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(number);
  };

  var listKodeHex = [];
  var listNamaWarna = [];
  props.dataProduk ? (
    props.dataProduk.map((data, i) => {
      listKodeHex[i] = data.kode_hex;
      listNamaWarna[i] = data.warna;
    })
  ) : (
    <span>Data Produk kosong</span>
  );
  var listWarna = Array.from(new Set(listKodeHex));
  var listWarnaProduk = Array.from(new Set(listNamaWarna));

  var listMemori = [];
  var listHarga = [];
  props.dataProduk ? (
    props.dataProduk.map((data, i) => {
      listMemori[i] = data.memori;
      listHarga[i] = data.harga;
    })
  ) : (
    <span>Data Produk kosong</span>
  );
  var listMemoriOption = Array.from(new Set(listMemori));
  var listHargaOption = Array.from(new Set(listHarga));

  const [jumlahAdd, setJumlahAdd] = useState(1);
  const [model, setModel] = useState(props.dataProduk[0].model);
  const [warna, setWarna] = useState(props.dataProduk[0].warna);
  const [memori, setMemori] = useState(props.dataProduk[0].memori);
  const [harga, setHarga] = useState(props.dataProduk[0].harga);
  const [jumlah, setJumlah] = useState(1);

  const [cname, setCname] = useState(
    "w-full py-32 bg-[url('../img/" +
      model.replace(/ /g, "") +
      warna.replace(/ /g, "") +
      ".png')] bg-contain bg-no-repeat bg-center rounded-t-md"
  );

  useEffect(() => {
    setCname(
      () =>
        "w-full py-32 bg-[url('../img/" +
        model.replace(/ /g, "") +
        warna.replace(/ /g, "") +
        ".png')] bg-contain bg-no-repeat bg-center rounded-t-md"
    );
  }, [warna]);

  useEffect(() => {
    setHarga(() => props.dataProduk[0].harga * jumlahAdd);
  }, [jumlahAdd]);

  // console.log("ini cName: ", cname);

  return (
    <>
      <div className="bg-[url('../img/OgbaP40ProDeepSeaBlue.png')] bg-[#134264] hidden"></div>
      <div className="bg-[url('../img/OgbaP40ProSilverFrost.png')] bg-[#808080] hidden"></div>
      <div className="bg-[url('../img/OgbaNova4RedCandy.png')] bg-[#6e0707] hidden"></div>
      <div className="bg-[url('../img/OgbaMate50Silver.png')] bg-[#adadad] hidden"></div>
      <div className="bg-[url('../img/OgbaMate50Purple.png')] bg-[#cfb6d8] hidden"></div>
      <div className="bg-[url('../img/OgbaPocketSGreen.png')] bg-[#95b79a] hidden"></div>
      <div className="w-full relative bg-[url('../img/dashbg.jpg')] bg-opacity-10 bg-cover bg-center border-0 border-slate-200 shadow-md shadow-black/40 rounded-md">
        <div className="w-full py-4 bg-slate-200 bg-contain bg-no-repeat rounded-t-md mb-8">
          <div className={cname}></div>
        </div>
        <div className="w-full pt-4 pb-24 rounded-b-md text-center">
          <span className="block">{props.dataProduk[0].model}</span>
          <span className="text-sm text-slate-300">
            {warna + ", " + memori + " GB"}
          </span>
          <div className="grid grid-cols-12 gap-2 w-full px-10 mt-4 text-sm text-left">
            <span className="col-span-3 inline-block">Dimensi</span>
            <span className="col-span-1 inline-block">:</span>
            <span className="col-span-8 inline-block">
              {props.dataProduk[0].dimensi}
            </span>
            <span className="col-span-3 inline-block">Bobot</span>
            <span className="col-span-1 inline-block">:</span>
            <span className="col-span-8 inline-block">
              {props.dataProduk[0].bobot}
            </span>
            <span className="col-span-3 inline-block">Layar</span>
            <span className="col-span-1 inline-block">:</span>
            <span className="col-span-8 inline-block">
              {props.dataProduk[0].layar}
            </span>
            <span className="col-span-3 inline-block">OS</span>
            <span className="col-span-1 inline-block">:</span>
            <span className="col-span-8 inline-block">
              {props.dataProduk[0].os}
            </span>
            <span className="col-span-3 inline-block">Chipset</span>
            <span className="col-span-1 inline-block">:</span>
            <span className="col-span-8 inline-block">
              {props.dataProduk[0].chipset}
            </span>
            <span className="col-span-3 inline-block">CPU</span>
            <span className="col-span-1 inline-block">:</span>
            <span className="col-span-8 inline-block">
              {props.dataProduk[0].cpu}
            </span>
            <span className="col-span-3 inline-block">GPU</span>
            <span className="col-span-1 inline-block">:</span>
            <span className="col-span-8 inline-block">
              {props.dataProduk[0].gpu}
            </span>
            <span className="col-span-3 inline-block">Kamera Belakang</span>
            <span className="col-span-1 inline-block">:</span>
            <span className="col-span-8 inline-block">
              {props.dataProduk[0].kamera_belakang}
            </span>
            <span className="col-span-3 inline-block">Kamera Depan</span>
            <span className="col-span-1 inline-block">:</span>
            <span className="col-span-8 inline-block">
              {props.dataProduk[0].kamera_depan}
            </span>
            <span className="col-span-3 inline-block">Baterai</span>
            <span className="col-span-1 inline-block">:</span>
            <span className="col-span-8 inline-block">
              {props.dataProduk[0].baterai}
            </span>
            <span className="col-span-3 inline-block">Pengisian Daya</span>
            <span className="col-span-1 inline-block">:</span>
            <span className="col-span-8 inline-block">
              {props.dataProduk[0].pengisian_daya}
            </span>
            <span className="col-span-3 inline-block">Warna</span>
            <span className="col-span-1 inline-block">:</span>
            <div className="flex gap-2 col-span-8">
              {listWarna.map((data, i) => {
                const warnaClass =
                  "w-5 h-5 shrink-0 bg-[" +
                  data +
                  "] rounded-full border-2 border-white";
                // console.log("warnaClass: ", warnaClass);
                if (props.dataProduk[i].warna == warna) {
                  var warnaAktif =
                    " text-slate-100 border-2 border-yellow-500 rounded-lg";
                } else {
                  var warnaAktif = " text-slate-200";
                }
                return (
                  <div
                    key={i}
                    onClick={() => setWarna(props.dataProduk[i].warna)}
                  >
                    <div
                      className={
                        "flex gap-1 mr-1 px-2 py-1 rounded-lg cursor-pointer" +
                        warnaAktif
                      }
                    >
                      <div
                        key={i}
                        className={warnaClass}
                        // className={"w-2 h-2 bg-[" + props.dataProduk[0].kode_hex + "]"}
                      ></div>
                      {listWarnaProduk[i]}
                    </div>
                  </div>
                );
              })}
            </div>
            <span className="col-span-3 inline-block">Memori</span>
            <span className="col-span-1 inline-block">:</span>
            <div className="flex gap-2 col-span-8">
              {listMemoriOption.map((data, i) => {
                if (data == memori) {
                  var memoriAktif =
                    " text-slate-100 border-2 border-yellow-500 rounded-lg";
                } else {
                  var memoriAktif = " text-slate-200";
                }
                return (
                  <div
                    key={i}
                    onClick={() => {
                      setMemori(data),
                        setHarga(listHargaOption[i]),
                        setJumlahAdd(1);
                    }}
                    className={
                      "px-8 py-1 rounded-lg cursor-pointer" + memoriAktif
                    }
                  >
                    {data}
                  </div>
                );
              })}
            </div>
            <span className="col-span-3 inline-block">Jumlah</span>
            <span className="col-span-1 inline-block">:</span>
            <div className="flex justify-between w-[100px] rounded-md bg-sky-800 text-base">
              <div
                className="px-3 rounded-l-md bg-sky-500 cursor-pointer"
                name="minus"
                onClick={() => {
                  if (jumlahAdd <= 1) {
                    setJumlahAdd(1);
                  } else {
                    setJumlahAdd(jumlahAdd - 1);
                  }
                }}
              >
                -
              </div>
              <span className="px-4">{jumlahAdd}</span>
              <div
                className="px-3 rounded-r-md bg-sky-500 cursor-pointer"
                name="plus"
                onClick={() => {
                  if (jumlahAdd >= 2) {
                    setJumlahAdd(2);
                  } else {
                    setJumlahAdd(jumlahAdd + 1);
                  }
                }}
              >
                +
              </div>
            </div>
          </div>
          <div className="w-2/3 py-1 bg-sky-700 absolute top-[274px] right-0 rounded-l-md shadow-md text-xs font-bold">
            Price
            <span className="block text-lg">{rupiah(harga)}</span>
          </div>
          <Link
            href={route(`ogbamobile.order`)}
            data={{
              model: props.dataProduk[0].model,
              warna: warna,
              memori: memori,
              jumlah: jumlahAdd,
            }}
          >
            <div className="w-full py-4 bg-sky-500 absolute bottom-0 rounded-b-md shadow-md text-lg hover:bg-sky-600">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline-block mr-2 -mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg> */}
              Buy Now
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCardDetail;
