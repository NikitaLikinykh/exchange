"use client";
import React from "react";
import Image from "next/image";

export default function LegalSection() {
  const legalCards = [
    {
      title: "Лицензия",
      description: "Лицензия на внебиржевой обмен криптовалюты",
      imageSrc: "/a-1.png",
    },
    {
      title: "Безопасность",
      description: "Безопасность и конфиденциальность ваших данных",
      imageSrc: "/a-2.png",
    },
    {
      title: "Поддержка",
      description: "Круглосуточная поддержка клиентов",
      imageSrc: "/a-3.png",
    },
    {
      title: "Легальность",
      description: "Легальные операции с криптовалютой в Беларуси",
      imageSrc: "/a-4.png",
    },
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto px-12  sm:px-22">
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
          {legalCards.map((card, index) => (
            <div className="relative rounded-2xl overflow-hidden" key={index}>
              <img
                src={card.imageSrc}
                alt={card.title}
                className="w-full h-auto object-cover"
              />
              <div className="absolute h-full flex flex-col justify-end bottom-5 left-10">
                {card.title !== "Поддержка" && (
                  <button className="bg-white border border-[#F6F6F6] rounded-lg px-4 py-1 text-[#1E1E28] text-lg font-normal  cursor-pointer">
                    Узнать больше
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
