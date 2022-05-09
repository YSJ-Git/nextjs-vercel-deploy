import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";

const LoginComponent = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    identifier: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/login", { ...userData });
      toast.success("로그인이 완료되었습니다.", {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: true,
      });
      router.push("/profile");
    } catch (err) {
      console.log(err.response.data);
      toast.error("계정을 확인해주세요.", {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: true,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="w-1/2 inline-block align-middle">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            name="identifier"
            onChange={(e) => handleChange(e)}
            className="mt-1 block w-80 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                      invalid:border-pink-500 invalid:text-pink-600
                      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 box-border"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => handleChange(e)}
            className="mt-1 block w-80 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                      invalid:border-pink-500 invalid:text-pink-600
                      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 box-border"
          />
        </label>
        <br />
        <button className="w-full rounded-xl text-white font-bold bg-sky-500 p-2 hover:bg-sky-600 block mb-2">
          Login
        </button>
        <Link href="/register">
          <a className="rounded-xl text-white font-bold bg-violet-500 hover:bg-violet-600 p-2 block text-center">
            Register
          </a>
        </Link>
      </form>
    </div>
  );
};

export default LoginComponent;
