import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

const RegisterComponent = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/register", userData);
      toast.success("계정등록이 완료되었습니다.", {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: true,
      });
      router.replace("/");
    } catch (err) {
      console.log(err.response.data);
      if (err.response.data.error.name === "ValidationError") {
        toast.error("이메일과 패스워드를 확인해주세요.", {
          autoClose: 3000,
          position: toast.POSITION.TOP_CENTER,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
          draggable: true,
        });
      } else if (err.response.data.error.name === "ApplicationError") {
        toast.error("다른 이메일과 패스워드를 사용해주세요.", {
          autoClose: 3000,
          position: toast.POSITION.TOP_CENTER,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
          draggable: true,
        });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="sub justify-self-center w-full">
      <div className="subVisual relative h-60 bg-sky-500">
        <p className="subVisText absolute left-2/4 top-2/4 -translate-y-1/2 -translate-x-1/2 z-10 text-white text-center">
          <span className="text-5xl font-bold block pb-4">Register</span>
          <span className="block text-lg font-semibold">Email Register</span>
        </p>
      </div>
      <div className="container xl my-0 mx-auto p-7 w-80">
        <form onSubmit={handleSubmit}>
          <label>
            Username
            <input
              type="text"
              name="username"
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
            *Email
            <input
              type="text"
              name="email"
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
            *Password
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
          <button className="w-80 rounded-xl text-white font-bold bg-violet-500 hover:bg-violet-600 p-2 block">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
