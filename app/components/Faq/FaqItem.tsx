"use client";
import React from "react";

interface FaqItemProps {
  question: string;
  isExpanded: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
}

const FaqItem: React.FC<FaqItemProps> = ({
  question,
  isExpanded,
  onToggle,
  children,
}) => {
  return (
    <div className="box-border m-0 bg-white rounded-xl border-b border-solid border-b-slate-100">
      <div
        className="box-border flex justify-between items-center p-6 cursor-pointer max-sm:p-4"
        onClick={onToggle}
      >
        <div className="box-border p-0 m-0 text-lg text-neutral-800 max-sm:text-base">
          {question}
        </div>
        <div>
          {isExpanded ? (
            <svg
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="arrow-icon"
            >
              <path d="M1.5 9L9 1.5L16.5 9" stroke="#ACB3BC"></path>
            </svg>
          ) : (
            <svg
              width="18"
              height="11"
              viewBox="0 0 18 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="arrow-icon"
            >
              <path d="M1.5 9.5L9 2L16.5 9.5" stroke="#ACB3BC"></path>
            </svg>
          )}
        </div>
      </div>
      {isExpanded && (
        <div className="box-border p-6 pt-0 pb-6 text-base text-neutral-600 max-sm:p-4 max-sm:pt-0">
          {children}
        </div>
      )}
    </div>
  );
};

export default FaqItem;
