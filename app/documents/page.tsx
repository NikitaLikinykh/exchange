"use client";
import React from "react";
import DocumentCard from "../components/DocumentCard";

export default function DocumentsPage() {
  const documents = [
    {
      title: "Отчет о прибылях и убытках 2024",
      readLink: "#",
      downloadLabel: "Скачать",
    },
    {
      title: "Годовой баланс 2024",
      readLink: "#",
      downloadLabel: "Скачать",
    },
    {
      title: "Баланс 3 квартал 2024",
      readLink: "#",
      downloadLabel: "Скачать",
    },
    {
      title: "Выписка из ЕГРЮЛ",
      readLink: "#",
      downloadLabel: "Скачать",
    },
    {
      title:
        "ПВТ. Одобрение деятельности как оператора криптоплатформы Whitebird",
      readLink: "#",
      downloadLabel: "Скачать",
    },
    {
      title: "Презентация WhiteBird",
      readLink: "#",
      downloadLabel: "Скачать",
    },
    {
      title: "Баланс 2 квартал 2024",
      readLink: "#",
      downloadLabel: "Скачать",
    },
    {
      title: "Отчёт о прибылях и убытках 1 квартал 2024",
      readLink: "#",
      downloadLabel: "Скачать",
    },
    {
      title: "Баланс 1 квартал 2024",
      readLink: "#",
      downloadLabel: "Скачать",
    },
    {
      title: "ОПИУ 31.12.2023",
      readLink: "#",
      downloadLabel: "Скачать",
    },
    {
      title: "Пояснительная записка 2023",
      readLink: "#",
      downloadLabel: "Скачать",
    },
    {
      title: "Баланс 4 квартал 2023",
      readLink: "#",
      downloadLabel: "Скачать",
    },
    {
      title: "Свидетельство о постановке на учёт в налоговом органе РФ",
      readLink: "#",
      downloadLabel: "Скачать",
    },
    {
      title: "Свидетельство о регистрации резидента ПВТ",
      readLink: "#",
      downloadLabel: "Скачать",
    },
  ];

  return (
    <main>
      <div className="bg-[#0069FF] pb-8">
        <div className="px-0 py-6 text-6xl font-semibold text-center text-white bg-[#0069FF] max-sm:px-0 max-sm:py-4 max-sm:text-4xl">
          Документы
        </div>
        <div className="flex justify-center p-0 mx-auto my-0 bg-[#2B82FF] rounded-lg max-w-[540px] max-sm:flex-wrap max-sm:h-auto max-sm:w-[90%]">
          <div className="px-6 pt-1.5 pb-2 text-lg font-semibold cursor-pointer max-sm:flex-auto max-sm:px-4 max-sm:py-2 bg-white text-blue-500 rounded-md">
            Инвесторам
          </div>
          <div className="px-6 pt-1.5 pb-2 text-lg font-semibold text-white cursor-pointer max-sm:flex-auto max-sm:px-4 max-sm:py-2">
            Публичная оферта
          </div>
          <div className="px-6 pt-1.5 pb-2 text-lg font-semibold text-white cursor-pointer max-sm:flex-auto max-sm:px-4 max-sm:py-2">
            Информация
          </div>
        </div>
      </div>

      <div className="box-border grid gap-6 p-12 mx-auto my-0 grid-cols-[repeat(4,1fr)] max-md:p-6 max-md:grid-cols-[repeat(2,1fr)] max-sm:p-4 max-sm:grid-cols-[1fr] bg-[#0069FF]">
        {documents.map((doc, index) => (
          <DocumentCard
            key={index}
            title={doc.title}
            readLink={doc.readLink}
            downloadLabel={doc.downloadLabel}
          />
        ))}
      </div>
    </main>
  );
}
