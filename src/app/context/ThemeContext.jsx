"use client";

import { createContext, useState } from "react";

// 👇 Define shape to avoid TypeScript/IDE warning
export const ThemeContext = createContext({});

export default function ThemeProvider({ children }) {
  const [mobileNav, setMobileNav] = useState(false);

  const value = {
    mobileNav,
    setMobileNav,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
