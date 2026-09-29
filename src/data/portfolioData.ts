export interface Service {
  id: string;
  title: string;
  icon: string;
  desc: string;
  tags: string[];
}

export interface PortfolioWork {
  id: string;
  title: string;
  category: "design" | "video_ai" | "web" | "app";
  categoryLabel: string;
  desc: string;
  tools: string[];
}

export const PERSONAL_INFO = {
  name: "Võ Ngọc Diễm",
  role: "Design · Video AI · Web & App",
  education: "Cử nhân ĐH Sài Gòn (SGU) · Tài chính - Ngân hàng",
  tagline: "Thiết kế Poster, Video AI & Lập trình Web/App",
  bio: "Nhận thiết kế đồ họa, sản xuất video ngắn bằng AI và lập trình web/app theo yêu cầu. Làm việc thực tế, cẩn thận và đúng hạn.",
  email: "ngocdiem1112@gmail.com",
  location: "TP. Hồ Chí Minh · Nhận việc online",
  status: "🟢 Đang nhận dự án",
  github: "https://github.com/longsangsabo2026-max",
};

export const SERVICES: Service[] = [
  {
    id: "graphic-design",
    title: "Poster & Đồ Họa",
    icon: "Palette",
    desc: "Poster sự kiện, giải đấu thể thao, banner quảng cáo, menu, standee. Xuất đủ file in ấn và đăng mạng xã hội.",
    tags: ["Poster sự kiện", "Banner quảng cáo", "Menu & Standee"],
  },
  {
    id: "video-ai",
    title: "Video Ngắn AI",
    icon: "Video",
    desc: "Clip ngắn TikTok, Reels, Shorts bắt trend. Tạo hình ảnh AI, lồng tiếng thuyết minh AI tự nhiên và phụ đề tự động.",
    tags: ["TikTok / Reels", "Giọng đọc AI", "Kịch bản viral"],
  },
  {
    id: "web-dev",
    title: "Thiết Kế Web",
    icon: "Globe",
    desc: "Landing Page bán hàng, web giới thiệu dịch vụ/doanh nghiệp. Giao diện đẹp trên điện thoại, tải nhanh, gắn form liên hệ.",
    tags: ["Landing Page", "Chuẩn di động", "Tải trang nhanh"],
  },
  {
    id: "mobile-app",
    title: "Làm App Mobile",
    icon: "Smartphone",
    desc: "Lập trình ứng dụng di động Flutter (Android & iOS). App câu lạc bộ, app điểm danh QR, tiện ích nội bộ nhỏ gọn.",
    tags: ["Flutter (Android/iOS)", "Quét mã QR", "Tiện ích CLB"],
  },
];

export const PORTFOLIO_WORKS: PortfolioWork[] = [
  {
    id: "work-poster",
    title: "Bộ Poster & Banner Giải Đấu Thể Thao",
    category: "design",
    categoryLabel: "Đồ họa",
    desc: "Poster chính sự kiện, banner truyền thông mạng xã hội và backdrop sân thi đấu.",
    tools: ["Photoshop", "Illustrator", "Canva Pro"],
  },
  {
    id: "work-video",
    title: "Series Clip Ngắn Bằng Công Cụ AI",
    category: "video_ai",
    categoryLabel: "Video AI",
    desc: "Sản xuất video ngắn TikTok/Reels với kịch bản, hình ảnh và giọng đọc thuyết minh AI.",
    tools: ["Midjourney", "CapCut", "ElevenLabs"],
  },
  {
    id: "work-arena",
    title: "SABO ARENA — App Quản Lý & Thi Đấu",
    category: "app",
    categoryLabel: "App Mobile",
    desc: "Ứng dụng theo dõi trận đấu, lịch thi đấu, bảng điểm trực tiếp và quản lý hội viên.",
    tools: ["Flutter", "Dart", "Supabase"],
  },
  {
    id: "work-web",
    title: "Website Giới Thiệu Dịch Vụ & Đặt Bàn",
    category: "web",
    categoryLabel: "Website",
    desc: "Landing page giới thiệu cơ sở, bảng giá, hình ảnh và tích hợp gọi điện / Zalo 1 chạm.",
    tools: ["Next.js", "Tailwind CSS", "Responsive"],
  },
  {
    id: "work-qr",
    title: "App Điểm Danh QR Cho Câu Lạc Bộ",
    category: "app",
    categoryLabel: "App Mobile",
    desc: "Ứng dụng quét mã QR cá nhân để điểm danh học viên mỗi buổi tập, giao diện đơn giản.",
    tools: ["Flutter", "Firebase", "QR Scanner"],
  },
];

export const PRINCIPLES = [
  { title: "Rõ ràng & Thực tế", desc: "Tư vấn đúng nhu cầu, không vẽ vời." },
  { title: "Đúng tiến độ", desc: "Bàn giao đúng hẹn, hỗ trợ chỉnh sửa chu đáo." },
  { title: "Chi phí tối ưu", desc: "Báo giá linh hoạt theo ngân sách từng khách hàng." },
];
