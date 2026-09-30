export interface PersonalInfo {
  name: string;
  brand: string;
  positioning: string;
  tagline: string;
  labels: string[];
  introCopy: string;
  aboutCopy: string;
  aboutHighlights: string[];
  philosophyHeadline: string[];
  philosophyCopy: string;
  contactHeadline: string[];
  contactSub: string;
  email: string;
  facebook: string;
  linkedin: string;
  website: string;
  avatar: string;
  location: string;
  status: string;
}

export interface WhatIDoItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  tags: string[];
}

export interface CaseStudyGalleryItem {
  label: string;
  category: string;
  desc: string;
  colorScheme?: string;
  badge?: string;
}

export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  role: string;
  tags: string[];
  tagline: string;
  description?: string;
  challenge: string;
  approach: string;
  whatIDid: string[];
  tools: string[];
  outcome: string;
  gallery: CaseStudyGalleryItem[];
}

export interface DeskFile {
  name: string;
  size: string;
  type: string;
  desc: string;
  status?: string;
  tags?: string[];
}

export interface DeskFolder {
  id: string;
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  files: DeskFile[];
}

export interface ToolItem {
  name: string;
  role: string;
  desc: string;
  badge: string;
}

export interface ToolCategory {
  id: string;
  title: string;
  tagline: string;
  items: ToolItem[];
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  desc: string;
  deliverable: string;
}

export interface TimelineEntry {
  period: string;
  company: string;
  role: string;
  field: string;
  summary: string;
  highlights: string[];
  current?: boolean;
}

// -------------------------------------------------------------
// 1. THÔNG TIN CÁ NHÂN (PERSONAL INFO)
// -------------------------------------------------------------
export const PERSONAL_INFO: PersonalInfo = {
  name: "Võ Ngọc Diễm",
  brand: "Vận Hành Doanh Nghiệp × Kỹ Thuật Số × Trí Tuệ Nhân Tạo × Sáng Tạo",
  positioning: "Tư duy vận hành. Định hướng số hóa. Luôn luôn cải tiến.",
  tagline: "“Tôi làm cho mọi thứ vận hành. Sau đó, tôi làm cho chúng tốt hơn.”",
  labels: [
    "VẬN HÀNH",
    "HÀNH CHÍNH & NHÂN SỰ",
    "TÀI CHÍNH",
    "KỸ THUẬT SỐ",
    "TRÍ TUỆ NHÂN TẠO",
    "SÁNG TẠO",
  ],
  introCopy:
    "Tôi tốt nghiệp ngành Tài chính – Ngân hàng với kinh nghiệm thực chiến trong vận hành doanh nghiệp, hành chính, tài chính, nội dung số, thiết kế và tối ưu quy trình bằng AI. Làm việc qua nhiều mảng khác nhau giúp tôi nhìn nhận và giải quyết vấn đề từ cả góc độ vận hành lẫn kỹ thuật số.",
  aboutCopy:
    "Xuất phát điểm của tôi là ngành Tài chính – Ngân hàng, nhưng công việc đã mở rộng sang vận hành, hành chính, quản trị tài chính, nội dung số, thiết kế và công nghệ. Tôi yêu thích việc kết nối các lĩnh vực khác nhau và tìm ra những giải pháp thực tế để cải thiện cách mọi thứ vận hành.",
  aboutHighlights: [
    "TÀI CHÍNH & NGÂN HÀNG",
    "VẬN HÀNH DOANH NGHIỆP",
    "KỸ THUẬT SỐ",
    "TRÍ TUỆ NHÂN TẠO",
    "SÁNG TẠO",
  ],
  philosophyHeadline: [
    "CÔNG VIỆC TỐT",
    "LÀ LÀM CHO",
    "MỌI THỨ",
    "ĐƠN GIẢN HƠN.",
  ],
  philosophyCopy:
    "Dù là quản lý vận hành, sáng tạo nội dung, làm việc với AI hay phát triển giải pháp số, tôi luôn tìm kiếm cách tốt hơn để mọi thứ vận hành hiệu quả.",
  contactHeadline: ["BẠN CÓ DỰ ÁN", "CẦN HIỆN THỰC HÓA?"],
  contactSub: "“Hãy cùng nhau tạo nên những điều hữu ích.”",
  email: "ngocdiem1112@gmail.com",
  facebook: "https://facebook.com/vongocdiem",
  linkedin: "https://linkedin.com/in/vongocdiem",
  website: "https://diem.saboarena.com",
  avatar: "/avatar.jpg",
  location: "TP. Hồ Chí Minh, Việt Nam",
  status: "TRỰC TUYẾN // SẴN SÀNG NHẬN DỰ ÁN",
};

