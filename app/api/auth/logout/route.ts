// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST() {
  try {
    const backendRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/logout`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Важно: обязательно include, чтобы проксировать cookies
      }
    );

    const text = await backendRes.text();

    const response = new NextResponse(text, {
      status: backendRes.status,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Проксируем Set-Cookie из backend
    const setCookie = backendRes.headers.get("set-cookie");
    if (setCookie) {
      response.headers.set("set-cookie", setCookie);
    }

    return response;
  } catch (error) {
    console.error("Ошибка при выполнении запроса на backend:", error);
    return new NextResponse(JSON.stringify({ message: "Ошибка logout" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
