"use client";
import { SignUp } from "@clerk/nextjs";
import React from "react";

function page() {
  return (
    <div className="flex items-center justify-center h-full bg-black">
      <SignUp />
    </div>
  );
}

export default page;
