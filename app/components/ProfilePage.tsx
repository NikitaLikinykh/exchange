"use client";
import React, { useState } from "react";
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
  const [email, setEmail] = useState(user.email || "");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  return (
    <div className="">
      <div className="bg-[#0069FF] py-6">
        <div className="px-0 text-6xl font-semibold text-center text-white bg-[#0069FF] max-sm:px-0 max-sm:py-4 max-sm:text-4xl">
          Кабинет пользователя
        </div>
        <div className="flex justify-center p-0 mx-auto my-8 bg-[#2B82FF] rounded-lg  w-fit max-sm:flex-wrap max-sm:h-auto max-sm:w-[90%]">
          <div className="px-6 pt-1 pb-1 text-lg font-semibold  cursor-pointer max-sm:flex-auto max-sm:px-4 max-sm:py-2 bg-white text-blue-500 rounded-md">
            Настройки
          </div>
          <div className="px-6 pt-1 pb-1 text-lg font-semibold text-white cursor-pointer max-sm:flex-auto max-sm:px-4 max-sm:py-2">
            Уведомления
          </div>
          <div className="px-6 pt-1 pb-1 text-lg font-semibold text-white cursor-pointer max-sm:flex-auto max-sm:px-4 max-sm:py-2">
            Реферальная программа
          </div>
        </div>
      </div>
      <div className="bg-white p-4 py-10">
        <div className="max-w-[400px] w-full mx-auto flex flex-col gap-8">
          <p className="text-2xl font-bold">Личные Данные</p>
          <InputText
            label="E-mail"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <InputSelect />
        </div>
      </div>
      <div className="bg-white p-4 ">
        <div className="max-w-[400px] w-full mx-auto flex flex-col gap-8">
          <p className="text-2xl font-bold">Уведомление</p>
          <div className="flex justify-between">
            <p className="text-lg font-light">Получать уведомления на Email</p>
            <Switch />
          </div>
        </div>
      </div>
      <div className="bg-white p-4 ">
        <div className="max-w-[400px] w-full mx-auto flex flex-col gap-8">
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
    </div>
  );
}
