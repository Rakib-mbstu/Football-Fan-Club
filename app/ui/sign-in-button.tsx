"use client";
// import { signOut } from "@/auth";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { logoutUser } from "../lib/action";

export default function SignInButton() {
  const isLoggedIn = useSession().status === "authenticated";
  const logout = async () => {
    await signOut();
  };

  return (
    <>
      {isLoggedIn ? (
        <button
          className="hover:text-blue-400"
          onClick={logout}
        >
          Logout
        </button>
      ) : (
        <Link
          href="/login"
          className="hover:text-blue-400"
        >
          Login
        </Link>
      )}
    </>
  );
}
