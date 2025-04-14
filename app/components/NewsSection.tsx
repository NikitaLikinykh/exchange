"use client";
import React from "react";

interface NewsItem {
  title: string;
  date: string;
  imageSrc: string;
}

export default function NewsSection() {
  const newsItems: NewsItem[] = [
    {
      title:
        "Медиаслияние года: WhiteBird стала совладельцем футбольного клуба DMedia (Минск)",
      date: "04 April 2025",
      imageSrc: "/news/news.png",
    },
    {
      title: "Уважаемые клиенты!",
      date: "24 March 2025",
      imageSrc: "/news/news2.png",
    },
    {
      title: "Карте Crypto исполнился год!",
      date: "14 March 2025",
      imageSrc: "/news/news3.png",
    },
    {
      title: "WhiteBird запустил манибэк в токенах",
      date: "03 March 2025",
      imageSrc: "/news/news4.png",
    },
    {
      title:
        "Эксперт WhiteBird Илья Сивопляс про инфляцию, рынок облигаций и яичную лихорадку",
      date: "13 February 2025",
      imageSrc: "/news/news5.png",
    },
    {
      title: "А что на рынке? Комментирует эксперт WhiteBird Илья Сивопляс",
      date: "03 February 2025",
      imageSrc: "/news/news6.png",
    },
  ];

  return (
    <section className="py-16 md:py-24 max-w-[1300px] w-[100%] px-4 lg:px-5  lg:w-[65%] mx-auto">
      <div className=" mx-auto ">
        <h2 className="text-4xl md:text-5xl font-medium text-[#1E1E28] mb-16 md:mb-24 text-center">
          Новости
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 ">
          {newsItems.map((item, index) => (
            <div key={index} className="flex flex-col cursor-pointer">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full aspect-[2/1] object-cover"
                />
              </div>
              <h3 className="text-2xl font-medium text-[#1E1E28] mt-5 leading-tight">
                {item.title}
              </h3>
              <p className="text-xl text-[#8F9DB1] mt-5">{item.date}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#" className="text-xl text-[#0069FF]">
            Другие публикации о нас
          </a>
        </div>
      </div>
    </section>
  );
}
