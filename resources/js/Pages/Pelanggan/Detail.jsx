import Content from "@/Components/Dashboard/Content";
import DetailArea from "@/Components/Dashboard/DetailArea";
import Navbar from "@/Components/Dashboard/Navbar";
import Sidebar from "@/Components/Dashboard/Sidebar";
import InputLabel from "@/Components/InputLabel";
import { Link, Head, useForm } from "@inertiajs/inertia-react";
import { useState } from "react";

export default function Detail(props) {
  console.log("props di detail: ", props);
  const { data, setData, post, processing, errors, reset } = useForm({
    id: props.myPelanggan.user_id,
    nama: props.myPelangganUser.nama,
    email: props.myPelangganUser.email,
    no_hp: props.myPelangganUser.no_hp,
    tanggal_lahir: props.myPelangganUser.tanggal_lahir,
    jenis_kelamin: props.myPelangganUser.jenis_kelamin,
    alamat: props.myPelangganUser.alamat,
    avatar: props.myPelangganUser.avatar,
  });

  const [isNotif, setIsNotif] = useState(false);

  const [sidebarClass, setsidebarClass] = useState("");
  const [leftContentClass, setleftContentClass] = useState("");
  const [rightContentClass, setrightContentClass] = useState("");

  const childToParent2 = (childdata) => {
    setsidebarClass(childdata);
  };
  const childToParent3 = (childdata) => {
    setleftContentClass(childdata);
  };
  const childToParent4 = (childdata) => {
    setrightContentClass(childdata);
  };

  return (
    <>
      <Head title="Data Pelanggan" />
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
          <DetailArea dataName="Pelanggan" pageFor="Detail">
            <div
              className={
                'w-4/12 lg:w-4/12 xl:w-3/12 mx-auto h-0 pt-[35%] lg:pt-[27%] mb-4 border-0 border-black bg-[url("../img/' +
                data.avatar +
                '")] bg-no-repeat bg-contain'
              }
            ></div>
            <div className="w-full lg:w-10/12 grid grid-cols-5 gap-2 mb-4 sm:flex-row items-center mx-auto sm:justify-center text-left">
              <input
                type="hidden"
                id="id"
                name="id"
                defaultValue={data.id}
              ></input>

              <InputLabel forInput="nama" value="Nama" className="" />
              <span className="w-fit">:</span>
              <InputLabel
                forInput="nama"
                value={data.nama}
                className="w-full col-span-3"
              />

              <InputLabel forInput="email" value="Email" className="" />
              <span>:</span>
              <InputLabel
                forInput="email"
                value={data.email}
                className="w-full col-span-3"
              />

              <InputLabel forInput="no_hp" value="No HP" className="" />
              <span>:</span>
              <InputLabel
                forInput="no_hp"
                value={data.no_hp}
                className="w-full col-span-3"
              />

              <InputLabel
                forInput="tanggal_lahir"
                value="Tanggal Lahir"
                className=""
              />
              <span>:</span>
              <InputLabel
                forInput="tanggal_lahir"
                value={data.tanggal_lahir}
                className="w-full col-span-3"
              />

              <InputLabel forInput="jenis_kelamin" value="Jenis Kelamin" />
              <span>:</span>
              <InputLabel
                forInput="jenis_kelamin"
                value={data.jenis_kelamin}
                className="w-full col-span-3"
              />

              <InputLabel forInput="alamat" value="Alamat" />
              <span>:</span>
              <InputLabel
                forInput="alamat"
                value={data.alamat}
                className="w-full col-span-3"
              />

              <Link
                href={route(`edit.pelanggan`)}
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
