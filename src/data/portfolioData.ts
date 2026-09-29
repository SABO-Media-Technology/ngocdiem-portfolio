export interface Service {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  badge: string;
  description: string;
  deliverables: string[];
}

export interface PortfolioWork {
  id: string;
  title: string;
  category: "design" | "video_ai" | "web" | "app";
  categoryLabel: string;
  badge: string;
  gradient: string;
  description: string;
  tools: string[];
  highlights: string[];
  demoUrl?: string;
}

export const PERSONAL_INFO = {
  name: "Võ Ngọc Diễm",
  roleTitle: "Freelance Designer & Developer",
  education: "Cử nhân Tài chính - Ngân hàng · Trường Đại học Sài Gòn (SGU)",
  tagline: "Thiết kế Poster, Video AI & Phát triển Web / App trọn gói",
  bio: "Tôi là Võ Ngọc Diễm, tốt nghiệp Cử nhân Tài chính - Ngân hàng (ĐH Sài Gòn). Với niềm đam mê sáng tạo nội dung và công nghệ, tôi nhận các dự án thiết kế poster, banner sự kiện, sản xuất video ứng dụng AI, thiết kế website và xây dựng ứng dụng di động theo nhu cầu thực tế của cá nhân và doanh nghiệp.",
  email: "ngocdiem1112@gmail.com",
  location: "TP. Hồ Chí Minh",
  status: "🟢 Đang nhận dự án Freelance & Cộng tác",
  github: "https://github.com/longsangsabo2026-max",
  stats: [
    { label: "Dịch vụ cung cấp", value: "04 Mảng", note: "Design, Video AI, Web, App" },
    { label: "Phong cách làm việc", value: "Thực tế", note: "Lắng nghe & đúng hạn" },
    { label: "Chi phí hợp lý", value: "Tối ưu", note: "Phù hợp từng quy mô" },
    { label: "Học vấn", value: "ĐH Sài Gòn", note: "Cử nhân Tài chính - Ngân hàng" },
  ],
};

export const SERVICES: Service[] = [
  {
    id: "graphic-design",
    title: "Thiết Kế Poster & Ấn Phẩm Đồ Họa",
    subtitle: "Hình ảnh bắt mắt, đúng thông điệp",
    icon: "Palette",
    badge: "Nhận nhiều nhất",
    description:
      "Thiết kế poster sự kiện, giải đấu thể thao, banner quảng cáo Facebook/Google, standee, voucher, menu và bộ nhận diện hình ảnh cho fanpage, cửa hàng hoặc câu lạc bộ.",
    deliverables: [
      "Poster sự kiện, giải đấu, workshop, khai trương",
      "Banner quảng cáo đa kích thước (Facebook, Zalo, Story, Web)",
      "Thiết kế menu, standee, brochure, namecard",
      "Bàn giao đầy đủ file in ấn chất lượng cao & file ảnh web"
    ],
  },
  {
    id: "video-ai",
    title: "Sáng Tạo Video Ứng Dụng AI",
    subtitle: "Nhanh chóng, bắt xu hướng & tiết kiệm chi phí",
    icon: "Video",
    badge: "Xu hướng mới",
    description:
      "Tận dụng sức mạnh của các công cụ AI thế hệ mới để tạo video ngắn (Shorts/Reels/TikTok), video giới thiệu sản phẩm, lồng tiếng AI tự nhiên và hiệu ứng hình ảnh chuyển động cuốn hút.",
    deliverables: [
      "Video ngắn viral cho TikTok, Facebook Reels, YouTube Shorts",
      "Kịch bản và hình ảnh tạo bằng AI theo chủ đề yêu cầu",
      "Giọng đọc AI đa ngôn ngữ, ngữ điệu tự nhiên, chuẩn truyền thông",
      "Cắt ghép, chèn phụ đề tự động (auto-caption) và nhạc bản quyền"
    ],
  },
  {
    id: "web-dev",
    title: "Thiết Kế & Lập Trình Website",
    subtitle: "Giao diện hiện đại, hiển thị đẹp trên điện thoại",
    icon: "Globe",
    badge: "Trọn gói",
    description:
      "Xây dựng Landing Page giới thiệu dịch vụ, website bán hàng cá nhân, trang portfolio, giới thiệu doanh nghiệp hoặc tích hợp form đặt lịch, liên hệ nhanh chóng.",
    deliverables: [
      "Landing Page quảng cáo sản phẩm / dịch vụ chuyển đổi cao",
      "Website giới thiệu công ty, câu lạc bộ, thương hiệu cá nhân",
      "Tối ưu hiển thị mượt mà trên cả máy tính và điện thoại (Responsive)",
      "Hỗ trợ cấu hình tên miền, hosting và triển khai lên mạng"
    ],
  },
  {
    id: "mobile-app",
    title: "Thiết Kế & Phát Triển Ứng Dụng App",
    subtitle: "Đơn giản, trực quan và dễ sử dụng",
    icon: "Smartphone",
    badge: "Công nghệ",
    description:
      "Lập trình ứng dụng di động cho Android và iOS bằng Flutter. Phù hợp cho app câu lạc bộ, app điểm danh, app quản lý nội bộ nhỏ gọn, giao diện trực quan và dễ bảo trì.",
    deliverables: [
      "Thiết kế giao diện người dùng (UI/UX) ứng dụng di động",
      "Lập trình ứng dụng đa nền tảng Flutter (chạy trên Android & iOS)",
      "Tích hợp quét mã QR, thông báo, quản lý dữ liệu trực tuyến",
      "Hỗ trợ xuất file cài đặt (APK, AAB) hoặc hướng dẫn sử dụng"
    ],
  },
];

