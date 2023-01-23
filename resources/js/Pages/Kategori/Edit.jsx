import Content from "@/Components/Dashboard/Content";
import InputArea from "@/Components/Dashboard/InputArea";
import Navbar from "@/Components/Dashboard/Navbar";
import Sidebar from "@/Components/Dashboard/Sidebar";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, Head, useForm } from "@inertiajs/inertia-react";
import { useState } from "react";

export default function Edit(props) {
  console.log("props di edit: ", props);
  const { data, setData, post, processing, errors, reset } = useForm({
    id: props.myKategori.id,
    nama_kategori: props.myKategori.nama_kategori,
  });

  const [isNotif, setIsNotif] = useState(false);

  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value
    );
  };

  const submit = (e) => {
    e.preventDefault();
    post(route("update.kategori"));
    setIsNotif(true);
    data.nama_kategori = "";
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

  return (
    <>
      <Head title="Data Kategori" />
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
          <InputArea submit={submit} dataName="Kategori" pageFor="Edit">
            <div className="w-full lg:w-10/12 grid grid-cols-4 gap-2 mb-4 sm:flex-row items-center mx-auto sm:justify-center text-left">
              <InputLabel
                forInput="nama_kategori"
                value="Nama Kategori"
                className=""
              />
              <input type="hidden" defaultValue={data.id}></input>
              <TextInput
                id="nama_kategori"
                type="text"
                name="nama_kategori"
                value={data.nama_kategori}
                className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                autoComplete="nama_kategori"
                isFocused={true}
                handleChange={onHandleChange}
              />

              <InputError message={errors.nama_kategori} className="mt-2" />
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
