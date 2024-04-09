import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/welcome/Navbar";
import { AuthUserProvider } from "../../firebase/auth";
// import { ThemeProvider } from "@material-tailwind/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CRUD With NEXT-JS-13 Firebase ",
  description: "_live_ankit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider> */}
          <AuthUserProvider>
            <ToastContainer />
            <Navbar />
            {children}
          </AuthUserProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
