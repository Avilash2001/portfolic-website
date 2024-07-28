"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/utils/data";
import { INavItem } from "@/types";

const Header = () => {
  const pathName = usePathname();

  const [activeNav, setActiveNav] = useState<INavItem>(navItems[0]);

  useEffect(() => {
    const activeSlug = navItems.find((item) => item.link === pathName);
    if (activeSlug) setActiveNav(activeSlug);
  }, [pathName]);

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
        {navItems.map(
          (navItem, index) =>
            navItem.showInNav && (
              <Link key={index} href={navItem.link}>
                <p
                  className={`text-[24px] ${
                    activeNav.name === navItem.name
                      ? "bg-custom-gradient-text font-bold"
                      : "font-normal "
                  }`}
                >
                  {navItem.name}
                </p>
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default Header;
