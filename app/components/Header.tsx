"use client";
import React from "react";
import Link from "next/link";
import HeaderMobile from "./HeaderMobile";

interface HeaderProps {
  isAuth: string;
}
export default function Header({ isAuth }: HeaderProps) {
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

            {isAuth ? (
              <div className="hidden md:flex items-center space-x-4">
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
                    className="sc-bUbCnL bratNh"
                  >
                    <path
                      d="M13.5263 1L18 5.5M18 5.5L13.5263 10M18 5.5H1"
                      stroke="#0269ff"
                      stroke-width="1.4"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M5.47368 15L1 19.5M1 19.5L5.47368 24M1 19.5H18"
                      stroke="#0269ff"
                      stroke-width="1.4"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                  <span className="text-md font-medium">Обменять</span>
                </Link>
                <Link
                  href="/profile"
                  className="bg-white text-black text-md px-4 py-1.5 rounded-lg shadow-sm hover:bg-gray-100 transition flex items-center gap-2"
                >
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-bZkfAO eGPzid"
                  >
                    <circle cx="8" cy="4" r="4" fill="#c3ddff"></circle>
                    <path
                      d="M14 17C15.1046 17 16.0246 16.091 15.7513 15.0208C15.6573 14.6527 15.537 14.291 15.391 13.9385C14.989 12.9679 14.3997 12.086 13.6569 11.3431C12.914 10.6003 12.0321 10.011 11.0615 9.60896C10.0909 9.20693 9.05057 9 8 9C6.94942 9 5.90914 9.20693 4.93853 9.60896C3.96793 10.011 3.08601 10.6003 2.34315 11.3431C1.60028 12.086 1.011 12.9679 0.608963 13.9385C0.462954 14.291 0.342678 14.6527 0.248703 15.0208C-0.0245724 16.091 0.89543 17 2 17L8 17H14Z"
                      fill="#0069FF"
                    ></path>
                  </svg>
                  <span className="text-md font-medium">Мой аккаунт</span>
                </Link>
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
