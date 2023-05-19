import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="h-[calc(100vh-60px)] w-full flex flex-col items-center justify-center">
      <div className="border p-2 rounded-full shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      <div className="flex flex-col justify-center items-center gap-2 py-5">
        <h3 className=" font-semibold">Sign up</h3>
        <span className="text-base text-gray-400">
          Please fill out the form to create an account!
        </span>
      </div>

      <div className="flex flex-col gap-6 w-full md:w-4/12">
        <form className="flex flex-col gap-6">
          <Input type="text" autoCorrect="off" placeholder="Full name" />

          <Input
            type="email"
            autoComplete="email"
            autoCorrect="off"
            placeholder="Email"
          />
          <Input type="password" autoCorrect="off" placeholder="Password" />

          <Button>Sign up</Button>
        </form>
        <div>
          <span className="text-sm text-gray-400">Have an account? </span>
          <Link className="text-sm" href={`/login`}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
