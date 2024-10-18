import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="h-[6.25rem] w-auto">
        <Image
          src={"/nezuko-running-loader-unscreen.gif"}
          height={100}
          width={100}
          unoptimized
          alt="loader"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Loading;

