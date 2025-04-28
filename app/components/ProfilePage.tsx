"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import InputText from "./Form/InputText";
import InputSelect from "./Form/InputSelect";
import Switch from "./Form/Switch";
import InputPassword from "./Form/InputPassword";

interface ProfilePageProps {
  user: {
    email: string;
    id: string;
  };
}
export default function ProfilePage({ user }: ProfilePageProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("settings");
  const [email, setEmail] = useState(user.email || "");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const queryTab = new URLSearchParams(window.location.search).get("tab");
    if (queryTab) setActiveTab(queryTab);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    router.push(`?tab=${tab}`);
  };

  return (
    <div className="">
      <div className="bg-[#0069FF] py-6">
        <div className="px-0 text-6xl font-semibold text-center text-white bg-[#0069FF] max-sm:px-0 max-sm:py-4 max-sm:text-4xl">
          Кабинет пользователя
        </div>
        <div className="flex justify-center p-0 mx-auto my-8 bg-[#2B82FF] rounded-lg  w-fit max-sm:flex-wrap max-sm:h-auto max-sm:w-[90%]">
          <div
            className={`px-6 pt-1 pb-1 text-lg font-semibold cursor-pointer max-sm:flex-auto max-sm:px-4 max-sm:py-2 ${
              activeTab === "settings"
                ? "bg-white text-blue-500 rounded-md"
                : "text-white"
            }`}
            onClick={() => handleTabChange("settings")}
          >
            Настройки
          </div>
          <div
            className={`px-6 pt-1 pb-1 text-lg font-semibold cursor-pointer max-sm:flex-auto max-sm:px-4 max-sm:py-2 ${
              activeTab === "notifications"
                ? "bg-white text-blue-500 rounded-md"
                : "text-white"
            }`}
            onClick={() => handleTabChange("notifications")}
          >
            Уведомления
          </div>
          <div
            className={`px-6 pt-1 pb-1 text-lg font-semibold cursor-pointer max-sm:flex-auto max-sm:px-4 max-sm:py-2 ${
              activeTab === "referral"
                ? "bg-white text-blue-500 rounded-md"
                : "text-white"
            }`}
            onClick={() => handleTabChange("referral")}
          >
            Реферальная программа
          </div>
        </div>
      </div>
      {activeTab === "settings" && (
        <div className="bg-white p-4 py-10">
          <div className="max-w-[400px] w-full mx-auto flex flex-col gap-8">
            <p className="text-2xl font-bold">Личные Данные</p>
            <InputText
              label="E-mail"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <InputSelect />
            <p className="text-2xl font-bold">Изменить пароль</p>
            <InputPassword
              label="Старый пароль"
              value={oldPassword}
              onChange={(ev) => {
                setOldPassword(ev.target.value);
              }}
            />
            <InputPassword
              label="Новый пароль"
              value={newPassword}
              onChange={(ev) => {
                setNewPassword(ev.target.value);
              }}
            />
          </div>
        </div>
      )}
      {activeTab === "notifications" && (
        <div className="bg-white p-4 ">
          <div className="max-w-[400px] w-full mx-auto flex flex-col gap-8">
            <p className="text-2xl font-bold text-center">Уведомление</p>
          </div>
        </div>
      )}
      {activeTab === "referral" && (
        <div className="bg-white p-4 ">
          <div className="max-w-[400px] w-full mx-auto flex flex-col gap-8">
            <p className="text-2xl font-bold text-center">
              Реферальная программа
            </p>
            {/* Add referral program content here */}
          </div>
        </div>
      )}
    </div>
  );
}
