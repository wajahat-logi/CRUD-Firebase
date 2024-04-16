"use client";

import NavbarUI from "../components/welcome/NavbarUI";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthUserProvider } from "../../firebase/auth";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CRUD With NEXT-JS-13 Firebase ",
  description: "_live_ankit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <AuthUserProvider>
            <ToastContainer />
            <NavbarUI />
            {children}
          </AuthUserProvider>
      </body>
    </html>
  );
}
