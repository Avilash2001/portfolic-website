"use client";
import SkillCard from "@/components/skills/SkillCard";
import { IJobTitle } from "@/types";
import { jobTitles } from "@/utils/data";
import Image from "next/image";
import React, { useState } from "react";

const Skills = () => {
  const [activeJobTitle, setActiveJobTitle] = useState<IJobTitle>(jobTitles[0]);

  const handleJobTitleChange = (direction: "left" | "right") => {
    const currentIndex = jobTitles.findIndex(
      (jobTitle) => jobTitle.title === activeJobTitle.title
    );

    if (direction === "left") {
      if (currentIndex === 0) {
        setActiveJobTitle(jobTitles[jobTitles.length - 1]);
      } else {
        setActiveJobTitle(jobTitles[currentIndex - 1]);
      }
    } else {
      if (currentIndex === jobTitles.length - 1) {
        setActiveJobTitle(jobTitles[0]);
      } else {
        setActiveJobTitle(jobTitles[currentIndex + 1]);
      }
    }
  };

  return (
    <div className="w-full h-full px-[80px] pt-[40px]">
      <h1 className="text-[36px] font-extralight">My skills as a</h1>
      <div className="flex flex-row items-end gap-[20px]">
        <Image
          src="/arrow.svg"
          alt="ArrowLeft"
          width={32}
          height={32}
          className="transform rotate-180 mb-[3px] cursor-pointer"
          onClick={() => handleJobTitleChange("left")}
        />
        <p className="text-[48px] font-bold bg-custom-gradient-text leading-none">
          {activeJobTitle.title}
        </p>
        <Image
          className="mb-[3px] cursor-pointer"
          src="/arrow.svg"
          alt="ArrowRight"
          width={32}
          height={32}
          onClick={() => handleJobTitleChange("right")}
        />
      </div>

      <div className="grid grid-cols-3 gap-[40px] mt-[40px]">
        {activeJobTitle.skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
