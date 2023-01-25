import { Link, useForm } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";
import TextInput from "../TextInput";

const PaymentDetail = (props) => {
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(number);
  };

  var day = new Date();
  var nextDay = new Date(day);
  nextDay.setDate(day.getDate() + 1);

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());
  let time = h + ":" + m + ":" + s;

  var dateObj = new Date();
  var month = dateObj.getMonth() + 1; //months from 1-12
  var day = dateObj.getDate() + 1;
  var year = dateObj.getFullYear();

  var newdate = day + "-" + month + "-" + year;

  // console.log("ini jumlah: ", jumlah);

  return (
    <>
      <div className="w-full relative bg-[url('../img/dashbg.jpg')] bg-opacity-10 bg-cover bg-center border-0 border-slate-200 shadow-md shadow-black/40 rounded-md">
        <div className="w-full text-center py-2 bg-sky-800 absolute top-0 rounded-t-md shadow-md text-lg">
          Payment
        </div>
        <div className="w-full flex sm:flex-row items-center py-6 md:py-14 rounded-b-md text-center">
          <div className="w-full sm:flex items-top sm:text-left px-10 pt-14 pb-20 sm:py-20">
            <div className="w-full md:w-5/12 mb-6 sm:md-0">
              <span className="text-sm text-slate-300">Batas Waktu</span>
              <span className="block text-sm sm:text-base md:text-lg pr-4">
                {newdate + " " + time}
              </span>
            </div>
            <div className="w-full md:w-5/12 mb-6 sm:md-0">
              <span className="text-sm text-slate-300">No. Rek</span>
              <span className="block text-sm sm:text-base md:text-lg pr-4">
                80294 XXX XXX XXX
              </span>
            </div>
            <div className="w-full md:w-2/12 bg-sky-700/0">
              <span className="text-sm text-slate-300">Jumlah Transfer</span>
              <span className="block text-sm sm:text-base md:text-lg pr-4">
                {props.current_transaksi.sub_total}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full absolute bottom-0 text-center">
          <div className="w-full text-center py-4 bg-sky-500 rounded-b-md shadow-md text-lg hover:bg-sky-600">
            Silahkan Lakukan Transfer dengan Jumlah yang tepat
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentDetail;
