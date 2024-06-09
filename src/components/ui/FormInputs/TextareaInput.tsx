"use client";
import type { UseFormRegister, FieldErrors } from "react-hook-form";

type TextAreaState = {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  isRequired?: boolean;
  type?: string;
  className?: any;
};

export default function TextareaInput({
  label,
  name,
  register,
  errors,
  isRequired = true,
  type = "text",
  className = "sm:col-span-2",
}: TextAreaState) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-bold leading-6 text-gray-900 dark:text-slate-50 mb-2 "
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          {...register(`${name}`, { required: isRequired })}
          name={name}
          id={name}
          rows={3}
          className=" block w-full rounded-md border-none outline-none py-3 px-3 text-gray-900 dark:text-slate-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-700 dark:focus:ring-slate-500 sm:text-sm sm:leading-6 dark:bg-transparent"
          placeholder={`Type the ${label.toLowerCase()}`}
        />
        {errors[`${name}`] && (
          <span className="text-sm text-red-600 ">{label} is required</span>
        )}
      </div>
    </div>
  );
}
