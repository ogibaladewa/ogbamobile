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
    produk: "",
    qty: "",
    tanggal: "",
  });

  const [isNotif, setIsNotif] = useState(false);

  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === "radio" ? event.target.value : event.target.value
    );
  };

  const [cname, setCname] = useState(""); //membuat use state cname

  useEffect(() => {
    setCname(() => props.modalClass); //set data cname dengan props.className setiap props di render
  }, [props]);

  const submit = (e) => {
    e.preventDefault();
    post(route("add.penyediaan"));
    setIsNotif(true);
    data.qty = "";
    data.tanggal = "";
  };

  return (
    <>
      <div id="myModal" className={cname}>
        <div>
          <Content
            hide="true"
            rClassAdd="min-h-screen w-full lg:w-10/12 p-5 text-slate-400"
          >
            <InputArea submit={submit} dataName="Penyediaan" pageFor="Tambah">
              <div className="w-full lg:w-10/12 grid grid-cols-4 gap-2 mb-4 sm:flex-row items-center mx-auto sm:justify-center text-left">
                <InputError message={errors.model} className="mt-2" />

                <InputLabel forInput="produk" value="Produk" />

                <SelectOption
                  selectTitle="Produk"
                  name="produk"
                  id="produk"
                  className="w-full h-8 px-3 py-0 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                  datalist={props.listProduk}
                  optionValue="id"
                  optionName="nama_produk"
                  handleChange={onHandleChange}
                  required
                />
                <InputError message={errors.produk} className="mt-2" />

                <InputLabel forInput="qty" value="Qty" />

                <TextInput
                  type="number"
                  id="qty"
                  name="qty"
                  value={data.qty}
                  className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                  autoComplete="qty"
                  isFocused={true}
                  handleChange={onHandleChange}
                  required
                />

                <InputError message={errors.harga} className="mt-2" />

                <InputLabel forInput="tanggal" value="Tanggal" />

                <TextInput
                  type="date"
                  id="tanggal"
                  name="tanggal"
                  value={data.tanggal}
                  className="w-full h-8 rounded-md border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black col-span-3"
                  autoComplete="tanggal"
                  handleChange={onHandleChange}
                  required
                />

                <InputError message={errors.tanggal_rilis} className="mt-2" />
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
