import Content from "@/Components/Dashboard/Content";
import InputArea from "@/Components/Dashboard/InputArea";
import Navbar from "@/Components/Dashboard/Navbar";
import Sidebar from "@/Components/Dashboard/Sidebar";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, Head, useForm } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";

export default function ModalAdd(props) {
  const { data, setData, post, processing, errors, reset } = useForm({
    nama_kategori: "",
  });

  // console.log("props di modal", props);

  const [isNotif, setIsNotif] = useState(false);

  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value
    );
  };

  //   console.log("props modalAdd:", props);
  const [cname, setCname] = useState(""); //membuat use state cname

  useEffect(() => {
    setCname(() => props.className); //set data cname dengan props.className setiap props di render
  }, [props]);

  //   console.log("props.className: ", props.className);
  //   console.log("cname: ", cname);

  const submit = (e) => {
    e.preventDefault();
    post(route("addkategori"));
    setIsNotif(true);
    data.nama_kategori = "";
  };

  return (
    <>
      {/*sebenarnya bisa langsung props.className :' */}
      <div id="myModal" className={cname}>
        {/* <!-- Modal content --> */}
        <div>
          <Content hide="true">
            <InputArea submit={submit} dataName="Kategori" pageFor="Tambah">
              <div className="w-full flex flex-col mb-4 sm:flex-row items-start sm:justify-around">
                <InputLabel
                  forInput="nama_kategori"
                  value="Nama Kategori"
                  className=""
                />

                <TextInput
                  id="nama_kategori"
                  type="text"
                  name="nama_kategori"
                  value={data.nama_kategori}
                  className="w-full sm:w-7/12 h-8 rounded-md placeholder: border-b-2 border-[#285050] bg-white/90 focus:ring-2 focus:ring-[#3e8f8a] text-black"
                  autoComplete="nama_kategori"
                  isFocused={true}
                  handleChange={onHandleChange}
                />
              </div>
              <div className="w-11/12 mx-auto px-6 -mt-4 sm:flex-row text-right">
                <InputError message={errors.nama_kategori} className="" />
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
