export interface Service {
  id: string;
  title: string;
  slug: string;
  href: string;
  icon: string;
  desc: string;
  tags: string[];
  features: string[];
}

export interface PortfolioWork {
  id: string;
  title: string;
  category: "design" | "video_ai" | "web" | "app";
  categoryLabel: string;
  desc: string;
  tools: string[];
  highlight?: string;
}

export const PERSONAL_INFO = {
  name: "Võ Ngọc Diễm",
  role: "Design · Video AI · Web & App",
  education: "Cử nhân ĐH Sài Gòn (SGU) · Tài chính - Ngân hàng",
  tagline: "Thiết kế Poster, Video AI & Lập trình Web/App",
  bio: "Nhận thiết kế đồ họa, sản xuất video ngắn bằng AI và lập trình web/app theo yêu cầu. Làm việc thực tế, cẩn thận và đúng hạn.",
  email: "ngocdiem1112@gmail.com",
  phone: "0900.xxx.xxx",
  zalo: "https://zalo.me",
  location: "TP. Hồ Chí Minh · Nhận làm online toàn quốc",
  status: "🟢 Đang nhận dự án mới",
  avatar: "/avatar.jpg",
  github: "https://github.com/longsangsabo2026-max",
};

export const SERVICES: Service[] = [
  {
    id: "graphic-design",
    title: "Poster & Đồ Họa",
    slug: "poster",
    href: "/poster",
    icon: "Palette",
    desc: "Thiết kế poster sự kiện, giải đấu thể thao, banner quảng cáo, menu và standee. Xuất đủ file in ấn sắc nét và file đăng mạng xã hội.",
    tags: ["Poster sự kiện", "Banner quảng cáo", "Menu & Standee", "Backdrop sân khấu"],
    features: [
      "File in ấn chất lượng cao (300 DPI, CMYK)",
      "File tối ưu đăng Facebook, Zalo, Instagram",
      "Chỉnh sửa chu đáo theo góp ý của khách",
      "Bàn giao trọn gói file gốc + ảnh xuất",
    ],
  },
  {
    id: "video-ai",
    title: "Video Ngắn AI",
    slug: "video-ai",
    href: "/video-ai",
    icon: "Video",
    desc: "Sản xuất clip ngắn TikTok, Reels, Shorts bắt trend. Tạo hình ảnh AI độc đáo, lồng tiếng thuyết minh AI tự nhiên và phụ đề chuyển động.",
    tags: ["TikTok / Reels / Shorts", "Giọng đọc AI tự nhiên", "Kịch bản viral", "Phụ đề động"],
    features: [
      "Xây kênh không cần lộ mặt hay quay phim phức tạp",
      "Kịch bản hấp dẫn giữ chân người xem 3 giây đầu",
      "Giọng đọc AI đa vùng miền (Bắc / Nam) tự nhiên",
      "Cắt dựng nhịp nhàng, âm thanh & hiệu ứng cuốn hút",
    ],
  },
  {
    id: "web-app",
    title: "Web & Ứng Dụng",
    slug: "web-app",
    href: "/web-app",
    icon: "Code2",
    desc: "Thiết kế Landing Page bán hàng tải nhanh và lập trình ứng dụng di động Flutter (quản lý CLB, điểm danh QR, tiện ích nội bộ).",
    tags: ["Landing Page", "App Flutter (Android/iOS)", "Quét mã QR", "Tối ưu di động"],
    features: [
      "Giao diện chuẩn trên mọi dòng điện thoại",
      "Tốc độ tải nhanh, tích hợp nút gọi/Zalo 1 chạm",
      "Ứng dụng Flutter mượt mà trên cả Android & iOS",
      "Dễ sử dụng, bảo hành kỹ thuật sau bàn giao",
    ],
  },
];

export const POSTER_CATEGORIES = [
  {
    title: "Poster Sự Kiện & Giải Đấu",
    desc: "Poster giải đấu thể thao, hội thảo, giao lưu câu lạc bộ với bố cục mạnh mẽ, hiện đại.",
    items: ["Poster giải Bida / Thể thao", "Poster sự kiện khai trương", "Poster workshop & giao lưu"],
  },
  {
    title: "Banner & Ảnh Mạng Xã Hội",
    desc: "Bộ banner chạy quảng cáo, ảnh bìa fanpage, bài đăng Facebook/Zalo đúng kích thước chuẩn.",
    items: ["Banner khuyến mãi / Flash sale", "Cover Facebook & Zalo OA", "Ảnh bài đăng sản phẩm"],
  },
  {
    title: "Ấn Phẩm In Ấn Khác",
    desc: "Standee đứng, backdrop sân khấu, menu đồ uống/món ăn, namecard cá nhân.",
    items: ["Standee đứng 60x160cm / 80x180cm", "Backdrop sân khấu tiệc", "Menu quán cafe, bida, quán ăn"],
  },
];

export const VIDEO_AI_FORMATS = [
  {
    title: "Video Chia Sẻ & Tin Tức Xu Hướng",
    desc: "Cập nhật kiến thức, tin tức hot, câu chuyện ngắn với hình ảnh minh họa sống động từ AI.",
  },
  {
    title: "Video Giới Thiệu Sản Phẩm & Dịch Vụ",
    desc: "Làm nổi bật tính năng, giá trị của sản phẩm với kịch bản bán hàng ngắn gọn 30-60 giây.",
  },
  {
    title: "Video Kể Chuyện & Bài Học Cuộc Sống",
    desc: "Thể loại nội dung dễ viral, giữ chân người xem cao nhờ hình ảnh cảm xúc và giọng kể lôi cuốn.",
  },
];

