import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "../AuthContext";
import { useRouter } from "next/navigation";

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuth, setIsAuth } = useAuth();
  const router = useRouter();
  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        setIsAuth(false);
        setIsMenuOpen(false);
        router.push("/");
      }
    });
    // Здесь ты можешь отправить запрос на logout и сделать редирект
  };
  return (
    <header className="w-full bg-[#0069FF]">
      <div className="flex items-center justify-between p-4">
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)} // Close menu on logo click
        >
          <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu on burger click
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
        <nav className="bg-[#0069FF] text-white fixed top-0 left-0 w-full h-screen z-50">
          <div className="flex items-center justify-between p-4">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)} // Close menu on logo click
            >
              <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)} // Close menu on cross icon click
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-4 space-y-4">
            <Link
              href="/faq"
              className="block"
              onClick={() => setIsMenuOpen(false)}
            >
              Вопросы-ответы
            </Link>
            <Link
              href="/media"
              className="block"
              onClick={() => setIsMenuOpen(false)}
            >
              Новости
            </Link>
            <Link
              href="/documents"
              className="block"
              onClick={() => setIsMenuOpen(false)}
            >
              Документы
            </Link>
            <Link
              href="/support"
              className="block"
              onClick={() => setIsMenuOpen(false)}
            >
              Поддержка
            </Link>
            {!isAuth ? (
              <div>
                <Link
                  href="/signup"
                  className="block font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Регистрация
                </Link>
                <Link
                  href="/signin"
                  className="block font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Войти
                </Link>
              </div>
            ) : (
              <button
                type="button"
                className="font-bold"
                onClick={handleLogout}
              >
                Выйти из аккаунта
              </button>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
