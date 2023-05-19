import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
      </div>

      <div className="flex flex-col justify-center items-center gap-2 py-5">
        <h3 className=" font-semibold">Welcome back</h3>
        <span className="text-base text-gray-400">
          Please enter your details to login!
        </span>
      </div>

      <div className="flex flex-col gap-6 w-full md:w-4/12">
        <form className="flex flex-col gap-6">
          <Input
            type="email"
            autoComplete="email"
            autoCorrect="off"
            placeholder="Email"
          />
          <Input type="password" autoCorrect="off" placeholder="Password" />
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>

            <p className="flex justify-end">
              <Link className="w-fit border-b border-black text-sm" href={`/`}>
                Reset passport?
              </Link>
            </p>
          </div>
          <Button>Login</Button>
        </form>
        <div>
          <span className="text-sm text-gray-400">Don't have an account? </span>
          <Link className="text-sm" href={`/`}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
