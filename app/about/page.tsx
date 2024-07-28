import { jobTitles } from "@/utils/data";
import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full h-full px-[80px]">
      <div className="flex flex-col gap-[50px] w-[800px]">
        <div>
          <h1 className="text-[48px] font-medium">Nice to meet you!</h1>
          <p className="text-[20px] font-normal">
            Since beginning my journey 6 years ago, I&apos;ve done remote work
            for agencies, worked in startups, and collaborated with talented
            people to{" "}
            <span className="bg-custom-gradient-text font-semibold">
              design
            </span>
            ,{" "}
            <span className="bg-custom-gradient-text font-semibold">
              create
            </span>{" "}
            &{" "}
            <span className="bg-custom-gradient-text font-semibold">
              market
            </span>{" "}
            digital products for both business and consumer use. I&apos;m
            quietly confident, naturally curious, and perpetually working on
            improving my chops.
          </p>
        </div>
        <div>
          <h1 className="text-[48px] font-medium">My specialties?</h1>
          <div className="flex flex-row items-center justify-between mt-[20px]">
            {jobTitles.map((jobTitle, index) => (
              <>
                <div key={index} className="w-[200px]">
                  <h2 className="text-[24px] font-bold bg-custom-gradient-text">
                    {jobTitle.title}
                  </h2>
                  <p className="text-[20px] font-normal">
                    {jobTitle.description}
                  </p>
                </div>
                {index !== jobTitles.length - 1 && (
                  <Image src="/dot.svg" alt="Dot" width={10} height={10} />
                )}
              </>
            ))}
          </div>
        </div>
      </div>
      <Image src="/main.svg" alt="My Main Image" width={414} height={450} />
    </div>
  );
};

export default AboutMe;
