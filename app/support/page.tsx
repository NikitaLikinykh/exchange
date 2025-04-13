import React from "react";
import SupportForm from "../components/Support/SupportForm";
export default function page() {
  return (
    <div className="bg-[#0069FF] pb-8">
      <div className="px-0 pt-4 pb-8 text-6xl font-semibold text-center text-white bg-[#0069FF] max-sm:px-0 max-sm:py-4 max-sm:text-4xl">
        Поддержка
      </div>
      <SupportForm />
    </div>
  );
}
