<<<<<<< HEAD
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import nookies from "nookies";
import LoginComponent from "../components/Auth/LoginComponent";
import GithubLogin from "../components/Auth/GithubLogin";
import baseApiUrl from "../utils/baseApiUrl";
import { signIn, signOut, useSession } from "next-auth/react";
import { UserContext } from "../store/users";

const Login = ({ user }) => {
  const [loginedUser, serLoginedUser] = useState(user);
  const context = useContext(UserContext);
  console.log("ContextLoginPage: ", context);
  console.log("LoginPage: ", user);
  const router = useRouter();
  const { data: session, status } = useSession();
  console.log("loginedUser: ", loginedUser);

  if (session) {
    router.push("/");
  }

  useEffect(() => {
    if (loginedUser) {
      context.setUser(loginedUser.username);
      context.setEmail(loginedUser.email);
    }
  }, [loginedUser]);

  return (
    <div className="sub justify-self-center w-full">
      <div className="subVisual relative h-60 bg-sky-500">
        <p className="subVisText absolute left-2/4 top-2/4 -translate-y-1/2 -translate-x-1/2 z-10 text-white text-center">
          <span className="text-5xl font-bold block pb-4">로그인</span>
          <span className="block text-lg font-semibold">
            Email & Github Login
          </span>
        </p>
      </div>
      <div className="container xl my-0 mx-auto p-7 w-4/5 max-w-2xl">
        {!session && (
          <>
            <LoginComponent />
            <GithubLogin />
          </>
        )}
        {(session || context.email) && <div>로그인이 완료되었습니다.</div>}
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  let user = null;
=======
import { useRouter } from 'next/router'
import axios from 'axios'
import nookies from 'nookies'
import LoginComponent from '../components/LoginComponent'
import baseApiUrl from '../utils/baseApiUrl'

const Login = () => {
  const router = useRouter()
  const goToRegister = () => {
    router.push('/register')
  }

  return (
    <div>
      <LoginComponent />
      <button onClick={goToRegister}>Register</button>
    </div>
  )
}

export const getServerSideProps = async ctx => {
  const cookies = nookies.get(ctx)
  let user = null
>>>>>>> a8d67ad582ea6fd89079231165718683294a283d

  if (cookies?.jwt) {
    try {
      const { data } = await axios.get(`${baseApiUrl}/api/users/me`, {
        headers: {
          Authorization: `Bearer ${cookies.jwt}`,
        },
<<<<<<< HEAD
      });
      user = data;
    } catch (e) {
      console.log(e);
    }
  }

  // if (user) {
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: "/",
  //     },
  //   };
  // }

  return {
    props: { user },
  };
};

export default Login;
=======
      })
      user = data
    } catch (e) {
      console.log(e)
    }
  }

  if (user) {
    return {
      redirect: {
        permanent: false,
        destination: '/profile',
      },
    }
  }

  return {
    props: {},
  }
}

export default Login
>>>>>>> a8d67ad582ea6fd89079231165718683294a283d
