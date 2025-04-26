"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import HeaderMobile from "./HeaderMobile";
import { useRouter } from "next/navigation";
interface HeaderProps {
  isAuth: string | null;
}

export default function Header({ isAuth }: HeaderProps) {
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [auth, setAuth] = useState(isAuth);
  const router = useRouter();
  // Закрытие меню при клике вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsAccountMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    console.log("Выход из аккаунта");
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        setAuth(null);
        router.push("/");
      }
    });
    // Здесь ты можешь отправить запрос на logout и сделать редирект
  };

  return (
    <>
      <div className="lg:hidden">
        <HeaderMobile />
      </div>
      <header className="hidden lg:block w-full bg-[#0069FF] py-5">
        <div className="container mx-auto sm:px-20 lg:px-0">
          <div className="flex items-center justify-between gap-10 py-4">
            {/* Логотип */}
            <div className="flex-shrink-0">
              <Link href="/">
                <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
              </Link>
            </div>

            {/* Навигация */}
            <div className="md:flex items-center space-x-8 flex-1 justify-around max-w-[820px] w-full text-lg">
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

            {/* Авторизация */}
            {auth ? (
              <div className="hidden md:flex items-center space-x-4 relative">
                {/* Кнопка "Обменять" */}
                <Link
                  href="/"
                  className="bg-white text-black text-md px-4 py-1.5 rounded-lg shadow-sm hover:bg-gray-100 transition flex gap-2 items-center"
                >
                  <svg
                    width="15"
                    height="21"
                    viewBox="0 0 19 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5263 1L18 5.5M18 5.5L13.5263 10M18 5.5H1"
                      stroke="#0269ff"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M5.47368 15L1 19.5M1 19.5L5.47368 24M1 19.5H18"
                      stroke="#0269ff"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                  <span className="text-md font-medium">Обменять</span>
                </Link>

                {/* Кнопка "Мой аккаунт" */}
                <div className="relative">
                  <button
                    onClick={() => setIsAccountMenuOpen((prev) => !prev)}
                    className="bg-white text-black text-md px-4 py-1.5 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100 transition flex items-center gap-2"
                  >
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="8" cy="4" r="4" fill="#c3ddff"></circle>
                      <path
                        d="M14 17C15.1046 17 16.0246 16.091 15.7513 15.0208C15.6573 14.6527 15.537 14.291 15.391 13.9385C14.989 12.9679 14.3997 12.086 13.6569 11.3431C12.914 10.6003 12.0321 10.011 11.0615 9.60896C10.0909 9.20693 9.05057 9 8 9C6.94942 9 5.90914 9.20693 4.93853 9.60896C3.96793 10.011 3.08601 10.6003 2.34315 11.3431C1.60028 12.086 1.011 12.9679 0.608963 13.9385C0.462954 14.291 0.342678 14.6527 0.248703 15.0208C-0.0245724 16.091 0.89543 17 2 17L8 17H14Z"
                        fill="#0069FF"
                      ></path>
                    </svg>
                    <span className="text-md font-medium">Мой аккаунт</span>
                  </button>

                  {/* Выпадающее меню */}
                  {isAccountMenuOpen && (
                    <div
                      ref={menuRef}
                      className="absolute right-0 mt-2 w-sm  bg-white rounded-lg shadow-lg overflow-hidden z-50"
                    >
                      <div className="bg-[#f64f6f] text-white text-center py-2 text-sm">
                        Не верифицирован
                      </div>
                      <Link
                        href="/profile"
                        className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 transition text-gray-700"
                      >
                        <svg
                          width="19"
                          height="20"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="8" cy="4" r="4" fill="#c3ddff"></circle>
                          <path
                            d="M14 17C15.1046 17 16.0246 16.091 15.7513 15.0208C15.6573 14.6527 15.537 14.291 15.391 13.9385C14.989 12.9679 14.3997 12.086 13.6569 11.3431C12.914 10.6003 12.0321 10.011 11.0615 9.60896C10.0909 9.20693 9.05057 9 8 9C6.94942 9 5.90914 9.20693 4.93853 9.60896C3.96793 10.011 3.08601 10.6003 2.34315 11.3431C1.60028 12.086 1.011 12.9679 0.608963 13.9385C0.462954 14.291 0.342678 14.6527 0.248703 15.0208C-0.0245724 16.091 0.89543 17 2 17L8 17H14Z"
                            fill="#0069FF"
                          ></path>
                        </svg>
                        <span className="font-medium">Личный кабинет</span>
                      </Link>
                      <div className="border-t"></div>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left flex items-center gap-2 px-4 py-3 hover:bg-gray-100 transition text-gray-700 cursor-pointer"
                      >
                        <svg
                          width="21"
                          height="22"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.96679 18.3326H2.49168C2.0332 18.3326 1.66113 17.9593 1.66113 17.4993V2.49992C1.66113 2.03994 2.03324 1.66664 2.49168 1.66664H9.96679C10.4261 1.66664 10.7973 1.29417 10.7973 0.833359C10.7973 0.372551 10.4261 0 9.96679 0H2.49168C1.11793 0 0 1.12165 0 2.49992V17.4993C0 18.8776 1.11793 19.9992 2.49168 19.9992H9.96679C10.4261 19.9992 10.7973 19.6267 10.7973 19.1659C10.7973 18.7051 10.4261 18.3326 9.96679 18.3326Z"
                            fill="#88B9FF"
                          ></path>
                          <path
                            d="M19.7525 9.40621L14.7026 4.40641C14.3771 4.08308 13.8505 4.08727 13.5282 4.41475C13.206 4.74223 13.2093 5.26971 13.5366 5.59303L17.1453 9.1662H7.47508C7.01578 9.1662 6.64453 9.53868 6.64453 9.99948C6.64453 10.4603 7.01578 10.8328 7.47508 10.8328H17.1453L13.5366 14.406C13.2093 14.7293 13.2068 15.2568 13.5282 15.5843C13.691 15.7492 13.9053 15.8326 14.1196 15.8326C14.3306 15.8326 14.5415 15.7526 14.7026 15.5926L19.7525 10.5928C19.9103 10.4361 20 10.2228 20 9.99945C20 9.77621 19.9111 9.56372 19.7525 9.40621Z"
                            fill="#0069FF"
                          ></path>
                        </svg>
                        <span className="font-medium">Выйти из аккаунта</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
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
            )}

            {/* Mobile burger */}
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