export const PORTFOLIO_WORKS: PortfolioWork[] = [
  {
    id: "work-poster",
    title: "Bộ Poster & Banner Giải Đấu Thể Thao",
    category: "design",
    categoryLabel: "Đồ họa",
    desc: "Thiết kế poster chính cho giải đấu thể thao, banner truyền thông mạng xã hội và backdrop sân thi đấu với phong cách mạnh mẽ, cuốn hút.",
    tools: ["Photoshop", "Illustrator", "Canva Pro"],
    highlight: "Xuất file in 300DPI & ảnh web",
  },
  {
    id: "work-video",
    title: "Series Clip Ngắn Bằng Công Cụ AI",
    category: "video_ai",
    categoryLabel: "Video AI",
    desc: "Sản xuất chuỗi video ngắn TikTok/Reels với kịch bản tối ưu 45 giây, hình ảnh do AI sinh theo phong cách hiện đại và lồng giọng thuyết minh tự nhiên.",
    tools: ["Midjourney", "CapCut", "ElevenLabs"],
    highlight: "Tự động tạo phụ đề & lồng tiếng",
  },
  {
    id: "work-arena",
    title: "SABO ARENA — App Quản Lý & Thi Đấu",
    category: "app",
    categoryLabel: "App Mobile",
    desc: "Ứng dụng theo dõi trận đấu, cập nhật kết quả trực tiếp, xem lịch thi đấu và thông tin hội viên trên di động.",
    tools: ["Flutter", "Dart", "Supabase"],
    highlight: "Ứng dụng thực tế đang vận hành",
  },
  {
    id: "work-web",
    title: "Website Giới Thiệu Dịch Vụ & Đặt Bàn",
    category: "web",
    categoryLabel: "Website",
    desc: "Landing page giới thiệu cơ sở kinh doanh, hình ảnh không gian, bảng giá dịch vụ và tích hợp nút gọi điện / chat Zalo 1 chạm.",
    tools: ["Next.js", "Tailwind CSS", "Responsive"],
    highlight: "Tải nhanh, tối ưu trên điện thoại",
  },
  {
    id: "work-qr",
    title: "App Điểm Danh QR Cho Câu Lạc Bộ",
    category: "app",
    categoryLabel: "App Mobile",
    desc: "Ứng dụng quét mã QR cá nhân để điểm danh học viên mỗi buổi tập, quản lý lịch sử tham gia nhanh gọn, dễ dùng.",
    tools: ["Flutter", "Firebase", "QR Scanner"],
    highlight: "Tiện lợi, giao diện thân thiện",
  },
];

export const WORK_PROCESS = [
  {
    step: "01",
    title: "Trao đổi & Tiếp nhận",
    desc: "Bạn gửi nội dung, hình ảnh hoặc ý tưởng mong muốn. Mình tư vấn quy cách và phương án phù hợp.",
  },
  {
    step: "02",
    title: "Lên bản nháp Demo",
    desc: "Thực hiện bản nháp đầu tiên (demo thiết kế, kịch bản video hoặc khung giao diện web/app).",
  },
  {
    step: "03",
    title: "Chỉnh sửa chu đáo",
    desc: "Tiếp thu phản hồi của bạn để tinh chỉnh chi tiết đến khi bạn hài lòng với sản phẩm.",
  },
  {
    step: "04",
    title: "Bàn giao trọn gói",
    desc: "Gửi đầy đủ file in ấn sắc nét, file dùng mạng xã hội hoặc mã nguồn và hướng dẫn sử dụng.",
  },
];

export const PRINCIPLES = [
  {
    title: "Rõ ràng & Thực tế",
    desc: "Tư vấn đúng nhu cầu, không vẽ vời tính năng thừa để đội chi phí.",
  },
  {
    step: "02",
    title: "Đúng hẹn & Cẩn thận",
    desc: "Bàn giao đúng tiến độ đã hẹn, kiểm tra kỹ lưỡng từng file trước khi gửi.",
  },
  {
    step: "03",
    title: "Chi phí hợp lý",
    desc: "Báo giá linh hoạt theo quy mô từng dự án, phù hợp ngân sách của bạn.",
  },
];

export const FAQS = [
  {
    q: "Mình chưa có ý tưởng rõ ràng thì có làm được không?",
    a: "Hoàn toàn được! Bạn chỉ cần cho mình biết mục đích (ví dụ: cần poster khai trương hay làm video giới thiệu quán), mình sẽ gợi ý phong cách và bố cục phù hợp.",
  },
  {
    q: "Sau khi nhận sản phẩm có được chỉnh sửa không?",
    a: "Có! Mỗi sản phẩm đều được hỗ trợ chỉnh sửa các chi tiết (chữ, màu sắc, bố cục nhỏ) chu đáo cho đến khi hoàn thiện.",
  },
  {
    q: "Cách thức đặt làm và thanh toán như thế nào?",
    a: "Sau khi thống nhất yêu cầu và thời gian, bạn tạm ứng trước một phần chi phí để mình tiến hành làm. Khi bạn duyệt xong bản cuối, bạn thanh toán phần còn lại và nhận file trọn gói.",
  },
];
