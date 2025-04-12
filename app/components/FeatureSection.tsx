"use client";
import React from "react";

interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
}

export default function FeatureSection({
  title,
  description,
  imageSrc,
  imageAlt,
  reversed = false,
}: FeatureSectionProps) {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-5 sm:px-20">
        <div
          className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} gap-5 md:gap-10 items-center`}
        >
          <div className="w-full md:w-1/2">
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-3xl md:text-4xl font-medium text-[#1E1E28] leading-tight">
                {title}
              </h2>
              <p className="text-xl md:text-2xl text-[#8F9DB1] mt-3 md:mt-5 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
