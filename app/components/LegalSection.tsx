"use client";
import React from "react";
import Image from "next/image";

export default function LegalSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto  sm:px-20 lg:px-0">
        {/* Section heading */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-medium text-[#1E1E28]">
            Меняйте легально.
          </h2>
          <p className="text-xl md:text-2xl text-[#8F9DB1] mt-4 leading-relaxed">
            Whitebird — белорусская компания с легальной крипто-лицензией на
            внебиржевой обмен
          </p>
        </div>

        {/* Cards grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 h-full">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              className="relative rounded-2xl overflow-hidden w-full h-[260px]"
              key={index}
            >
              <img
                src="/a-1.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative h-full flex flex-col justify-end p-8 pb-8">
                <button className="bg-white border border-[#F6F6F6] rounded-lg px-4 py-3 text-[#1E1E28] text-lg font-normal">
                  Узнать больше
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
