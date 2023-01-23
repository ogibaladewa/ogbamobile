import { Link, useForm } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";
import TextInput from "../TextInput";

const OrderDetail = (props) => {
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(number);
  };

  const [model, setModel] = useState(props.produk.model);
  const [warna, setWarna] = useState(props.produk.warna);
  const [memori, setMemori] = useState(props.produk.memori);
  const [jumlah, setJumlah] = useState(props.jumlah);
  const [harga, setHarga] = useState(props.produk.harga);

  const [cname, setCname] = useState(
    "w-full py-32 bg-[url('../img/" +
      model.replace(/ /g, "") +
      warna.replace(/ /g, "") +
      ".png')] bg-contain bg-no-repeat bg-center rounded-t-md"
  );

  // console.log("ini jumlah: ", jumlah);

  return (
    <>
      <div className="bg-[url('../img/OgbaP40ProDeepSeaBlue.png')] bg-[#134264] hidden"></div>
      <div className="bg-[url('../img/OgbaP40ProSilverFrost.png')] bg-[#808080] hidden"></div>
      <div className="bg-[url('../img/OgbaNova4RedCandy.png')] bg-[#6e0707] hidden"></div>
      <div className="w-full relative bg-[url('../img/dashbg.jpg')] bg-opacity-10 bg-cover bg-center border-0 border-slate-200 shadow-md shadow-black/40 rounded-md">
        <div className="w-full text-center py-2 bg-sky-800 absolute top-0 rounded-t-md shadow-md text-lg">
          Check Your Order
        </div>
        <div className="w-full flex items-center py-6 md:py-14 rounded-b-md text-center">
          <div className="px-4 sm:px-8 md:px-0 w-3/12 md:w-4/12 py-4 bg-slate-200/0 bg-contain bg-no-repeat rounded-t-md">
            <div className={cname}></div>
          </div>
          <div className="w-10/12 md:w-8/12 flex items-top text-left">
            <div className="w-6/12 sm:w-8/12">
              <span className="text-sm text-slate-300">Product</span>
              <span className="block text-sm sm:text-base md:text-lg pr-4">
                {props.produk.model + " " + warna + " " + memori + " GB"}
              </span>
            </div>
            <div className="w-6/12 sm:w-4/12 bg-sky-700/0">
              <span className="text-sm text-slate-300">Price x Qty</span>
              <span className="block text-sm sm:text-base md:text-lg pr-4">
                {rupiah(harga)} x {jumlah}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full absolute bottom-0 text-center">
          <span className="text-slate-300 text-base sm:text-md">Total : </span>
          {rupiah(harga * jumlah)}
          <Link
            href={route(`ogbamobile.payment`)}
            data={{
              produk_id: props.produk.id,
              harga: harga,
              jumlah: jumlah,
            }}
          >
            <div className="w-full text-center py-4 bg-sky-500 rounded-b-md shadow-md text-lg hover:bg-sky-600">
              Pay
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
