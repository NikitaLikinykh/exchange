"use client";
import React from "react";
import Link from "next/link";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  return (
    <>
      <div className="lg:hidden">
        <HeaderMobile />
      </div>
      <header className="hidden lg:block w-full bg-[#0069FF] py-5">
        <div className="container mx-auto  sm:px-20 lg:px-0">
          <div className="flex items-center justify-between gap-10 py-4">
            <div className="flex-shrink-0">
              <Link href="/">
                <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
              </Link>
            </div>

            <div className="md:flex items-center space-x-8 flex-1 flex justify-around max-w-[820px] w-full text-lg">
              <Link
                href="/faq"
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
                href="/signup"
                className="bg-white text-black text-md px-4 py-1.5 rounded-md shadow-sm hover:bg-gray-100 transition"
              >
                Регистрация
              </Link>
              <Link
                href="/profile"
                className="bg-white text-black text-md px-4 py-1.5 rounded-md shadow-sm hover:bg-gray-100 transition"
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
    </>
  );
}
