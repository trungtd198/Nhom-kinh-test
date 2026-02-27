import Link from 'next/link';

import { products } from '../utils/Data';

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
            Dịch Vụ Của Chúng Toi
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
          {products.map((service) => (
            <Link
              key={service.id}
              href={`/san-pham/${service.slug}`}
              className={`bg-gradient-to-br ${service.gradient} rounded-2xl border-l-4 p-6 ${service.accent} group block shadow-lg transition-transform hover:-translate-y-1`}
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
              <div className="mt-4 text-xs font-semibold text-white/60 opacity-0 transition-opacity group-hover:opacity-100">
                Xem chi tiết →
              </div>
            </Link>
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
