// app/layout.tsx
"use client";

import "./globals.css";
import { useState } from "react";
import { Inter } from "next/font/google";
import { Moon, Sun } from "lucide-react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Global theme state: "dark" or "light"
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <html lang="en">
      <head>
        <title>Sarthak | Full Stack Web Developer</title>
        <meta
          name="description"
          content="Portfolio of Sarthak, a Full Stack Web Developer building with Next.js, React, Node.js and Tailwind CSS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {/* Core container: theme class lives here and drives all CSS tokens */}
        <div
          className={`theme-root min-h-screen ${
            theme === "dark" ? "theme-dark" : "theme-light"
          }`}
        >
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark and light mode"
            className="theme-toggle fixed right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border shadow-lg backdrop-blur"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          {children}
        </div>
      </body>
    </html>
  );
}