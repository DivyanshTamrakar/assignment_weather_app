import Image from "next/image";
import React from "react";

function PageNotFound() {
  return (
    <section className=" p-4 bg-white mx-auto  flex flex-col h-screen w-full">
      <div className="container bg-white h-full  mx-auto text-center flex flex-col gap-6 justify-center items-center">
        <Image
          priority
          src={"/assets/page-not-found.svg"}
          alt="page-not-found"
          width={"460"}
          height={"372"}
        />
      </div>
    </section>
  );
}

export default PageNotFound;
