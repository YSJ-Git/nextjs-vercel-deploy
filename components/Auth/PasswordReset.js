import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import baseApiUrl from "../../utils/baseApiUrl";
import { toast } from "react-toastify";

const PasswordReset = () => {
  const [resetPwd, setResetPwd] = useState({
    password: "",
    passwordCheck: "",
  });

  const router = useRouter();
  const { code } = router.query;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResetPwd({ ...resetPwd, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`${baseApiUrl}/api/auth/reset-password`, {
          code: code, // reset-password?code=
          password: resetPwd.password,
          passwordConfirmation: resetPwd.passwordCheck,
        })
        .then((response) => {
          console.log("Your user's password has been reset.");
          toast.success("비밀번호 재설정이 완료되었습니다.", {
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
      toast.error("비밀번호 재설정을 실패하였습니다.", {
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
          비밀번호:
          <input
            type="password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label>
          비밀번호 확인:
          <input
            type="password"
            name="passwordCheck"
            onChange={(e) => handleChange(e)}
          />
        </label>

        <button type="submit">비밀번호 변경</button>
      </form>
    </div>
  );
};

export default PasswordReset;
