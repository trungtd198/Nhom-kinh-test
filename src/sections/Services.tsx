const Services = () => {
  const services = [
    {
      icon: '🚪',
      title: 'Cửa Nhôm Kính Xingfa',
      description:
        'Cửa đi, cửa sổ, cửa ban công nhôm Xingfa chính hãng. Đa dạng màu sắc (trắng, đen, vân gỗ, champagne). Chống nước, cách âm vượt trội.',
      tags: ['Cửa đi 1 cánh', 'Cửa đi 2 cánh', 'Cửa sổ', 'Cửa ban công'],
      gradient: 'from-blue-900 to-blue-800',
      accent: 'border-blue-600',
    },
    {
      icon: '🏢',
      title: 'Vách Kính Cường Lực',
      description:
        'Vách kính văn phòng, showroom, phòng họp. Kính cường lực 8–12mm, khung nhôm hoặc frameless. Sang trọng, hiện đại, an toàn tuyệt đối.',
      tags: ['Vách văn phòng', 'Vách showroom', 'Frameless', 'Có khung nhôm'],
      gradient: 'from-slate-800 to-slate-700',
      accent: 'border-slate-500',
    },
    {
      icon: '↔️',
      title: 'Cửa Kính Lùa & Tự Động',
      description:
        'Cửa kính lùa, cửa kính tự động cảm ứng cho siêu thị, showroom, văn phòng. Hệ thống motor Dorma, Geze cao cấp.',
      tags: ['Cửa lùa kính', 'Cửa tự động', 'Motor Dorma', 'Cảm ứng IR'],
      gradient: 'from-cyan-900 to-cyan-800',
      accent: 'border-cyan-600',
    },
    {
      icon: '🏛️',
      title: 'Lan Can Kính Cường Lực',
      description:
        'Lan can kính cầu thang, ban công, sân thượng. Kính cường lực 10–12mm, tay vịn inox hoặc nhôm. Design tối giản, tăng cảm giác không gian.',
      tags: [
        'Lan can cầu thang',
        'Lan can ban công',
        'Tay vịn inox',
        'Frameless',
      ],
      gradient: 'from-purple-900 to-purple-800',
      accent: 'border-purple-600',
    },
    {
      icon: '🏪',
      title: 'Thi Công Showroom & Văn Phòng',
      description:
        'Thiết kế và thi công trọn gói mặt dựng kính, vách ngăn, cửa ra vào cho showroom, văn phòng. Tư vấn miễn phí, giao chìa khóa trao tay.',
      tags: [
        'Mặt dựng kính',
        'Vách ngăn văn phòng',
        'Trọn gói',
        'Tư vấn thiết kế',
      ],
      gradient: 'from-amber-900 to-amber-800',
      accent: 'border-amber-600',
    },
    {
      icon: '🏠',
      title: 'Thi Công Nhà Ở Trọn Gói',
      description:
        'Giải pháp nhôm kính toàn bộ cho nhà phố, biệt thự, căn hộ. Từ cửa chính, cửa sổ, ban công đến vách kính phòng tắm.',
      tags: ['Nhà phố', 'Biệt thự', 'Căn hộ', 'Vách phòng tắm kính'],
      gradient: 'from-emerald-900 to-emerald-800',
      accent: 'border-emerald-600',
    },
  ];

  return (
    <section id="services" className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
            Dịch Vụ Của Chúng Tôi
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Giải Pháp Nhôm Kính Toàn Diện
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Đa dạng dịch vụ phục vụ mọi nhu cầu – từ nhà ở đến thương mại, từ
            đơn giản đến cao cấp.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={`bg-gradient-to-br ${service.gradient} rounded-2xl border-l-4 p-6 ${service.accent} group shadow-lg transition-transform hover:-translate-y-1`}
            >
              <div className="mb-4 text-3xl">{service.icon}</div>
              <h3 className="mb-3 text-xl font-bold text-white">
                {service.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-silver-300">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            id="services-cta"
            className="inline-flex items-center space-x-2 rounded-xl bg-primary-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-primary-700"
          >
            <span>Tư Vấn Dịch Vụ Phù Hợp →</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export { Services };
