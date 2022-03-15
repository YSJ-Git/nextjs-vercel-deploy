import { getSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Sign from "../components/Auth/Sign";

const Test = () => {
  return <Sign />;
};

export default Test;
