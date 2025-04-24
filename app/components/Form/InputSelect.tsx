import React from "react";
import CurrencySelect from "../Exchange/CurrencySelect";

import { useState } from "react";
import PhoneCodeSelect from "./PhoneCodeSelect";
export default function InputSelect() {
  const [text, setText] = useState("");
  const fiatCurrencies = [
    {
      code: "UA",
      name: "+380980585987",
      icon: "/currency/usd.svg",
    },

    {
      code: "RU",
      name: "380980585987",
      icon: "/currency/rub.svg",
    },
    {
      code: "BY",
      name: "380980585987",
      icon: "/currency/byn.svg",
    },
  ];

  type Country = {
    code: string;
    name: string;
    icon: string;
  };
  const [sellCurrency, setSellCurrency] = useState<Country>(fiatCurrencies[0]);
  return (
    <div className="flex items-center border border-gray-200 rounded-lg p-1 py-2 relative">
      <PhoneCodeSelect
        selected={sellCurrency}
        options={fiatCurrencies}
        onSelect={setSellCurrency}
        className="border-r-1 border-gray-200"
      />

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 text-lg font-bold outline-none px-2"
      />
    </div>
  );
}
