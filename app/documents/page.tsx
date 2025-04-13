import React from "react";

export default function page() {
  return (
    <main>
      <div className="bg-[#0069FF] pb-8">
        <div className="px-0 py-6 text-6xl font-semibold text-center text-white bg-[#0069FF] max-sm:px-0 max-sm:py-4 max-sm:text-4xl">
          Документы
        </div>
        <div className="flex justify-center p-0 mx-auto my-0 bg-[#2B82FF] rounded-lg  max-w-[540px] max-sm:flex-wrap max-sm:h-auto max-sm:w-[90%]">
          <div className="px-6 pt-1.5 pb-2 text-lg font-semibold  cursor-pointer max-sm:flex-auto max-sm:px-4 max-sm:py-2 bg-white text-blue-500 rounded-md">
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
    </main>
  );
}
