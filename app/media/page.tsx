import React from "react";
import MediaItem from "../components/Media/MediaItem";
// Mock news data
const newsData = [
  {
    id: 1,
    image: "/news/news.png",
    alt: "D media",
    title:
      "Медиаслияние года: WhiteBird стала совладельцем футбольного клуба DMedia (Минск)",
    date: "04 April 2025",
  },
  {
    id: 2,
    image: "/news/news2.png",
    alt: "Alarm",
    title: "Уважаемые клиенты!",
    date: "24 March 2025",
  },
  {
    id: 3,
    image: "/news/news3.png",
    alt: "1 Year",
    title: "Карте Crypto исполнился год!",
    date: "14 March 2025",
  },
  {
    id: 4,
    image: "/news/news4.png",
    alt: "D media",
    title:
      "Медиаслияние года: WhiteBird стала совладельцем футбольного клуба DMedia (Минск)",
    date: "04 April 2025",
  },
  {
    id: 5,
    image: "/news/news5.png",
    alt: "Alarm",
    title: "Уважаемые клиенты!",
    date: "24 March 2025",
  },
  {
    id: 6,
    image: "/news/news6.png",
    alt: "1 Year",
    title: "Карте Crypto исполнился год!",
    date: "14 March 2025",
  },
  // ...add more mock news items as needed
];

export default function MediaPage() {
  return (
    <main>
      <div className="bg-[#0069FF] pb-8">
        <div className="px-0 py-6 text-6xl font-semibold text-center text-white bg-[#0069FF] max-sm:px-0 max-sm:py-4 max-sm:text-4xl">
          Новости
        </div>
        <div className="flex justify-center p-0 mx-auto my-0 bg-[#2B82FF] rounded-lg  w-[458px] max-sm:flex-wrap max-sm:h-auto max-sm:w-[90%]">
          <div className="px-6 pt-1.5 pb-2 text-lg font-semibold  cursor-pointer max-sm:flex-auto max-sm:px-4 max-sm:py-2 bg-white text-blue-500 rounded-md">
            Все
          </div>
          <div className="px-6 pt-1.5 pb-2 text-lg font-semibold text-white cursor-pointer max-sm:flex-auto max-sm:px-4 max-sm:py-2">
            СМИ о нас
          </div>
          <div className="px-6 pt-1.5 pb-2 text-lg font-semibold text-white cursor-pointer max-sm:flex-auto max-sm:px-4 max-sm:py-2">
            События
          </div>
          <div className="px-6 pt-1.5 pb-2 text-lg font-semibold text-white cursor-pointer max-sm:flex-auto max-sm:px-4 max-sm:py-2">
            Акции
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 bg-white sm:gap-10 sm:p-10 lg:gap-20 lg:p-24">
        {newsData.map((news) => (
          <MediaItem
            key={news.id}
            image={news.image}
            alt={news.alt}
            title={news.title}
            date={news.date}
          />
        ))}
      </div>
    </main>
  );
}
