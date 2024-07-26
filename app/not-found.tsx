import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-[128px] font-black bg-custom-gradient-text">OOPS!</h1>
      <p className="text-[24px] font-bold">404 - Page not found</p>
      <p className="text-[20px] font-light">
        The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable.
      </p>
    </div>
  );
};

export default NotFoundPage;
