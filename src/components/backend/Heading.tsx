import React from "react";

export default function Heading({ title }: { title: string }) {
  return (
    <div className=" text-xl font-semibold dark:text-slate-50 text-slate-800">
      <h1>{title}</h1>
    </div>
  );
}
