import { cookies } from "next/headers";
import React from "react";
import ProfilePage from "../components/ProfilePage";

export default async function Page() {
  const cookieStore = cookies();
  const cookieHeader = await cookieStore.toString(); // Получаем все куки одной строкой

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  try {
    const res = await fetch(`${baseUrl}/api/me`, {
      method: "GET",
      headers: {
        Cookie: cookieHeader, // Важно: вся строка куки
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return <p>Ошибка авторизации: {res.statusText}</p>;
    }

    const user = await res.json();
    console.log("user>>>>", user);
    return <ProfilePage user={user} />;
  } catch (error) {
    console.error("Ошибка при запросе:", error);
    return <p>Ошибка сервера</p>;
  }
}
