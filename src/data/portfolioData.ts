// ─────────────────────────────────────────────────────────────
// PORTFOLIO DATA — Võ Ngọc Diễm
// Single source of truth for all page content.
// ─────────────────────────────────────────────────────────────

// ── Personal Info ────────────────────────────────────────────
export const PERSONAL_INFO = {
  name: "Võ Ngọc Diễm",
  brand: "DIGITAL • CREATIVE • BUSINESS",
  tagline: "Tôi thiết kế website, xây dựng nội dung và phát triển hình ảnh số cho doanh nghiệp.",
  taglineEN: "Digital work, made practical.",
  about:
    "Tôi tốt nghiệp ngành Tài chính – Ngân hàng và hiện làm việc trong các lĩnh vực vận hành, digital, content và thiết kế.\n\nTôi có kinh nghiệm thực tế trong quản lý hoạt động, phát triển nội dung, xây dựng hình ảnh thương hiệu và triển khai các dự án website, web app.\n\nTôi thích những công việc kết hợp giữa tư duy kinh doanh và sáng tạo.",
  email: "ngocdiem1112@gmail.com",
  phone: "0329 640 232",
  phoneRaw: "0329640232",
  location: "TP. Hồ Chí Minh, Việt Nam",
  avatar: "/avatar.jpg",
  status: "SẴN SÀNG NHẬN DỰ ÁN",
};

// ── Services (3 categories only) ─────────────────────────────
export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  titleEN: string;
  description: string;
  items: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "website",
    number: "01",
    title: "WEBSITE & WEB APP",
    titleEN: "Website & Web App",
    description: "Xây dựng giải pháp số phù hợp với nhu cầu thực tế.",
    items: [
      "Website doanh nghiệp",
      "Landing Page",
      "Web App",
      "UI / UX",
      "Hệ thống quản lý",
      "Dashboard",
      "Giao diện theo yêu cầu",
    ],
  },
  {
    id: "digital",
    number: "02",
    title: "DIGITAL & CONTENT",
    titleEN: "Digital & Content",
    description: "Xây dựng nội dung và hình ảnh cho môi trường số.",
    items: [
      "Social Media",
      "Content Planning",
      "Social Content",
      "Poster",
      "Video ngắn",
      "Campaign Visual",
      "AI-assisted Content",
    ],
  },
  {
    id: "brand",
    number: "03",
    title: "BRAND & VISUAL",
    titleEN: "Brand & Visual",
    description: "Tạo hình ảnh nhất quán cho thương hiệu.",
    items: [
      "Logo",
      "Brand Identity",
      "Social Media Kit",
      "Poster",
      "Event Visual",
      "Certificate",
      "Marketing Materials",
    ],
  },
];

