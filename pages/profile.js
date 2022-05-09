<<<<<<< HEAD
import { useRouter } from "next/router";
import axios from "axios";
import nookies from "nookies";
import baseApiUrl from "../utils/baseApiUrl";
import { useContext, useEffect } from "react";
import { UserContext } from "../store/users";
import { signIn, signOut, useSession } from "next-auth/react";
import { toast } from "react-toastify";
import Link from "next/link";

const Profile = (props) => {
  const { data: session, status } = useSession();
  const context = useContext(UserContext);
  //console.log("Context:: ", context);

  const router = useRouter();
  if (session) {
    context.setUser(session.user.name);
    context.setEmail(session.user.email);
  } else if (props.email) {
    const {
      user: { email, username },
    } = props;
  }

  const logout = async () => {
    if (session) {
      signOut("github");
    } else {
      try {
        await axios.get("/api/logout");
        context.setUser(null);
        context.setEmail(null);
        toast.success("로그아웃이 완료되었습니다.", {
          autoClose: 3000,
          position: toast.POSITION.TOP_CENTER,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
          draggable: true,
        });
        router.push("/");
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    if (!context.email) {
      if (props.user) {
        context.setUser(props.user.username);
        context.setEmail(props.user.email);
      }
    }
  }, [props]);

  return (
    <div className="sub justify-self-center w-full">
      <div className="subVisual relative h-60 bg-sky-500">
        <p className="subVisText absolute left-2/4 top-2/4 -translate-y-1/2 -translate-x-1/2 z-10 text-white text-center">
          <span className="text-5xl font-bold block pb-4">Profile</span>
          <span className="block text-lg font-semibold">로그인 정보</span>
        </p>
      </div>
      <div className="container xl my-0 mx-auto p-7 w-4/5 max-w-2xl">
        <div className="w-80 my-0 mx-auto">
          {context.email ? (
            <div>
              <div>
                <p className="font-bold">Username</p>
                <p className="mb-2">{context.user}</p>
              </div>
              <div>
                <p className="font-bold">Email</p>
                <p className="mb-2">{context.email}</p>
              </div>
              <button
                onClick={logout}
                className="w-80 rounded-xl text-white font-bold bg-sky-500 p-2 hover:bg-sky-600 block mb-2"
              >
                Logout
              </button>
              <Link href={`/free/myView/${context.email}`}>
                <a className="w-80 rounded-xl text-white font-bold bg-violet-500 hover:bg-violet-600 block mb-2 p-2 block text-center">
                  나의 게시물(작업중)
                </a>
              </Link>
            </div>
          ) : (
            <div>로그인 한 후 확인가능</div>
          )}
        </div>
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
import baseApiUrl from '../utils/baseApiUrl'

const Profile = props => {
  const router = useRouter()
  const {
    user: { email, username },
  } = props

  const logout = async () => {
    try {
      await axios.get('/api/logout')
      router.push('/')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <div>Username: {username}</div>
      <div>Email: {email}</div>
      <button onClick={logout}>Logout</button>
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

  // if (!user) {
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: "/",
  //     },
  //   };
  // }
=======
      })
      user = data
    } catch (e) {
      console.log(e)
    }
  }

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    }
  }
>>>>>>> a8d67ad582ea6fd89079231165718683294a283d

  return {
    props: {
      user,
    },
<<<<<<< HEAD
  };
};

export default Profile;
=======
  }
}

export default Profile
>>>>>>> a8d67ad582ea6fd89079231165718683294a283d
