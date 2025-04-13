"use client";
import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[#0069FF] pb-7">
      <div className="container mx-auto  sm:px-20 lg:px-0">
        <div className="flex items-center justify-between gap-10 py-4">
          <div className="flex-shrink-0">
            <Link href="/">
              <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
            </Link>
          </div>

          <div className="md:flex items-center space-x-8 flex-1 flex justify-around max-w-[820px] w-full text-lg">
            <Link
              href="#"
              className="text-white hover:text-blue-100 transition-colors"
            >
              Вопросы-ответы
            </Link>
            <Link
              href="/media"
              className="text-white hover:text-blue-100 transition-colors"
            >
              Новости
            </Link>
            <Link
              href="/documents"
              className="text-white hover:text-blue-100 transition-colors"
            >
              Документы
            </Link>
            <Link
              href="/support"
              className="text-white hover:text-blue-100 transition-colors"
            >
              Поддержка
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#"
              className="px-4 py-2 text-white border border-white rounded-md hover:bg-white hover:text-[#0069FF] transition-colors"
            >
              Регистрация
            </Link>
            <Link
              href="#"
              className="px-4 py-2 bg-white text-[#0069FF] rounded-md hover:bg-blue-100 transition-colors"
            >
              Войти
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
