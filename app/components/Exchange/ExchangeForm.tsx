import React, { useEffect, useState } from "react";
import Image from "next/image";
import CurrencySelect from "./CurrencySelect";
const fiatCurrencies = [
  { code: "USD", name: "US Dollar", icon: "/flags/usd.svg", network: "" },
  { code: "EUR", name: "Euro", icon: "/flags/eur.svg", network: "" },
  { code: "RUB", name: "Russian Ruble", icon: "/flags/rub.svg", network: "" },
  {
    code: "BYN",
    name: "Belarusian Ruble",
    icon: "/flags/byn.svg",
    network: "",
  },
];

const cryptoCurrencies = [
  { code: "TRX", name: "Tron", icon: "/crypto/trx.svg", network: "TRC20" },
  { code: "BTC", name: "Bitcoin", icon: "/crypto/btc.svg", network: "" },
  { code: "ETH", name: "Ethereum", icon: "/crypto/eth.svg", network: "" },
  { code: "USDT", name: "Tether", icon: "/crypto/usdt.svg", network: "ERC20" },
  { code: "USDT", name: "Tether", icon: "/crypto/usdt.svg", network: "TRC20" },
  { code: "TON", name: "Toncoin", icon: "/crypto/ton.svg", network: "" },
];

export default function ExchangeForm() {
  const [sellAmount, setSellAmount] = useState("1000");
  const [receiveAmount, setReceiveAmount] = useState("");
  const [sellCurrency, setSellCurrency] = useState(fiatCurrencies[0]);
  const [receiveCurrency, setReceiveCurrency] = useState(cryptoCurrencies[0]);
  const [exchangeRate, setExchangeRate] = useState(0.24984); // TRX to USD

  // Auto calculate result
  useEffect(() => {
    const amount = parseFloat(sellAmount.replace(/[^0-9.]/g, ""));
    const result = (amount / exchangeRate).toFixed(6);
    setReceiveAmount(result);
  }, [sellAmount, exchangeRate]);

  return (
    <div className="max-w-[1300px] w-full mx-auto px-5 sm:px-10 md:px-20 relative z-10">
      <div className="bg-white rounded-lg shadow-lg p-5 md:p-5 -mb-20">
        <div className="flex justify-between items-center py-2">
          <div className="text-lg font-medium uppercase">
            1 {receiveCurrency.code} ≈ {exchangeRate} {sellCurrency.code}
          </div>
          <Image
            width={50}
            height={30}
            src="/visa.png"
            alt="Exchange rate"
            className="h-6 object-contain"
          />
        </div>

        <form className="w-full">
          <div className="flex flex-col md:flex-row items-stretch gap-4">
            {/* Sell section */}
            <div className="flex-1">
              <label className="block text-gray-700 text-sm mb-3 ml-2">
                Продаю
              </label>
              <div className="flex items-center border border-gray-200 rounded-lg p-3">
                <input
                  type="text"
                  value={sellAmount}
                  onChange={(e) => setSellAmount(e.target.value)}
                  className="flex-1 text-lg font-bold outline-none"
                />
                <CurrencySelect
                  selected={sellCurrency}
                  options={fiatCurrencies}
                  onSelect={setSellCurrency}
                />
              </div>
            </div>

            {/* Exchange icon */}
            <div className="flex items-center justify-center">
              <img src="/exchange.svg" alt="Exchange" className="w-5 h-6" />
            </div>

            {/* Receive section */}
            <div className="flex-1">
              <label className="block text-gray-700 text-sm mb-3 ml-2">
                Получаю
              </label>
              <div className="flex items-center border border-gray-200 rounded-lg p-3">
                <input
                  type="text"
                  value={receiveAmount}
                  readOnly
                  className="flex-1 text-lg font-bold text-gray-600 outline-none"
                />
                <CurrencySelect
                  selected={receiveCurrency}
                  options={cryptoCurrencies}
                  onSelect={setReceiveCurrency}
                />
              </div>
            </div>
          </div>

          {/* Fee info */}
          <div className="flex flex-wrap items-center justify-center text-[#929BA8] mt-4 gap-2 text-sm">
            <span>Включены:</span>
            <div className="flex items-center gap-2 text-center">
              <span>Комисcия сервиса 24.36 USD</span>
              <img src="/question.svg" alt="Info" className="h-4 w-4" />
              <span>Комисcия сети блокчейн 0.06 USD</span>
            </div>
          </div>

          {/* Button */}
          <button
            type="button"
            className="bg-[#0069FF] text-white rounded-lg py-3 px-8 mt-5 text-lg md:mx-auto block max-w-sm w-full cursor-pointer"
          >
            Обменять
          </button>
        </form>
      </div>
    </div>
  );
}
