import { useState } from "react";
import axios from "axios";
import baseApiUrl from "../../utils/baseApiUrl";
import { toast } from "react-toastify";

const PasswordForget = () => {
  const [resetData, setResetData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResetData({ ...resetData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`${baseApiUrl}/api/auth/forgot-password`, {
          email: resetData.email, // user's email
        })
        .then((response) => {
          console.log("Your user received an email");
          toast.success("비밀번호 재설정 메일이 발송되었습니다.", {
            autoClose: 3000,
            position: toast.POSITION.TOP_CENTER,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            pauseOnFocusLoss: false,
            draggable: true,
          });
        });
    } catch (error) {
      console.log("An error occurred:", error.response);
      toast.error("메일주소를 다시 확인해주세요.", {
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" onChange={(e) => handleChange(e)} />
        </label>

        <button type="submit">메일보내기</button>
      </form>
    </div>
  );
};

export default PasswordForget;
