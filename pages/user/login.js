import { useState, useEffect } from "react";
import axios from "axios";
import cookie from "js-cookie";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import baseApiUrl from "../../utils/baseApiUrl";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const cookies = parseCookies();

  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      alert("Login Success!!");
      router.push("/");
    }

    if (cookies?.user) {
      router.push("/");
    }
  }, [router, session]);

  const SubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`,
        { email, password },
        config
      );
      cookie.set("token", data?.token);
      cookie.set("user", JSON.stringify(data?.user));
      router.push("/");
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <div>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">로그인</button>
      <button onClick={() => signIn("github")}>깃헙로그인</button>
    </div>
  );
};

export default Login;
