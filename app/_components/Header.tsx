"use client";

import Image from "next/image";
import Link from "next/link";
// import DarkModeButton from "./DarkModeButton";
// import brandLogoBlack from "@/public/Tim-logo.svg";
// import brandLogoWhite from "@/public/Tim-logo-white.svg";
// import { useTheme } from "next-themes";

function Header() {
  // const { theme } = useTheme();

  return (
    <header className="flex items-center justify-between space-x-2 px-10 py-4 font-bold">
      <div className="flex items-center space-x-2">
        {/* <Link href="/" className="rounded-full p-2 shadow-md">
          {theme === "dark" ? (
            <Image
              className="object-cover"
              width={24}
              height={24}
              src={brandLogoWhite}
              alt="brand logo"
            ></Image>
          ) : (
            <Image
              className="object-cover"
              width={24}
              height={24}
              src={brandLogoBlack}
              alt="brand logo"
            ></Image>
          )}
        </Link> */}
        <h2 className="inline-flex gap-1">
          History
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
              clipRule="evenodd"
            />
          </svg>
        </h2>
      </div>
      <div>
        {/* <DarkModeButton></DarkModeButton> */}
        <h2 className="bg-black px-4 py-1 text-yellow-500 rounded-2xl">
          <button>Sign up for daily mail</button>
        </h2>
      </div>
    </header>
  );
}
export default Header;
