"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const session = useSession();
  // console.log(session);
  const status = session.status;
  const userName = session?.data?.user?.name;

  return (
    <header className="flex items-center justify-between">
      <Link className="text-red-500 font-semibold text-2xl" href={"/"}>
        ST PIZZA
      </Link>
      <nav className="flex gap-8 text-gray-500 font-semibold items-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Menu</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Contact</Link>
      </nav>

      <nav className="flex items-center font-semibold gap-4 text-gray-500">
        {status === "authenticated" && (
          <>
            <Link href={"/profile"} className=" text-nowrap ">
              Hello, {userName?.split(" ")[0]}
            </Link>
            <button
              onClick={() => signOut()}
              className="bg-primary text-white px-6 py-2 rounded-full"
            >
              Logout
            </button>
          </>
        )}
        {status === "unauthenticated" && (
          <>
            <Link href={"/login"}>Login</Link>
            <Link
              href={"/register"}
              className="bg-primary text-white px-6 py-2 rounded-full"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
