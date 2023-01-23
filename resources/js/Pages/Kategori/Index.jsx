import Content from "@/Components/Dashboard/Content";
import DataTable from "@/Components/Dashboard/DataTable";
import Navbar from "@/Components/Dashboard/Navbar";
import Sidebar from "@/Components/Dashboard/Sidebar";
import { Link, Head } from "@inertiajs/inertia-react";
import { useState } from "react";
import AddKategori from "./AddKategori";

export default function Index(props) {
  // console.log("props di index:", props);

  /*TAMBAHKAN HEADER TABEL DISINI*/
  const tableHead = ["No", "Nama Kategori", "Aksi"];

  const [modalClass, setmodalClass] = useState("");
  const childToParent = (childdata) => {
    setmodalClass(childdata);
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

  console.log("data child to parent: ", modalClass);

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
          dataNameUp={"Kategori"}
          leftContentClass={leftContentClass}
          rightContentClass={rightContentClass}
        >
          <DataTable
            cariBack={props.cariBack}
            dataName={"kategori"}
            content={props.kategori.data}
            meta={props.kategori.meta}
            tableHead={tableHead}
            message={props.flash.message}
            childToParent={childToParent}
            withEdit={"true"}
          >
            <AddKategori
              modalClass={modalClass}
              message={props.flash.message}
            />
          </DataTable>
        </Content>
      </div>
    </>
  );
}