// -------------------------------------------------------------
// 2. LĨNH VỰC HOẠT ĐỘNG (WHAT I DO — 4 TẦNG DOANH NGHIỆP)
// -------------------------------------------------------------
export const WHAT_I_DO: WhatIDoItem[] = [
  {
    id: "operations",
    number: "01",
    title: "VẬN HÀNH",
    subtitle: "Trụ cột quy trình & Quản lý cơ sở",
    description:
      "Kết nối nhịp thở thực tế của sàn đấu với quy trình vận hành chuẩn (SOP), điều phối giải đấu chuyên nghiệp và nâng cao trải nghiệm hội viên.",
    items: [
      "Vận hành Doanh nghiệp",
      "Quản lý Quy trình",
      "Tổ chức Sự kiện & Giải đấu",
      "Trải nghiệm Khách hàng",
    ],
    tags: ["Quy trình SOP", "Vận hành Sàn Bida", "Điều phối giải", "Trải nghiệm CX"],
  },
  {
    id: "admin-finance",
    number: "02",
    title: "HÀNH CHÍNH & TÀI CHÍNH",
    subtitle: "Hệ thống quản trị & Kỷ luật nội bộ",
    description:
      "Dựa trên nền tảng Tài chính – Ngân hàng vững chắc. Quản lý hồ sơ nhân sự, vận hành nội bộ, đối soát thu chi, hợp đồng và chứng từ lưu trữ.",
    items: [
      "Quản trị Nhân sự (HR)",
      "Vận hành Nội bộ",
      "Hỗ trợ Kế toán & Đối soát",
      "Quản lý Chứng từ",
    ],
    tags: ["Tài chính/Ngân hàng", "Hồ sơ Nhân sự", "Kiểm soát chi phí", "Chứng từ SOP"],
  },
  {
    id: "digital",
    number: "03",
    title: "KỸ THUẬT SỐ",
    subtitle: "Hiện diện thương hiệu & Giải pháp giao diện",
    description:
      "Chuyển hóa mục tiêu phát triển thành các điểm chạm số sắc nét: quản trị mạng xã hội, định hướng nội dung, nhận diện thương hiệu và ứng dụng Web/App.",
    items: [
      "Mạng Xã Hội",
      "Chiến lược Nội dung",
      "Quản trị Thương hiệu",
      "Dự án Website / Web-App",
    ],
    tags: ["Nhận diện thương hiệu", "Chiến lược nội dung", "Ứng dụng Web", "Chiến dịch số"],
  },
  {
    id: "ai-automation",
    number: "04",
    title: "AI & TỰ ĐỘNG HÓA",
    subtitle: "Công cụ thông minh & Đòn bẩy hiệu suất",
    description:
      "Khai thác sức mạnh AI thế hệ mới và luồng kích hoạt tự động để tăng tốc độ sản xuất ấn phẩm, xóa bỏ việc lặp lại thủ công và nâng tầm hiệu suất.",
    items: [
      "Công cụ Trí tuệ Nhân tạo",
      "Tự động hóa Quy trình",
      "Hệ thống Nội dung Số",
      "Giải pháp Kỹ thuật số",
    ],
    tags: ["Kỹ nghệ Prompt", "Tự động hóa AI", "Video AI", "Đòn bẩy hiệu suất"],
  },
];

