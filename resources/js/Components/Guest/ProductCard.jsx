import { Link } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";

const ProductCard = (props) => {
  console.log("ini props di product card: ", props);
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
    <span>Data {dataName} kosong</span>
  );
  var listWarna = Array.from(new Set(listKodeHex));
  var listWarnaProduk = Array.from(new Set(listNamaWarna));
  // console.log("ini listWarna: ", listWarna);

  const [model, setModel] = useState(props.dataProduk[0].model);
  const [warna, setWarna] = useState(props.dataProduk[0].warna);

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

  return (
    <>
      <div className="w-full relative bg-[url('../img/dashbg.jpg')] bg-opacity-10 bg-cover bg-center border-0 border-slate-200 shadow-md shadow-black/40 rounded-md">
        <div className="w-full py-4 bg-slate-200 bg-contain bg-no-repeat rounded-t-md mb-8">
          <div className={cname}></div>
        </div>
        <div className="w-full pt-4 pb-24 rounded-b-md text-center">
          <span>{props.dataProduk[0].model}</span>
          <div className="grid grid-cols-12 gap-2 w-full px-10 mt-4 text-sm text-left">
            <span className="col-span-3 inline-block">Dimensi</span>
            <span className="col-span-1 inline-block">:</span>
            <span className="col-span-8 inline-block">
              {props.dataProduk[0].dimensi}
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
            <span className="col-span-3 inline-block">GPU</span>
            <span className="col-span-1 inline-block">:</span>
            <span className="col-span-8 inline-block">
              {props.dataProduk[0].gpu}
            </span>
            <span className="col-span-3 inline-block">Kamera</span>
            <span className="col-span-1 inline-block">:</span>
            <span className="col-span-8 inline-block">
              {props.dataProduk[0].kamera_belakang}
            </span>
            <span className="col-span-3 inline-block">Warna</span>
            <span className="col-span-1 inline-block">:</span>
            <div className="flex gap-2 col-span-8">
              {listWarna.map((data, i) => {
                const warnaClass =
                  "w-5 h-5 shrink-0 bg-[" +
                  data +
                  "] rounded-full  border-2 border-white";
                // console.log("warnaClass: ", warnaClass);
                if (props.dataProduk[i].warna == warna) {
                  var warnaAktif =
                    " text-slate-100 border-0 border-yellow-500 rounded-lg";
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
          </div>
          <div className="w-2/3 py-1 bg-sky-700 absolute top-[274px] right-0 rounded-l-md shadow-md text-xs">
            Start from
            <span className="block text-lg">{rupiah(props.minHarga)}*</span>
          </div>
          <Link
            href={route(`ogbamobile.productDetail`)}
            data={{ model: props.dataProduk[0].model }}
          >
            <div className="w-full py-4 bg-sky-500 absolute bottom-0 rounded-b-md shadow-md text-lg hover:bg-sky-600">
              Details
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
