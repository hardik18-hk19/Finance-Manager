import Image from "next/image";
import React from "react";
import logo from "../public/file.png";
import { Button } from "./ui/button";
import Link from "next/link";
import { HomeIcon, LayoutDashboardIcon, ScanBarcode } from "lucide-react";

const Navbar = () => {
  // Links
  const links = [
    {
      label: "Home",
      key: "1",
      href: "/home",
      icon: <HomeIcon className="w-5 h-5" />,
    },
    {
      label: "Dashboard",
      key: "2",
      href: "/dashboard",
      icon: <LayoutDashboardIcon className="w-5 h-5" />,
    },
    {
      label: "Transactions",
      key: "3",
      href: "/transactions",
      icon: <ScanBarcode className="w-5 h-5" />,
    },
  ];

  return (
    <div className="w-full flex items-center justify-between p-2">
      <div className="pl-8">
        <Image src={logo} height={75} width={75} alt="logo" />
      </div>
      <div className="flex items-center justify-between gap-8">
        {links.map(({ label, href, key, icon }) => (
          <Link
            href={href}
            key={key}
            className="flex gap-2 relative group hover:text-white transition duration-300"
          >
            {icon}
            {label}
            <span className="absolute bottom-[-10px] left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
        ))}
      </div>
      <div className="pr-8">
        <Button className="">Sign In</Button>
      </div>
    </div>
  );
};

export default Navbar;
