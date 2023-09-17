"use client";
import { AuthContext } from "@/context/AuthProvider";
import { useContext } from "react";

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center justify-between p-24">
      {user?.email}
    </div>
  );
}
