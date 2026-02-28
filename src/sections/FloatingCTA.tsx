const FloatingCTA = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
    {/* Zalo/Chat bubble */}
    <a
      href="https://zalo.me/0987654321"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat Zalo"
      className="flex size-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-blue-600 active:scale-95"
    >
      <span className="text-xs font-bold">Z</span>
    </a>

    {/* Call button */}
    <a
      href="tel:0987654321"
      id="floating-cta-call"
      aria-label="Gọi ngay 0987654321"
      className="flex animate-pulse-slow items-center space-x-2 rounded-full bg-red-600 py-3 pl-4 pr-5 text-white shadow-xl transition-all hover:scale-105 hover:bg-red-500 hover:shadow-red-500/50 active:scale-95"
    >
      <svg className="size-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
      <span className="text-sm font-bold">Gọi Ngay</span>
    </a>
  </div>
);

export { FloatingCTA };
