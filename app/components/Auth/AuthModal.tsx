"use client";
import React, { useState } from "react";
import Link from "next/link";
import axiosInstance from "@/app/lib/axios";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/AuthContext";

export default function AuthModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState(false); // Add state for email error
  const router = useRouter();
  const { isAuth, setIsAuth } = useAuth();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setEmailError(false); // Reset email error

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const data = await res.json();
        setEmailError(true); // Highlight email input
        setError(data.message || "Ошибка входа"); // Set error message
        return;
      }
      setIsAuth(true);
      window.location.href = "/profile";
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-start px-0 min-h-screen bg-[#0069FF] py-30 md:py-10">
      <div className="p-12 bg-white rounded-xl shadow-lg max-w-[557px] w-full max-md:px-8 max-md:py-10 max-md:max-w-[557px] max-md:w-[90%] max-sm:px-5 max-sm:py-8">
        <div className="mb-18 text-3xl font-medium leading-9 text-neutral-800 max-sm:mb-4 max-sm:text-2xl">
          Вход в личный кабинет
        </div>
        <form className="w-[457px] max-md:w-full" onSubmit={handleSubmit}>
          <div className="relative mb-9">
            <div className="relative w-full">
              <input
                type="email"
                placeholder="yourmail@mail.com"
                className={`p-3 w-full text-xl rounded-lg border border-solid h-[60px] text-slate-400 max-sm:text-base ${
                  emailError ? "border-red-500" : "border-neutral-200"
                }`} // Highlight email input if error
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="absolute -top-2.5 left-3 px-1.5 py-0.5 text-xs leading-5 text-blue-600 bg-white">
                Email
              </div>
              {emailError &&
                error && ( // Display error message
                  <div className="text-red-500 text-sm mt-1">{error}</div>
                )}
            </div>
          </div>
          <div className="relative mb-2">
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Ваш пароль"
                className="p-3 w-full text-xl rounded-lg border border-solid border-neutral-200 h-[60px] text-slate-400 max-sm:text-base"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="absolute -top-2.5 left-3 px-1.5 py-0.5 text-xs leading-5 text-blue-600 bg-white">
                Пароль
              </div>
              <div>
                {showPassword ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="eye-icon"
                    style={{
                      position: "absolute",
                      right: "16px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "24px",
                      height: "24px",
                      cursor: "pointer",
                    }}
                    onClick={togglePasswordVisibility}
                  >
                    <path
                      d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
                      fill="#A2B4CB"
                    />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="eye-icon"
                    style={{
                      position: "absolute",
                      right: "16px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "24px",
                      height: "24px",
                      cursor: "pointer",
                    }}
                    onClick={togglePasswordVisibility}
                  >
                    <path
                      d="M21.1875 20C21.3201 20 21.4949 19.916 21.5778 19.8125L21.8903 19.4222C21.951 19.3465 22.0003 19.2064 22.0003 19.1093C22.0003 18.9766 21.9161 18.8016 21.8125 18.7188L3.125 4.10974C3.04937 4.04919 2.90936 4.00006 2.8125 4.00006C2.6799 4.00006 2.50506 4.08408 2.42218 4.18756L2.10968 4.57788C2.04898 4.65356 1.99969 4.79373 1.99969 4.89075C1.99969 5.02347 2.08383 5.19845 2.1875 5.28131L20.875 19.8903C20.9506 19.9509 21.0906 20 21.1875 20ZM19.2396 14.8032C19.7859 14.2188 20.5265 13.1672 20.8928 12.456C20.9528 12.3373 21.0015 12.1329 21.0015 11.9999C21.0015 11.8669 20.9528 11.6625 20.8928 11.5438C19.1965 8.23723 15.8415 6.00006 12 6.00006C10.8531 6.00006 9.75905 6.21881 8.7303 6.58785L10.1806 7.72191C10.7725 7.58755 11.3787 7.50006 12 7.50006C15.0828 7.50006 17.909 9.2188 19.4353 12C19.1242 12.5693 18.5082 13.4121 18.0603 13.8813L19.2396 14.8032ZM15.4868 11.8703C15.4175 9.99724 13.89 8.50005 12 8.50005C11.7976 8.50042 11.4726 8.53502 11.2747 8.57723L15.4868 11.8703ZM12 18C13.1469 18 14.2409 17.7797 15.2697 17.4122L13.8193 16.2785C13.2275 16.4125 12.6215 16.5 12 16.5C8.91716 16.5 6.09124 14.7813 4.56469 12C4.87621 11.4308 5.49291 10.5882 5.94124 10.1191L4.76186 9.19722C4.21566 9.78157 3.47522 10.833 3.10907 11.5441C3.04904 11.6628 3.00033 11.8672 3.00033 12.0002C3.00033 12.1332 3.04904 12.3376 3.10907 12.4563C4.80373 15.7629 8.15874 18 12 18ZM12 15.5C12.2024 15.4996 12.5273 15.4652 12.7253 15.4232L8.51311 12.13C8.58281 14.0028 10.1103 15.5 12 15.5Z"
                      fill="#A2B4CB"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
          <div className="mt-0 mb-12 text-base leading-5 text-right cursor-pointer text-slate-400 max-sm:text-sm">
            Забыли пароль?
          </div>
          <button
            type="submit"
            className="w-full text-lg leading-6 text-white bg-blue-600 rounded-md cursor-pointer border-[none] h-[58px] max-sm:text-base"
          >
            Войти
          </button>
        </form>
        <div className="mt-6 text-base leading-5 text-slate-400 max-sm:text-sm">
          <span>Еще нет аккаунта? </span>
          <Link href="/signup" className="text-blue-600 cursor-pointer">
            Зарегистрируйтесь
          </Link>
        </div>
      </div>
    </div>
  );
}
