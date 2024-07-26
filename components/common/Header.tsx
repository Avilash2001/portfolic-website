"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  const navItems = [
    {
      name: "About Me",
      link: "/about",
    },
    {
      name: "Skills",
      link: "/skills",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [active, setActive] = useState("");

  useEffect(() => {
    const activeSlug = navItems.find((item) => item.link === pathName);
    setActive(activeSlug ? activeSlug.name : "");
  }, [pathName]); // eslint-disable-line

  return (
    <div className="flex flex-row pr-[80px] pt-[40px] items-center justify-between">
      <Link
        href="/"
        className="flex flex-row items-center gap-[20px] cursor-pointer"
      >
        <Image src="./logo.svg" alt="logo" width={50} height={40} />
        <h1 className="text-[32px] font-semibold">AVILASH GHOSH</h1>
      </Link>

      <div className="flex flex-row gap-[80px]">
        {navItems.map((item, index) => (
          <Link key={index} href={item.link}>
            <p
              className={`text-[24px] ${
                active === item.name
                  ? "bg-custom-gradient-text font-bold"
                  : "font-normal "
              }`}
            >
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
