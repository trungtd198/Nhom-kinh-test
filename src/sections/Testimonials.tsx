const Testimonials = () => {
  const reviews = [
    {
      name: 'Anh Minh Tuấn',
      location: 'Hà Nội',
      project: 'Cửa nhôm Xingfa toàn bộ nhà phố 4 tầng',
      rating: 5,
      text: 'Mình đã liên hệ 3 nơi trước khi chọn Template. So sánh giá thì tương đương nhưng Template báo giá chi tiết nhất, rõ ràng từng hạng mục. Thi công xong trong 4 ngày, thợ làm sạch sẽ gọn gàng. Cửa dùng 1 năm nay không có vấn đề gì. Sẽ giới thiệu cho người thân.',
      avatar: 'MT',
      avatarBg: 'bg-blue-600',
    },
    {
      name: 'Chị Hương Lan',
      location: 'Hà Nội',
      project: 'Vách kính văn phòng + mặt dựng showroom mỹ phẩm',
      rating: 5,
      text: 'Showroom của mình cần hình ảnh sang trọng, họ tư vấn giải pháp mặt dựng kính rất chuyên nghiệp. Từ thiết kế đến thi công chỉ 10 ngày, kịp ngày khai trương. Khách hàng vào showroom ai cũng khen đẹp. Cực kỳ hài lòng!',
      avatar: 'HL',
      avatarBg: 'bg-pink-600',
    },
    {
      name: 'Anh Phước Thịnh',
      location: 'Hà Nội',
      project: 'Lan can kính cầu thang & ban công biệt thự',
      rating: 5,
      text: 'Biệt thự mình cần lan can kính frameless nhìn thoáng và sang. Template tư vấn kỹ, thậm chí vẽ mẫu 3D cho xem trước. Chất lượng kính tốt, khe hở đều, không có vết xước. Bảo hành 5 năm là điểm cộng rất lớn so với các nơi khác.',
      avatar: 'PT',
      avatarBg: 'bg-emerald-600',
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-dark-900 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full border border-dark-600 bg-dark-700 px-4 py-1.5 text-sm font-semibold text-yellow-400">
            ⭐ Đánh Giá Khách Hàng
          </span>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Khách Hàng Nói Gì Về Chúng Tôi?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-silver-400">
            Hơn 200 đánh giá thực tế. Trung bình{' '}
            <span className="font-bold text-yellow-400">4.9/5 ⭐</span>
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex flex-col rounded-2xl border border-dark-600 bg-dark-800 p-6 transition-colors hover:border-yellow-500/30"
            >
              {/* Stars */}
              <div className="mb-4 flex space-x-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>

              {/* Review text */}
              <p className="mb-6 flex-1 text-sm leading-relaxed text-silver-300">
                &quot;{review.text}&quot;
              </p>

              {/* Project tag */}
              <div className="mb-4 rounded-lg bg-dark-700 px-3 py-2 text-xs text-silver-500">
                🏗️ {review.project}
              </div>

              {/* Avatar + name */}
              <div className="flex items-center space-x-3">
                <div
                  className={`size-10 ${review.avatarBg} flex items-center justify-center rounded-full text-sm font-bold text-white`}
                >
                  {review.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {review.name}
                  </div>
                  <div className="text-xs text-silver-500">
                    📍 {review.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-12 grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
          {[
            { value: '500+', label: 'Công trình hoàn thành' },
            { value: '4.9/5', label: 'Đánh giá trung bình' },
            { value: '98%', label: 'Khách hàng hài lòng' },
            { value: '200+', label: 'Đánh giá thực tế' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-dark-600 bg-dark-800 px-4 py-5"
            >
              <div className="text-2xl font-extrabold text-primary-400">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-silver-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Testimonials };
