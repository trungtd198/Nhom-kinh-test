const WhyUs = () => {
  const reasons = [
    {
      stat: '10+',
      statLabel: 'Năm kinh nghiệm',
      title: 'Đội ngũ giàu kinh nghiệm',
      description:
        'Thợ thi công được đào tạo bài bản, trực tiếp giám sát bởi kỹ thuật trưởng 10+ năm trong ngành nhôm kính.',
      icon: '👷',
    },
    {
      stat: '500+',
      statLabel: 'Công trình',
      title: 'Hàng trăm công trình thực tế',
      description:
        'Đã hoàn thành hơn 500 công trình lớn nhỏ, đa dạng loại hình từ nhà ở đến thương mại trên toàn TP.HCM.',
      icon: '🏗️',
    },
    {
      stat: '100%',
      statLabel: 'Xingfa chính hãng',
      title: 'Vật liệu chính hãng đảm bảo',
      description:
        'Chỉ sử dụng nhôm Xingfa có tem chống hàng giả, kính cường lực đạt tiêu chuẩn TCVN, có chứng chỉ xuất xứ.',
      icon: '✅',
    },
    {
      stat: '5 năm',
      statLabel: 'Bảo hành',
      title: 'Bảo hành dài hạn & hậu mãi tốt',
      description:
        'Bảo hành toàn bộ công trình 5 năm. Đội ngũ bảo trì sẵn sàng hỗ trợ trong vòng 24 giờ kể từ khi nhận phản hồi.',
      icon: '🛡️',
    },
    {
      stat: '2h',
      statLabel: 'Báo giá',
      title: 'Báo giá nhanh, minh bạch',
      description:
        'Nhận hình đo → báo giá chi tiết trong 2 giờ. Không phát sinh chi phí ẩn. Ký hợp đồng trước khi thi công.',
      icon: '💰',
    },
    {
      stat: '4.9/5',
      statLabel: 'Đánh giá',
      title: 'Khách hàng hài lòng vượt kỳ vọng',
      description:
        'Đánh giá trung bình 4.9/5 sao từ hơn 200 khách hàng thực tế. Phần lớn khách hàng đến từ giới thiệu của người thân.',
      icon: '⭐',
    },
  ];

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
            Tại Sao Chọn Chúng Tôi
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            6 Lý Do Khách Hàng Tin Tưởng Gia Phát
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Không phải lời nói suông – đây là những cam kết có thể kiểm chứng
            được từ thực tế hoạt động của chúng tôi.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group flex space-x-4 rounded-2xl border border-gray-200 p-6 transition-all hover:border-primary-300 hover:shadow-md"
            >
              <div className="shrink-0">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary-50 text-xl transition-colors group-hover:bg-primary-100">
                  {reason.icon}
                </div>
              </div>
              <div>
                <div className="mb-1 flex items-baseline space-x-1">
                  <span className="text-xl font-extrabold text-primary-600">
                    {reason.stat}
                  </span>
                  <span className="text-xs text-gray-500">
                    {reason.statLabel}
                  </span>
                </div>
                <h3 className="mb-2 font-bold text-gray-900">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { WhyUs };
