export type Product = {
  id: string;
  title: string;
  slug: string;
  icon: string;
  description: string;
  detailedDescription: string;
  tags: string[];
  gradient: string;
  accent: string;
  features: string[];
  images: string[];
};

export const products: Product[] = [
  {
    id: 'xingfa-doors',
    title: 'Cửa Nhôm Kính Xingfa',
    slug: 'cua-nhom-kinh-xingfa',
    icon: '🚪',
    description:
      'Cửa đi, cửa sổ, cửa ban công nhôm Xingfa chính hãng. Đa dạng màu sắc (trắng, đen, vân gỗ, champagne). Chống nước, cách âm vượt trội.',
    detailedDescription:
      'Nhôm Xingfa là một trong những hệ nhôm cao cấp nhất hiện nay, được tin dùng trên toàn thế giới và đặc biệt ưa chuộng tại Việt Nam. Sản phẩm của chúng tôi sử dụng thanh nhôm Xingfa nhập khẩu chính hãng kết hợp với phụ kiện Kinlong cao cấp, mang lại vẻ đẹp hiện đại và độ bền vượt thời gian cho công trình của bạn.',
    tags: ['Cửa đi 1 cánh', 'Cửa đi 2 cánh', 'Cửa sổ', 'Cửa ban công'],
    gradient: 'from-blue-900 to-blue-800',
    accent: 'border-blue-600',
    features: [
      'Thanh nhôm Xingfa hệ 55, 65, 93 nhập khẩu chính hãng.',
      'Kính cường lực độ dày từ 8mm đến 12mm hoặc kính hộp cách âm.',
      'Phụ kiện Kinlong, Draho, Roto đồng bộ cao cấp.',
      'Hệ gioăng EPDM kép đảm bảo độ kín khít tuyệt đối.',
      'Công nghệ ép góc tiên tiến, đảm bảo cửa vuông vức, chắc chắn.',
    ],
    images: ['/assets/images/xingfa-1.jpg', '/assets/images/xingfa-2.jpg'],
  },
  {
    id: 'tempered-glass-walls',
    title: 'Vách Kính Cường Lực',
    slug: 'vach-kinh-cuong-luc',
    icon: '🏢',
    description:
      'Vách kính văn phòng, showroom, phòng họp. Kính cường lực 8–12mm, khung nhôm hoặc frameless. Sang trọng, hiện đại, an toàn tuyệt đối.',
    detailedDescription:
      'Vách kính cường lực mang đến giải pháp phân chia không gian tối ưu cho văn phòng, showroom và các công trình thương mại. Với khả năng truyền sáng tốt, vách kính giúp không gian trở nên rộng rãi, hiện đại và sang trọng hơn.',
    tags: ['Vách văn phòng', 'Vách showroom', 'Frameless', 'Có khung nhôm'],
    gradient: 'from-slate-800 to-slate-700',
    accent: 'border-slate-500',
    features: [
      'Kính cường lực phôi Việt Nhật, Chu Lai tiêu chuẩn quốc tế.',
      'Đa dạng độ dày: 10mm, 12mm, 15mm.',
      'Nẹp nhôm hoặc kẹp kính inox 304 không gỉ.',
      'Thi công nhanh chóng, sạch sẽ, không ảnh hưởng đến hoạt động văn phòng.',
      'Khả năng cách âm tốt, tạo không gian làm việc tập trung.',
    ],
    images: [
      '/assets/images/vach-kinh-1.jpg',
      '/assets/images/vach-kinh-2.jpg',
    ],
  },
  {
    id: 'sliding-auto-doors',
    title: 'Cửa Kính Lùa & Tự Động',
    slug: 'cua-kinh-lua-tu-dong',
    icon: '↔️',
    description:
      'Cửa kính lùa, cửa kính tự động cảm ứng cho siêu thị, showroom, văn phòng. Hệ thống motor Dorma, Geze cao cấp.',
    detailedDescription:
      'Cửa kính lùa và cửa tự động là giải pháp hoàn hảo cho các khu vực có lưu lượng người qua lại cao hoặc không gian hạn chế. Hệ thống vận hành êm ái, bền bỉ và cực kỳ tiện lợi.',
    tags: ['Cửa lùa kính', 'Cửa tự động', 'Motor Dorma', 'Cảm ứng IR'],
    gradient: 'from-cyan-900 to-cyan-800',
    accent: 'border-cyan-600',
    features: [
      'Motor tự động nhập khẩu từ Đức, Ý, Hàn Quốc, Nhật Bản.',
      'Cảm biến radar hoặc cảm biến hồng ngoại nhạy bén.',
      'Chế độ vận hành đa dạng: tự động, mở một nửa, khóa, luôn mở.',
      'Kính cường lực an toàn, chịu lực va đập mạnh.',
      'Bảo trì định kỳ giúp hệ thống luôn hoạt động ổn định.',
    ],
    images: ['/assets/images/cua-tu-dong-1.jpg'],
  },
  {
    id: 'glass-railings',
    title: 'Lan Can Kính Cường Lực',
    slug: 'lan-can-kinh-cuong-luc',
    icon: '🏛️',
    description:
      'Lan can kính cầu thang, ban công, sân thượng. Kính cường lực 10–12mm, tay vịn inox hoặc nhôm. Design tối giản, tăng cảm giác không gian.',
    detailedDescription:
      'Lan can kính không chỉ đảm bảo an toàn cho người sử dụng mà còn là điểm nhấn kiến trúc sang trọng cho ngôi nhà. Với thiết kế trong suốt, sản phẩm giúp xóa nhòa khoảng cách, mang lại tầm nhìn thoáng đãng.',
    tags: [
      'Lan can cầu thang',
      'Lan can ban công',
      'Tay vịn inox',
      'Frameless',
    ],
    gradient: 'from-purple-900 to-purple-800',
    accent: 'border-purple-600',
    features: [
      'Kính cường lực 10-12mm cực kỳ chắc chắn.',
      'Trụ lùn, trụ cao hoặc hệ pad kẹp kính inox 304.',
      'Tay vịn gỗ căm xe, gỗ sồi hoặc inox 304, nhôm anodize.',
      'Thi công tỉ mỉ, đảm bảo các cạnh kính được mài bóng an toàn.',
      'Thiết kế theo yêu cầu, phù hợp với mọi phong cách kiến trúc.',
    ],
    images: ['/assets/images/lan-can-1.jpg'],
  },
  {
    id: 'showroom-office-fitout',
    title: 'Thi Công Showroom & Văn Phòng',
    slug: 'thi-cong-showroom-van-phong',
    icon: '🏪',
    description:
      'Thiết kế và thi công trọn gói mặt dựng kính, vách ngăn, cửa ra vào cho showroom, văn phòng. Tư vấn miễn phí, giao chìa khóa trao tay.',
    detailedDescription:
      'Chúng tôi cung cấp giải pháp tổng thể về nhôm kính cho các dự án thương mại. Từ khâu tư vấn thiết kế đến thi công hoàn thiện, Gia Phát cam kết mang lại không gian kinh doanh chuyên nghiệp và ấn tượng.',
    tags: [
      'Mặt dựng kính',
      'Vách ngăn văn phòng',
      'Trọn gói',
      'Tư vấn thiết kế',
    ],
    gradient: 'from-amber-900 to-amber-800',
    accent: 'border-amber-600',
    features: [
      'Tư vấn giải pháp tối ưu chi phí và công năng sử dụng.',
      'Đội ngũ kỹ sư và thợ thi công giàu kinh nghiệm.',
      'Sử dụng vật liệu cao cấp, có chứng nhận xuất xứ rõ ràng.',
      'Đảm bảo tiến độ thi công cam kết trong hợp đồng.',
      'Chế độ bảo hành và hậu mãi chu đáo.',
    ],
    images: ['/assets/images/showroom-1.jpg'],
  },
  {
    id: 'residential-fitout',
    title: 'Thi Công Nhà Ở Trọn Gói',
    slug: 'thi-cong-nha-o-tron-goi',
    icon: '🏠',
    description:
      'Giải pháp nhôm kính toàn bộ cho nhà phố, biệt thự, căn hộ. Từ cửa chính, cửa sổ, ban công đến vách kính phòng tắm.',
    detailedDescription:
      'Dành cho các gia chủ đang tìm kiếm sự hoàn mỹ cho tổ ấm của mình. Gia Phát cung cấp dịch vụ thi công trọn gói tất cả các hạng mục nhôm kính trong ngôi nhà, đảm bảo sự đồng bộ và thẩm mỹ cao nhất.',
    tags: ['Nhà phố', 'Biệt thự', 'Căn hộ', 'Vách phòng tắm kính'],
    gradient: 'from-emerald-900 to-emerald-800',
    accent: 'border-emerald-600',
    features: [
      'Khảo sát và tư vấn trực tiếp tại công trình.',
      'Đa dạng mẫu mã từ hiện đại đến cổ điển.',
      'Phòng tắm kính cường lực sử dụng phụ kiện inox 304 chống gỉ.',
      'Cửa nhôm cầu cách nhiệt cao cấp cho biệt thự.',
      'Giá cả cạnh tranh nhờ tối ưu hóa quy trình sản xuất.',
    ],
    images: ['/assets/images/nha-o-1.jpg'],
  },
];