// -------------------------------------------------------------
// 3. DỰ ÁN TIÊU BIỂU (SELECTED WORK — 4 CASE STUDIES)
// -------------------------------------------------------------
export const SELECTED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: "sabo-billiards",
    number: "01",
    title: "SABO BILLIARDS",
    role: "Điều phối Vận hành & Tiếp thị Số",
    tags: ["VẬN HÀNH", "TIẾP THỊ", "TỔ CHỨC SỰ KIỆN"],
    tagline:
      "Quản lý và phát triển các hoạt động vận hành, tiếp thị và kỹ thuật số cho hệ sinh thái câu lạc bộ bida.",
    description:
      "Điều phối vận hành toàn diện và truyền thông cho câu lạc bộ bida thể thao & giải trí có lượng khách đông đảo, kết nối trực tiếp giải đấu trên sàn đấu với ứng dụng SABO Arena.",
    challenge:
      "Các ngày diễn ra giải đấu và giờ cao điểm đòi hỏi sự phối hợp nhịp nhàng giữa nhân viên sàn đấu, tiếp đón cơ thủ, cập nhật bảng đấu trực tiếp và truyền thông mà không xảy ra sự cố hay chậm trễ.",
    approach:
      "Xây dựng bảng kiểm tra (checklist) chuẩn hóa từng ca làm việc, thiết kế trọn bộ ấn phẩm in ấn và truyền thông số, đồng thời liên kết quy trình sàn đấu với hệ thống bảng đấu trực tuyến của SABO Arena.",
    whatIDid: [
      "Điều phối tổ chức giải đấu, đăng ký cơ thủ và giám sát bảng đấu trực tiếp tại câu lạc bộ",
      "Thiết kế poster giải đấu, standee sự kiện và banner truyền thông mạng xã hội chuẩn in ấn (300 DPI)",
      "Chuẩn hóa quy trình mở cửa, kiểm tra thiết bị, xoay bàn và đóng ca hàng ngày của câu lạc bộ",
      "Kết nối quy trình tổ chức thực tế với hệ thống điểm số và bảng đấu di động SABO Arena",
      "Lắng nghe phản hồi khách hàng và thiết lập quy trình chăm sóc hội viên thân thiết",
    ],
    tools: [
      "Nền tảng SABO Arena",
      "Canva Pro",
      "Google Sheets",
      "CapCut",
      "Meta Business Suite",
    ],
    outcome:
      "Rút ngắn thời gian tổ chức giải đấu, chấm dứt tình trạng nhầm lẫn bảng đấu thủ công, tạo lập quy trình sàn đấu rõ ràng và xây dựng hình ảnh thương hiệu đồng bộ, chuyên nghiệp cho câu lạc bộ.",
    gallery: [
      {
        label: "Bộ Poster Giải Đấu",
        category: "In ấn & Visual",
        desc: "Hình ảnh chủ đạo của giải đấu với phong cách metallic cyber và phân cấp nhà tài trợ rõ ràng",
        badge: "CHUẨN IN 300 DPI",
      },
      {
        label: "Hình Ảnh Sự Kiện",
        category: "Chiến dịch Truyền thông",
        desc: "Gói hình ảnh đa kênh cho công bố giải đấu, bảng phân nhánh và vinh danh người chiến thắng",
        badge: "ẤN PHẨM SỐ",
      },
      {
        label: "Hoạt Động Câu Lạc Bộ",
        category: "Vận hành Sàn Đấu",
        desc: "Điều phối trận đấu thực tế, bảng điểm trọng tài và bố trí khu vực khán giả theo dõi",
        badge: "QUY TRÌNH SOP",
      },
      {
        label: "Chương Trình Hội Viên",
        category: "Trải nghiệm Khách hàng",
        desc: "Phân hạng hội viên, bảng quyền lợi và quy trình điểm danh bằng mã QR",
        badge: "GIỮ CHÂN KHÁCH",
      },
      {
        label: "Truyền Thông Mạng Xã Hội",
        category: "Phát triển Cộng đồng",
        desc: "Video ngắn tóm tắt khoảnh khắc thi đấu kịch tính và các pha bóng ấn tượng",
        badge: "LAN TỎA",
      },
      {
        label: "Luồng Ứng Dụng SABO Arena",
        category: "Tích hợp Kỹ thuật số",
        desc: "Trực quan hóa bảng đấu trực tiếp, cập nhật trạng thái trận đấu và điểm danh cơ thủ trên di động",
        badge: "APP DI ĐỘNG",
      },
    ],
  },
  {
    id: "sabo-media-tech",
    number: "02",
    title: "SABO MEDIA & TECHNOLOGY",
    role: "Chuyên viên Vận hành & Sản xuất Nội dung Số",
    tags: ["KỸ THUẬT SỐ", "TRÍ TUỆ NHÂN TẠO", "GIẢI PHÁP DOANH NGHIỆP"],
    tagline:
      "Hỗ trợ các sản phẩm kỹ thuật số, hệ thống nội dung và giải pháp kinh doanh ứng dụng công nghệ.",
    description:
      "Đóng vai trò cầu nối vận hành trong công ty công nghệ: điều phối tiến độ bàn giao sản phẩm, sản xuất tư liệu số và chuẩn hóa tài liệu cho khách hàng doanh nghiệp.",
    challenge:
      "Môi trường công nghệ chuyển động nhanh đòi hỏi sự liên kết chặt chẽ giữa tiến độ bàn giao cho khách hàng, các đợt phát hành phần mềm, tính đồng bộ thương hiệu và xuất bản nội dung đa kênh.",
    approach:
      "Áp dụng khung theo dõi tiến độ linh hoạt, chuẩn hóa các mẫu thiết kế số và đưa các luồng soạn thảo nội dung ứng dụng AI vào hỗ trợ ra mắt sản phẩm nội bộ lẫn dự án khách hàng.",
    whatIDid: [
      "Theo dõi tiến độ bàn giao dự án, các cột mốc quan trọng và hàng đợi công việc liên phòng ban",
      "Thiết kế tài liệu thuyết trình (pitch deck), ấn phẩm thương hiệu và bản mẫu giao diện cho đối tác",
      "Soạn thảo tài liệu hướng dẫn kỹ thuật, cẩm nang người dùng và thông báo tính năng mới",
      "Hỗ trợ kiểm thử trải nghiệm (QA) các ứng dụng web và di động trước khi triển khai chính thức",
      "Theo dõi chi phí vận hành nội bộ và quản lý hợp đồng với các đối tác dịch vụ",
    ],
    tools: [
      "Google Workspace",
      "Figma",
      "Hệ sinh thái Next.js",
      "ChatGPT",
      "Slack / Notion",
    ],
    outcome:
      "Gia tăng tính minh bạch trong tiến độ dự án, giảm thiểu thời gian chỉnh sửa ấn phẩm số và chuẩn hóa hệ thống tài liệu bàn giao chuyên nghiệp cho doanh nghiệp.",
    gallery: [
      {
        label: "Hình Ảnh Website",
        category: "Giao diện Web & UI",
        desc: "Giao diện cổng thông tin doanh nghiệp và trang landing page với hiệu ứng kính tối màu hiện đại",
        badge: "WEB ĐA THIẾT BỊ",
      },
      {
        label: "Hệ Thống Nhận Diện",
        category: "Bộ Nhận Diện",
        desc: "Quy chuẩn kiểu chữ, bảng màu ánh kim metallic và bộ biểu tượng vector sắc nét",
        badge: "QUY CHUẨN DESIGN",
      },
      {
        label: "Giao Diện Nền Tảng SaaS",
        category: "Thiết kế Sản phẩm",
        desc: "Bảng điều khiển quản trị tinh gọn và trực quan hóa dữ liệu phục vụ vận hành rõ ràng",
        badge: "GIAO DIỆN QUẢN TRỊ",
      },
      {
        label: "Hệ Thống Nội Dung Số",
        category: "Biên tập Nội dung",
        desc: "Lịch xuất bản định kỳ hàng tuần và bộ tư liệu truyền thông đồng bộ đa kênh",
        badge: "QUY TRÌNH NỘI DUNG",
      },
      {
        label: "Khung Giải Pháp AI",
        category: "Công nghệ",
        desc: "Bộ mẫu prompt tự động hóa tóm tắt nghiệp vụ và soạn thảo nội dung theo yêu cầu khách hàng",
        badge: "TỰ ĐỘNG HÓA AI",
      },
    ],
  },
  {
    id: "sabo-hub",
    number: "03",
    title: "SABO HUB",
    role: "Khám phá Quy trình AI & Tự động hóa",
    tags: ["TRÍ TUỆ NHÂN TẠO", "TỰ ĐỘNG HÓA", "SẢN PHẨM"],
    tagline:
      "Khám phá các quy trình làm việc và tự động hóa ứng dụng AI cho các hoạt động kinh doanh hàng ngày.",
    description:
      "Nghiên cứu ứng dụng các mô hình ngôn ngữ lớn, tác tử tự chủ và công cụ tạo sinh hình ảnh/video vào giải quyết các bài toán vận hành thực tế.",
    challenge:
      "Những công việc hành chính lặp đi lặp lại—tổng hợp bảng tính, tóm tắt cuộc họp đối tác, định dạng lại văn bản quảng bá và soạn thảo thông báo—chiếm rất nhiều thời gian của đội ngũ.",
    approach:
      "Nghiên cứu và tích hợp các công cụ AI tiên phong (ChatGPT, Manus, Kling, Higgsfield) kết hợp cùng bảng tính đám mây và biểu mẫu tùy biến để tạo nên chu trình tự động hóa có con người giám sát.",
    whatIDid: [
      "Xây dựng thư viện prompt chuẩn hóa phục vụ tóm tắt báo cáo kinh doanh và quét thị trường",
      "Thử nghiệm luồng tác tử tự chủ (Autonomous Agent) với Manus AI để tự động hóa nghiên cứu",
      "Thiết lập công thức bảng tính nâng cao và tập lệnh tự động gửi thông báo nội bộ",
      "Sản xuất thử nghiệm các ý tưởng hình ảnh và video ngắn bằng công cụ tạo video AI (Higgsfield, Kling)",
      "Soạn thảo hướng dẫn sử dụng AI an toàn và hiệu quả cho các thành viên trong nhóm",
    ],
    tools: [
      "ChatGPT",
      "Manus AI",
      "Higgsfield",
      "Kling",
      "Google Sheets Scripts",
    ],
    outcome:
      "Rút ngắn đáng kể thời gian lên ý tưởng nội dung, loại bỏ gánh nặng định dạng văn bản thủ công và trang bị cho đồng đội bộ công cụ AI thực tế dễ dùng mỗi ngày.",
    gallery: [
      {
        label: "Mô Hình Quy Trình AI",
        category: "Thiết kế Hệ thống",
        desc: "Sơ đồ luồng tiếp nhận yêu cầu, xử lý tự động bằng AI và điểm kiểm duyệt của con người",
        badge: "SƠ ĐỒ QUY TRÌNH",
      },
      {
        label: "Giao Diện & Thư Viện Prompt",
        category: "Kỹ nghệ Prompt",
        desc: "Thư viện prompt tùy biến chuẩn xác cho báo cáo tổng quan, bảng biểu tài chính và nội dung",
        badge: "THƯ VIỆN PROMPT",
      },
      {
        label: "Sơ Đồ Tự Động Hóa",
        category: "Kiến trúc Luồng",
        desc: "Liên kết dữ liệu giữa Google Sheets, thông báo tự động và ấn phẩm hoàn thiện",
        badge: "KIẾN TRÚC LUỒNG",
      },
      {
        label: "Giao Diện Mẫu Sản Phẩm",
        category: "Thiết kế Giao diện",
        desc: "Không gian làm việc trực quan giúp nhân sự kích hoạt các luồng AI chỉ với một nút bấm",
        badge: "GIAO DIỆN MẪU",
      },
    ],
  },
  {
    id: "sabo-design",
    number: "04",
    title: "SABO DESIGN",
    role: "Trưởng nhóm Thiết kế Sáng tạo",
    tags: ["NHẬN DIỆN THƯƠNG HIỆU", "THIẾT KẾ ĐỒ HỌA", "SÁNG TẠO"],
    tagline:
      "Tạo dựng bộ nhận diện thương hiệu, ấn phẩm quảng bá và nội dung số cho các dự án SABO.",
    description:
      "Định hình phong cách thị giác mạnh mẽ, hiện đại cho các dự án giải đấu thể thao, câu lạc bộ và truyền thông công nghệ.",
    challenge:
      "Xây dựng phong cách thị giác khác biệt và nhất quán, nổi bật trong không gian giải trí thể thao và truyền thông số, đồng thời đảm bảo tuyệt đối các tiêu chuẩn kỹ thuật in ấn.",
    approach:
      "Xây dựng ngôn ngữ thị giác mang tông xanh đêm đặc trưng, kết hợp chữ metallic chrome, lưới hình học sắc nét và độ tương phản cao, phù hợp cho cả bản in khổ lớn lẫn màn hình di động.",
    whatIDid: [
      "Thiết kế poster sự kiện thể thao, backdrop sân khấu và standee đón khách (chuẩn in 300 DPI)",
      "Sáng tạo biểu trưng thương hiệu, huy hiệu kỷ niệm và chứng nhận thi đấu",
      "Thiết kế chuỗi bài đăng mạng xã hội (carousel), ảnh bìa video và ấn phẩm story tương tác",
      "Trực tiếp kiểm duyệt màu in (test proof) tại xưởng in để đảm bảo chuẩn hệ màu CMYK",
      "Quản lý kho tài nguyên đồ họa trên đám mây để đội ngũ tiếp thị dễ dàng khai thác",
    ],
    tools: [
      "Canva Pro",
      "Photoshop",
      "Illustrator",
      "CapCut",
      "Quy chuẩn In ấn CMYK",
    ],
    outcome:
      "Bàn giao hàng chục bộ ấn phẩm in ấn chuẩn xác không lỗi màu, tạo ấn tượng nhận diện thương hiệu mạnh mẽ cho các giải đấu và nâng tầm thẩm mỹ truyền thông.",
    gallery: [
      {
        label: "Bộ Poster Giải Đấu",
        category: "Ấn phẩm In ấn",
        desc: "Poster giải thi đấu đặc trưng với chữ 3D metallic nổi bật và ánh sáng viền sắc sảo",
        badge: "KHỔ LỚN",
      },
      {
        label: "Biểu Trưng & Logo",
        category: "Nhận diện Thương hiệu",
        desc: "Huy hiệu hình học, biểu tượng câu lạc bộ và dấu ấn nhận diện tối giản",
        badge: "VECTOR GỐC",
      },
      {
        label: "Bằng Khen & Chứng Nhận",
        category: "Ấn phẩm Vinh danh",
        desc: "Chứng nhận thành tích giải đấu với hoa văn guilloche bảo an và ép kim sang trọng",
        badge: "ÉP KIM CAO CẤP",
      },
      {
        label: "Thiết Kế Mạng Xã Hội",
        category: "Bài đăng Đa kênh",
        desc: "Bố cục chuỗi ảnh carousel tối ưu hóa tỉ lệ giữ chân người xem trên Facebook và Instagram",
        badge: "BÀI ĐĂNG MXH",
      },
      {
        label: "Hình Ảnh Chiến Dịch",
        category: "Truyền thông Tiếp thị",
        desc: "Bộ công cụ truyền thông toàn diện phục vụ khai trương, giải đấu mùa và hợp tác đối tác",
        badge: "VISUAL CHÍNH",
      },
    ],
  },
];

