import Content from "@/Components/Dashboard/Content";
import InputArea from "@/Components/Dashboard/InputArea";
import Navbar from "@/Components/Dashboard/Navbar";
import Sidebar from "@/Components/Dashboard/Sidebar";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextareaInput from "@/Components/TextareaInput";
import TextInput from "@/Components/TextInput";
import { Link, Head, useForm } from "@inertiajs/inertia-react";
import { useState } from "react";

export default function Edit(props) {
  console.log("props di edit: ", props);
  const { data, setData, post, processing, errors, reset } = useForm({
    id: props.myPelanggan.user_id,
    nama: props.myPelangganUser.nama,
    email: props.myPelangganUser.email,
    no_hp: props.myPelangganUser.no_hp,
    tanggal_lahir: props.myPelangganUser.tanggal_lahir,
    jenis_kelamin: props.myPelangganUser.jenis_kelamin,
    alamat: props.myPelangganUser.alamat,
    status: props.myPelangganUser.status,
  });

  const [isNotif, setIsNotif] = useState(false);

  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value,
      event.target.type === "radio" ? event.target.value : event.target.value
    );
  };

  const submit = (e) => {
    e.preventDefault();
    post(route("update.pelanggan"));
    setIsNotif(true);
  };

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

  const lakiChecked = data.jenis_kelamin == "laki-laki" ? "checked" : "";
  const perempuanChecked = data.jenis_kelamin == "perempuan" ? "checked" : "";
  const aktifChecked = data.status == "aktif" ? "checked" : "";
  const tidakAktifChecked = data.status == "tidak aktif" ? "checked" : "";

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
          <InputArea submit={submit} dataName="Pelanggan" pageFor="Edit">
            <div className="w-full lg:w-10/12 grid grid-cols-4 gap-2 mb-4 sm:flex-row items-center mx-auto sm:justify-center text-left">
              <input
                type="hidden"
                id="id"
                name="id"
                defaultValue={data.id}
              ></input>

              <InputLabel forInput="nama" value="Nama" className="" />
              <TextInput
                id="nama"
                type="text"
                name="nama"
                value={data.nama}
                className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                autoComplete="nama"
                isFocused={true}
                handleChange={onHandleChange}
              />
              <InputError message={errors.nama} className="mt-2" />

              <InputLabel forInput="email" value="Email" className="" />
              <TextInput
                id="email"
                type="text"
                name="email"
                value={data.email}
                className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                autoComplete="email"
                handleChange={onHandleChange}
              />
              <InputError message={errors.email} className="mt-2" />

              <InputLabel forInput="no_hp" value="No HP" className="" />
              <TextInput
                id="no_hp"
                type="text"
                name="no_hp"
                value={data.no_hp}
                className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                autoComplete="no_hp"
                handleChange={onHandleChange}
              />
              <InputError message={errors.no_hp} className="mt-2" />

              <InputLabel
                forInput="tanggal_lahir"
                value="Tanggal Lahir"
                className=""
              />
              <TextInput
                id="tanggal_lahir"
                type="date"
                name="tanggal_lahir"
                value={data.tanggal_lahir}
                className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                autoComplete="tanggal_lahir"
                handleChange={onHandleChange}
              />
              <InputError message={errors.tanggal_lahir} className="mt-2" />

              <InputLabel forInput="jenis_kelamin" value="Jenis Kelamin" />
              <div className="flex col-span-3">
                <TextInput
                  type="radio"
                  id="laki-laki"
                  name="jenis_kelamin"
                  value="laki-laki"
                  className="mt-1 mr-2"
                  autoComplete="jenis_kelamin"
                  handleChange={onHandleChange}
                  checked={lakiChecked}
                />
                <label htmlFor="laki-laki" className="text-slate-200">
                  Laki-laki
                </label>
                <TextInput
                  type="radio"
                  id="perempuan"
                  name="jenis_kelamin"
                  value="perempuan"
                  className="mt-1 ml-6 mr-2"
                  autoComplete="jenis_kelamin"
                  handleChange={onHandleChange}
                  checked={perempuanChecked}
                />
                <label htmlFor="perempuan" className="text-slate-200">
                  Perempuan
                </label>
              </div>
              <InputError message={errors.jenis_kelamin} className="mt-2" />

              <InputLabel forInput="alamat" value="Alamat" />

              <TextareaInput
                id="alamat"
                name="alamat"
                value={data.alamat}
                className="w-full block h-20 break-words rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                autoComplete="alamat"
                handleChange={onHandleChange}
                required
              />

              <InputError message={errors.alamat} className="mt-2" />

              <InputLabel forInput="status" value="Status" />
              <div className="flex col-span-3">
                <TextInput
                  type="radio"
                  id="aktif"
                  name="status"
                  value="aktif"
                  className="mt-1 mr-2"
                  autoComplete="status"
                  handleChange={onHandleChange}
                  checked={aktifChecked}
                />
                <label htmlFor="aktif" className="text-slate-200">
                  Aktif
                </label>
                <TextInput
                  type="radio"
                  id="tidak aktif"
                  name="status"
                  value="tidak aktif"
                  className="mt-1 ml-6 mr-2"
                  autoComplete="status"
                  handleChange={onHandleChange}
                  checked={tidakAktifChecked}
                />
                <label htmlFor="tidak aktif" className="text-slate-200">
                  Tidak Aktif
                </label>
              </div>
              <InputError message={errors.status} className="mt-2" />
            </div>

            {isNotif && props.flash.message && (
              <div className="w-full h-12 bg-[#6ae082]/90 border-[#0e652e] border-2 rounded-md text-[#10421a] leading-10">
                <span>{props.flash.message}</span>
              </div>
            )}
            <PrimaryButton
              className="ml-4 border-b-2 border-[#285050] bg-[#285050] hover:bg-[#539b9b]"
              processing={processing}
            >
              Kirim
            </PrimaryButton>
          </InputArea>
        </Content>
      </div>
    </>
  );
}
