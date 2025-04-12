"use client";
import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FaqItem[] = [
    {
      question: "Что такое сервис Whitebird?",
      answer:
        "Whitebird — это белорусская компания с легальной крипто-лицензией на внебиржевой обмен. Мы предоставляем удобный и выгодный сервис для обмена криптовалют.",
    },
    {
      question:
        "Чем криптообменник Whitebird отличается от обычной криптобиржи?",
      answer:
        "В отличие от криптобирж, Whitebird предлагает прямой обмен криптовалют без необходимости размещать ордера, ждать их исполнения и проходить сложные процедуры вывода средств. Мы обеспечиваем быстрый и простой процесс обмена.",
    },
    {
      question: "С какими платежными картами вы работаете?",
      answer:
        "Мы работаем с картами Visa, Mastercard, МИР и другими популярными платежными системами. Вы можете использовать карты большинства банков для проведения операций.",
    },
    {
      question: "Какую минимальную и максимальную сумму можно поменять?",
      answer:
        "Минимальная сумма обмена сост��вляет эквивалент 10 USD, максимальная сумма не ограничена. Для крупных сумм (от 20 тыс. USDT) мы предлагаем VIP-курс.",
    },
    {
      question: "Почему вам можно доверять?",
      answer:
        "Whitebird — официально зарегистрированная компания с лицензией на осуществление криптовалютной деятельности. Мы работаем в соответствии с законодательством Республики Беларусь и обеспечиваем полную безопасность ваших данных и средств.",
    },
    {
      question: "Обязательно ли проходить процедуру верификации KYC?",
      answer:
        "Да, в соответствии с законодательством и для обеспечения безопасности всех пользователей, мы требуем прохождения процедуры KYC (Know Your Customer). Это стандартная практика для легальных криптовалютных сервисов.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-5 sm:px-20">
        <h2 className="text-4xl md:text-5xl font-medium text-[#1E1E28] mb-16 md:mb-24">
          Частые вопросы
        </h2>

        <div className="space-y-px">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white">
              <div
                className="border-b border-[#F6F7F8] cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center px-3 py-7 text-2xl font-medium">
                  <div>{item.question}</div>
                  <img
                    src={openIndex === index ? "/minus.svg" : "/plus.svg"}
                    alt={openIndex === index ? "Collapse" : "Expand"}
                    className="w-4 h-4"
                  />
                </div>
              </div>
              {openIndex === index && (
                <div className="px-3 py-5 text-lg text-[#8F9DB1]">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-8 text-lg">
          <div className="text-[#0069FF]">Другие вопросы</div>
          <div className="flex items-center gap-3 text-[#0069FF]">
            <span>Напишите нам</span>
            <img src="/message.svg" alt="Message" className="w-9 h-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