export const PORTFOLIO_WORKS: PortfolioWork[] = [
  {
    id: "work-poster-tournament",
    title: "Bộ Thiết Kế Poster & Banner Giải Đấu Thể Thao",
    category: "design",
    categoryLabel: "Thiết kế Đồ họa",
    badge: "Ấn phẩm sự kiện",
    gradient: "from-amber-950 via-slate-900 to-amber-900",
    description:
      "Bộ nhận diện sự kiện thi đấu: Poster chính, banner truyền thông mạng xã hội, bảng danh sách chia nhánh thi đấu và backdrop check-in.",
    tools: ["Photoshop", "Illustrator", "Canva Pro", "Figma"],
    highlights: [
      "Bố cục rõ ràng, làm nổi bật thông tin thời gian, giải thưởng và nhà tài trợ.",
      "Thiết kế chuẩn kích thước in ấn bạt Hiflex và tỷ lệ 1:1, 9:16 cho mạng xã hội.",
      "Tông màu thể thao năng động, hút mắt người nhìn."
    ],
  },
  {
    id: "work-ai-short-video",
    title: "Series Video Ngắn Quảng Bá Bằng Công Cụ AI",
    category: "video_ai",
    categoryLabel: "Video AI",
    badge: "Nội dung số",
    gradient: "from-purple-950 via-slate-900 to-indigo-950",
    description:
      "Sản xuất chuỗi clip ngắn giới thiệu dịch vụ và câu lạc bộ bằng AI: kịch bản AI, hình ảnh AI kết hợp giọng đọc thuyết minh tự nhiên.",
    tools: ["Midjourney / DALL-E", "CapCut Pro", "ElevenLabs Voice AI", "Runway"],
    highlights: [
      "Thời gian hoàn thiện nhanh gấp 3 lần so với quay dựng truyền thống.",
      "Hình ảnh độc đáo, bắt mắt và giữ chân người xem trên TikTok/Reels.",
      "Hiệu ứng phụ đề nhảy chữ (Dynamic Subtitles) chuẩn phong cách hiện đại."
    ],
  },
  {
    id: "work-sabo-arena-app",
    title: "SABO ARENA — Ứng Dụng Quản Lý & Thi Đấu",
    category: "app",
    categoryLabel: "Ứng dụng Di động",
    badge: "Mobile App",
    gradient: "from-indigo-950 via-slate-900 to-slate-950",
    description:
      "Ứng dụng hỗ trợ câu lạc bộ và người chơi theo dõi trận đấu, lịch thi đấu, bảng điểm trực tiếp và thông tin hội viên.",
    tools: ["Flutter", "Dart", "Supabase", "UI/UX Mobile"],
    highlights: [
      "Giao diện tối giản, dễ thao tác ngay cả khi đang thi đấu.",
      "Cập nhật tỉ số nhanh, hiển thị nhánh đấu trực quan.",
      "Hoạt động ổn định trên cả máy Android và iPhone."
    ],
  },
  {
    id: "work-club-landing-page",
    title: "Website Giới Thiệu Dịch Vụ & Đặt Bàn",
    category: "web",
    categoryLabel: "Thiết kế Web",
    badge: "Landing Page",
    gradient: "from-cyan-950 via-slate-900 to-blue-950",
    description:
      "Trang web giới thiệu câu lạc bộ, bảng giá dịch vụ, hình ảnh cơ sở vật chất và tích hợp nút liên hệ Zalo / gọi điện đặt chỗ nhanh.",
    tools: ["Next.js / HTML5", "Tailwind CSS", "JavaScript", "Responsive UI"],
    highlights: [
      "Tải trang cực nhanh, tối ưu tốt cho người xem bằng điện thoại.",
      "Tích hợp bản đồ Google Maps và nút gọi điện / chat Zalo 1 chạm.",
      "Form đăng ký nhận thông tin ưu đãi tiện lợi."
    ],
  },
  {
    id: "work-martial-arts-system",
    title: "Ứng Dụng Điểm Danh QR Cho Câu Lạc Bộ Võ Thuật",
    category: "app",
    categoryLabel: "Ứng dụng Di động",
    badge: "App Tiện ích",
    gradient: "from-rose-950 via-slate-900 to-pink-950",
    description:
      "Ứng dụng quét mã QR cá nhân để điểm danh học viên mỗi buổi tập, theo dõi lịch sử tập luyện và hỗ trợ quản lý học viên cơ bản.",
    tools: ["Flutter", "Firebase", "QR Code Scanner"],
    highlights: [
      "Quét mã nhanh, giao diện thân thiện cho huấn luyện viên.",
      "Lưu trữ lịch sử học viên rõ ràng, không lo thất lạc sổ sách.",
      "Chi phí triển khai nhẹ nhàng, không yêu cầu thiết bị đắt tiền."
    ],
  },
];

export const WORK_PROCESS = [
  {
    step: "01",
    title: "Trao đổi & Lắng nghe",
    desc: "Bạn chia sẻ yêu cầu, nội dung và phong cách mong muốn. Tôi tư vấn phương án thực tế, tiết kiệm nhất.",
  },
  {
    step: "02",
    title: "Báo giá & Lên phác thảo",
    desc: "Thống nhất chi phí minh bạch, thời gian bàn giao và gửi bản phác thảo (draft/mockup) đầu tiên để bạn xem.",
  },
  {
    step: "03",
    title: "Chỉnh sửa & Hoàn thiện",
    desc: "Tiếp thu ý kiến phản hồi và chỉnh sửa chu đáo cho đến khi bạn hoàn toàn hài lòng với thành phẩm.",
  },
  {
    step: "04",
    title: "Bàn giao & Hỗ trợ",
    desc: "Bàn giao đầy đủ file gốc chất lượng cao và hướng dẫn bạn cách sử dụng, đăng tải hoặc quản trị thuận tiện.",
  },
];
