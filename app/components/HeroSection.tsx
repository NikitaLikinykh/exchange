"use client";
import React, { useState } from "react";

import ExchangeForm from "./Exchange/ExchangeForm";

export default function HeroSection() {
  return (
    <section className="bg-[#0069FF] pb-16 relative">
      {/* Hero content */}
      <div className="container mx-auto px-5 sm:px-20 text-center text-white pb-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-wide">
          Просто. Быстро. Крипто.
        </h1>
        <p className="text-xl md:text-3xl mt-4 md:mt-5 text-[#ffffff99]">
          Удобный и выгодный обмен криптовалют
        </p>
      </div>

      <ExchangeForm />

      {/* Partners banner */}
      <div className="max-w-[1300px] w-full mx-auto px-5 sm:px-20 mt-32">
        <img
          src="/bunner.png"
          alt="Our partners"
          className="w-full object-contain"
        />
      </div>
    </section>
  );
}
