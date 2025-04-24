import React from "react";

interface InputTextProps {
  label: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function InputText({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: InputTextProps) {
  return (
    <div className="relative flex flex-col items-start pr-20 pb-2 pl-3 rounded-lg border border-solid border-neutral-200 max-md:pr-5 max-md:max-w-full">
      <label
        htmlFor="name"
        className="absolute -top-2.5 px-1.5 py-0.5 text-sm text-blue-600 whitespace-nowrap bg-white"
      >
        {label}
      </label>
      <input
        id="name"
        name="name"
        type={type || "text"}
        value={value}
        placeholder={placeholder || ""}
        onChange={onChange}
        className="w-full mt-3 text-lg text-black bg-transparent outline-none"
      />
    </div>
  );
}
