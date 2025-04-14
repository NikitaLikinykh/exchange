import React from "react";

interface DocumentCardProps {
  title: string;
  readLink: string;
  downloadLabel: string;
}

export default function DocumentCard({
  title,
  readLink,
  downloadLabel,
}: DocumentCardProps) {
  return (
    <div className="box-border flex flex-col p-6 m-0 bg-white rounded-lg h-[204px]">
      <div>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-4"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.8913 19.3043V20.8715C15.8913 21.7375 15.1914 22.4348 14.3281 22.4348H2.58493C1.71897 22.4348 1.02173 21.7315 1.02173 20.8638V2.87528C1.02173 2.00737 1.72549 1.30432 2.59362 1.30432H10.413V6.00146C10.413 6.87125 11.1159 7.56519 11.9828 7.56519H15.8913V9.13041H8.85318C7.55355 9.13041 6.49999 10.1809 6.49999 11.4773V16.9574C6.49999 18.2535 7.54554 19.3043 8.85318 19.3043H15.8913ZM11.1956 1.30432V5.99768C11.1956 6.43117 11.5485 6.78258 11.9711 6.78258H15.8913L11.1956 1.30432ZM8.84356 9.91302C7.98147 9.91302 7.2826 10.6175 7.2826 11.472V16.9628C7.2826 17.8237 7.98878 18.5217 8.84356 18.5217H22.1564C23.0186 18.5217 23.7174 17.8173 23.7174 16.9628V11.472C23.7174 10.611 23.0112 9.91302 22.1564 9.91302H8.84356ZM19.0217 13.8261V12.2608H22.1522V11.4782H18.2391V16.9565H19.0217V14.6087H21.3696V13.8261H19.0217ZM8.84782 13.0435V16.9565H9.63042V14.6087H11.1918C12.0584 14.6087 12.7609 13.9139 12.7609 13.0435C12.7609 12.179 12.0613 11.4782 11.1918 11.4782H8.84782V13.0435ZM9.63042 12.2608V13.8261H11.1965C11.6283 13.8261 11.9783 13.4787 11.9783 13.0435C11.9783 12.6112 11.6318 12.2608 11.1965 12.2608H9.63042ZM13.5435 11.4782V16.9565H15.8874C16.754 16.9565 17.4565 16.2627 17.4565 15.3867V13.048C17.4565 12.1811 16.757 11.4782 15.8874 11.4782H13.5435ZM14.3261 12.2608V16.1739H15.8921C16.3239 16.1739 16.6739 15.8266 16.6739 15.3914V13.0433C16.6739 12.6111 16.3275 12.2608 15.8921 12.2608H14.3261Z"
            fill="#0169FF"
          />
        </svg>
      </div>
      <div className="box-border p-0 m-0 mb-auto text-lg leading-8 text-neutral-800">
        {title}
      </div>
      <div className="box-border flex gap-3.5 p-0 m-0 mt-5">
        <a
          href={readLink}
          className="box-border p-0 m-0 text-lg text-sky-500 no-underline"
        >
          Читать
        </a>
        <button className="box-border px-2 py-0 m-0 h-10 text-lg text-white bg-sky-500 rounded-md cursor-pointer border-[none] min-w-[90px]">
          {downloadLabel}
        </button>
      </div>
    </div>
  );
}
