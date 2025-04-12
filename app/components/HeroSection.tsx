"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [sellAmount, setSellAmount] = useState("1000");
  const [receiveAmount, setReceiveAmount] = useState("4 108,538052");

  return (
    <section className="bg-[#0069FF] pb-16 relative">
      {/* Wave decoration at the top */}
      <div className="w-full">
        <img
          src="/wave-decoration.svg"
          alt=""
          className="w-full object-contain"
          aria-hidden="true"
        />
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-5 sm:px-20 text-center text-white pb-12">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-wide">
          Просто. Быстро. Крипто.
        </h1>
        <p className="text-xl md:text-2xl mt-8 md:mt-10">
          Удобный и выгодный обмен криптовалют
        </p>
      </div>

      {/* Exchange form */}
      <div className="container mx-auto px-5 sm:px-10 md:px-20 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-5 md:p-10 -mb-20">
          <div className="text-white bg-[#0069FF] inline-block px-3 py-1 rounded-md mb-2 text-sm">
            VIP курс если продаёте от 20 тыс. USDT
          </div>

          <div className="flex justify-between items-center py-2 mb-4">
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
                <img
                  src="/exchange-icon.svg"
                  alt="Exchange"
                  className="w-5 h-6"
                />
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
            <div className="flex flex-wrap items-center text-sm text-gray-500 mt-4 gap-2">
              <span>Включены:</span>
              <div className="flex items-center gap-1">
                <span>Комисcия сервиса 24.36 USD</span>
                <img src="/info-icon.svg" alt="Info" className="h-4 w-4" />
              </div>
              <span>Комисcия сети блокчейн 0.06 USD</span>
            </div>

            {/* Exchange button */}
            <button
              type="button"
              className="bg-[#0069FF] text-white rounded-lg py-4 px-8 mt-5 text-lg w-full md:w-auto md:mx-auto block"
            >
              Обменять
            </button>
          </form>
        </div>
      </div>

      {/* Partners banner */}
      <div className="container mx-auto px-5 sm:px-20 mt-32">
        <img
          src="/bunner.png"
          alt="Our partners"
          className="w-full object-contain"
        />
      </div>
    </section>
  );
}
