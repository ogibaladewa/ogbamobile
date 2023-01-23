import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import TextareaInput from "@/Components/TextareaInput";

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    nama: "",
    email: "",
    password: "",
    password_confirmation: "",
    no_hp: "",
    tanggal_lahir: "",
    jenis_kelamin: "",
    alamat: "",
    avatar: "",
    status: "",
  });

  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);

  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === "radio" ? event.target.value : event.target.value
    );
  };

  const submit = (e) => {
    e.preventDefault();

    post(route("register"));
  };

  return (
    <GuestLayout>
      <Head title="Register" />

      <form onSubmit={submit}>
        <div>
          <InputLabel forInput="nama" value="Nama" />

          <TextInput
            id="nama"
            name="nama"
            value={data.nama}
            className="mt-1 block w-full"
            autoComplete="nama"
            isFocused={true}
            handleChange={onHandleChange}
            required
          />

          <InputError message={errors.nama} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel forInput="email" value="Email" />

          <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            handleChange={onHandleChange}
            required
          />

          <InputError message={errors.email} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel forInput="password" value="Password" />

          <TextInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="new-password"
            handleChange={onHandleChange}
            required
          />

          <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel
            forInput="password_confirmation"
            value="Confirm Password"
          />

          <TextInput
            id="password_confirmation"
            type="password"
            name="password_confirmation"
            value={data.password_confirmation}
            className="mt-1 block w-full"
            handleChange={onHandleChange}
            required
          />

          <InputError message={errors.password_confirmation} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel forInput="no_hp" value="No. HP" />

          <TextInput
            id="no_hp"
            name="no_hp"
            value={data.no_hp}
            className="mt-1 block w-full"
            autoComplete="no_hp"
            handleChange={onHandleChange}
            required
          />

          <InputError message={errors.no_hp} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel forInput="tanggal_lahir" value="Tanggal Lahir" />

          <TextInput
            type="date"
            id="tanggal_lahir"
            name="tanggal_lahir"
            value={data.tanggal_lahir}
            className="mt-1 block w-full"
            autoComplete="tanggal_lahir"
            handleChange={onHandleChange}
            required
          />

          <InputError message={errors.tanggal_lahir} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel forInput="jenis_kelamin" value="Jenis Kelamin" />
          <div className="flex">
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
        </div>

        <div className="mt-4">
          <InputLabel forInput="alamat" value="Alamat" />

          <TextareaInput
            id="alamat"
            name="alamat"
            value={data.alamat}
            className="mt-1 block w-full h-20 break-words"
            autoComplete="alamat"
            handleChange={onHandleChange}
            required
          />

          <InputError message={errors.alamat} className="mt-2" />
        </div>
        <div className="mt-4">
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

          <InputError message={errors.status} className="mt-2" />
        </div>

        <div className="flex items-center justify-end mt-4">
          <Link
            href={route("login")}
            className="underline text-sm text-slate-200 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Already registered?
          </Link>

          <PrimaryButton className="ml-4" processing={processing}>
            Register
          </PrimaryButton>
        </div>
      </form>
    </GuestLayout>
  );
}
