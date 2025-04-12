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
        className="flex items-center bg-gray-100 rounded p-1 ml-2 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <img src={selected.icon} alt={selected.code} className="h-6 w-6" />
        <span className="ml-1 text-sm font-bold">{selected.code}</span>
      </div>

      {open && (
        <div className="absolute z-50 mt-2 bg-white border rounded shadow-md w-40 max-h-60 overflow-y-auto">
          {options.map((currency) => (
            <div
              key={currency.code + currency.network}
              onClick={() => handleSelect(currency)}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <img
                src={currency.icon}
                alt={currency.code}
                className="h-5 w-5"
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
