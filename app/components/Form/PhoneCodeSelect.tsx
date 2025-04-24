import React, { useState } from "react";

type Country = {
  code: string;
  name: string;
  icon: string;
};

type PhoneCodeSelectProps = {
  selected: Country;
  options: Country[];
  onSelect: (currency: Country) => void;
  className?: string;
};

function PhoneCodeSelect({
  selected,
  options,
  onSelect,
  className,
}: PhoneCodeSelectProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = (phone: Country) => {
    onSelect(phone);
    setOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <div
        className="flex items-center rounded p-1 ml-2 cursor-pointer gap-1  bg-white   transition-shadow"
        onClick={() => setOpen(!open)}
      >
        <img src={selected.icon} alt={selected.code} className="h-6 w-6" />
        <span className="ml-1 text-lg font-bold">{selected.code}</span>
        <img
          src="/arrow-bottom.svg"
          alt="Dropdown"
          className={`h-4 w-4 transform transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {open && (
        <div className="absolute z-50 mt-3 left-0 bg-white rounded shadow-lg w-full ">
          {options.map((country) => (
            <div
              key={country.code}
              onClick={() => handleSelect(country)}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <img src={country.icon} alt={country.code} className="h-7 w-7" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">{country.name}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PhoneCodeSelect;
