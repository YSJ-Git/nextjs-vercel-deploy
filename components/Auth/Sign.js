import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.

export default function Sign() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <div>
      {!session && (
        <>
          <span>You are not signed in</span>
          <a
            href={`/api/auth/signin`}
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Sign in
          </a>
        </>
      )}
      {session?.user && (
        <>
          {session.user.image && <span style={{ backgroundColor: "#f00" }} />}
          <span>
            <small>Signed in as</small>
            <br />
            <strong>{session.user.email ?? session.user.name}</strong>
          </span>
          <a
            href={`/api/auth/signout`}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign out
          </a>
        </>
      )}
    </div>
  );
}
