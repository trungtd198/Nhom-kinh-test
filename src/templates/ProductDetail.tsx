import Link from 'next/link';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import type { Product } from '../utils/Data';
import { products } from '../utils/Data';
import { Footer } from './Footer';

type IProductDetailProps = {
  product: Product;
};

const ProductDetail = (props: IProductDetailProps) => {
  const { product } = props;
  const otherProducts = products.filter((p) => p.slug !== product.slug);

  return (
    <div className="font-sans text-gray-600 antialiased">
      <Meta
        title={`${product.title} – ${AppConfig.site_name}`}
        description={product.description}
      />

      {/* Navigation */}
      <nav className="relative z-20 w-full bg-dark-900 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
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
                {AppConfig.site_name}
              </div>
              <div className="text-xs text-primary-400">
                Chuyên Nghiệp – Uy Tín
              </div>
            </div>
          </Link>

          {/* Nav links – hidden on mobile */}
          <div className="hidden items-center space-x-8 md:flex">
            <Link
              href="/#services"
              className="text-sm font-medium text-silver-300 transition-colors hover:text-white"
            >
              Dịch Vụ
            </Link>
            <Link
              href="/#projects"
              className="text-sm font-medium text-silver-300 transition-colors hover:text-white"
            >
              Công Trình
            </Link>
            <Link
              href="/#process"
              className="text-sm font-medium text-silver-300 transition-colors hover:text-white"
            >
              Quy Trình
            </Link>
            <Link
              href="/#testimonials"
              className="text-sm font-medium text-silver-300 transition-colors hover:text-white"
            >
              Đánh Giá
            </Link>
          </div>

          <a
            href="tel:0901234567"
            className="flex items-center space-x-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-red-500"
          >
            <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="hidden sm:inline">0901.234.567</span>
            <span className="sm:hidden">Gọi Ngay</span>
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section
          className={`bg-gradient-to-br ${product.gradient} py-20 text-white`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 text-6xl">{product.icon}</div>
              <h1 className="mb-6 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                {product.title}
              </h1>
              <p className="max-w-3xl text-xl text-silver-300">
                {product.description}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Tổng Quan Dịch Vụ
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-gray-600">
                  {product.detailedDescription}
                </p>

                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  Ưu Điểm Nổi Bật
                </h3>
                <ul className="space-y-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                        <svg
                          className="size-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div
                  className={`aspect-[4/3] w-full rounded-2xl bg-gradient-to-br ${product.gradient} opacity-20`}
                />
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center italic text-gray-400">
                  [Hình ảnh minh họa thực tế công trình {product.title}]
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div
                    className={`aspect-square rounded-xl bg-gradient-to-br ${product.gradient} opacity-10`}
                  />
                  <div
                    className={`aspect-square rounded-xl bg-gradient-to-br ${product.gradient} opacity-10`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products Section */}
        <section className="border-t border-gray-100 bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
              Các Sản Phẩm & Dịch Vụ Khác
            </h2>
            <div className="no-scrollbar flex snap-x gap-6 overflow-x-auto pb-8">
              {otherProducts.map((item) => (
                <Link
                  key={item.id}
                  href={`/san-pham/${item.slug}`}
                  className={`bg-gradient-to-br ${item.gradient} min-w-[300px] snap-start rounded-2xl border-l-4 p-6 ${item.accent} group block shadow-lg transition-transform hover:-translate-y-1`}
                >
                  <div className="mb-4 text-3xl">{item.icon}</div>
                  <h3 className="mb-3 text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-silver-300">
                    {item.description}
                  </p>
                  <div className="text-xs font-semibold text-white/60">
                    Xem chi tiết →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Bạn Cần Tư Vấn & Báo Giá Cho {product.title}?
            </h2>
            <p className="mb-10 text-lg text-gray-600">
              Liên hệ ngay với đội ngũ kỹ thuật của Gia Phát để được khảo sát
              trực tiếp và nhận phương án thi công tối ưu nhất cho công trình
              của bạn.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="tel:0901234567"
                className="flex items-center justify-center space-x-2 rounded-xl bg-red-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-red-500"
              >
                <span>Call: 0901.234.567</span>
              </a>
              <Link
                href="/#contact"
                className="flex items-center justify-center space-x-2 rounded-xl border-2 border-primary-600 px-8 py-4 text-lg font-bold text-primary-600 transition-all hover:bg-primary-50"
              >
                <span>📋 Nhận Báo Giá</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export { ProductDetail };
