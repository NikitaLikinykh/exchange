"use client";
import React, { useState } from "react";
import FaqItem from "./FaqItem";

export interface FaqCategory {
  title: string;
  items: FaqQuestion[];
}

export interface FaqQuestion {
  id: string;
  question: string;
  answer: React.ReactNode;
}

interface FaqAccordionProps {
  categories: FaqCategory[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ categories }) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="box-border flex flex-col gap-12 py-6 m-0 px-[485px] max-md:px-5 max-md:py-6 max-sm:p-4">
      <div className="box-border p-0 m-0 mb-6 text-6xl font-semibold text-center text-white max-md:text-5xl max-sm:text-3xl">
        Вопросы - ответы
      </div>

      {categories.map((category, index) => (
        <div key={index} className="box-border flex flex-col gap-5 p-0 m-0">
          <div className="box-border p-0 m-0 mb-5 text-3xl text-white">
            {category.title}
          </div>

          {category.items.map((item) => (
            <FaqItem
              key={item.id}
              question={item.question}
              isExpanded={!!expandedItems[item.id]} // Pass isExpanded prop
              onToggle={() => toggleItem(item.id)}
            >
              {item.answer}
            </FaqItem>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
