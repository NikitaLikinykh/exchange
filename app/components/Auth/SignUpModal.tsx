"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function SignUpModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(true);
  const [privacyAgreed, setPrivacyAgreed] = useState(true);
  const [marketingAgreed, setMarketingAgreed] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      email,
      password,
      phone,
      termsAgreed,
      privacyAgreed,
      marketingAgreed,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0069FF] py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="p-12 bg-white rounded-xl shadow-[0_10px_30px_rgba(16,58,121,0.15)] w-[557px] max-sm:p-8 max-sm:w-full max-sm:shadow-none"
      >
        <div className="mb-16 text-3xl font-medium text-neutral-800 max-sm:mb-10 max-sm:text-2xl">
          Регистрация аккаунта
        </div>
        <div className="flex flex-col gap-9">
          <div className="relative">
            <div className="absolute -top-2.5 left-3 px-1.5 py-0.5 text-sm text-blue-600 bg-white">
              Email
            </div>
            <input
              type="email"
              placeholder="yourmail@mail.com"
              className="px-4 py-0 w-full text-xl rounded-lg border border-solid border-neutral-200 h-[60px] text-slate-400 max-sm:text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <div className="absolute -top-2.5 left-3 px-1.5 py-0.5 text-sm text-blue-600 bg-white">
              Пароль
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Ваш пароль"
                className="px-4 py-0 w-full text-xl rounded-lg border border-solid border-neutral-200 h-[60px] text-slate-400 max-sm:text-base"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      position: "absolute",
                      right: "15px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "24px",
                      height: "24px",
                      cursor: "pointer",
                    }}
                  >
                    <path
                      d="M12 5.25C4.5 5.25 1.5 12 1.5 12C1.5 12 4.5 18.75 12 18.75C19.5 18.75 22.5 12 22.5 12C22.5 12 19.5 5.25 12 5.25Z"
                      stroke="#A2B4CB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z"
                      stroke="#A2B4CB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      position: "absolute",
                      right: "15px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "24px",
                      height: "24px",
                      cursor: "pointer",
                    }}
                  >
                    <path
                      d="M21.1875 20C21.3201 20 21.4949 19.916 21.5778 19.8125L21.8903 19.4222C21.951 19.3465 22.0003 19.2064 22.0003 19.1093C22.0003 18.9766 21.9161 18.8016 21.8125 18.7188L3.125 4.10974C3.04937 4.04919 2.90936 4.00006 2.8125 4.00006C2.6799 4.00006 2.50506 4.08408 2.42218 4.18756L2.10968 4.57788C2.04898 4.65356 1.99969 4.79373 1.99969 4.89075C1.99969 5.02347 2.08383 5.19845 2.1875 5.28131L20.875 19.8903C20.9506 19.9509 21.0906 20 21.1875 20ZM19.2396 14.8032C19.7859 14.2188 20.5265 13.1672 20.8928 12.456C20.9528 12.3373 21.0015 12.1329 21.0015 11.9999C21.0015 11.8669 20.9528 11.6625 20.8928 11.5438C19.1965 8.23723 15.8415 6.00006 12 6.00006C10.8531 6.00006 9.75905 6.21881 8.7303 6.58785L10.1806 7.72191C10.7725 7.58755 11.3787 7.50006 12 7.50006C15.0828 7.50006 17.909 9.2188 19.4353 12C19.1242 12.5693 18.5082 13.4121 18.0603 13.8813L19.2396 14.8032ZM15.4868 11.8703C15.4175 9.99724 13.89 8.50005 12 8.50005C11.7976 8.50042 11.4726 8.53502 11.2747 8.57723L15.4868 11.8703ZM12 18C13.1469 18 14.2409 17.7797 15.2697 17.4122L13.8193 16.2785C13.2275 16.4125 12.6215 16.5 12 16.5C8.91716 16.5 6.09124 14.7813 4.56469 12C4.87621 11.4308 5.49291 10.5882 5.94124 10.1191L4.76186 9.19722C4.21566 9.78157 3.47522 10.833 3.10907 11.5441C3.04904 11.6628 3.00033 11.8672 3.00033 12.0002C3.00033 12.1332 3.04904 12.3376 3.10907 12.4563C4.80373 15.7629 8.15874 18 12 18ZM12 15.5C12.2024 15.4996 12.5273 15.4652 12.7253 15.4232L8.51311 12.13C8.58281 14.0028 10.1103 15.5 12 15.5Z"
                      fill="#A2B4CB"
                    ></path>
                  </svg>
                )}
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-2.5 left-3 px-1.5 py-0.5 text-sm text-blue-600 bg-white">
              Телефон
            </div>
            <div className="flex items-center border border-solid border-neutral-200 rounded-lg h-[60px]">
              <div className="flex gap-2 items-center px-3 py-2 ml-2 border-r border-solid border-r-neutral-200">
                <div />
                <div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.516 7.54801C4.952 7.10201 5.559 7.06701 6.092 7.54801L10 11.295L13.908 7.54801C14.441 7.06701 15.049 7.10201 15.482 7.54801C15.918 7.99301 15.89 8.74501 15.482 9.16301C15.076 9.58101 10.787 13.665 10.787 13.665C10.57 13.888 10.285 14 10 14C9.715 14 9.43 13.888 9.211 13.665C9.211 13.665 4.924 9.58101 4.516 9.16301C4.108 8.74501 4.08 7.99301 4.516 7.54801Z"
                      fill="#A2B4CB"
                    ></path>
                  </svg>
                </div>
              </div>
              <input
                type="tel"
                placeholder="+375 (__) ___-__-__"
                className="px-4 py-0 pl-2.5 w-full text-xl rounded-lg border-[none] h-[60px] text-slate-400 max-sm:text-base"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-9">
            <div className="flex gap-2.5 items-start">
              <div onClick={() => setTermsAgreed(!termsAgreed)}>
                {termsAgreed ? (
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      width: "24px",
                      height: "24px",
                      flexShrink: 0,
                      cursor: "pointer",
                    }}
                  >
                    <g clipPath="url(#clip0_terms)">
                      <path
                        d="M24.7826 0H5.21739C2.33591 0 0 2.33591 0 5.21739V24.7826C0 27.6641 2.33591 30 5.21739 30H24.7826C27.6641 30 30 27.6641 30 24.7826V5.21739C30 2.33591 27.6641 0 24.7826 0Z"
                        fill="#0069FF"
                      ></path>
                      <path
                        d="M9.13043 13.7682L14.6224 19.5652L22.1739 9.13043"
                        stroke="white"
                        strokeWidth="2.6087"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_terms">
                        <rect width="30" height="30" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      width: "24px",
                      height: "24px",
                      flexShrink: 0,
                      cursor: "pointer",
                    }}
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="4"
                      stroke="#A2B4CB"
                    />
                  </svg>
                )}
              </div>
              <div className="text-lg text-slate-400 max-sm:text-base">
                Согласие с условиями регистрации
              </div>
            </div>
            <div className="flex gap-2.5 items-start">
              <div onClick={() => setPrivacyAgreed(!privacyAgreed)}>
                {privacyAgreed ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      width: "24px",
                      height: "24px",
                      flexShrink: 0,
                      cursor: "pointer",
                    }}
                  >
                    <g clipPath="url(#clip0_privacy)">
                      <path
                        d="M19.5 0.5H4.5C2.29086 0.5 0.5 2.29086 0.5 4.5V19.5C0.5 21.7091 2.29086 23.5 4.5 23.5H19.5C21.7091 23.5 23.5 21.7091 23.5 19.5V4.5C23.5 2.29086 21.7091 0.5 19.5 0.5Z"
                        fill="#0069FF"
                      ></path>
                      <path
                        d="M7.5 11.0556L11.7105 15.5L17.5 7.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_privacy">
                        <rect
                          width="23"
                          height="23"
                          fill="white"
                          transform="translate(0.5 0.5)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      width: "24px",
                      height: "24px",
                      flexShrink: 0,
                      cursor: "pointer",
                    }}
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="4"
                      stroke="#A2B4CB"
                    />
                  </svg>
                )}
              </div>
              <div className="text-sm leading-4 text-slate-400">
                <span>
                  Регистрируясь в информационной системе Whitebird и создавая
                  электронный личный кабинет, Вы соглашаетесь с условиями
                </span>{" "}
                <span className="text-blue-600">Публичной оферты</span>{" "}
                <span>
                  (включая её неотъемлемые части: Общие условия реализации
                  токенов, Правила обращения с персональными данными клиентов,
                  Положение о поддержке пользователей)
                </span>
              </div>
            </div>
            <div className="flex gap-2.5 items-start">
              <div onClick={() => setMarketingAgreed(!marketingAgreed)}>
                {marketingAgreed ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      width: "24px",
                      height: "24px",
                      flexShrink: 0,
                      cursor: "pointer",
                    }}
                  >
                    <g clipPath="url(#clip0_marketing)">
                      <path
                        d="M19.5 0.5H4.5C2.29086 0.5 0.5 2.29086 0.5 4.5V19.5C0.5 21.7091 2.29086 23.5 4.5 23.5H19.5C21.7091 23.5 23.5 21.7091 23.5 19.5V4.5C23.5 2.29086 21.7091 0.5 19.5 0.5Z"
                        fill="#0069FF"
                      ></path>
                      <path
                        d="M7.5 11.0556L11.7105 15.5L17.5 7.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_marketing">
                        <rect
                          width="23"
                          height="23"
                          fill="white"
                          transform="translate(0.5 0.5)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      width: "24px",
                      height: "24px",
                      flexShrink: 0,
                      cursor: "pointer",
                    }}
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="4"
                      stroke="#A2B4CB"
                    />
                  </svg>
                )}
              </div>
              <div className="text-sm leading-4 text-slate-400">
                Согласен(на) на получение информационных и рекламных сообщений
                от Whitebird.
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-9 w-full text-lg text-white bg-blue-600 rounded-md cursor-pointer border-[none] h-[58px] max-sm:text-base max-sm:h-[50px]"
          >
            Создать аккаунт
          </button>
          <div
            className="mt-0
           text-base text-slate-400"
          >
            <span>Уже есть аккаунт? </span>
            <Link href="/signin" className="text-blue-600 cursor-pointer">
              Войти в личный кабинет
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
