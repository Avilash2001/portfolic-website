import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  const socials = [
    {
      name: "Github",
      icon: "github.svg",
      link: "https://github.com/Avilash2001",
    },
    {
      name: "LinkedIn",
      icon: "linkedin.svg",
      link: "https://www.linkedin.com/in/avilashg/",
    },
    {
      name: "Instagram",
      icon: "instagram.svg",
      link: "https://www.instagram.com/smotato.ts/",
    },
    {
      name: "Facebook",
      icon: "facebook.svg",
      link: "https://www.facebook.com/avilash2001/",
    },
  ];
  return (
    <div className="flex flex-col gap-[40px] w-[80px] justify-center items-end">
      {socials.map((social, index) => {
        return (
          <Link
            href={social.link}
            key={index}
            target="_blank"
            // className="ml-[60px]"
          >
            <Image
              src={`/socials/${social.icon}`}
              alt={social.name}
              width={20}
              height={20}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
