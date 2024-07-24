"use client";
import { NotepadText } from "lucide-react";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

const HeaderLayout = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="sticky top-0 flex w-full h-[75px] bg-blue-500 justify-between items-center px-5">
      <NotepadText size={40} color="white" />
      <div>
        <button
          onClick={() => handleNavigation("/login")}
          className={`${
            pathname === "/login" ? "bg-white text-blue-600" : "text-white"
          } px-4 py-2 rounded font-bold`}
        >
          Login
        </button>
        <button
          onClick={() => handleNavigation("/sign-up")}
          className={`${
            pathname === "/sign-up" ? "bg-white text-blue-600" : "text-white"
          } px-4 py-2 rounded font-bold`}
        >
          Sign Up
        </button>
        <button
          onClick={() => handleNavigation("/logout")}
          className="text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default HeaderLayout;
