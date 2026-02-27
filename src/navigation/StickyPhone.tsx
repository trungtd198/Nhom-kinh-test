'use client';

import React from 'react';

const StickyPhone = () => {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '0900000000';
  const displayPhone = process.env.NEXT_PUBLIC_DISPLAY_PHONE || '0900.000.000';

  return (
    <div className="fixed bottom-6 left-6 z-50 md:hidden">
      <a
        href={`tel:${phoneNumber}`}
        className="flex size-14 animate-bounce items-center justify-center rounded-full bg-green-500 shadow-lg ring-4 ring-green-100 transition-transform active:scale-90"
        aria-label="Call now"
      >
        <svg
          className="size-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          ></path>
        </svg>
      </a>
      <div className="absolute bottom-2 left-16 whitespace-nowrap rounded-full border border-green-100 bg-white px-3 py-1 font-bold text-green-600 shadow-md">
        {displayPhone}
      </div>
    </div>
  );
};

export { StickyPhone };
