import Image from "next/image";
import React from "react";

const ImageWithTextCentered = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center justify-center w-full mt-10">
      <div className="relative ">
        <Image
          src={"/assets/image.png"}
          alt="page-not-found"
          width={300}
          height={100}
          className="rounded-2xl h-20"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-lg font-bold">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageWithTextCentered;