// -------------------------------------------------------------
// 4. BÀN LÀM VIỆC SỐ (DIGITAL DESK — 6 THƯ MỤC)
// -------------------------------------------------------------
export const DIGITAL_DESK_FOLDERS: DeskFolder[] = [
  {
    id: "sabo",
    slug: "/ SABO",
    name: "Hệ Sinh Thái SABO",
    badge: "QUY_CHUẨN",
    tagline: "Khung vận hành & Tài liệu tiêu chuẩn hệ sinh thái",
    description:
      "Hồ sơ quy trình vận hành sàn đấu bida, tiêu chuẩn câu lạc bộ và liên kết nghiệp vụ giữa thể thao và công nghệ.",
    files: [
      {
        name: "Quy_Trinh_SOP_SABO_Arena_v2.pdf",
        size: "2.4 MB",
        type: "Tài liệu Quy trình SOP",
        desc: "Quy chuẩn điều hành giải đấu, sắp xếp bàn thi đấu và quy tắc trọng tài.",
        status: "ĐANG ÁP DỤNG",
        tags: ["Vận hành", "SOP", "Arena"],
      },
      {
        name: "Lich_Trinh_Giai_Dau_Master.xlsx",
        size: "840 KB",
        type: "Bảng tính Kế hoạch & Hậu cần",
        desc: "Lịch trình giải đấu thường niên, phân hạng cơ thủ và cơ cấu giải thưởng.",
        status: "ĐÃ KHÓA",
        tags: ["Tài chính", "Hậu cần"],
      },
      {
        name: "Checklist_Mo_Dong_Ca_Hang_Ngay.md",
        size: "18 KB",
        type: "Bảng kiểm tra Tiêu chuẩn",
        desc: "Từng bước kiểm tra mở cửa, rà soát nỉ bàn bida, kho nước và đóng ca an toàn.",
        status: "ĐÃ XÁC THỰC",
        tags: ["Quy chuẩn ca"],
      },
    ],
  },
  {
    id: "projects",
    slug: "/ PROJECTS",
    name: "Dự Án Đang Triển Khai",
    badge: "TIẾN_ĐỘ",
    tagline: "Tiến độ bàn giao & Hồ sơ chất lượng thực chiến",
    description:
      "Theo dõi nhiệm vụ, bảng ma trận cột mốc và nhật ký kiểm thử trên các dự án công nghệ và sự kiện câu lạc bộ.",
    files: [
      {
        name: "Lo_Trinh_Cot_Moc_Quy.gantt",
        size: "1.1 MB",
        type: "Kế hoạch Tiến độ",
        desc: "Phân bổ nhân lực và thời gian giữa các mảng thiết kế, công nghệ và sự kiện.",
        status: "ĐANG CHẠY",
        tags: ["Kế hoạch", "Cột mốc"],
      },
      {
        name: "Ma_Tran_Nghiem_Thu_Doi_Tac.pdf",
        size: "3.2 MB",
        type: "Hồ sơ Bàn giao",
        desc: "Bảng kiểm tra chất lượng và tiêu chuẩn nghiệm thu nền tảng số.",
        status: "HOÀN THÀNH",
        tags: ["QA", "Bàn giao"],
      },
      {
        name: "Theo_Doi_Phan_Hoi_Tinh_Nang.json",
        size: "95 KB",
        type: "Cấu hình Dữ liệu",
        desc: "Phân loại ý kiến đóng góp từ người dùng để cải thiện ứng dụng di động.",
        status: "ĐỒNG BỘ",
        tags: ["Sản phẩm", "App"],
      },
    ],
  },
  {
    id: "content",
    slug: "/ CONTENT",
    name: "Nội Dung & Truyền Thông",
    badge: "XUẤT_BẢN",
    tagline: "Kịch bản video ngắn bắt trend & Lịch xuất bản",
    description:
      "Kịch bản giữ chân người xem, cấu trúc nhịp điệu video và lịch đăng bài tối ưu thuật toán mạng xã hội.",
    files: [
      {
        name: "Khung_Mo_Dau_3Giay_Video_Ngan.doc",
        size: "480 KB",
        type: "Định hướng Kịch bản",
        desc: "Kỹ thuật giữ chân người xem trong 3 giây đầu tiên cho TikTok, Reels và Shorts.",
        status: "ĐÃ HIỆU CHỈNH",
        tags: ["Video AI", "Kịch bản"],
      },
      {
        name: "Lich_Xuat_Ban_Noi_Dung_Thang.sheet",
        size: "1.8 MB",
        type: "Kế hoạch Nội dung",
        desc: "Chủ đề bài đăng, phân công hình ảnh và các điểm kiểm duyệt nội dung.",
        status: "ĐANG CHẠY",
        tags: ["Kế hoạch", "Lịch đăng"],
      },
      {
        name: "Bao_Cao_Phan_Hoi_Cong_Dong.pdf",
        size: "4.5 MB",
        type: "Báo cáo Định tính",
        desc: "Tổng hợp cảm nhận người xem và đề xuất cải tiến cho chiến dịch sau.",
        status: "LƯU TRỮ",
        tags: ["Cộng đồng", "Tăng trưởng"],
      },
    ],
  },
  {
    id: "ai-workflow",
    slug: "/ AI WORKFLOW",
    name: "Phòng Thử Nghiệm AI",
    badge: "TỰ_ĐỘNG_HÓA",
    tagline: "Thư viện prompt chuẩn & Thử nghiệm tác tử tự động",
    description:
      "Tận dụng AI để xử lý các công việc bàn giấy lặp lại và thử nghiệm các định dạng hình ảnh/video thế hệ mới.",
    files: [
      {
        name: "Bo_Prompt_Nghiep_Vu_v4.prompt",
        size: "128 KB",
        type: "Gói Prompt Chuẩn",
        desc: "Chuỗi prompt kiểm tra báo cáo, đối soát văn bản và tóm tắt biên bản họp.",
        status: "ỔN ĐỊNH",
        tags: ["AI", "Vận hành"],
      },
      {
        name: "Nhat_Ky_Tac_Tu_Manus.json",
        size: "64 KB",
        type: "Nhật ký Tác tử",
        desc: "Luồng tự động chạy: tìm kiếm đối thủ, so sánh mức giá và lập bản tóm tắt.",
        status: "ĐÃ XỬ LÝ",
        tags: ["Tác tử", "Tự động"],
      },
      {
        name: "So_Sanh_Higgsfield_Kling.md",
        size: "32 KB",
        type: "Ghi chú Nghiên cứu",
        desc: "Đánh giá độ mượt của chuyển động, tốc độ góc quay và tính chân thực của khung hình.",
        status: "CẬP NHẬT",
        tags: ["Video AI"],
      },
    ],
  },
  {
    id: "design",
    slug: "/ DESIGN",
    name: "Kho Lưu Trữ Thiết Kế",
    badge: "TƯ_LIỆU_ĐỒ_HỌA",
    tagline: "Poster chuẩn in ấn, bộ vector & Nhận diện thương hiệu",
    description:
      "File in ấn hệ màu CMYK, quy chuẩn kiểu chữ, chứng nhận vinh danh và ấn phẩm quảng bá thể thao sắc nét.",
    files: [
      {
        name: "Poster_Giai_Dau_Master.cmyk",
        size: "52.4 MB",
        type: "File Gốc In Ấn (300 DPI)",
        desc: "Thiết kế poster nhiều lớp với các mảng ép kim metallic và đường bế cắt chuẩn xác.",
        status: "ĐÃ DUYỆT IN",
        tags: ["In ấn", "Visual chính"],
      },
      {
        name: "Bo_Nhan_Dien_SABO_2026.vector",
        size: "14.2 MB",
        type: "Bộ Vector Gốc",
        desc: "Tập tin SVG, AI và EPS cho logo chữ, biểu tượng và con dấu nhận diện.",
        status: "QUY CHUẨN",
        tags: ["Nhận diện", "Vector"],
      },
      {
        name: "Mau_Chung_Nhan_Vinh_Danh.ai",
        size: "8.6 MB",
        type: "Mẫu Bằng Khen",
        desc: "Chứng nhận thành tích khung viền hoa văn guilloche sang trọng.",
        status: "SẴN SÀNG IN",
        tags: ["Chứng nhận"],
      },
    ],
  },
  {
    id: "digital-stack",
    slug: "/ DIGITAL",
    name: "Sản Phẩm & Ứng Dụng Số",
    badge: "CÔNG_NGHỆ",
    tagline: "Kiến trúc web hiện đại & Kiểm thử ứng dụng di động",
    description:
      "Hệ thống thành phần giao diện, ứng dụng di động Flutter và tích hợp cơ sở dữ liệu điểm danh trực tiếp.",
    files: [
      {
        name: "SABO_Arena_App_Build.apk",
        size: "38.6 MB",
        type: "Ứng dụng Android",
        desc: "Bản dựng ứng dụng di động Flutter hỗ trợ xem bảng đấu và điểm danh cơ thủ.",
        status: "ỔN ĐỊNH",
        tags: ["Flutter", "Mobile"],
      },
      {
        name: "Giao_Dien_Portfolio_Theme.tsx",
        size: "42 KB",
        type: "Mã nguồn Next.js",
        desc: "Giao diện phong cách không gian số với hiệu ứng kính và nền WebGL 3D.",
        status: "ĐÃ TRIỂN KHAI",
        tags: ["Next.js", "React"],
      },
      {
        name: "Tu_Dong_Diem_Danh_QR.flow",
        size: "16 KB",
        type: "Luồng Tích Hợp",
        desc: "Kích hoạt xác thực mã QR cập nhật danh sách tham gia theo thời gian thực.",
        status: "HOẠT ĐỘNG",
        tags: ["Mã QR", "Tự động"],
      },
    ],
  },
];

