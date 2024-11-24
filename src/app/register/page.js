"use client";
import axios from "axios";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setCreatingUser(true);

    try {
      setError(false);
      const res = await axios.post("/api/register", { email, password });
      setCreatingUser(false);
      setUserCreated(true);
    } catch (err) {
      console.error(err);
      setError(true);
      setUserCreated(false);
      setCreatingUser(false);
    }
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl font-semibold">
        Register
      </h1>
      {userCreated && (
        <div className="my-4 text-center">
          User created.
          <br />
          Now you can{" "}
          <Link className="underline" href={"/login"}>
            Login &raquo;
          </Link>
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          An error has occurred. <br />
          Place try again later
        </div>
      )}
      <form onSubmit={handleSubmit} className="block max-w-xs mx-auto">
        <input
          name="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={creatingUser}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={creatingUser}
        />
        <button type="submit" disabled={creatingUser}>
          Register
        </button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
      </form>
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className=" max-w-sm mx-auto flex items-center justify-center gap-1 disabled:opacity-80"
      >
        <FaGoogle /> Login with Google
      </button>
      <div className="text-center my-4 text-gray-500 border-t pt-4">
        Existing account?{" "}
        <Link className="underline" href={"/login"}>
          Login here &raquo;
        </Link>
      </div>
    </section>
  );
}
