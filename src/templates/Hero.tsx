const Hero = () => (
  <div className="relative flex min-h-screen flex-col overflow-hidden bg-hero-gradient">
    {/* Background decorative elements */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -right-40 -top-40 size-96 rounded-full bg-primary-700 opacity-10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 size-96 rounded-full bg-primary-600 opacity-10 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 size-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-800 opacity-5 blur-3xl" />
    </div>

    {/* Navigation */}
    <nav className="relative z-20 w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-cta-gradient shadow-lg">
            <svg
              className="size-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
          <div>
            <div className="text-lg font-bold leading-tight text-white">
              Nhôm Kính Gia Phát
            </div>
            <div className="text-xs text-primary-400">
              Xingfa Chính Hãng – TP.HCM
            </div>
          </div>
        </div>

        {/* Nav links – hidden on mobile */}
        <div className="hidden items-center space-x-8 md:flex">
          <a
            href="#services"
            className="text-sm font-medium text-silver-300 transition-colors hover:text-white"
          >
            Dịch Vụ
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-silver-300 transition-colors hover:text-white"
          >
            Công Trình
          </a>
          <a
            href="#process"
            className="text-sm font-medium text-silver-300 transition-colors hover:text-white"
          >
            Quy Trình
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium text-silver-300 transition-colors hover:text-white"
          >
            Đánh Giá
          </a>
        </div>

        {/* Hotline */}
        <a
          href="tel:0901234567"
          className="flex items-center space-x-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-red-500"
          id="nav-hotline"
        >
          <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span className="hidden sm:inline">0901.234.567</span>
          <span className="sm:hidden">Gọi Ngay</span>
        </a>
      </div>
    </nav>

    {/* Hero Content */}
    <div className="relative z-10 flex flex-1 items-center">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center space-x-2 rounded-full border border-primary-700 bg-primary-900/50 px-4 py-1.5">
            <span className="size-2 animate-pulse-slow rounded-full bg-green-400" />
            <span className="text-sm font-medium text-primary-300">
              ✓ Đại lý Xingfa chính hãng – Đang nhận đơn tại TP.HCM
            </span>
          </div>

          {/* H1 */}
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Thi Công{' '}
            <span className="bg-cta-gradient bg-clip-text text-transparent">
              Nhôm Kính Xingfa
            </span>
            <br />
            Chuyên Nghiệp Tại TP.HCM
          </h1>

          {/* Sub-headline */}
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-silver-300 sm:text-xl">
            Cửa nhôm kính, vách kính cường lực, lan can kính, cửa kính tự động.
            <br className="hidden sm:block" />
            Thi công nhanh – Giá tốt nhất – Bảo hành{' '}
            <strong className="text-white">5 năm</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="mb-14 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:0901234567"
              id="hero-cta-call"
              className="flex items-center justify-center space-x-2 rounded-xl bg-red-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-red-500 hover:shadow-red-500/30 active:bg-red-700"
            >
              <svg className="size-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Gọi Ngay: 0901.234.567</span>
            </a>
            <a
              href="#contact"
              id="hero-cta-quote"
              className="flex items-center justify-center space-x-2 rounded-xl border-2 border-primary-500 bg-transparent px-8 py-4 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              <span>📋 Nhận Báo Giá Miễn Phí</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: '🏆', label: '10+ Năm', sub: 'Kinh nghiệm' },
              { icon: '🏗️', label: '500+', sub: 'Công trình' },
              { icon: '🛡️', label: '5 Năm', sub: 'Bảo hành' },
              { icon: '⭐', label: '4.9/5', sub: 'Đánh giá' },
            ].map((badge) => (
              <div
                key={badge.label}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center backdrop-blur-sm"
              >
                <div className="mb-1 text-2xl">{badge.icon}</div>
                <div className="font-bold text-white">{badge.label}</div>
                <div className="text-xs text-silver-400">{badge.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="relative z-10 flex animate-bounce justify-center pb-8">
      <svg
        className="size-6 text-silver-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </div>
);

export { Hero };