// -------------------------------------------------------------
// 5. CÔNG CỤ SỬ DỤNG (TOOLBOX — 4 NHÓM)
// -------------------------------------------------------------
export const TOOLBOX_CATEGORIES: ToolCategory[] = [
  {
    id: "ai",
    title: "TRÍ TUỆ NHÂN TẠO (AI)",
    tagline: "Tư duy logic & Sáng tạo hình ảnh/video tạo sinh",
    items: [
      {
        name: "ChatGPT",
        role: "Trợ lý Tư duy & Xử lý Dữ liệu",
        desc: "Tư duy logic nâng cao, chuỗi prompt nghiệp vụ và soạn thảo văn bản tự động.",
        badge: "TƯ DUY LOGIC",
      },
      {
        name: "Manus",
        role: "Tác tử AI Tự chủ (Agent)",
        desc: "Luồng nghiên cứu đa bước, thu thập số liệu và tự động hóa tác vụ trọn gói.",
        badge: "TỰ ĐỘNG HÓA",
      },
      {
        name: "Higgsfield",
        role: "Tạo Sinh Chuyển Động Điện Ảnh",
        desc: "Sản xuất video chất lượng điện ảnh cho các chiến dịch mạng xã hội.",
        badge: "VIDEO AI",
      },
      {
        name: "Kling",
        role: "Mô Phỏng Chuyển Động Vật Lý",
        desc: "Mô phỏng chuyển động chân thực và kể chuyện bằng hình ảnh sống động cho video ngắn.",
        badge: "CHUYỂN ĐỘNG AI",
      },
    ],
  },
  {
    id: "creative",
    title: "SÁNG TẠO (CREATIVE)",
    tagline: "Giao tiếp thị giác & Dựng video nhịp nhàng",
    items: [
      {
        name: "Canva",
        role: "Bố cục & Ấn phẩm Nhanh",
        desc: "Thiết kế nhanh ấn phẩm giải đấu, poster sự kiện, carousel và slide trình chiếu.",
        badge: "THIẾT KẾ",
      },
      {
        name: "CapCut",
        role: "Dựng Video Ngắn Nhịp Điệu",
        desc: "Cắt dựng nhịp nhàng, phụ đề động, hiệu ứng âm thanh và video ngắn cuốn hút.",
        badge: "DỰNG VIDEO",
      },
    ],
  },
  {
    id: "business",
    title: "QUẢN TRỊ KINH DOANH (BUSINESS)",
    tagline: "Hành chính doanh nghiệp, tài chính & vận hành",
    items: [
      {
        name: "Google Workspace",
        role: "Vận Hành Cộng Tác Nhóm",
        desc: "Lưu trữ tài liệu tập trung, chia sẻ thư mục và chuẩn hóa quy trình làm việc nhóm.",
        badge: "CỘNG TÁC",
      },
      {
        name: "Excel",
        role: "Phân Tích & Đối Soát Tài Chính",
        desc: "Tính toán tài chính chuẩn xác, kiểm soát chi phí, đối soát số liệu và mô hình hóa.",
        badge: "TÀI CHÍNH",
      },
      {
        name: "Google Sheets",
        role: "Trung Tâm Dữ Liệu Đám Mây",
        desc: "Bảng theo dõi tiến độ dự án, dữ liệu giải đấu và biểu mẫu cập nhật tự động.",
        badge: "BẢNG DỮ LIỆU",
      },
    ],
  },
  {
    id: "digital",
    title: "KỸ THUẬT SỐ (DIGITAL)",
    tagline: "Trang web hiện đại, ứng dụng & luồng kết nối",
    items: [
      {
        name: "Website",
        role: "Kiến Trúc Web Đa Thiết Bị",
        desc: "Xây dựng các trang web tải nhanh, giao diện sắc nét và chuẩn cấu trúc SEO.",
        badge: "WEB",
      },
      {
        name: "Web App",
        role: "Giao Diện Tương Tác",
        desc: "Giao diện người dùng dạng thành phần, dễ thao tác và phục vụ nhu cầu hàng ngày.",
        badge: "ỨNG DỤNG",
      },
      {
        name: "SaaS",
        role: "Nền Tảng Dịch Vụ Số",
        desc: "Cổng thông tin quản trị và hệ thống hỗ trợ vận hành câu lạc bộ.",
        badge: "NỀN TẢNG",
      },
      {
        name: "Automation",
        role: "Tự Động Hóa Kích Hoạt",
        desc: "Kết nối dữ liệu đầu vào, bảng tính và thông báo tới người dùng mượt mà.",
        badge: "TÍCH HỢP",
      },
    ],
  },
];

