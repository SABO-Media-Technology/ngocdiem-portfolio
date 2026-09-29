export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "flagship" | "mobile" | "web" | "ai";
  categoryLabel: string;
  badge: string;
  gradient: string;
  accentBorder: string;
  description: string;
  detailedDescription: string;
  tags: string[];
  metrics?: string;
  highlights: string[];
  architecture: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: string;
  skills: { name: string; level: "Expert" | "Advanced" | "Proficient" }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  badge?: string;
  description: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  name: "Võ Ngọc Diễm",
  roleTitle: "Mobile & Full-stack Engineer",
  organization: "SABO M&T",
  education: "Cử nhân Tài chính - Ngân hàng · Đại học Sài Gòn (SGU)",
  tagline: "Kiến tạo ứng dụng di động & Nền tảng SaaS với tư duy Tài chính - Công nghệ",
  bio: "Kỹ sư phần mềm xuất thân từ chuyên ngành Tài chính - Ngân hàng (Đại học Sài Gòn), đam mê xây dựng các sản phẩm thực chiến (Shipped Products) phục vụ hàng chục ngàn người dùng. Chuyên sâu về hệ sinh thái Flutter (iOS, Android, Web), kiến trúc cơ sở dữ liệu Supabase/PostgreSQL và giải pháp tự động hóa AI.",
  email: "ngocdiem1112@gmail.com",
  location: "TP. Hồ Chí Minh, Việt Nam",
  status: "Nhận dự án · Tuyển dụng · Cộng tác chuyên môn",
  github: "https://github.com/longsangsabo2026-max",
  facebook: "https://facebook.com",
  stats: [
    { label: "Sản phẩm đã ship", value: "06+", note: "Production live" },
    { label: "Năm kinh nghiệm", value: "04+", note: "Mobile & Full-stack" },
    { label: "Crash-free Rate", value: "99.8%", note: "Tối ưu hóa hiệu năng" },
    { label: "Nền tảng kép", value: "Finance × Tech", note: "SGU & SABO M&T" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "sabo-arena",
    title: "SABO ARENA",
    subtitle: "Hệ sinh thái thi đấu & Quản lý CLB Bida chuyên nghiệp",
    category: "flagship",
    categoryLabel: "Flagship Product",
    badge: "Shipped & Live",
    gradient: "from-indigo-950 via-purple-950 to-slate-950",
    accentBorder: "border-indigo-500/40",
    description:
      "Nền tảng thi đấu bida chuyên nghiệp và vận hành câu lạc bộ: bảng đấu realtime, cập nhật tỉ số trực tiếp, điều phối giải đấu, tính tiền phiên bàn và phân quyền RLS nghiêm ngặt.",
    detailedDescription:
      "SABO ARENA phục vụ hàng ngàn cơ thủ và nhiều chuỗi CLB bida trên toàn quốc. Ứng dụng giải quyết bài toán phức tạp về đồng bộ trạng thái giải đấu theo thời gian thực (Single/Double Elimination, Round Robin), tính cước bàn chơi và phân quyền chặt chẽ giữa Chủ CLB, Quản lý và Nhân viên.",
    tags: ["Flutter", "Supabase RLS", "PostgreSQL", "Realtime WS", "Codemagic", "Vercel Web"],
    metrics: "10,000+ Vận động viên • 50+ CLB",
    highlights: [
      "Bảng đấu thời gian thực đồng bộ đồng thời cho toàn bộ khán giả và trọng tài qua Supabase Realtime.",
      "Kiến trúc bảo mật RLS đa tầng: Phân định ranh giới chặt chẽ giữa Chủ CLB và Nhân viên đang làm việc (terminated_at IS NULL).",
      "Xử lý state mượt mà với Clean Architecture, đảm bảo 60fps trên mọi thiết bị di động tầm trung.",
      "Pipeline release tự động qua Codemagic (Android AAB, iOS IPA) và Vercel Web Deployment."
    ],
    architecture: [
      "Presentation: Flutter Bloc / Riverpod UI layer",
      "Domain & Data: Repository pattern, Clean Architecture",
      "Backend & Security: Supabase Auth, PostgreSQL Functions & Trigger, RLS Policies",
      "Release: Automated pipeline Codemagic & Vercel web deploy"
    ],
    liveUrl: "https://app.saboarena.com",
    githubUrl: "https://github.com/longsangsabo2026-max/saboarenav4",
  },
  {
    id: "sabohub-platform",
    title: "SABOHUB Platform",
    subtitle: "Cổng điều hành nghiệp vụ & quản trị dịch vụ tập trung",
    category: "web",
    categoryLabel: "Enterprise SaaS",
    badge: "Enterprise Live",
    gradient: "from-cyan-950 via-slate-900 to-blue-950",
    accentBorder: "border-cyan-500/40",
    description:
      "Cổng thông tin điều hành tập trung cho chuỗi cơ sở dịch vụ: quản lý hội viên, chấm công nhân sự, phân quyền chi nhánh, theo dõi doanh thu và đối soát thanh toán theo thời gian thực.",
    detailedDescription:
      "Nền tảng web hiện đại giúp tối ưu hóa luồng vận hành nội bộ, cung cấp báo cáo tài chính và phân tích doanh thu tự động, tận dụng nền tảng kiến thức Tài chính - Ngân hàng để thiết kế các luồng đối soát dòng tiền chuẩn xác.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Supabase"],
    metrics: "Quản trị tập trung đa chi nhánh",
    highlights: [
      "Dashboard số liệu trực quan với biểu đồ thời gian thực, xuất báo cáo nhiều định dạng.",
      "Kiến trúc Next.js App Router chuẩn SEO và Server-Side Rendering tối ưu tốc độ phản hồi.",
      "Mô hình phân quyền RBAC phân cấp sâu theo chi nhánh và phòng ban.",
      "Tích hợp API thanh toán và đối soát giao dịch ngân hàng tự động."
    ],
    architecture: [
      "Frontend: Next.js (App Router), TypeScript, Tailwind CSS, TanStack Query",
      "Backend: Supabase PostgreSQL, Edge Functions, Row Level Security",
      "Analytics: Biểu đồ thống kê hiệu suất kinh doanh & tỷ lệ lấp đầy bàn"
    ],
  },
  {
    id: "martial-arts-club",
    title: "Martial Arts Club",
    subtitle: "Ứng dụng quản lý câu lạc bộ võ thuật & học viên",
    category: "mobile",
    categoryLabel: "Mobile Solution",
    badge: "Shipped App",
    gradient: "from-purple-950 via-slate-900 to-fuchsia-950",
    accentBorder: "border-purple-500/40",
    description:
      "Ứng dụng dành riêng cho võ đường và trung tâm thể thao: điểm danh học viên qua QR code cá nhân, theo dõi thăng đai, học phí, lịch tập và thông báo nhắc nhở tự động.",
    detailedDescription:
      "Giúp các võ sư và ban quản lý loại bỏ hoàn toàn sổ sách giấy tờ, số hóa toàn bộ hồ sơ võ sinh từ lúc nhập môn đến các kỳ thi thăng đẳng cấp.",
    tags: ["Flutter", "Firebase", "Cloud Firestore", "QR Scanner", "Push Notifications"],
    metrics: "Quản lý 1,500+ võ sinh",
    highlights: [
      "Điểm danh siêu tốc bằng QR code cá nhân, hỗ trợ quét liên tục và hoạt động Offline-first.",
      "Hệ thống lộ trình đai: lưu trữ lịch sử thi, video bài quyền và đánh giá của huấn luyện viên.",
      "Tự động gửi thông báo lịch tập, học phí đến ứng dụng của phụ huynh qua Firebase Cloud Messaging (FCM)."
    ],
    architecture: [
      "App: Flutter Mobile (iOS & Android)",
      "Database: Cloud Firestore with offline persistence",
      "Notifications: FCM & Cloud Functions background jobs"
    ],
  },
  {
    id: "sabo-browser-worker",
    title: "Sabo Browser Worker",
    subtitle: "Hệ thống tự động hóa trình duyệt & thu thập dữ liệu bằng AI",
    category: "ai",
    categoryLabel: "AI Automation",
    badge: "AI Powered",
    gradient: "from-amber-950 via-slate-900 to-yellow-950",
    accentBorder: "border-amber-500/40",
    description:
      "Agent tự động hóa tác vụ trình duyệt headless: cào dữ liệu giải đấu thể thao, giải mã cấu trúc dữ liệu bằng LLM và đồng bộ về hệ thống quản lý.",
    detailedDescription:
      "Hệ thống giải quyết bài toán nhập liệu thủ công tốn kém thời gian bằng cách tự động theo dõi lịch thi đấu, bắt tín hiệu thay đổi tỉ số và cập nhật tức thì.",
    tags: ["Node.js", "Playwright", "Puppeteer", "LLM APIs", "BullMQ / Redis"],
    metrics: "Tự động hóa 95% khâu nhập liệu",
    highlights: [
      "Xử lý tự động duyệt trang web phức tạp, vượt captcha và mô phỏng hành vi tự nhiên.",
      "Tích hợp LLM để chuẩn hóa các bảng điểm có định dạng phi cấu trúc thành JSON chuẩn.",
      "Hàng đợi tác vụ chịu lỗi cao với BullMQ, tự động thử lại khi gián đoạn mạng."
    ],
    architecture: [
      "Worker Engine: Playwright headless browser cluster",
      "AI Pipeline: Prompt-engineered LLM parsing & entity extraction",
      "Queue & State: Redis BullMQ with fault-tolerant workers"
    ],
  },
  {
    id: "taskcall-platform",
    title: "TaskCall Platform",
    subtitle: "Hệ thống điều phối dịch vụ kỹ thuật theo vị trí địa lý",
    category: "web",
    categoryLabel: "Service Dispatch",
    badge: "SaaS Live",
    gradient: "from-emerald-950 via-slate-900 to-teal-950",
    accentBorder: "border-emerald-500/40",
    description:
      "Hệ thống tiếp nhận và phân bổ yêu cầu dịch vụ bảo trì kỹ thuật cho nhân viên gần nhất dựa trên vị trí GPS và lịch làm việc khả dụng.",
    detailedDescription:
      "Giải pháp điều phối thông minh giúp giảm thời gian phản hồi từ 45 phút xuống dưới 10 phút, tối ưu hóa cung đường di chuyển của đội ngũ kỹ thuật viên.",
    tags: ["TypeScript", "Fastify", "PostgreSQL", "Redis", "Geo-spatial Queries"],
    metrics: "Giảm 70% thời gian điều phối",
    highlights: [
      "Thuật toán gán việc thông minh dựa trên vị trí GPS và độ ưu tiên sự cố.",
      "Hệ thống Webhook và thông báo đẩy tức thời cho kỹ thuật viên hiện trường.",
      "Bộ nhớ đệm Redis cache tối ưu hóa lưu lượng truy vấn vị trí liên tục."
    ],
    architecture: [
      "API Server: Fastify high-throughput Node.js microservice",
      "Data: PostgreSQL with PostGIS extension for spatial queries",
      "Caching: In-memory Redis geospatial index"
    ],
  },
  {
    id: "auto-warmup-suite",
    title: "Auto Warmup & Stress Suite",
    subtitle: "Bộ công cụ tự động hóa kiểm thử tải và profiling cho Mobile",
    category: "mobile",
    categoryLabel: "QA & DevOps Tool",
    badge: "Internal Tooling",
    gradient: "from-pink-950 via-slate-900 to-rose-950",
    accentBorder: "border-pink-500/40",
    description:
      "Bộ công cụ kiểm thử tự động mô phỏng thao tác người dùng cường độ cao, đo lường rò rỉ bộ nhớ (memory leaks), giật khung hình và crash log trước khi release.",
    detailedDescription:
      "Được thiết kế để chặn các lỗi nghiêm trọng về hiệu năng trước khi bản build được đẩy lên Google Play hay App Store.",
    tags: ["Dart", "Flutter Driver", "Memory Profiling", "Bash", "GitHub Actions"],
    metrics: "Phát hiện sớm 90% lỗi hiệu năng",
    highlights: [
      "Chạy tự động chuỗi 1000+ tương tác liên tục mô phỏng hành vi người dùng cực đoan.",
      "Ghi nhận biểu đồ mức tiêu thụ RAM, GPU, CPU theo thời gian thực.",
      "Tích hợp vào pre-commit hook và CI pipeline để duy trì tiêu chuẩn chất lượng cao."
    ],
    architecture: [
      "Automation Engine: Flutter Driver & Integration Test runner",
      "Analysis: Memory snapshot comparison & frame timing metrics",
      "CI Integration: Headless Android emulator execution on Linux"
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Mobile Development",
    subtitle: "Hệ sinh thái Flutter & Native",
    iconName: "Smartphone",
    skills: [
      { name: "Flutter / Dart", level: "Expert" },
      { name: "Riverpod / Bloc / Provider", level: "Advanced" },
      { name: "iOS & Android Native Interop", level: "Proficient" },
      { name: "Offline Sync (Hive, SQLite)", level: "Advanced" },
      { name: "Flutter Web & Responsive UI", level: "Advanced" },
      { name: "App Store & Google Play Deploy", level: "Advanced" },
    ],
  },
  {
    title: "Backend & Data",
    subtitle: "Kiến trúc đám mây & Phân quyền RLS",
    iconName: "Database",
    skills: [
      { name: "Supabase (PostgreSQL, RLS)", level: "Expert" },
      { name: "Firebase (Auth, Firestore, FCM)", level: "Advanced" },
      { name: "Node.js / Express / Fastify", level: "Proficient" },
      { name: "SQL Schema Design & Optimization", level: "Advanced" },
      { name: "WebSocket & Realtime Streaming", level: "Advanced" },
      { name: "RESTful API Integration", level: "Advanced" },
    ],
  },
  {
    title: "Frontend & Web",
    subtitle: "Giao diện hiện đại & Chuẩn SEO",
    iconName: "Globe",
    skills: [
      { name: "Next.js (App Router) / React", level: "Advanced" },
      { name: "TypeScript / JavaScript ESNext", level: "Advanced" },
      { name: "Tailwind CSS v4 & Styling", level: "Expert" },
      { name: "Responsive & Accessible UI", level: "Advanced" },
      { name: "State & Cache Management", level: "Advanced" },
      { name: "Client-side Performance Tuning", level: "Advanced" },
    ],
  },
  {
    title: "DevOps & AI Tools",
    subtitle: "Tự động hóa phát hành & AI Agent",
    iconName: "Cpu",
    skills: [
      { name: "Codemagic CI/CD for Mobile", level: "Advanced" },
      { name: "GitHub Actions & Workflows", level: "Advanced" },
      { name: "Git / Trunk-Based Development", level: "Expert" },
      { name: "LLM Integration & AI Agents", level: "Proficient" },
      { name: "Docker Basics & Linux Scripts", level: "Proficient" },
      { name: "Quality Assurance & Profiling", level: "Advanced" },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "2023 — Hiện tại",
    role: "Lead Mobile & System Architect",
    company: "SABO Media & Technology (SABO M&T)",
    badge: "Hiện tại",
    description:
      "Chủ trì kiến trúc kỹ thuật ứng dụng SABO ARENA và SABOHUB. Triển khai phân quyền RLS Supabase bảo mật tuyệt đối, chuẩn hóa pipeline Codemagic CI/CD cho cả Android và iOS, phục vụ hàng chục ngàn người chơi và hàng trăm câu lạc bộ bida trên toàn quốc.",
    skills: ["Flutter", "Supabase RLS", "PostgreSQL", "Codemagic", "Next.js", "Vercel"],
  },
  {
    period: "2021 — 2023",
    role: "Senior Flutter / Full-stack Developer",
    company: "Fintech & Sports SaaS Solutions",
    description:
      "Phát triển ứng dụng di động cho lĩnh vực thể thao và dịch vụ: ứng dụng quản lý câu lạc bộ võ thuật, định tuyến kỹ thuật viên theo vị trí GPS, tích hợp các cổng thanh toán điện tử (VNPay, VietQR, MoMo) và hệ thống điểm danh QR Offline-first.",
    skills: ["Flutter", "Firebase", "TypeScript", "Fastify", "Redis", "Payment Gateways"],
  },
  {
    period: "2021 — 2025",
    role: "Cử nhân Tài chính - Ngân hàng",
    company: "Trường Đại học Sài Gòn (SGU)",
    badge: "Học vấn",
    description:
      "Tốt nghiệp Cử nhân Tài chính - Ngân hàng. Nền tảng kiến thức bài bản về thị trường tài chính, định chế ngân hàng, kế toán doanh nghiệp và dòng tiền — tạo nền móng vững chắc cho tư duy phát triển các hệ thống POS, quản lý doanh thu và SaaS dịch vụ.",
    skills: ["Finance & Banking", "Corporate Accounting", "Cashflow Analysis", "Business Modeling"],
  },
];
