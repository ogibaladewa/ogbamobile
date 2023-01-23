import Content from "@/Components/Dashboard/Content";
import InputArea from "@/Components/Dashboard/InputArea";
import Navbar from "@/Components/Dashboard/Navbar";
import Sidebar from "@/Components/Dashboard/Sidebar";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import TextareaInput from "@/Components/TextareaInput";
import { Link, Head, useForm } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";
import SelectOption from "@/Components/SelectOption";

export default function AddProduk(props) {
  const { data, setData, post, processing, errors, reset } = useForm({
    nama_produk: "",
    model: "",
    kategori: "",
    stock: "",
    harga: "",
    tanggal_rilis: "",
    memoriA: "",
    memoriB: "",
    warna: "",
    kode_hex: "",
    dimensi: "",
    bobot: "",
    layar: "",
    os: "",
    chipset: "",
    cpu: "",
    gpu: "",
    kamera_belakang: "",
    kamera_depan: "",
    baterai: "",
    pengisian_daya: "",
    status: "",
  });

  console.log("props di modal", props);
  console.log("listKategori:", props.listKategori);

  const [isNotif, setIsNotif] = useState(false);

  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === "radio" ? event.target.value : event.target.value
    );
  };

  //   console.log("props modalAdd:", props);
  const [cname, setCname] = useState(""); //membuat use state cname

  useEffect(() => {
    setCname(() => props.modalClass); //set data cname dengan props.className setiap props di render
  }, [props]);

  //   console.log("props.className: ", props.className);
  //   console.log("cname: ", cname);

  const submit = (e) => {
    e.preventDefault();
    post(route("add.produk"));
    setIsNotif(true);
    data.model = "";
    data.kategori = "";
    data.stock = "";
    data.harga = "";
    data.tanggal_rilis = "";
    data.memoriA = "";
    data.memoriB = "";
    data.warna = "";
    data.kode_hex = "";
    data.dimensi = "";
    data.bobot = "";
    data.layar = "";
    data.os = "";
    data.chipset = "";
    data.cpu = "";
    data.gpu = "";
    data.kamera_belakang = "";
    data.kamera_depan = "";
    data.baterai = "";
    data.pengisian_daya = "";
    data.status = "";
  };

  return (
    <>
      {/*sebenarnya bisa langsung props.className :' */}
      <div id="myModal" className={cname}>
        {/* <!-- Modal content --> */}
        <div>
          <Content
            hide="true"
            rClassAdd="min-h-screen w-full lg:w-10/12 p-5 text-slate-400"
          >
            <InputArea submit={submit} dataName="Produk" pageFor="Tambah">
              <div className="w-full lg:w-10/12 grid grid-cols-4 gap-2 mb-4 sm:flex-row items-center mx-auto sm:justify-center text-left">
                <InputLabel forInput="nama_produk" value="Nama" />

                <TextInput
                  id="nama_produk"
                  name="nama_produk"
                  value={data.nama_produk}
                  className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                  autoComplete="nama_produk"
                  isFocused={true}
                  handleChange={onHandleChange}
                  required
                />

                <InputError message={errors.nama_produk} className="mt-2" />

                <InputLabel forInput="model" value="Model" />

                <TextInput
                  id="model"
                  name="model"
                  value={data.model}
                  className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                  autoComplete="model"
                  isFocused={true}
                  handleChange={onHandleChange}
                  required
                />

                <InputError message={errors.model} className="mt-2" />

                <InputLabel forInput="kategori" value="Kategori" />

                <SelectOption
                  selectTitle="Kategori"
                  name="kategori"
                  id="kategori"
                  className="w-full h-8 px-3 py-0 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                  datalist={props.listKategori}
                  optionValue="id"
                  optionName="nama_kategori"
                  handleChange={onHandleChange}
                  required
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

                <InputLabel
                  forInput="kamera_belakang"
                  value="Kamera Belakang"
                />

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

                <TextInput
                  type="hidden"
                  id="stock"
                  name="stock"
                  value={(data.stock = "0")}
                  className="mt-1 block w-full"
                  handleChange={onHandleChange}
                />

                <TextInput
                  type="hidden"
                  id="status"
                  name="status"
                  value={(data.status = "aktif")}
                  className="mt-1 block w-full"
                  handleChange={onHandleChange}
                />

                <InputError message={errors.stock} className="mt-2" />
              </div>
              {isNotif && props.message && (
                <div className="w-full h-12 bg-[#6ae082]/90 border-[#0e652e] border-2 rounded-md text-[#10421a] leading-10">
                  <span>{props.message}</span>
                </div>
              )}
              <PrimaryButton
                className="ml-4 mt-4 border-b-2 border-[#285050] bg-[#285050] hover:bg-[#539b9b]"
                processing={processing}
              >
                Kirim
              </PrimaryButton>
            </InputArea>
          </Content>
        </div>
      </div>
    </>
  );
}
