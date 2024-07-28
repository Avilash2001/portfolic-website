import React from "react";

const Progressbar: React.FC<{ percentage: number; color: string }> = ({
  percentage,
  color = "#E44D26",
}) => {
  return (
    <div className="relative pt-1">
      <div className="overflow-hidden h-2 text-xs flex rounded bg-[#D9D9D9]">
        <div
          style={{ width: `${percentage}%` }}
          className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[${color}]`}
        ></div>
      </div>
    </div>
  );
};

export default Progressbar;
