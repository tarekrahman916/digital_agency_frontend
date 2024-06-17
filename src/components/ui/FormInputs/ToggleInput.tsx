import React from "react";

type ToggleInputState = {
  label: string;
  name: string;
  isActive: any;
  trueTitle?: string;
  falseTitle?: string;
  register?: any;
  className?: any;
};
export default function ToggleInput({
  label,
  name,
  isActive,
  trueTitle,
  falseTitle,
  register,
  className = "sm:col-span-2 flex flex-wrap",
}: ToggleInputState) {
  console.log(name, isActive);
  return (
    <div className={`${className}`}>
      <div className="w-full sm:w-1/2">
        <h2 className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2">
          {label}
        </h2>
      </div>
      <div className="w-full sm:w-1/2">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            {...register(`${name}`)}
            type="checkbox"
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-lime-300 dark:peer-focus:ring-lime-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-lime-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {isActive ? `${trueTitle}` : `${falseTitle}`}
          </span>
        </label>
      </div>
    </div>
  );
}
