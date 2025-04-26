import React, { useEffect, useRef } from "react";
import CurrencySelect from "../Exchange/CurrencySelect";

import { useState } from "react";
import PhoneCodeSelect from "./PhoneCodeSelect";

interface InputSelectProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function InputSelect({ onChange }: InputSelectProps) {
  const [number, setNumber] = useState("");
  const [rawNumber, setRawNumber] = useState(""); // New state for raw digits
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

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, "");
    // Format as (XXX) XXX-XXXX
    const formatted = digits.replace(
      /^(\d{0,3})(\d{0,3})(\d{0,4}).*/,
      (_, p1, p2, p3) => {
        let result = "";
        if (p1) result += `(${p1}`;
        if (p1 && p1.length === 3) result += ") ";
        if (p2) result += p2;
        if (p2 && p2.length === 3) result += "-";
        if (p3) result += p3;
        return result;
      }
    );
    return formatted;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const digits = inputValue.replace(/\D/g, ""); // Extract raw digits
    setRawNumber(digits); // Store raw digits
    setNumber(formatPhoneNumber(inputValue)); // Store formatted number
  };

  useEffect(() => {
    console.log("sellCurrency", sellCurrency);
    setNumber(`(${sellCurrency.code}) `); // Format code with parentheses
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
        onChange={handleInputChange}
        className="flex-1 text-lg font-bold outline-none px-2"
        onInput={onChange}
      />
    </div>
  );
}
