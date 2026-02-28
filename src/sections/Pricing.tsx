const Pricing = () => {
  const items = [
    {
      name: 'Cửa nhôm Xingfa',
      price: 'Từ 1.200.000đ/m²',
      note: 'Bao gồm nhân công lắp đặt',
    },
    {
      name: 'Vách kính cường lực',
      price: 'Từ 800.000đ/m²',
      note: 'Kính 8mm, có khung nhôm',
    },
    {
      name: 'Lan can kính',
      price: 'Từ 1.500.000đ/m dài',
      note: 'Tay vịn inox 304',
    },
    {
      name: 'Cửa kính tự động',
      price: 'Từ 15.000.000đ/bộ',
      note: 'Gồm motor + kính + cảm biến',
    },
    {
      name: 'Vách kính phòng tắm',
      price: 'Từ 3.500.000đ/bộ',
      note: 'Kính cường lực 8mm',
    },
    {
      name: 'Mặt dựng showroom',
      price: 'Báo giá theo thực tế',
      note: 'Tư vấn & khảo sát miễn phí',
    },
  ];

  return (
    <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700">
            Bảng Giá Tham Khảo
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Giá Cạnh Tranh – Công Khai – Không Phát Sinh
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Giá bên dưới chỉ mang tính tham khảo. Báo giá chính xác phụ thuộc
            vào kích thước, chủng loại và vị trí thực tế.
          </p>
        </div>

        {/* Price table */}
        <div className="mb-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="grid grid-cols-3 bg-dark-800 px-6 py-4 text-sm font-semibold text-white">
            <span>Loại dịch vụ</span>
            <span className="text-center">Giá tham khảo</span>
            <span className="text-right">Ghi chú</span>
          </div>
          {items.map((item, i) => (
            <div
              key={item.name}
              className={`grid grid-cols-3 border-t border-gray-100 px-6 py-4 text-sm ${
                i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              } transition-colors hover:bg-primary-50`}
            >
              <span className="font-medium text-gray-800">{item.name}</span>
              <span className="text-center font-bold text-primary-600">
                {item.price}
              </span>
              <span className="self-center text-right text-xs text-gray-500">
                {item.note}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-gradient-to-r from-primary-600 to-primary-800 p-8 text-center text-white shadow-xl">
          <h3 className="mb-3 text-2xl font-bold">
            Nhận Báo Giá Chính Xác Trong 2 Giờ
          </h3>
          <p className="mb-6 text-lg text-primary-200">
            Miễn phí khảo sát & tư vấn tận nhà. Không mất bất kỳ chi phí nào
            trước khi ký hợp đồng.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:0987654321"
              id="pricing-cta-call"
              className="inline-flex items-center justify-center space-x-2 rounded-xl bg-white px-8 py-4 text-lg font-bold text-primary-700 shadow transition-colors hover:bg-gray-100"
            >
              <svg className="size-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Gọi: 0987.654.321</span>
            </a>
            <a
              href="#contact"
              id="pricing-cta-form"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white bg-transparent px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white/10"
            >
              📋 Gửi Yêu Cầu Báo Giá
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing };
