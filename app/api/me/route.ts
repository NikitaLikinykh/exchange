// app/api/me/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const cookieHeader = req.headers.get("cookie");

  if (!cookieHeader) {
    return new NextResponse(JSON.stringify({ message: "Нет куки" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const res = await fetch("http://localhost:3001/auth/me", {
      method: "GET",
      headers: {
        Cookie: cookieHeader, // 🔥 Прокидываем все куки от клиента
      },
      credentials: "include", // 🔥 важно
    });

    if (!res.ok) {
      return new NextResponse(
        JSON.stringify({ message: "Ошибка с backend", status: res.status }),
        { status: res.status }
      );
    }

    const data = await res.json();

    return new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Ошибка при запросе к бэкенду:", error);
    return new NextResponse(
      JSON.stringify({ message: "Ошибка при запросе к backend" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
