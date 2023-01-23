import { Link, useForm } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";
import ModalAdd from "./ModalAdd";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import Paginator from "./Paginator";

const DataTable = ({
  children,
  cariBack,
  dataName,
  content,
  meta,
  tableHead,
  message,
  childToParent,
  withEdit,
  withDetails,
}) => {
  console.log("this is meta: ", meta);

  const { data, setData, get, processing } = useForm({
    cari: "",
  });

  // console.log("message di datatable: ", message);
  const [modalClass, setmodalClass] = useState("hidden");
  const [closeButton, setcloseButton] = useState("hidden");
  //function to show modal and close button
  //it set modalClass and closeButton value (className)
  const handleClick = () => {
    setmodalClass(
      "w-full z-30 fixed top-0 left-0 bottom-0 block bg-black/50 overflow-y-auto"
    );
    setcloseButton(
      "fixed z-50 top-0 right-0 w-10 h-10 block text-3xl font-bold  md:right-28"
    );
    document.body.style.position = "fixed top-0 left-0";
    console.log("modalClass", modalClass);
  };

  useEffect(() => {
    childToParent(modalClass);
  }, [modalClass]);

  // console.log("modal class: ", modalClass);

  //function to hide modal and close button
  const closeClick = () => {
    setcloseButton("hidden");
    setmodalClass("hidden");

    document.body.style.position = "";
  };

  //for Search bar
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   // setData(e.target.value);
  //   // get(route("kategori"));
  // };

  const handleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value
    );
    get(route(dataName));
  };

  const linkactive = window.location.pathname.split("/")[1];

  // if (data.length > 0) {
  //   content.filter((data) => {
  //     return data.nama_kategori.match(data);
  //   });
  // }

  // console.log("ini modal class: ", modalClass);
  return (
    <>
      <div className="flex justify-between items-baseline mb-4 text-right">
        <button className={closeButton} onClick={closeClick}>
          x
        </button>
        <div className="text-left">
          Search:{" "}
          <TextInput
            id="cari"
            type="text"
            name="cari"
            value={data.cari}
            className="h-8 mr-6 rounded-md bg-slate-400/20 w-7/12 sm:w-6/12"
            handleChange={handleChange}
          />
        </div>
        {linkactive != "pelanggan" && linkactive != "transaksi" ? (
          <button
            className="px-4 py-2 rounded-md bg-[#285050] hover:bg-[#398d83] text-slate-200 hover:text-slate-100 shrink-0"
            type="button"
            id="addbtn"
            onClick={handleClick}
          >
            +Tambah Data
          </button>
        ) : (
          ""
        )}
        {/* </a> */}
      </div>
      <div className="relative overflow-auto">
        <table className="table w-full">
          <thead>
            <tr className="border-b-2 border-t-2 border-slate-500/50">
              {tableHead ? (
                tableHead.map((data, i) => {
                  // console.log("ini i: ", i);
                  if (i == 0) {
                    var classth = "py-4 w-[80px]";
                  } else if (
                    i == tableHead.length - 1 &&
                    withDetails == "true"
                  ) {
                    var classth = "py-4 w-[250px]";
                  } else if (i == tableHead.length - 1) {
                    var classth = "py-4 w-[150px]";
                  } else {
                    var classth = "py-4";
                  }
                  // console.log("ini length-1 :", tableHead.length - 1);
                  // console.log("ini classth: ", classth);
                  return (
                    <th key={i} className={classth}>
                      {data}
                    </th>
                  );
                })
              ) : (
                <th>Data Tabel Head Kosong</th>
              )}
            </tr>
          </thead>

          <tbody className="divide-y-2 divide-slate-700/50">
            {content ? (
              content.map((data, i) => {
                let isiKonten = Object.assign({}, data);
                delete isiKonten.id;
                console.log("data.id: ", data);
                // isiKonten.shift();
                return (
                  <tr
                    key={i}
                    className="hover:bg-slate-500/10 hover:text-slate-200"
                  >
                    <td className="pb-4 resize-none">{i + 1}</td>
                    {Object.keys(isiKonten).map(function (key, value) {
                      let isinya = isiKonten[key];

                      return (
                        <td className="pb-4 resize-none" key={key}>
                          {isinya}
                        </td>
                      );
                    })}
                    <td className="text-center">
                      {withDetails == "true" ? (
                        <Link
                          href={route(`detail.${dataName}`)}
                          method="get"
                          data={{ id: data.id }}
                          as="button"
                          className="px-4 py-1 sm:mr-1 rounded-lg border-[#4ab0c7]/50 border-2 text-[#4ab0c7]/90 hover:bg-[#45c2eb] hover:text-white "
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
                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </Link>
                      ) : (
                        ""
                      )}
                      {withEdit == "true" ? (
                        <Link
                          href={route(`edit.${dataName}`)}
                          method="get"
                          data={{ id: data.id }}
                          as="button"
                          className="px-4 py-1 rounded-lg border-[#3ca75a]/50 border-2 text-[#3ca75a]/90 hover:bg-[#3bcd64] hover:text-white "
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
                        </Link>
                      ) : (
                        ""
                      )}

                      <Link
                        href={route(`delete.${dataName}`)}
                        method="post"
                        data={{ id: data.id }}
                        onClick={() => {
                          if (window.confirm("Hapus Data?")) {
                          } else {
                            this.removeToCollection(key, e);
                          }
                        }}
                        as="button"
                        className="px-4 py-1 sm:ml-1 rounded-lg border-[#c62a2a]/80 border-2 text-[#ed4242] hover:bg-[#c62a2a] hover:text-white"
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
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </Link>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>Data {dataName} kosong</tr>
            )}
          </tbody>
        </table>
      </div>
      <Paginator meta={meta} />

      {/* memanggil component ModalAdd dengan props.className */}
      {/* <ModalAdd className={modalClass} message={message} /> */}
      {children}
    </>
  );
};

export default DataTable;
