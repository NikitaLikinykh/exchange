"use client";
import React, { useState } from "react";

export default function SupportForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "Ошибка работы сервиса",
    message: "",
    acceptTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      acceptTerms: e.target.checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col px-12 py-12 bg-white rounded-xl max-w-[736px] shadow-[0px_10px_30px_rgba(16,58,121,0.15)] max-md:px-5"
      >
        <div className="relative flex flex-col items-start pr-20 pb-5 pl-3 rounded border border-solid border-neutral-200 max-md:pr-5 max-md:max-w-full">
          <label
            htmlFor="name"
            className="absolute -top-2.5 px-1.5 py-0.5 text-sm text-blue-600 whitespace-nowrap bg-white"
          >
            Представьтесь
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Имя Фамилия"
            className="w-full mt-4 text-lg text-slate-400 bg-transparent outline-none"
          />
        </div>

        <div className="relative flex flex-col items-start pr-20 pb-5 pl-3 mt-8 whitespace-nowrap rounded border border-solid border-neutral-200 max-md:pr-5 max-md:max-w-full">
          <label
            htmlFor="email"
            className="absolute -top-2.5 px-1.5 py-1 text-sm text-blue-600 bg-white"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="yourmail@mail.com"
            className="w-full mt-4 text-lg text-slate-400 bg-transparent outline-none"
          />
        </div>

        <div className="relative mt-7">
          <label
            htmlFor="topic"
            className="absolute -top-2.5 left-3 z-10 px-1.5 py-1 text-sm leading-loose text-blue-600 bg-white"
          >
            Тема обращения
          </label>
          <div className="relative">
            <select
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="w-full appearance-none px-3.5 py-5 text-lg bg-white rounded-md border border-solid border-neutral-200 text-neutral-800 max-md:max-w-full outline-none"
            >
              <option value="Ошибка работы сервиса">
                Ошибка работы сервиса
              </option>
              <option value="Вопрос по оплате">Вопрос по оплате</option>
              <option value="Техническая поддержка">
                Техническая поддержка
              </option>
              <option value="Другое">Другое</option>
            </select>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/557e94a9ad59e592adcab6cebdeee365d0c32af0?placeholderIfAbsent=true"
              className="object-contain absolute right-3.5 top-1/2 transform -translate-y-1/2 w-5 aspect-square pointer-events-none"
              alt="Dropdown icon"
            />
          </div>
        </div>

        <div className="relative mt-7">
          <label
            htmlFor="message"
            className="absolute -top-2.5 left-3 z-10 px-1.5 py-1 text-sm leading-loose text-blue-600 bg-white"
          >
            Ваше сообщение
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Опишите проблему"
            className="w-full min-h-[180px] px-3.5 pt-6 pb-6 text-lg leading-loose rounded border border-solid border-neutral-200 text-slate-400 max-md:pr-5 max-md:max-w-full outline-none resize-none"
          ></textarea>
        </div>

        <div className="flex flex-col items-center px-20 pt-8 pb-14 mt-11 text-base leading-6 text-center text-blue-600 rounded-md border border-dashed border-neutral-200 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[171px]">
            <label htmlFor="fileUpload" className="cursor-pointer">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d262e378d643f0d3fb8b7f8dba9e937356e17a73?placeholderIfAbsent=true"
                className="object-contain self-center w-10 aspect-square"
                alt="Upload icon"
              />
              <div className="mt-4">
                Загрузите файл
                <br />
                <span style={{ color: "rgba(143,157,177,1)" }}>
                  или перетащите сюда
                </span>
              </div>
              <input
                type="file"
                id="fileUpload"
                className="hidden"
                multiple
                accept=".jpeg,.jpg,.png,.pdf"
              />
            </label>
          </div>
        </div>

        <div className="pt-3.5 pb-8 mt-5 text-sm text-slate-400 max-md:pr-5 max-md:max-w-full">
          Допустимые форматы файлов: JPEG, JPG, PNG, PDF.
          <br />
          Количество файлов: не более 5.
          <br />
          Максимальный размер файла: 10 MB.
        </div>

        <div className="flex flex-wrap gap-2.5 self-start mt-8 text-sm text-slate-400">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleCheckboxChange}
              className="w-6 h-6 rounded-xl border border-solid border-stone-300"
            />
          </div>
          <label htmlFor="acceptTerms" className="flex-auto max-md:max-w-full">
            Нажимая на кнопку «Отправить», я даю свое согласие на обработку моих
            персональных
            <br />
            данных для получения обратной связи в соответствии с{" "}
            <span className="text-blue-700">данных</span>
          </label>
        </div>

        <button
          type="submit"
          className="self-center px-16 py-5 mt-10 max-w-full text-xl leading-none text-center text-white whitespace-nowrap bg-blue-600 rounded-md w-[292px] max-md:px-5 max-md:mt-10 cursor-pointer hover:bg-blue-700 transition-colors"
        >
          Отправить
        </button>
      </form>
    </div>
  );
}
