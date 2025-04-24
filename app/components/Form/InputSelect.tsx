import React, { useEffect, useRef } from "react";
import CurrencySelect from "../Exchange/CurrencySelect";

import { useState } from "react";
import PhoneCodeSelect from "./PhoneCodeSelect";
export default function InputSelect() {
  const [number, setNumber] = useState("");
  const fiatCurrencies = [
    {
      code: "+380",
      name: "Украина",
      icon: "/currency/usd.svg",
    },

    {
      code: "+375",
      name: "Россия",
      icon: "/currency/rub.svg",
    },
    {
      code: "374",
      name: "Баларусь",
      icon: "/currency/byn.svg",
    },
  ];

  type Country = {
    code: string;
    name: string;
    icon: string;
  };
  const [sellCurrency, setSellCurrency] = useState<Country>(fiatCurrencies[0]);
  const inp = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.log("sellCurrency", sellCurrency);
    setNumber(sellCurrency.code);
    inp.current?.focus();
  }, [sellCurrency]);
  return (
    <div className="flex items-center border border-gray-200 rounded-lg p-1 py-2 relative">
      <PhoneCodeSelect
        selected={sellCurrency}
        options={fiatCurrencies}
        onSelect={setSellCurrency}
        className="border-r-1 border-gray-200"
      />

      <input
        ref={inp}
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="flex-1 text-lg font-bold outline-none px-2"
      />
    </div>
  );
}
