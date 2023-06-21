"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export const Login = () => {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="Logo"
      />
      <button
        className="text-white text-3xl font-bold animate-pulse"
        onClick={() => signIn("google")}
      >
        Sign In to use ChatGPT
      </button>
    </div>
  );
};
