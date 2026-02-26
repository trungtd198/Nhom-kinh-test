'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', note: '', hp: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot: if hp field is filled, silently reject
    if (form.hp) return;
    // In production: send to API / CRM here
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left info */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
              Liên Hệ Ngay
            </span>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Nhận Tư Vấn & Báo Giá Miễn Phí
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Điền thông tin bên cạnh hoặc gọi trực tiếp. Chuyên viên sẽ liên hệ
              trong vòng <strong className="text-primary-600">30 phút</strong>.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-xl">
                  📞
                </div>
                <div>
                  <div className="text-sm text-gray-500">Hotline</div>
                  <a
                    href="tel:0901234567"
                    className="text-xl font-bold text-gray-900 transition-colors hover:text-primary-600"
                  >
                    0901.234.567
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-xl">
                  💬
                </div>
                <div>
                  <div className="text-sm text-gray-500">Facebook</div>
                  <a
                    href="https://facebook.com/nhomkinhgiaphat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-gray-900 transition-colors hover:text-primary-600"
                  >
                    fb.com/nhomkinhgiaphat
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-xl">
                  📍
                </div>
                <div>
                  <div className="text-sm text-gray-500">Khu vực phục vụ</div>
                  <div className="font-bold text-gray-900">
                    Toàn bộ TP. Hồ Chí Minh & các tỉnh lân cận
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-xl">
                  🕐
                </div>
                <div>
                  <div className="text-sm text-gray-500">Giờ làm việc</div>
                  <div className="font-bold text-gray-900">
                    07:00 – 18:00 (Thứ 2 – Chủ nhật)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
            {submitted ? (
              <div className="py-10 text-center">
                <div className="mb-4 text-5xl">✅</div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  Gửi Thành Công!
                </h3>
                <p className="text-gray-600">
                  Chúng tôi sẽ liên hệ lại trong vòng 30 phút.
                  <br />
                  Cảm ơn bạn đã tin tưởng Nhôm Kính Gia Phát!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="mb-6 text-xl font-bold text-gray-900">
                  📋 Gửi Yêu Cầu Báo Giá
                </h3>

                {/* Honeypot */}
                <input
                  type="text"
                  name="hp"
                  value={form.hp}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  aria-hidden="true"
                />

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Nguyễn Văn A"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-shadow placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="0901.234.567"
                    pattern="[0-9\.\-\+\s]{9,15}"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-shadow placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="note"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Yêu cầu của bạn
                  </label>
                  <textarea
                    id="note"
                    name="note"
                    rows={3}
                    value={form.note}
                    onChange={handleChange}
                    placeholder="VD: Cần thi công cửa nhôm kính cho nhà 4 tầng tại Bình Thạnh"
                    className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-shadow placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  className="w-full rounded-xl bg-primary-600 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-primary-700 hover:shadow-primary-500/30 active:bg-primary-800"
                >
                  Gửi Yêu Cầu Miễn Phí →
                </button>

                <p className="text-center text-xs text-gray-500">
                  🔒 Thông tin của bạn được bảo mật tuyệt đối
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContactForm };
