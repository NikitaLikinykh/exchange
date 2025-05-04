"use client";
import React, { useState } from "react";
import DocumentCard from "../components/DocumentCard";

export default function DocumentsPage() {
  const [activeTab, setActiveTab] = useState("Инвесторам");

  const documents = [
    // Инвесторам
    {
      title: "Отчет о прибылях и убытках 2024",
      category: "Инвесторам",
      filePath: "/documents/investors/i-1.pdf",
    },
    {
      title: "Годовой баланс 2024",
      category: "Инвесторам",
      filePath: "/documents/investors/i-2.pdf",
    },
    {
      title:
        "Аудиторское заключение Кэпт на соответствие требованиям ПВТ 2024, White Bird - Report RUS",
      category: "Инвесторам",
      filePath: "/documents/investors/i-3.pdf",
    },
    {
      title:
        "Аудиторское заключение Кэпт на соответствие требованиям ПВТ 2024, White Bird - Report ENG",
      category: "Инвесторам",
      filePath: "/documents/investors/i-4.pdf",
    },
    {
      title: "Баланс 3 квартал 2024",
      category: "Инвесторам",
      filePath: "/documents/investors/i-5.pdf",
    },
    {
      title: "Выписка из ЕГРЮЛ",
      category: "Инвесторам",
      filePath: "/documents/investors/i-6.pdf",
    },
    {
      title:
        "Декларация 'WHITE PAPER' о создании и размещении цифровых занов (токенов) WhiteBird (USD 623)",
      category: "Инвесторам",
      filePath: "/documents/investors/i-7.pdf",
    },
    {
      title:
        "ПВТ. Одобрение деятельности как оператора криптоплатформы Whitebird",
      category: "Инвесторам",
      filePath: "/documents/investors/i-8.pdf",
    },
    {
      title: "Презентация WhiteBird",
      category: "Инвесторам",
      filePath: "/documents/investors/i-9.pdf",
    },
    {
      title: "Баланс 2 квартал 2024",
      category: "Инвесторам",
      filePath: "/documents/investors/i-10.pdf",
    },
    {
      title: "Отчёт о прибылях и убытках 1 квартал 2024",
      category: "Инвесторам",
      filePath: "/documents/investors/i-11.pdf",
    },
    {
      title: "Баланс 1 квартал 2024",
      category: "Инвесторам",
      filePath: "/documents/investors/i-12.pdf",
    },
    {
      title: "ОПИУ 31.12.2023",
      category: "Инвесторам",
      filePath: "/documents/investors/i-13.pdf",
    },
    {
      title: "Пояснительная записка 2023",
      category: "Инвесторам",
      filePath: "/documents/investors/i-14.pdf",
    },
    {
      title: "Баланс 4 квартал 2023",
      category: "Инвесторам",
      filePath: "/documents/investors/i-15.pdf",
    },
    {
      title: "Свидетельство о постановке на учёт в налоговом органе РФ",
      category: "Инвесторам",
      filePath: "/documents/investors/i-16.pdf",
    },
    {
      title: "Свидетельство о регистрации резидента ПВТ",
      category: "Инвесторам",
      filePath: "/documents/investors/i-17.pdf",
    },
    // Публичная Оферта
    {
      title:
        "Публичная оферта к заключению Партнерского соглашения от 01.01.2025",
      category: "Публичная оферта",
      filePath: "/documents/ofert/p-1.pdf",
    },
    {
      title: "Публичная оферта",
      category: "Публичная оферта",
      filePath: "/documents/ofert/p-2.pdf",
    },
    // Информация
    {
      title: "Секретариат ПВТ об оказании содействия",
      category: "Информация",
      filePath: "/documents/info/i-1.pdf",
    },
    {
      title: "WhiteBird разъяснение МНС",
      category: "Информация",
      filePath: "/documents/info/i-2.pdf",
    },
    {
      title: "WhiteBird разъяснение по налогам",
      category: "Информация",
      filePath: "/documents/info/i-3.pdf",
    },
    {
      title: "Баланс 3 квартал 2024",
      category: "Информация",
      filePath: "/documents/info/i-4.pdf",
    },
    {
      title: "Свидетельство ГРЮЛ WhiteBird",
      category: "Информация",
      filePath: "/documents/info/i-5.pdf",
    },
    {
      title:
        "Публичная оферта к заключению Партнерского соглашения от 01.01.2025",
      category: "Информация",
      filePath: "/documents/info/i-6.pdf",
    },
    {
      title: "Правила обращения с персональными данными",
      category: "Информация",
      filePath: "/documents/info/i-7.pdf",
    },
    {
      title: "Политика оператора в отношении персональных данных",
      category: "Информация",
      filePath: "/documents/info/i-8.pdf",
    },
    {
      title: "Порядок обеспечения конфиденциальности",
      category: "Информация",
      filePath: "/documents/info/i-9.pdf",
    },
    {
      title: "Общие условия реализации токенов",
      category: "Информация",
      filePath: "/documents/info/i-10.pdf",
    },
    {
      title: "Управление конфликтами интересов",
      category: "Информация",
      filePath: "/documents/info/i-11.pdf",
    },
    {
      title: "Уведомление о рисках",
      category: "Информация",
      filePath: "/documents/info/i-12.pdf",
    },
    {
      title: "Публичная оферта",
      category: "Информация",
      filePath: "/documents/info/i-13.pdf",
    },
    {
      title: "Политика обработки персональных данных",
      category: "Информация",
      filePath: "/documents/info/i-14.pdf",
    },
  ];

  const filteredDocuments = documents.filter(
    (doc) => doc.category === activeTab
  );

  return (
    <main>
      <div className="bg-[#0069FF] pb-8">
        <div className="px-0 py-6 text-6xl font-semibold text-center text-white bg-[#0069FF] max-sm:px-0 max-sm:py-4 max-sm:text-4xl">
          Документы
        </div>
        <div className="flex justify-center p-0 mx-auto my-0 bg-[#2B82FF] rounded-lg max-w-[540px] max-sm:flex-wrap max-sm:h-auto max-sm:w-[90%]">
          <div
            onClick={() => setActiveTab("Инвесторам")}
            className={`px-6 pt-1.5 pb-2 text-lg font-semibold cursor-pointer max-sm:flex-auto max-sm:px-4 max-sm:py-2 ${
              activeTab === "Инвесторам"
                ? "bg-white text-blue-500 rounded-md"
                : "text-white"
            }`}
          >
            Инвесторам
          </div>
          <div
            onClick={() => setActiveTab("Публичная оферта")}
            className={`px-6 pt-1.5 pb-2 text-lg font-semibold cursor-pointer max-sm:flex-auto max-sm:px-4 max-sm:py-2 ${
              activeTab === "Публичная оферта"
                ? "bg-white text-blue-500 rounded-md"
                : "text-white"
            }`}
          >
            Публичная оферта
          </div>
          <div
            onClick={() => setActiveTab("Информация")}
            className={`px-6 pt-1.5 pb-2 text-lg font-semibold cursor-pointer max-sm:flex-auto max-sm:px-4 max-sm:py-2 ${
              activeTab === "Информация"
                ? "bg-white text-blue-500 rounded-md"
                : "text-white"
            }`}
          >
            Информация
          </div>
        </div>
      </div>

      <div className="box-border grid gap-6 p-6 mx-auto my-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-[#0069FF]">
        {filteredDocuments.map((doc, index) => (
          <DocumentCard
            key={index}
            title={doc.title}
            readLink={doc.filePath}
            downloadLabel="Скачать"
          />
        ))}
      </div>
    </main>
  );
}
