"use client";
import { ThemeContext } from "@/app/context/ThemeContext";
import React, { useContext } from "react";
import MobileSidebar from "./MobileSidebar";

export default function MobileNavWrapper() {
  const { mobileNav } = useContext(ThemeContext);

  return mobileNav && <MobileSidebar />;
}
