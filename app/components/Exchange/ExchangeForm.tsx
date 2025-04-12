import Image from "next/image";
import React, { useState } from "react";

export default function ExchangeForm() {
  const [sellAmount, setSellAmount] = useState("1000");
  const [receiveAmount, setReceiveAmount] = useState("4 108,538052");
  return (
    <div className="max-w-[1300px] w-full mx-auto px-5 sm:px-10 md:px-20 relative z-10">
      <div className="bg-white rounded-lg shadow-lg p-5 md:p-5 -mb-20">
        {/* <div className="text-white bg-[#0069FF] inline-block px-3 py-1 rounded-md mb-2 text-sm">
          VIP курс если продаёте от 20 тыс. USDT
        </div> */}

        <div className="flex justify-between items-center py-2">
          <div className="text-lg font-medium uppercase">
            1 TRX ≈ 0,23745 USD
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
                <div className="flex items-center bg-gray-100 rounded p-1">
                  <img
                    src="/currency-icon.svg"
                    alt="Currency"
                    className="h-8 rounded"
                  />
                </div>
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
                  onChange={(e) => setReceiveAmount(e.target.value)}
                  className="flex-1 text-lg font-bold text-gray-600 outline-none"
                  readOnly
                />
                <div className="flex items-center bg-white rounded p-1">
                  <div className="flex items-center gap-1">
                    <img src="/trx-icon.svg" alt="TRX" className="h-6 w-6" />
                    <div className="flex flex-col">
                      <span className="font-bold text-sm">TRX</span>
                      <span className="text-[#0069FF] text-xs">TRC20</span>
                    </div>
                    <img
                      src="/dropdown-icon.svg"
                      alt="Dropdown"
                      className="h-3 ml-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fee information */}
          <div className="flex flex-wrap items-center justify-center  text-[#929BA8] mt-4 gap-2 text-sm">
            <span>Включены:</span>
            <div className="flex items-center gap-2 text-center">
              <span>Комисcия сервиса 24.36 USD</span>
              <img src="/question.svg" alt="Info" className="h-4 w-4" />
              <span>Комисcия сети блокчейн 0.06 USD</span>
              {/* <img src="/info-icon.svg" alt="Info" className="h-4 w-4" /> */}
            </div>
          </div>

          {/* Exchange button */}
          <button
            type="button"
            className="bg-[#0069FF] text-white rounded-lg py-3 px-8 mt-5 text-lg  md:mx-auto block max-w-sm w-full cursor-pointer"
          >
            Обменять
          </button>
        </form>
      </div>
    </div>
  );
}
