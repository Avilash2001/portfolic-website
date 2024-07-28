import { ISkill } from "@/types";
import React from "react";
import Progressbar from "../common/Progressbar";
import Image from "next/image";

const SkillCard: React.FC<{
  skill: ISkill;
}> = ({ skill }) => {
  return (
    <div className="flex w-full items-center justify-between gap-[20px]">
      <div className="w-full">
        {skill.name}
        <Progressbar {...skill} />
      </div>
      <Image
        src={`skills/${skill.icon}`}
        alt={skill.name}
        width={32}
        height={32}
      />
    </div>
  );
};

export default SkillCard;
