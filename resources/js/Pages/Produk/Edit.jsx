import Content from "@/Components/Dashboard/Content";
import DetailArea from "@/Components/Dashboard/DetailArea";
import InputArea from "@/Components/Dashboard/InputArea";
import Navbar from "@/Components/Dashboard/Navbar";
import Sidebar from "@/Components/Dashboard/Sidebar";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectOption from "@/Components/SelectOption";
import TextareaInput from "@/Components/TextareaInput";
import TextInput from "@/Components/TextInput";
import { Link, Head, useForm } from "@inertiajs/inertia-react";
import { useState } from "react";

export default function Edit(props) {
  console.log("props di edit: ", props);
  const memori = props.myProduk.memori.split("/");
  const memoriA = memori[0];
  const memoriB = memori[1];
  const { data, setData, post, processing, errors, reset } = useForm({
    id: props.myProduk.id,
    nama_produk: props.myProduk.nama_produk,
    model: props.myProduk.model,
    id_kategori: props.myKategori.id,
    nama_kategori: props.myKategori.nama_kategori,
    stock: props.myProduk.stock,
    harga: props.myProduk.harga,
    tanggal_rilis: props.myProduk.tanggal_rilis,
    memoriA: memoriA,
    memoriB: memoriB,
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
    post(route("update.produk"));
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

  const aktifChecked = data.status == "aktif" ? "checked" : "";
  const tidakAktifChecked = data.status == "tidak aktif" ? "checked" : "";

  return (
    <>
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
          <InputArea submit={submit} dataName="Produk" pageFor="Edit">
            <div className="w-full lg:w-10/12 grid grid-cols-4 gap-2 mb-4 sm:flex-row items-center mx-auto sm:justify-center text-left">
              <input
                type="hidden"
                id="id"
                name="id"
                defaultValue={data.id}
              ></input>

              <InputLabel
                forInput="nama_produk"
                value="Nama Produk"
                className=""
              />

              <TextInput
                id="nama_produk"
                type="text"
                name="nama_produk"
                value={data.nama_produk}
                className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                autoComplete="nama_produk"
                isFocused={true}
                handleChange={onHandleChange}
              />

              <InputError message={errors.nama_produk} className="mt-2" />

              <InputLabel forInput="model" value="Model" className="" />

              <TextInput
                id="model"
                type="text"
                name="model"
                value={data.model}
                className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                autoComplete="model"
                isFocused={true}
                handleChange={onHandleChange}
              />

              <InputError message={errors.model} className="mt-2" />

              <InputLabel forInput="kategori" value="Kategori" />

              <SelectOption
                name="id_kategori"
                id="id_kategori"
                className="w-full h-8 px-3 py-0 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                datalist={props.listKategori}
                defaultValue={data.id_kategori}
                optionValue="id"
                optionName="nama_kategori"
                handleChange={onHandleChange}
              />
              <InputError message={errors.kategori} className="mt-2" />

              <InputLabel forInput="harga" value="Harga" />

              <TextInput
                type="number"
                id="harga"
                name="harga"
                value={data.harga}
                className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                autoComplete="harga"
                isFocused={true}
                handleChange={onHandleChange}
                required
              />

              <InputError message={errors.harga} className="mt-2" />

              <InputLabel forInput="tanggal_rilis" value="Tanggal Rilis" />

              <TextInput
                type="date"
                id="tanggal_rilis"
                name="tanggal_rilis"
                value={data.tanggal_rilis}
                className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                autoComplete="tanggal_rilis"
                handleChange={onHandleChange}
                required
              />

              <InputError message={errors.tanggal_rilis} className="mt-2" />

              <InputLabel forInput="memoriA" value="Memori" />
              <div className="flex gap-2 w-full col-span-3">
                <TextInput
                  type="number"
                  id="memoriA"
                  name="memoriA"
                  value={data.memoriA}
                  className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                  autoComplete="memoriA"
                  isFocused={true}
                  handleChange={onHandleChange}
                  placeholder="Internal"
                  required
                />
                <span className="mt-1">/</span>
                <TextInput
                  type="number"
                  id="memoriB"
                  name="memoriB"
                  value={data.memoriB}
                  className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                  autoComplete="memoriB"
                  isFocused={true}
                  handleChange={onHandleChange}
                  placeholder="Ram"
                  required
                />
              </div>

              <InputError message={errors.memori} className="mt-2" />

              <InputLabel forInput="warna" value="Warna" />

              <TextInput
                id="warna"
                name="warna"
                value={data.warna}
                className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                autoComplete="warna"
                isFocused={true}
                handleChange={onHandleChange}
                required
              />

              <InputError message={errors.warna} className="mt-2" />

              <InputLabel forInput="kode_hex" value="Preview Warna" />

              <TextInput
                type="color"
                id="kode_hex"
                name="kode_hex"
                value={data.kode_hex}
                className="w-full p-0 h-12 border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                autoComplete="kode_hex"
                isFocused={true}
                handleChange={onHandleChange}
                required
              />

              <InputError message={errors.kode_hex} className="mt-2" />

              <InputLabel forInput="dimensi" value="Dimensi" />

              <TextInput
                id="dimensi"
                name="dimensi"
                value={data.dimensi}
                className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                autoComplete="dimensi"
                isFocused={true}
                handleChange={onHandleChange}
                required
              />

              <InputError message={errors.dimensi} className="mt-2" />

              <InputLabel forInput="bobot" value="Bobot" />

              <TextInput
                id="bobot"
                name="bobot"
                value={data.bobot}
                className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                autoComplete="bobot"
                isFocused={true}
                handleChange={onHandleChange}
                required
              />

              <InputError message={errors.bobot} className="mt-2" />

              <InputLabel forInput="layar" value="Layar" />

              <TextInput
                id="layar"
                name="layar"
                value={data.layar}
                className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                autoComplete="layar"
                isFocused={true}
                handleChange={onHandleChange}
                required
              />

              <InputError message={errors.layar} className="mt-2" />

              <InputLabel forInput="os" value="Sistem Operasi" />

              <TextInput
                id="os"
                name="os"
                value={data.os}
                className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                autoComplete="os"
                isFocused={true}
                handleChange={onHandleChange}
                required
              />

              <InputError message={errors.os} className="mt-2" />

              <InputLabel forInput="chipset" value="Chipset" />

              <TextInput
                id="chipset"
                name="chipset"
                value={data.chipset}
                className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                autoComplete="chipset"
                isFocused={true}
                handleChange={onHandleChange}
                required
              />

              <InputError message={errors.chipset} className="mt-2" />

              <InputLabel forInput="cpu" value="CPU" />

              <TextInput
                id="cpu"
                name="cpu"
                value={data.cpu}
                className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                autoComplete="cpu"
                isFocused={true}
                handleChange={onHandleChange}
                required
              />

              <InputError message={errors.cpu} className="mt-2" />

              <InputLabel forInput="gpu" value="GPU" />

              <TextInput
                id="gpu"
                name="gpu"
                value={data.gpu}
                className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                autoComplete="gpu"
                isFocused={true}
                handleChange={onHandleChange}
                required
              />

              <InputError message={errors.gpu} className="mt-2" />

              <InputLabel forInput="kamera_belakang" value="Kamera Belakang" />

              <TextInput
                id="kamera_belakang"
                name="kamera_belakang"
                value={data.kamera_belakang}
                className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                autoComplete="kamera_belakang"
                isFocused={true}
                handleChange={onHandleChange}
                required
              />

              <InputError message={errors.kamera_belakang} className="mt-2" />

              <InputLabel forInput="kamera_depan" value="Kamera Depan" />

              <TextInput
                id="kamera_depan"
                name="kamera_depan"
                value={data.kamera_depan}
                className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                autoComplete="kamera_depan"
                isFocused={true}
                handleChange={onHandleChange}
                required
              />

              <InputError message={errors.kamera_depan} className="mt-2" />

              <InputLabel forInput="baterai" value="Baterai" />

              <TextInput
                id="baterai"
                name="baterai"
                value={data.baterai}
                className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                autoComplete="baterai"
                isFocused={true}
                handleChange={onHandleChange}
                required
              />

              <InputError message={errors.baterai} className="mt-2" />

              <InputLabel forInput="pengisian_daya" value="Pengisian Daya" />

              <TextInput
                id="pengisian_daya"
                name="pengisian_daya"
                value={data.pengisian_daya}
                className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                autoComplete="pengisian_daya"
                isFocused={true}
                handleChange={onHandleChange}
                required
              />

              <InputError message={errors.pengisian_daya} className="mt-2" />

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

              <TextInput
                type="hidden"
                id="stock"
                name="stock"
                value={data.stock}
                className="mt-1 block w-full"
                handleChange={onHandleChange}
              />
              <InputError message={errors.stock} className="mt-2" />

              <TextInput
                type="hidden"
                id="status"
                name="status"
                value={data.status}
                className="mt-1 block w-full"
                handleChange={onHandleChange}
              />
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
