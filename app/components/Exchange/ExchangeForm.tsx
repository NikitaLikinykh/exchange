import React, { useEffect, useState } from "react";
import Image from "next/image";

import axios from "axios";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const fiatCurrencies = [
  { code: "USD", name: "USD", icon: "/currency/usd.svg", network: "" },
  { code: "EUR", name: "EUR", icon: "/currency/eur.svg", network: "" },
  {
    code: "RUB",
    name: "RUB",
    icon: "/currency/rub.svg",
    network: "",
  },
  {
    code: "BYN",
    name: "BYN",
    icon: "/currency/byn.svg",
    network: "",
  },
];

const cryptoCurrencies = [
  {
    code: "BTC",
    name: "BTC",
    icon: "/currency/btc.svg",
    network: "Bitcoin",
  },
  {
    code: "ETH",
    name: "ETH",
    icon: "/currency/ethereum.svg",
    network: "Ethereum",
  },
  {
    code: "USDT",
    name: "USDT",
    icon: "/currency/t.svg",
    network: "ERC20",
  },
  { code: "TRX", name: "Tron", icon: "/currency/trc20.svg", network: "TRC20" },

  {
    code: "USDT",
    name: "USDT",
    icon: "/currency/trx20.svg",
    network: "TRC20",
  },
  { code: "TON", name: "TON", icon: "/currency/ton.svg", network: "" },
  {
    code: "USDT",
    name: "USD₮",
    icon: "/currency/usdton.svg",
    network: "TON",
  },
  // {
  //   code: "USDT",
  //   name: "WBP (TRC20)",
  //   icon: "/currency/wbtrc.svg",
  //   network: "TRC20",
  // },
];

