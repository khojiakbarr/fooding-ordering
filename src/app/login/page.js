"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setloginInProgress] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloginInProgress(true);
    try {
      setError(false);

      await signIn("credentials", { callbackUrl: "/", email, password });
      // const res = await axios.post("/api/login", { email, password });
      setloginInProgress(false);
      setUserCreated(true);
    } catch (err) {
      console.error(err);
      setError(true);
      setUserCreated(false);
      setloginInProgress(false);
    }
  };

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl font-semibold">Login</h1>

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

      <form className="block max-w-xs mx-auto" onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loginInProgress}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loginInProgress}
        />
        <button type="submit" disabled={loginInProgress}>
          Login
        </button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex items-center justify-center gap-1 "
        >
          <FaGoogle /> Login with Google
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Existing account?{" "}
          <Link className="underline" href={"/login"}>
            Register here &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
}
