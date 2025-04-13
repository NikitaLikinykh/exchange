import React from "react";

export default function MediaItem({
  image,
  alt,
  title,
  date,
}: {
  image: string;
  alt: string;
  title: string;
  date: string;
}) {
  return (
    <div className="w-[518px] max-sm:w-full">
      <img
        src={image}
        className="object-cover w-full rounded-xl h-[259px]"
        alt={alt}
      />
      <div className="pt-5">
        <div className="mb-4 text-2xl font-medium text-neutral-800 max-sm:text-xl">
          {title}
        </div>
        <div className="text-xl text-slate-400 max-sm:text-base">{date}</div>
      </div>
    </div>
  );
}
