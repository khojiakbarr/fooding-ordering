"use client";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProfilePage() {
  const session = useSession();
  const { status, data } = session;
  const [userName, setUserName] = useState("");
  const [saved, setSaved] = useState(false);
  const userImage = data?.user?.image;
  console.log(session);

  useEffect(() => {
    if (status === "authenticated") setUserName(data?.user?.name);
  }, [session]);

  if (status === "loading") {
    return "Loading";
  }
  if (status === "unauthenticated") {
    return redirect("/login");
  }

  const handleProflieInfoUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("/api/profile", { name: userName });
      console.log(res);

      if (res.status ===200) {
        setSaved(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl font-semibold">
        Profile
      </h1>

      <div className="max-w-md mx-auto">
        {saved && (
          <h2 className=" text-center bg-green-100 p-4 rounded-lg border border-green-300">
            Profile saved!
          </h2>
        )}
        <div className="flex gap-2 items-center">
          <div className="bg-gray-100 p-1 rounded-md">
            <img
              className="rounded-md w-full"
              src={userImage}
              alt="avatar"
              width={125}
              height={125}
            />
            <button className="mt-1">Change Avatar</button>
          </div>
          <form onSubmit={handleProflieInfoUpdate} className="grow">
            <input
              type="text"
              placeholder="First and Last name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              placeholder="email"
              value={session.data.user.email}
              disabled
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
}
