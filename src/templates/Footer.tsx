const Footer = () => (
  <footer className="border-t border-dark-700 bg-dark-900 px-4 py-12 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="mb-4 flex items-center space-x-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-cta-gradient shadow">
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
              <div className="text-lg font-bold text-white">
                Nhôm Kính Gia Phát
              </div>
              <div className="text-xs text-silver-500">
                Xingfa Chính Hãng – TP.HCM
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-silver-500">
            Chuyên thi công cửa nhôm kính Xingfa, vách kính cường lực, lan can
            kính, cửa kính tự động tại TP.HCM. 10+ năm kinh nghiệm, 500+ công
            trình hoàn thành.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-4 font-semibold text-white">Dịch Vụ</h4>
          <ul className="space-y-2 text-sm text-silver-500">
            {[
              'Cửa Nhôm Kính Xingfa',
              'Vách Kính Cường Lực',
              'Cửa Kính Lùa & Tự Động',
              'Lan Can Kính',
              'Thi Công Showroom',
              'Thi Công Nhà Ở',
            ].map((item) => (
              <li key={item}>
                <a
                  href="#services"
                  className="transition-colors hover:text-primary-400"
                >
                  → {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-semibold text-white">Liên Hệ</h4>
          <ul className="space-y-3 text-sm text-silver-500">
            <li className="flex items-start space-x-2">
              <span>📞</span>
              <span>
                Hotline:{' '}
                <a
                  href="tel:0901234567"
                  className="font-bold text-white hover:text-primary-400"
                >
                  0901.234.567
                </a>
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span>🕐</span>
              <span>07:00 – 18:00 (Thứ 2 – Chủ nhật)</span>
            </li>
            <li className="flex items-start space-x-2">
              <span>📍</span>
              <span>TP. Hồ Chí Minh & các tỉnh lân cận</span>
            </li>
            <li className="flex items-start space-x-2">
              <span>💬</span>
              <a
                href="https://facebook.com/nhomkinhgiaphat"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary-400"
              >
                facebook.com/nhomkinhgiaphat
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-silver-600 flex flex-col items-center justify-between gap-3 border-t border-dark-700 pt-6 text-xs sm:flex-row">
        <span>
          © {new Date().getFullYear()} Nhôm Kính Gia Phát. Bảo lưu mọi quyền.
        </span>
        <span>
          Từ khóa: cửa nhôm kính TP.HCM · nhôm kính Xingfa · vách kính cường lực
          · thi công kính TP.HCM
        </span>
      </div>
    </div>
  </footer>
);

export { Footer };
