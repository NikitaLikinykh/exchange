import React, { useState } from "react";

type Currency = {
  code: string;
  name: string;
  icon: string;
  network: string;
};

type CurrencySelectProps = {
  selected: Currency;
  options: Currency[];
  onSelect: (currency: Currency) => void;
};

function CurrencySelect({ selected, options, onSelect }: CurrencySelectProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = (currency: Currency) => {
    onSelect(currency);
    setOpen(false);
  };

  return (
    <div className="relative">
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
        <div className="absolute  z-50 mt-2 left-0 bg-white  rounded shadow-lg w-[120px] ">
          {options.map((currency) => (
            <div
              key={currency.code + currency.network}
              onClick={() => handleSelect(currency)}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <img
                src={currency.icon}
                alt={currency.code}
                className="h-7 w-7"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium">{currency.code}</span>
                {currency.network && (
                  <span className="text-xs text-gray-500">
                    {currency.network}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CurrencySelect;
