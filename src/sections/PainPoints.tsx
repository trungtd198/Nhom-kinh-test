const PainPoints = () => (
  <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      {/* Section header */}
      <div className="mb-14 text-center">
        <span className="mb-4 inline-block rounded-full bg-red-100 px-4 py-1.5 text-sm font-semibold text-red-600">
          Vấn Đề Thường Gặp
        </span>
        <h2 className="mb-4 text-3xl font-bold text-dark-900 sm:text-4xl">
          Bạn Đang Gặp Phải Những Điều Này?
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Nhiều chủ nhà và chủ đầu tư chia sẻ những khó khăn khi tìm đơn vị thi
          công nhôm kính uy tín.
        </p>
      </div>

      {/* Pain point cards */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {[
          {
            icon: '💸',
            title: 'Báo giá mơ hồ, dễ bị "thổi giá"',
            description:
              'Nhiều đơn vị không công khai bảng giá, khiến chủ nhà khó so sánh và dễ bị báo cao hơn thực tế 20–40%.',
            color: 'bg-red-50 border-red-200',
            iconBg: 'bg-red-100',
          },
          {
            icon: '⏰',
            title: 'Thi công chậm, trễ tiến độ',
            description:
              'Đặt cọc xong rồi đợi mãi. Thợ làm ẩu, làm chậm, ảnh hưởng đến toàn bộ tiến độ xây nhà, mở cửa hàng.',
            color: 'bg-orange-50 border-orange-200',
            iconBg: 'bg-orange-100',
          },
          {
            icon: '🔧',
            title: 'Chất lượng kém, hỏng sau 1–2 năm',
            description:
              'Nhôm kính giả, kính mỏng, không chống nước, không cách âm – không khác nào ném tiền qua cửa sổ.',
            color: 'bg-yellow-50 border-yellow-200',
            iconBg: 'bg-yellow-100',
          },
        ].map((item) => (
          <div
            key={item.title}
            className={`rounded-2xl border-2 ${item.color} p-8 transition-transform hover:-translate-y-1`}
          >
            <div
              className={`size-14 ${item.iconBg} mb-5 flex items-center justify-center rounded-xl text-2xl`}
            >
              {item.icon}
            </div>
            <h3 className="mb-3 text-xl font-bold text-dark-900">
              {item.title}
            </h3>
            <p className="leading-relaxed text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Transition hook */}
      <div className="mt-14 text-center">
        <p className="text-lg text-gray-500">
          👇 Đó là lý do{' '}
          <span className="font-semibold text-primary-600">
            Nhôm Kính Template
          </span>{' '}
          ra đời – để bạn không còn phải lo lắng.
        </p>
      </div>
    </div>
  </section>
);

export { PainPoints };
