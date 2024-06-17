import { AlignJustify } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function DashboardHeader({
  showSidebar,
  setShowSidebar,
}: {
  showSidebar: any;
  setShowSidebar: any;
}) {
  return (
    <div className="flex items-center  p justify-between  bg-slate-800 text-slate-50 h-20 px-8 py-8  fixed top-0 w-full z-50 sm:pr-[18rem]">
      <div className="flex items-center gap-5">
        <Link
          href={"/dashboard"}
          className="no-underline text-2xl text-slate-100 "
        >
          Techneto IT
        </Link>
        {/* Icon */}

        <AlignJustify
          onClick={() => setShowSidebar(!showSidebar)}
          className="cursor-pointer "
        />
      </div>
    </div>
  );
}
