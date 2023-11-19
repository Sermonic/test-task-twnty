"use client";

/* eslint-disable camelcase */

import { ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Open_Sans } from "next/font/google";

import Navbar from "@/components/Navbar";

import StyledComponentsRegistry from "@/lib/registry";

import GlobalStyles from "@/styles/GlobalStyles";
import { darkTheme, lightTheme } from "@/styles/theme";

const openSans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  return (
    <html lang="en">
      <body className={openSans.className}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <GlobalStyles />
            <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
