const Solutions = () => (
  <section className="bg-dark-800 px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      {/* Section header */}
      <div className="mb-14 text-center">
        <span className="mb-4 inline-block rounded-full bg-primary-900 px-4 py-1.5 text-sm font-semibold text-primary-400">
          Giải Pháp Của Chúng Tôi
        </span>
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          Cam Kết Rõ Ràng – Làm Được Thì Mới Nói
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-silver-400">
          Mỗi vấn đề bạn lo lắng, chúng tôi đều có giải pháp cụ thể và có thể
          ghi vào hợp đồng.
        </p>
      </div>

      {/* Solution items */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {[
          {
            problem: '💸 Giá mập mờ',
            solution: 'Báo giá chi tiết trong 2 giờ',
            description:
              'Gửi yêu cầu → nhận báo giá chi tiết từng hạng mục, không phát sinh ẩn. Ký hợp đồng rõ ràng trước khi thi công.',
            stat: '2h',
            statLabel: 'Thời gian báo giá',
          },
          {
            problem: '⏰ Thi công chậm',
            solution: 'Cam kết đúng tiến độ hoặc bồi thường',
            description:
              'Đội thợ chuyên nghiệp, trang thiết bị hiện đại. Nếu trễ tiến độ trong hợp đồng, chúng tôi bồi thường 0.1%/ngày.',
            stat: '100%',
            statLabel: 'Đúng hẹn',
          },
          {
            problem: '🔧 Chất lượng kém',
            solution: 'Nhôm Xingfa chính hãng + bảo hành 5 năm',
            description:
              'Chỉ sử dụng nhôm Xingfa có tem chống hàng giả, kính cường lực đạt chuẩn. Bảo hành toàn bộ công trình 5 năm.',
            stat: '5 năm',
            statLabel: 'Bảo hành',
          },
        ].map((item) => (
          <div
            key={item.solution}
            className="group relative overflow-hidden rounded-2xl border border-dark-600 bg-dark-700 p-8 transition-colors hover:border-primary-600"
          >
            {/* Stat badge */}
            <div className="absolute right-6 top-6 text-right">
              <div className="text-2xl font-extrabold text-primary-400">
                {item.stat}
              </div>
              <div className="text-xs text-silver-500">{item.statLabel}</div>
            </div>

            <div className="mb-2 text-sm text-silver-500">{item.problem}</div>
            <h3 className="mb-4 pr-16 text-xl font-bold text-white">
              {item.solution}
            </h3>
            <p className="text-sm leading-relaxed text-silver-400">
              {item.description}
            </p>

            {/* Bottom gradient line */}
            <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-cta-gradient transition-transform group-hover:scale-x-100" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { Solutions };
