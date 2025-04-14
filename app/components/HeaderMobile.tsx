import React, { useState } from "react";
import Link from "next/link";

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#0069FF]">
      <div className="flex items-center justify-between p-4">
        <Link href="/">
          <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white"
        >
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
      {isMenuOpen && (
        <nav className="bg-[#0069FF] text-white p-4 space-y-4">
          <Link href="/faq" className="block">
            Вопросы-ответы
          </Link>
          <Link href="/media" className="block">
            Новости
          </Link>
          <Link href="/documents" className="block">
            Документы
          </Link>
          <Link href="/support" className="block">
            Поддержка
          </Link>
          <Link href="#" className="block">
            Регистрация
          </Link>
          <Link href="#" className="block">
            Войти
          </Link>
        </nav>
      )}
    </header>
  );
}
