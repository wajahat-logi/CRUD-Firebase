"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../../../firebase/auth";
import NavbarUI from "./NavbarUI";
const Navbar = () => {
  const router = useRouter();
  const { authUser, isLoading } = useAuth();
  useEffect(() => {
    if (!isLoading && !authUser) {
      router.push("/");
    }
  }, [isLoading, authUser]);
  return (
    <NavbarUI />
  );
};

export default Navbar;
