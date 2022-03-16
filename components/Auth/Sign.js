import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.

export default function Sign() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <div className="sub justify-self-center w-full">
      <div className="subVisual relative h-60 bg-sky-500">
        <p className="subVisText absolute left-2/4 top-2/4 -translate-y-1/2 -translate-x-1/2 z-10 text-white text-center">
          <span className="text-5xl font-bold block pb-4">로그인</span>
          <span className="block text-lg font-semibold">Github Login</span>
        </p>
      </div>
      <div className="container xl my-0 mx-auto p-7">
        {!session && (
          <div className="text-center py-24">
            <span className="hidden">You are not signed in</span>
            <a
              href={`/api/auth/signin`}
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
              className="inline-block py-3 px-5 border border-solid border-slate-400 rounded-lg font-bold hover:bg-zinc-600 hover:text-white"
            >
              <div className="inline-block align-middle pr-2">
                <Image
                  src="https://res.cloudinary.com/applotnwjd/image/upload/v1647429864/github_7774f7663a.png"
                  alt="깃허브 아이콘"
                  width="30"
                  height="30"
                />
              </div>
              <span className="inline-block align-middle">Github Login</span>
            </a>
          </div>
        )}
        {session?.user && (
          <div className="success text-center">
            <strong className="text-3xl block mb-5">Log-in Succeed</strong>
            <div className="bg-blue-300 p-5 inline-block rounded-xl mb-5">
              <div className="py-3">
                <Image
                  src={session.user.image}
                  alt="avatar image"
                  width="90"
                  height="90"
                />
              </div>
              <div>
                <strong className="text-white">{session.user.name}</strong>
              </div>
              <div>
                <strong className="text-white">{session.user.email}</strong>
              </div>
            </div>
            <div>
              <a
                href={`/api/auth/signout`}
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
                className="p-3 text-white font-semibold bg-sky-500 inline-block rounded-xl hover:bg-sky-600"
              >
                Log-out
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
