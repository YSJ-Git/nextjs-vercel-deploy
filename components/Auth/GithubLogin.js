import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

const GithubLogin = () => {
  return (
    <div className="w-1/2 inline-block align-middle	text-right">
      <button
        onClick={() => signIn("github")}
        className="inline-block py-3 px-5 border border-solid border-slate-400 rounded-lg font-bold hover:bg-zinc-600 hover:text-white"
      >
        <div className="inline-block align-middle pr-2">
          <Image
            src="https://res.cloudinary.com/applotnwjd/image/upload/v1647429864/github_7774f7663a.png"
            alt="깃허브 아이콘"
            width={30}
            height={30}
          />
        </div>
        <span className="inline-block align-middle">Github Login</span>
      </button>
    </div>
  );
};

export default GithubLogin;
