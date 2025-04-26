import React, { useEffect, useState } from "react";
import Image from "next/image";
import CurrencySelect from "./CurrencySelect";
import axios from "axios";
import { useRouter } from "next/navigation";

const fiatCurrencies = [
  { code: "USD", name: "US Dollar", icon: "/currency/usd.svg", network: "" },
  { code: "EUR", name: "Euro", icon: "/currency/eur.svg", network: "" },
  {
    code: "RUB",
    name: "Russian Ruble",
    icon: "/currency/rub.svg",
    network: "",
  },
  {
    code: "BYN",
    name: "Belarusian Ruble",
    icon: "/currency/byn.svg",
    network: "",
  },
];

const cryptoCurrencies = [
  {
    code: "BTC",
    name: "Bitcoin",
    icon: "/currency/btc.svg",
    network: "Bitcoin",
  },
  {
    code: "ETH",
    name: "Ethereum",
    icon: "/currency/ethereum.svg",
    network: "Ethereum",
  },
  {
    code: "USDT",
    name: "Tether",
    icon: "/currency/t.svg",
    network: "ERC20",
  },
  { code: "TRX", name: "Tron", icon: "/currency/trc20.svg", network: "TRC20" },

  {
    code: "USDT",
    name: "Tether",
    icon: "/currency/trx20.svg",
    network: "TRC20",
  },
  { code: "TON", name: "Toncoin", icon: "/currency/ton.svg", network: "" },
  {
    code: "USD₮",
    name: "USDTON",
    icon: "/currency/usdton.svg",
    network: "TON",
  },

  {
    code: "WBP",
    name: "Toncoin",
    icon: "/currency/wbtrc.svg",
    network: "TRC20",
  },
];

export default function ExchangeForm() {
  const router = useRouter();
  const [sellAmount, setSellAmount] = useState("1000");
  const [receiveAmount, setReceiveAmount] = useState("");
  const [sellCurrency, setSellCurrency] = useState(fiatCurrencies[0]);
  const [receiveCurrency, setReceiveCurrency] = useState(cryptoCurrencies[0]);
  const [exchangeRate, setExchangeRate] = useState(0);

  // Получение курса обмена с CoinGecko
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const from = receiveCurrency.code.toLowerCase(); // крипта
        const to = sellCurrency.code.toLowerCase(); // фиат
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${mapToGeckoId(
            from
          )}&vs_currencies=${to}`
        );
        const rate = res.data[mapToGeckoId(from)][to];
        setExchangeRate(rate);
      } catch (error) {
        console.error("Ошибка при получении курса:", error);
        setExchangeRate(0);
      }
    };

    fetchExchangeRate();
  }, [sellCurrency, receiveCurrency]);

  // Пересчёт суммы
  useEffect(() => {
    const amount = parseFloat(sellAmount.replace(/[^0-9.]/g, ""));
    if (!isNaN(amount) && exchangeRate > 0) {
      const result = (amount / exchangeRate).toFixed(6);
      setReceiveAmount(result);
    } else {
      setReceiveAmount("0");
    }
  }, [sellAmount, exchangeRate]);

  // 👇 Маппер названий криптовалют CoinGecko
  const mapToGeckoId = (code: string) => {
    const mapping: Record<string, string> = {
      btc: "bitcoin",
      eth: "ethereum",
      trx: "tron",
      usdt: "tether",
      ton: "the-open-network",
    };
    return mapping[code] || code;
  };

  return (
    <div className="max-w-[1300px] w-full mx-auto px-5 sm:px-10 md:px-20 relative z-10">
      <p className="text-[#9cc3ff] pb-1">
        VIP курс если продаёте от 20 тыс. USDT
      </p>
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
              <div className="flex items-center border border-gray-200 rounded-lg p-3 py-2 relative">
                <input
                  type="text"
                  value={sellAmount}
                  onChange={(e) => setSellAmount(e.target.value)}
                  className="flex-1 text-lg font-bold outline-none"
                />
                <div className="absolute right-3">
                  <CurrencySelect
                    selected={sellCurrency}
                    options={fiatCurrencies}
                    onSelect={setSellCurrency}
                  />
                </div>
              </div>
            </div>

            {/* Exchange icon */}
            <div className="flex items-center justify-center relative top-0 md:top-4">
              <img src="/exchange.svg" alt="Exchange" className="w-5 h-6" />
            </div>

            {/* Receive section */}
            <div className="flex-1">
              <label className="block text-gray-700 text-sm mb-3 ml-2">
                Получаю
              </label>
              <div className="flex items-center border border-gray-200 rounded-lg p-3 py-2 relative">
                <input
                  type="text"
                  value={receiveAmount}
                  readOnly
                  className="flex-1 text-lg font-bold text-[#8f9db1] outline-none"
                />
                <div className="absolute right-3">
                  <CurrencySelect
                    selected={receiveCurrency}
                    options={cryptoCurrencies}
                    onSelect={setReceiveCurrency}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Fee info */}
          <div className="flex flex-wrap items-center justify-center text-[#929BA8]  gap-2 text-sm my-7">
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