// -------------------------------------------------------------
// 6. QUY TRÌNH LÀM VIỆC (HOW I WORK — 5 BƯỚC)
// -------------------------------------------------------------
export const HOW_I_WORK_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "HIỂU RÕ",
    subtitle: "Xác định đúng bài toán cốt lõi",
    desc: "Làm rõ mục tiêu kinh doanh, trao đổi cùng các bên liên quan và bóc tách các rào cản vận hành trước khi bắt tay vào thực hiện.",
    deliverable: "Bản tóm tắt mục tiêu & Phân tích rào cản",
  },
  {
    step: "02",
    title: "LẬP KẾ HOẠCH",
    subtitle: "Thiết lập lộ trình rành mạch",
    desc: "Lên thời gian biểu, phân bổ nguồn lực và quy định rõ các cột mốc kiểm tra. Mọi người đều nắm rõ vai trò và thời hạn hoàn thành.",
    deliverable: "Lộ trình hành động & Khung quy trình SOP",
  },
  {
    step: "03",
    title: "THỰC THI",
    subtitle: "Chăm chút từng chi tiết",
    desc: "Triển khai công việc với sự cẩn trọng cao nhất—từ thiết kế ấn phẩm in ấn sắc nét, sắp xếp hậu cần câu lạc bộ đến hoàn thiện hệ thống số.",
    deliverable: "Sản phẩm hoàn thiện & Quy trình kiểm thử",
  },
  {
    step: "04",
    title: "TỰ ĐỘNG HÓA",
    subtitle: "Loại bỏ thao tác lặp lại",
    desc: "Tìm kiếm các bước việc lặp đi lặp lại, áp dụng mẫu prompt AI, liên kết bảng tính và tạo biểu mẫu để hệ thống tự vận hành trơn tru.",
    deliverable: "Luồng tự động & Công cụ AI hỗ trợ",
  },
  {
    step: "05",
    title: "CẢI TIẾN",
    subtitle: "Tối ưu hóa từ thực tế",
    desc: "Lắng nghe phản hồi thực tế từ người dùng, đánh giá hiệu quả vận hành và tinh chỉnh để các lần thực hiện sau nhanh hơn và nhẹ nhàng hơn.",
    deliverable: "Bản cập nhật tối ưu & Đánh giá định tính",
  },
];

