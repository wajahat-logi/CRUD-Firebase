import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
import { useAuth } from "../../../firebase/auth";

interface NavItemPropsType {
  label: string;
}

function NavItem({ label }: NavItemPropsType) {
  return (
    <a href="#">
      <Typography as="li" color="blue-gray" className="p-1 font-medium">
        {label}
      </Typography>
    </a>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <NavItem label="About Us" />
      <NavItem label="Pricing" />
      <NavItem label="Contact Us" />
    </ul>
  );
}

export function NavbarUI() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const { authUser, isLoading, signOut } = useAuth();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <Navbar color="transparent" fullWidth className="z-10 sticky bg-slate-600 top-0">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900 ">
        <Typography
          className="text-white mr-4 cursor-pointer text-lg font-bold"
        >
          Excel App
        </Typography>

        <div>
          {!authUser && (
            <Link href="/register">
              <Button color="gray" className="mr-2 hidden lg:inline-block">
                Register
              </Button></Link>
          )}
          {!authUser && (

            <Link href="/login">
              <Button color="gray" className="hidden lg:inline-block">
                Login
              </Button></Link>
          )}
        </div>
        {authUser && (

          <Button
            onClick={() => {
              signOut();
              // Info("Logged Out !")
            }} color="gray" className="hidden lg:inline-block">
            Logout
          </Button>
        )}

        <IconButton
          size="sm"
          variant="text"
          color="blue-gray"
          onClick={handleOpen}
          className="ml-auto inline-block text-blue-gray-900 lg:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="mt-2 rounded-xl bg-white py-2">
          <NavList />
          <Button className="mb-2" fullWidth>
            Logout
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavbarUI;