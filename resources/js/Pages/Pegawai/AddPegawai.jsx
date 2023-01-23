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

export default function AddPegawai(props) {
  const { data, setData, post, processing, errors, reset } = useForm({
    nama: "",
    email: "",
    password: "",
    password_confirmation: "",
    no_hp: "",
    tanggal_lahir: "",
    jenis_kelamin: "",
    alamat: "",
    jabatan: "",
    avatar: "",
    status: "",
  });

  console.log("props di modal", props);

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
    post(route("add.pegawai"));
    setIsNotif(true);
    data.nama = "";
    data.email = "";
    data.password = "";
    data.password_confirmation = "";
    data.no_hp = "";
    data.tanggal_lahir = "";
    data.alamat = "";
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
            <InputArea submit={submit} dataName="Pegawai" pageFor="Tambah">
              <div className="w-full lg:w-10/12 grid grid-cols-4 gap-2 mb-4 sm:flex-row items-center mx-auto sm:justify-center text-left">
                <InputLabel forInput="nama" value="Nama" />

                <TextInput
                  id="nama"
                  name="nama"
                  value={data.nama}
                  className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                  autoComplete="nama"
                  isFocused={true}
                  handleChange={onHandleChange}
                  required
                />

                <InputError message={errors.nama} className="mt-2" />

                <InputLabel forInput="email" value="Email" />

                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  value={data.email}
                  className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                  autoComplete="username"
                  handleChange={onHandleChange}
                  required
                />

                <InputError message={errors.email} className="mt-2" />

                <InputLabel forInput="password" value="Password" />

                <TextInput
                  id="password"
                  type="password"
                  name="password"
                  value={data.password}
                  className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                  autoComplete="new-password"
                  handleChange={onHandleChange}
                  required
                />

                <InputError message={errors.password} className="mt-2" />

                <InputLabel
                  forInput="password_confirmation"
                  value="Confirm Password"
                />

                <TextInput
                  id="password_confirmation"
                  type="password"
                  name="password_confirmation"
                  value={data.password_confirmation}
                  className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                  handleChange={onHandleChange}
                  required
                />

                <InputError
                  message={errors.password_confirmation}
                  className="mt-2"
                />

                <InputLabel forInput="no_hp" value="No. HP" />

                <TextInput
                  id="no_hp"
                  name="no_hp"
                  value={data.no_hp}
                  className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                  autoComplete="no_hp"
                  handleChange={onHandleChange}
                  required
                />

                <InputError message={errors.no_hp} className="mt-2" />

                <InputLabel forInput="tanggal_lahir" value="Tanggal Lahir" />

                <TextInput
                  type="date"
                  id="tanggal_lahir"
                  name="tanggal_lahir"
                  value={data.tanggal_lahir}
                  className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                  autoComplete="tanggal_lahir"
                  handleChange={onHandleChange}
                  required
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

                <InputLabel forInput="jabatan" value="Jabatan" />
                <div className="flex col-span-3">
                  <TextInput
                    type="radio"
                    id="admin"
                    name="jabatan"
                    value="admin"
                    className="mt-1 mr-2"
                    autoComplete="jabatan"
                    handleChange={onHandleChange}
                  />
                  <label htmlFor="admin" className="text-slate-200">
                    Admin
                  </label>
                  <TextInput
                    type="radio"
                    id="pegawai"
                    name="jabatan"
                    value="pegawai"
                    className="mt-1 ml-6 mr-2"
                    autoComplete="jabatan"
                    handleChange={onHandleChange}
                  />
                  <label htmlFor="pegawai" className="text-slate-200">
                    Pegawai
                  </label>
                </div>

                <InputError message={errors.jabatan} className="mt-2" />

                <TextInput
                  type="hidden"
                  id="avatar"
                  name="avatar"
                  value={(data.avatar = "defaultuser-sm.png")}
                  className="mt-1 block w-full"
                  handleChange={onHandleChange}
                />

                <InputError message={errors.avatar} className="mt-2" />

                <TextInput
                  type="hidden"
                  id="status"
                  name="status"
                  value={(data.status = "aktif")}
                  className="mt-1 block w-full"
                  handleChange={onHandleChange}
                />
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
