"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Actions = ({ className }: { className?: string | undefined }) => {
  return (
    <div className={cn("relative flex gap-3", className)}>
      <Link href={"/login"} className={buttonVariants({ variant: "outline" })}>
        Login
      </Link>
      <Link
        href={"javascript:void(0)"}
        className={buttonVariants({ variant: "outline" })}
      >
        Signup
      </Link>
    </div>
  );
};

export const Navbar = () => {
  const [menuState, setMenuState] = useState(false);

  const navigation = [
    { title: "About", path: "javascript:void(0)" },
    { title: "Products", path: "javascript:void(0)" },
    { title: "Contact us", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
  ];

  return (
    <nav
      className={cn(
        "min-h-[60px] bg-background flex items-center space-x-8 px-4 max-w-screen-xl mx-auto md:px-8 border-b",
        menuState ? "border-none" : ""
      )}
    >
      <div className="flex-none lg:flex-initial ">
        <a href="/">
          <h3 className="font-bold">Boilerplate</h3>
        </a>
      </div>
      <div className="flex flex-1 items-center justify-between">
        <div
          className={cn(
            "bg-white absolute z-20 w-full top-12 left-0 py-3 px-4 border-b md:px-8 lg:static lg:block lg:border-none",
            menuState ? "" : "hidden"
          )}
        >
          <ul className="space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-gray-900">
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </ul>
          <Actions className={"mt-5 pt-5 flex-col lg:hidden"} />
        </div>

        <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
          <Actions className={"hidden lg:flex"} />

          <button
            className="outline-none text-gray-400 block lg:hidden"
            onClick={() => setMenuState(!menuState)}
          >
            {menuState ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
