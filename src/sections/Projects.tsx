import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      label: 'Cửa nhôm Xingfa',
      category: 'Nhà ở',
      location: 'Hà Nội',
      bg: 'from-slate-700 to-slate-900',
      accent: '#60a5fa',
      slug: 'cua-nhom-kinh-xingfa',
    },
    {
      label: 'Vách kính văn phòng',
      category: 'Văn phòng',
      location: 'Hà Nội',
      bg: 'from-blue-800 to-slate-900',
      accent: '#a78bfa',
      slug: 'vach-kinh-cuong-luc',
    },
    {
      label: 'Mặt dựng showroom',
      category: 'Showroom',
      location: 'Hà Nội',
      bg: 'from-cyan-800 to-slate-900',
      accent: '#34d399',
      slug: 'thi-cong-showroom-van-phong',
    },
    {
      label: 'Lan can kính cầu thang',
      category: 'Nhà ở',
      location: 'Hà Nội',
      bg: 'from-violet-800 to-slate-900',
      accent: '#f472b6',
      slug: 'lan-can-kinh-cuong-luc',
    },
    {
      label: 'Cửa kính tự động',
      category: 'Thương mại',
      location: 'Hà Nội',
      bg: 'from-emerald-800 to-slate-900',
      accent: '#fbbf24',
      slug: 'cua-kinh-lua-tu-dong',
    },
    {
      label: 'Vách kính phòng tắm',
      category: 'Nhà ở',
      location: 'Hà Nội',
      bg: 'from-indigo-800 to-slate-900',
      accent: '#fb7185',
      slug: 'thi-cong-nha-o-tron-goi',
    },
  ];

  return (
    <section id="projects" className="bg-dark-900 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full border border-dark-600 bg-dark-700 px-4 py-1.5 text-sm font-semibold text-primary-400">
            Công Trình Thực Tế
          </span>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Hơn 500 Công Trình Đã Hoàn Thành
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-silver-400">
            Từ nhà ở, văn phòng đến showroom – chúng tôi đã thực hiện đa dạng
            loại hình công trình trên toàn Hà Nội.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.label}
              href={`/san-pham/${project.slug}`}
              className={`relative bg-gradient-to-br ${project.bg} group aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl transition-transform duration-300 md:hover:scale-[1.02]`}
            >
              {/* Decorative glass pane illustration */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div
                  className="h-48 w-32 rounded-sm border-4"
                  style={{ borderColor: project.accent }}
                />
                <div
                  className="absolute h-48 w-16 rounded-sm border-2 opacity-50"
                  style={{ borderColor: project.accent, left: '40%' }}
                />
              </div>

              {/* Grid lines decoration */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(${project.accent}33 1px, transparent 1px), linear-gradient(90deg, ${project.accent}33 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }}
              />

              {/* Category badge */}
              <div className="absolute left-4 top-4">
                <span
                  className="rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: `${project.accent}22`,
                    color: project.accent,
                    border: `1px solid ${project.accent}44`,
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-sm font-semibold text-white">
                  Xem chi tiết →
                </span>
              </div>

              {/* Project info */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="font-bold text-white">{project.label}</h3>
                <p className="mt-1 text-xs text-silver-400">
                  📍 {project.location}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="tel:0987654321"
            id="projects-cta"
            className="inline-flex items-center space-x-2 rounded-xl border border-primary-500 px-6 py-3 font-semibold text-primary-400 transition-colors hover:bg-primary-500 hover:text-white"
          >
            <span>Tư vấn công trình của bạn →</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export { Projects };