// ── Projects (5 real projects) ────────────────────────────────
export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  work: string[];
  color: string;
  image: string;
  iconName?: string;
  link?: string;
  linkLabel?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "sabo-billiards",
    number: "01",
    title: "SABO BILLIARDS",
    category: "OPERATIONS • DIGITAL • EVENT",
    tags: ["Vận hành", "Sự kiện", "Social Media", "Thiết kế"],
    description:
      "Tham gia quản lý hoạt động, nội dung và hình ảnh truyền thông cho SABO Billiards.",
    work: [
      "Quản lý vận hành",
      "Tổ chức giải đấu",
      "Social Media",
      "Thiết kế poster",
      "Chương trình thành viên",
      "Nội dung quảng bá",
    ],
    color: "#2563FF",
    image: "/projects/sabo-billiards-v3.jpg",
    iconName: "Trophy",
    link: "https://www.facebook.com/sabobilliard",
    linkLabel: "XEM FANPAGE",
  },
  {
    id: "sabo-arena",
    number: "02",
    title: "SABO ARENA",
    category: "DIGITAL • CONTENT • PRODUCT",
    tags: ["Tournament", "ELO Ranking", "Community", "Digital Content"],
    description:
      "Tham gia phát triển nội dung và hình ảnh cho nền tảng SABO Arena.",
    work: [
      "Tournament",
      "ELO Ranking",
      "Community",
      "Club",
      "Membership",
      "Digital Content",
    ],
    color: "#35D9FF",
    image: "/projects/sabo-arena-v3.jpg",
    iconName: "Smartphone",
    link: "https://app.saboarena.com",
    linkLabel: "TRẢI NGHIỆM APP",
  },
  {
    id: "sabo-media-tech",
    number: "03",
    title: "SABO MEDIA & TECHNOLOGY",
    category: "DIGITAL • BRANDING • WEB",
    tags: ["Branding", "Social Media", "Website", "Web App"],
    description:
      "Tham gia phát triển hình ảnh, nội dung và các dự án digital của SABO Media & Technology.",
    work: [
      "Branding",
      "Social Media",
      "Website",
      "Web App",
      "Digital Content",
    ],
    color: "#38BDF8",
    image: "/projects/sabo-media-v3.jpg",
    iconName: "Globe",
    link: "https://sabo.com.vn",
    linkLabel: "XEM WEBSITE",
  },
  {
    id: "sabo-hub",
    number: "04",
    title: "SABO HUB",
    category: "DIGITAL • PRODUCT • CONTENT",
    tags: ["Product Concept", "Digital Content", "UI / Visual"],
    description:
      "Tham gia phát triển hình ảnh và nội dung cho ý tưởng sản phẩm SABO Hub.",
    work: [
      "Product Concept",
      "Digital Content",
      "UI / Visual",
      "Business Solutions",
    ],
    color: "#35D9FF",
    image: "/projects/sabo-hub-v3.jpg",
    iconName: "LayoutDashboard",
    link: "https://hub.sabo.com.vn/",
    linkLabel: "XEM HỆ THỐNG",
  },
  {
    id: "sabo-design",
    number: "05",
    title: "SABO DESIGN",
    category: "BRANDING • VISUAL DESIGN",
    tags: ["Logo", "Poster", "Social Media", "Certificate"],
    description:
      "Thiết kế các sản phẩm hình ảnh cho hệ sinh thái SABO.",
    work: [
      "Logo",
      "Poster",
      "Social Media",
      "Certificate",
      "Campaign Visual",
    ],
    color: "#60A5FA",
    image: "/projects/sabo-design-v3.jpg",
    iconName: "Palette",
    link: "https://www.facebook.com/logopostersgiare",
    linkLabel: "XEM FANPAGE",
  },
];

// ── Experience Areas (5) ──────────────────────────────────────
export interface ExperienceArea {
  id: string;
  title: string;
  titleEN: string;
  description: string;
}

export const EXPERIENCE_AREAS: ExperienceArea[] = [
  {
    id: "ops",
    title: "BUSINESS OPERATIONS",
    titleEN: "Business Operations",
    description:
      "Quản lý hoạt động thực tế và phối hợp công việc hằng ngày.",
  },
  {
    id: "admin",
    title: "ADMINISTRATION & HR",
    titleEN: "Administration & HR",
    description:
      "Xử lý công việc hành chính, nhân sự và tài liệu nội bộ.",
  },
  {
    id: "finance",
    title: "FINANCE",
    titleEN: "Finance",
    description:
      "Theo dõi và xử lý các công việc tài chính, kế toán nội bộ.",
  },
  {
    id: "digital",
    title: "DIGITAL",
    titleEN: "Digital",
    description:
      "Phát triển nội dung, social media, branding và các dự án digital.",
  },
  {
    id: "design",
    title: "DESIGN",
    titleEN: "Design",
    description:
      "Thiết kế logo, poster, social content và các ấn phẩm truyền thông.",
  },
];

// ── How I Work (4 steps) ──────────────────────────────────────
export interface WorkStep {
  step: string;
  title: string;
  desc: string;
}

export const HOW_I_WORK: WorkStep[] = [
  {
    step: "01",
    title: "HIỂU",
    desc: "Tìm hiểu mục tiêu và nhu cầu thực tế.",
  },
  {
    step: "02",
    title: "LÊN Ý TƯỞNG",
    desc: "Xác định hướng triển khai phù hợp.",
  },
  {
    step: "03",
    title: "THỰC HIỆN",
    desc: "Thiết kế và triển khai giải pháp.",
  },
  {
    step: "04",
    title: "HOÀN THIỆN",
    desc: "Kiểm tra, chỉnh sửa và tối ưu.",
  },
];