export const HOW_I_WORK_COPY =
  "“Tôi không chỉ tập trung hoàn thành một công việc. Tôi luôn tìm cách làm cho quy trình trở nên rõ ràng hơn, nhanh hơn và dễ dàng lặp lại hơn.”";

// -------------------------------------------------------------
// 7. LỘ TRÌNH KINH NGHIỆM (EXPERIENCE TIMELINE)
// -------------------------------------------------------------
export const EXPERIENCE_TIMELINE: TimelineEntry[] = [
  {
    period: "2024",
    company: "Ngân Hàng Quốc Tế VIB",
    role: "Thực Tập Sinh",
    field: "Tài chính / Ngân hàng / Nghiệp vụ Khách hàng",
    summary:
      "Tiếp cận thực tế môi trường ngân hàng thương mại: quy trình xác minh hồ sơ khách hàng, phân tích sơ bộ tình trạng tài chính và tính kỷ luật chứng từ nghiêm ngặt.",
    highlights: [
      "Xác minh thông tin và hoàn thiện chứng từ ngân hàng theo quy chuẩn",
      "Tiếp đón và hỗ trợ tư vấn các sản phẩm dịch vụ tài chính cho khách hàng",
      "Tuân thủ nghiêm ngặt tính bảo mật và kỷ luật quy trình ngành ngân hàng",
    ],
    current: false,
  },
  {
    period: "2025",
    company: "DỰ ÁN KINH DOANH & KỸ THUẬT SỐ",
    role: "Chuyên Viên Độc Lập",
    field: "Nội dung số / Thiết kế Đồ họa / Ứng dụng AI / Digital",
    summary:
      "Trực tiếp thực hiện các hợp đồng đa dạng: sản xuất chuỗi video ngắn, thiết kế bộ nhận diện và poster sự kiện, ứng dụng công cụ AI vào quy trình làm việc thực tế.",
    highlights: [
      "Sản xuất các video ngắn thu hút tương tác và thiết kế poster giải đấu",
      "Sáng tạo biểu trưng, ấn phẩm in ấn và tài liệu quảng bá chuyên nghiệp",
      "Thử nghiệm ứng dụng các mô hình AI để rút ngắn thời gian làm việc hàng ngày",
    ],
    current: false,
  },
  {
    period: "2026 — HIỆN TẠI",
    company: "SABO MEDIA & TECHNOLOGY",
    role: "Chuyên Viên Vận Hành",
    field: "Vận hành / Nhân sự / Hành chính / Tài chính / Kỹ thuật số",
    summary:
      "Điều phối các mảng công việc then chốt trong hệ sinh thái SABO: quản lý câu lạc bộ bida, phụ trách hành chính nhân sự, chứng từ tài chính và hỗ trợ ra mắt sản phẩm công nghệ.",
    highlights: [
      "Giám sát vận hành sàn bida và trực tiếp điều phối tổ chức các giải thi đấu",
      "Quản lý hồ sơ nhân sự, bảng chấm công và hỗ trợ quản trị chi phí nội bộ",
      "Hỗ trợ đưa sản phẩm công nghệ (SABO Arena) vào thực tế và áp dụng AI nội bộ",
    ],
    current: true,
  },
];
