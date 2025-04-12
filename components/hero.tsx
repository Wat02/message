import React from "react";
import Button from "@/components/Button";
import Link from "next/link";

function hero() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 text-center pt-[60%] md:pt-[10%] ">
            <h1 className="text-[30px] font-bold text-black pt-[0px] md:pt-[10%]">
              Do you wanna go out with me?
            </h1>
            <div className="flex flex-row justify-center text-center pt-[12.2%] md:pt-[3px] pr-[65px]">
              <Link href="/yea">
                <button className="py-2 px-4 rounded bg-[#d09aa3] font-bold text-[25px]">
                  Yes
                </button>
              </Link>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default hero;