export default function ExchangeForm() {
  const router = useRouter();
  const [sellAmount, setSellAmount] = useState("1000");
  const [receiveAmount, setReceiveAmount] = useState("");
  const [sellCurrency, setSellCurrency] = useState(fiatCurrencies[0]);
  const [receiveCurrency, setReceiveCurrency] = useState(cryptoCurrencies[0]);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [editingField, setEditingField] = useState<"sell" | "receive">("sell");
  const CurrencySelect = dynamic(() => import("./CurrencySelect"), {
    ssr: false,
  });

  const [serviceFee, setServiceFee] = useState(0); // Комиссия сервиса
  const [networkFee, setNetworkFee] = useState(0); // Комиссия сети

  // Получение курса обмена с CryptoCompare
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const apiKey =
          "83f44553b097e0cfe397f852ea167ce1c7082d692fb61c36ac079e47043cb177"; // Замените на ваш API-ключ
        const from = sellCurrency.code; // исходная валюта
        const to = receiveCurrency.code; // целевая валюта
        const res = await axios.get(
          `https://min-api.cryptocompare.com/data/price?fsym=${from}&tsyms=${to}&api_key=${apiKey}`
        );
        const rate = res.data[to];
        setExchangeRate(rate);
      } catch (error) {
        console.error("Ошибка при получении курса:", error);
        setExchangeRate(0);
      }
    };

    fetchExchangeRate();
  }, [sellCurrency, receiveCurrency]);

  // Обновление сумм на основе редактируемого поля
  useEffect(() => {
    const amount =
      editingField === "sell"
        ? parseFloat(sellAmount.replace(/[^0-9.]/g, ""))
        : parseFloat(receiveAmount.replace(/[^0-9.]/g, ""));
    if (!isNaN(amount) && exchangeRate > 0) {
      if (editingField === "sell") {
        const result = (amount * exchangeRate).toFixed(6);
        setReceiveAmount(result);
      } else {
        const result = (amount / exchangeRate).toFixed(6);
        setSellAmount(result);
      }
    } else {
      if (editingField === "sell") {
        setReceiveAmount("0");
      } else {
        setSellAmount("0");
      }
    }
  }, [sellAmount, receiveAmount, exchangeRate, editingField]);

  // Обновление комиссий при изменении суммы
  useEffect(() => {
    const calculateFees = () => {
      const sellAmountNumber = parseFloat(sellAmount.replace(/[^0-9.]/g, ""));
      if (!isNaN(sellAmountNumber)) {
        // Комиссия сервиса: 2.439% от суммы, минимум 0.02 USD
        const calculatedServiceFee = Math.max(sellAmountNumber * 0.02439, 0.02);
        setServiceFee(parseFloat(calculatedServiceFee.toFixed(2)));

        // Комиссия сети блокчейн: фиксированная для минимальных сумм, иначе процент
        let calculatedNetworkFee = 0;
        if (sellCurrency.code === "BTC") {
          calculatedNetworkFee = Math.max(sellAmountNumber * 0.00045, 0.45); // 0.045% или минимум 0.45 USD
        } else if (sellCurrency.code === "ETH") {
          calculatedNetworkFee = Math.max(sellAmountNumber * 0.0009, 0.45); // 0.09% или минимум 0.45 USD
        } else if (sellCurrency.code === "USDT") {
          calculatedNetworkFee = Math.max(sellAmountNumber * 0.0002, 0.2); // 0.02% или минимум 0.2 USD
        } else {
          calculatedNetworkFee = 0.45; // Фиксированная комиссия для остальных валют
        }
        setNetworkFee(parseFloat(calculatedNetworkFee.toFixed(2)));
      } else {
        setServiceFee(0);
        setNetworkFee(0);
      }
    };

    calculateFees();
  }, [sellAmount, sellCurrency]);

  // 👇 Маппер названий криптовалют CoinGecko
  const mapToGeckoId = (code: string) => {
    const mapping: Record<string, string> = {
      btc: "bitcoin",
      eth: "ethereum",
      trx: "tron",
      usdt: "tether",
      ton: "the-open-network",
      rub: "russian-ruble", // Добавлено для RUB
      byn: "belarusian-ruble", // Добавлено для BYN
    };
    return mapping[code] || code;
  };

  // Проверка и замена фиата на криптовалюту
  useEffect(() => {
    const handleFiatToCrypto = () => {
      if (
        fiatCurrencies.some((fiat) => fiat.code === sellCurrency.code) &&
        fiatCurrencies.some((fiat) => fiat.code === receiveCurrency.code)
      ) {
        // Если обе валюты фиатные, меняем receiveCurrency на USDT
        setReceiveCurrency(
          cryptoCurrencies.find((crypto) => crypto.code === "USDT") ||
            cryptoCurrencies[0]
        );
      }
    };

    handleFiatToCrypto();
  }, [sellCurrency, receiveCurrency]);

  return (
    <div className="max-w-[1300px] w-full mx-auto px-5 sm:px-10 md:px-20 relative z-10">
      <p className="text-[#9cc3ff] pb-1">
        VIP курс если продаёте от 20 тыс. USDT
      </p>
      <div className="bg-white rounded-lg shadow-lg p-5 md:p-5 -mb-20">
        <div className="flex justify-between items-center py-2">
          <div className="text-lg font-medium uppercase">
            1 {sellCurrency.code} ≈ {exchangeRate} {receiveCurrency.code}
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
                  onChange={(e) => {
                    setSellAmount(e.target.value);
                    setEditingField("sell");
                  }}
                  className="flex-1 text-lg font-bold outline-none"
                />
                <div className="absolute right-3">
                  <CurrencySelect
                    selected={sellCurrency}
                    options={[...fiatCurrencies, ...cryptoCurrencies]} // Оба списка валют
                    onSelect={setSellCurrency}
                  />
                </div>
              </div>
            </div>

            {/* Exchange icon */}
            <div
              className="flex items-center justify-center relative top-0 md:top-4 cursor-pointer"
              onClick={() => {
                const tempCurrency = sellCurrency;
                setSellCurrency(receiveCurrency);
                setReceiveCurrency(tempCurrency);
                setExchangeRate(0); // Сбросить курс для обновления
              }}
            >
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
                  onChange={(e) => {
                    setReceiveAmount(e.target.value);
                    setEditingField("receive");
                  }}
                  className="flex-1 text-lg font-bold outline-none"
                />
                <div className="absolute right-3">
                  <CurrencySelect
                    selected={receiveCurrency}
                    options={[...fiatCurrencies, ...cryptoCurrencies]} // Оба списка валют
                    onSelect={setReceiveCurrency}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Fee info */}
          <div className="flex flex-wrap items-center justify-center text-[#929BA8] gap-2 text-sm my-7">
            <span>Включены:</span>
            <div className="flex items-center gap-2 text-center">
              <span>Комисcия сервиса {serviceFee} USD</span>
              <img src="/question.svg" alt="Info" className="h-4 w-4" />
              <span>Комисcия сети блокчейн {networkFee} USD</span>
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
