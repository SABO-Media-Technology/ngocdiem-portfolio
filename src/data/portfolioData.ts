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
  brand: "Vận Hành Doanh Nghiệp · Kỹ Thuật Số · Ứng Dụng AI · Sáng Tạo",
  positioning: "Tư duy vận hành vững chắc. Chủ động ứng dụng công nghệ. Luôn tìm cách làm tốt hơn.",
  tagline: "“Tôi làm cho mọi thứ vận hành trơn tru. Sau đó, tối ưu để hiệu quả hơn.”",
  labels: [
    "VẬN HÀNH DOANH NGHIỆP",
    "HÀNH CHÍNH & NHÂN SỰ",
    "TÀI CHÍNH NỘI BỘ",
    "THIẾT KẾ & NỘI DUNG",
    "ỨNG DỤNG AI THỰC TẾ",
  ],
  introCopy:
    "Tôi tốt nghiệp ngành Tài chính – Ngân hàng (Đại học Sài Gòn), có kinh nghiệm thực tế trong vận hành doanh nghiệp, hành chính nhân sự, quản lý thu chi, thiết kế ấn phẩm và ứng dụng AI để tối ưu hóa công việc. Tôi tập trung vào giải pháp thực tế: làm cho quy trình rõ ràng, công việc trôi chảy và tiết kiệm thời gian.",
  aboutCopy:
    "Từ nền tảng Tài chính – Ngân hàng với tính cẩn trọng và kỷ luật cao, tôi mở rộng chuyên môn sang mảng vận hành, truyền thông số và công nghệ. Tôi thích việc sắp xếp mọi thứ ngăn nắp, xây dựng quy trình rõ ràng và dùng công cụ hiện đại để công việc đạt hiệu quả cao nhất.",
  aboutHighlights: [
    "TÀI CHÍNH & NGÂN HÀNG (SGU)",
    "QUẢN LÝ VẬN HÀNH CLB",
    "HÀNH CHÍNH & NHÂN SỰ",
    "THIẾT KẾ POSTER & VIDEO",
    "ỨNG DỤNG AI THỰC CHIẾN",
  ],
  philosophyHeadline: [
    "LÀM CHO MỌI THỨ",
    "RÕ RÀNG VÀ",
    "HIỆU QUẢ HƠN.",
  ],
  philosophyCopy:
    "Một quy trình tốt là quy trình giúp mọi người làm việc dễ dàng hơn, ít sai sót hơn và tiết kiệm tối đa thời gian.",
  contactHeadline: ["BẠN CÓ DỰ ÁN", "CẦN HỢP TÁC?"],
  contactSub: "“Hãy kết nối để cùng nhau tạo nên những công việc hiệu quả và chỉn chu.”",
  email: "ngocdiem1112@gmail.com",
  facebook: "https://facebook.com/vongocdiem",
  linkedin: "https://linkedin.com/in/vongocdiem",
  website: "https://diem.saboarena.com",
  avatar: "/avatar.jpg",
  location: "TP. Hồ Chí Minh, Việt Nam",
  status: "SẴN SÀNG HỢP TÁC & TIẾP NHẬN DỰ ÁN",
};

// -------------------------------------------------------------
// 2. LĨNH VỰC HOẠT ĐỘNG (WHAT I DO — 4 MẢNG NĂNG LỰC)
// -------------------------------------------------------------
export const WHAT_I_DO: WhatIDoItem[] = [
  {
    id: "operations",
    number: "01",
    title: "VẬN HÀNH & SỰ KIỆN",
    subtitle: "Quản lý cơ sở & Điều phối giải đấu",
    description:
      "Xây dựng quy trình làm việc chuẩn (SOP), quản lý hoạt động hàng ngày của câu lạc bộ bida và trực tiếp điều phối các giải đấu từ khâu đón tiếp đến trao giải.",
    items: [
      "Quản lý vận hành câu lạc bộ hàng ngày",
      "Lập bảng checklist mở ca / đóng ca (SOP)",
      "Tổ chức & điều phối giải đấu thể thao",
      "Chăm sóc hội viên & xử lý tình huống",
    ],
    tags: ["Vận hành CLB", "Quy trình SOP", "Tổ chức giải đấu", "Dịch vụ khách hàng"],
  },
  {
    id: "admin-finance",
    number: "02",
    title: "HÀNH CHÍNH & TÀI CHÍNH",
    subtitle: "Kỷ luật số liệu & Quản trị nội bộ",
    description:
      "Nền tảng Tài chính – Ngân hàng vững chắc. Phụ trách quản lý hồ sơ nhân sự, bảng chấm công, theo dõi thu chi nội bộ và lưu trữ hợp đồng, chứng từ ngăn nắp.",
    items: [
      "Quản lý nhân sự, chấm công & nội quy",
      "Theo dõi thu chi, đối soát dòng tiền nội bộ",
      "Quản lý hợp đồng, hóa đơn & chứng từ",
      "Hỗ trợ công tác hành chính văn phòng",
    ],
    tags: ["Hành chính nhân sự", "Quản lý thu chi", "Hồ sơ chứng từ", "Kỷ luật nội bộ"],
  },
  {
    id: "digital",
    number: "03",
    title: "THIẾT KẾ & TRUYỀN THÔNG",
    subtitle: "Ấn phẩm in ấn & Nội dung mạng xã hội",
    description:
      "Thiết kế trọn gói ấn phẩm sự kiện (poster, standee chuẩn in ấn CMYK), lên kịch bản và dựng video ngắn thu hút tương tác trên Facebook, TikTok.",
    items: [
      "Thiết kế poster giải đấu & standee sự kiện",
      "Kiểm duyệt chất lượng in ấn thực tế",
      "Lên ý tưởng & dựng video ngắn (Reels, TikTok)",
      "Quản lý bài đăng & hình ảnh truyền thông",
    ],
    tags: ["Poster sự kiện", "Chuẩn in CMYK", "Dựng video CapCut", "Nội dung đa kênh"],
  },
  {
    id: "ai-automation",
    number: "04",
    title: "ỨNG DỤNG AI & SỐ HÓA",
    subtitle: "Công cụ thông minh tăng năng suất",
    description:
      "Ứng dụng AI (ChatGPT, Claude, Canva AI) kết hợp cùng bảng tính tự động để soạn thảo văn bản, tóm tắt báo cáo và loại bỏ các tác vụ thủ công lặp lại.",
    items: [
      "Dùng AI soạn thảo văn bản, kịch bản nhanh",
      "Tự động hóa cập nhật dữ liệu bảng tính",
      "Ứng dụng AI tạo hình ảnh & video ngắn",
      "Số hóa tài liệu và quy trình làm việc",
    ],
    tags: ["Ứng dụng AI thực tế", "ChatGPT", "Tự động hóa tác vụ", "Tối ưu hiệu suất"],
  },
];

// -------------------------------------------------------------
// 3. DỰ ÁN TIÊU BIỂU (SELECTED WORK — 4 DỰ ÁN THỰC TẾ)
// -------------------------------------------------------------
export const SELECTED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: "sabo-billiards",
    number: "01",
    title: "SABO BILLIARDS",
    role: "Quản lý Vận hành & Điều phối Giải đấu",
    tags: ["VẬN HÀNH CLB", "TỔ CHỨC GIẢI ĐẤU", "THIẾT KẾ SỰ KIỆN"],
    tagline:
      "Vận hành câu lạc bộ bida, chuẩn hóa quy trình ca trực và tổ chức giải đấu kết nối với ứng dụng SABO Arena.",
    description:
      "Trực tiếp quản lý vận hành câu lạc bộ bida thể thao, xây dựng quy trình mở/đóng ca cho nhân viên và tổ chức các giải đấu quy tụ hàng chục cơ thủ.",
    challenge:
      "Những ngày diễn ra giải đấu và giờ cao điểm thường rất đông khách, dễ xảy ra lúng túng trong việc xếp bàn, cập nhật điểm số và đón tiếp nếu thiếu quy trình chuẩn.",
    approach:
      "Xây dựng bảng kiểm tra (checklist) công việc theo từng ca trực, thiết kế đồng bộ ấn phẩm truyền thông và áp dụng ứng dụng di động SABO Arena để quản lý bảng đấu trực tiếp.",
    whatIDid: [
      "Điều phối đăng ký cơ thủ, sắp xếp lịch thi đấu và giám sát bảng đấu tại câu lạc bộ",
      "Thiết kế poster giải đấu, standee sự kiện và banner mạng xã hội chuẩn in ấn (300 DPI)",
      "Chuẩn hóa checklist mở cửa, kiểm tra cơ bàn, bảo quản trang thiết bị và đóng ca hàng ngày",
      "Hướng dẫn cơ thủ sử dụng ứng dụng SABO Arena để theo dõi điểm số và nhánh thi đấu",
      "Tiếp nhận ý kiến đóng góp của hội viên để nâng cao chất lượng dịch vụ câu lạc bộ",
    ],
    tools: [
      "Ứng dụng SABO Arena",
      "Canva Pro",
      "Google Sheets",
      "CapCut",
      "Hệ màu CMYK",
    ],
    outcome:
      "Các giải đấu diễn ra đúng lịch trình, không nhầm lẫn bảng đấu; nhân viên nắm rõ việc cần làm mỗi ca và hình ảnh giải đấu chuyên nghiệp, đồng bộ.",
    gallery: [
      {
        label: "Poster Giải Đấu",
        category: "Ấn phẩm In ấn",
        desc: "Thiết kế poster giải bida với thông tin giải thưởng rõ ràng, phong cách hiện đại chuẩn in ấn",
        badge: "CHUẨN IN 300 DPI",
      },
      {
        label: "Standee & Bảng Chỉ Dẫn",
        category: "Không gian Sự kiện",
        desc: "Bố trí standee chào mừng, sơ đồ bàn thi đấu và bảng quyền lợi nhà tài trợ",
        badge: "HẬU CẦN",
      },
      {
        label: "Hoạt Động Sàn Đấu",
        category: "Vận hành Thực tế",
        desc: "Điều phối trận đấu, bàn trọng tài và khu vực khán giả theo dõi trực tiếp",
        badge: "QUY TRÌNH CA",
      },
      {
        label: "Hội Viên & Khách Hàng",
        category: "Dịch vụ Khách hàng",
        desc: "Quy trình đón tiếp, hướng dẫn điểm danh mã QR và chăm sóc hội viên thân thiết",
        badge: "TRẢI NGHIỆM",
      },
      {
        label: "Video Highlight Giải Đấu",
        category: "Truyền thông MXH",
        desc: "Video ngắn ghi lại các pha cơ đẹp mắt và khoảnh khắc trao giải ấn tượng",
        badge: "CLIP NGẮN",
      },
      {
        label: "Bảng Đấu Trên Ứng Dụng",
        category: "Số hóa Quy trình",
        desc: "Cập nhật kết quả thi đấu thời gian thực lên ứng dụng SABO Arena để cơ thủ theo dõi",
        badge: "APP MOBILE",
      },
    ],
  },
  {
    id: "sabo-media-tech",
    number: "02",
    title: "SABO MEDIA & TECHNOLOGY",
    role: "Hành Chính, Nhân Sự & Hỗ Trợ Dự Án",
    tags: ["HÀNH CHÍNH", "NHÂN SỰ", "QUẢN LÝ THU CHI", "DỰ ÁN SỐ"],
    tagline:
      "Quản lý hành chính nhân sự, theo dõi chi phí nội bộ và hỗ trợ triển khai các sản phẩm công nghệ.",
    description:
      "Đảm nhận công tác hậu cần và vận hành nội bộ công ty: quản lý hồ sơ nhân sự, theo dõi dòng tiền thu chi hành chính và hỗ trợ kiểm thử trải nghiệm người dùng trên các sản phẩm số.",
    challenge:
      "Môi trường công ty công nghệ có nhiều đầu việc đan xen giữa lập trình, thiết kế và kinh doanh; cần sự theo sát để hồ sơ chứng từ không thất lạc và thông tin nội bộ luôn thông suốt.",
    approach:
      "Số hóa hồ sơ nhân sự và bảng theo dõi chi phí trên Google Workspace, lập kế hoạch công việc tuần rõ ràng và làm việc sát sao cùng các nhóm chuyên môn.",
    whatIDid: [
      "Quản lý hồ sơ nhân sự, bảng chấm công và thực hiện các thủ tục tiếp nhận nhân sự mới",
      "Theo dõi các khoản thu chi hành chính, đối soát hóa đơn chứng từ với bộ phận kế toán",
      "Soạn thảo thông báo nội bộ, văn bản hành chính và biên bản các cuộc họp quan trọng",
      "Trực tiếp kiểm thử (test) các tính năng mới trên ứng dụng web và di động từ góc nhìn người dùng",
      "Chuẩn bị tài liệu giới thiệu (pitch deck), ấn phẩm truyền thông cho các buổi gặp gỡ đối tác",
    ],
    tools: [
      "Google Workspace",
      "Excel & Sheets",
      "Canva Pro",
      "Trello",
      "Notion",
    ],
    outcome:
      "Hồ sơ chứng từ được lưu trữ khoa học, dễ tìm kiếm; việc theo dõi thu chi rõ ràng, minh bạch và các đợt cập nhật tính năng sản phẩm được kiểm thử kỹ lưỡng trước khi ra mắt.",
    gallery: [
      {
        label: "Hệ Thống Quản Lý Nội Bộ",
        category: "Hành chính & Nhân sự",
        desc: "Bảng theo dõi nhân sự, chấm công và quản lý thiết bị văn phòng được số hóa",
        badge: "SỐ HÓA HỒ SƠ",
      },
      {
        label: "Hồ Sơ Chứng Từ & Thu Chi",
        category: "Quản trị Tài chính",
        desc: "File đối soát chi phí hành chính hàng tháng rõ ràng, lưu trữ hóa đơn ngăn nắp",
        badge: "MINH BẠCH",
      },
      {
        label: "Tài Liệu Thuyết Trình",
        category: "Tài liệu Doanh nghiệp",
        desc: "Slide giới thiệu dịch vụ và giải pháp công nghệ được thiết kế chỉn chu, chuyên nghiệp",
        badge: "PITCH DECK",
      },
      {
        label: "Kiểm Thử Trải Nghiệm Ứng Dụng",
        category: "Hỗ trợ Sản phẩm",
        desc: "Ghi nhận lỗi giao diện, phản hồi trải nghiệm người dùng trên app SABO Arena",
        badge: "TEST APP",
      },
      {
        label: "Tài Liệu Hướng Dẫn Sử Dụng",
        category: "Quy chuẩn Vận hành",
        desc: "Cẩm nang hướng dẫn thao tác cơ bản cho nhân viên và người dùng mới",
        badge: "HƯỚNG DẪN",
      },
    ],
  },
  {
    id: "sabo-hub",
    number: "03",
    title: "ỨNG DỤNG AI VÀO CÔNG VIỆC",
    role: "Nghiên cứu & Ứng dụng Thực tế",
    tags: ["ỨNG DỤNG AI", "CHATGPT", "TỰ ĐỘNG HÓA", "TỐI ƯU THỜI GIAN"],
    tagline:
      "Ứng dụng ChatGPT và các công cụ AI vào công việc văn phòng hàng ngày để tăng năng suất và giảm thao tác thủ công.",
    description:
      "Tìm hiểu và đưa các công cụ AI vào giải quyết công việc thực tế: từ viết thông báo, tóm tắt nội dung họp đến hỗ trợ lên ý tưởng kịch bản video và thiết kế hình ảnh.",
    challenge:
      "Các công việc văn phòng như viết thông báo, tóm tắt tài liệu dài, lên ý tưởng nội dung thường tốn nhiều giờ làm việc nếu thực hiện hoàn toàn thủ công.",
    approach:
      "Xây dựng các bộ câu lệnh (prompt) mẫu cho từng dạng văn bản, kết hợp công cụ AI với Google Sheets để xử lý dữ liệu và tạo nội dung nhanh chóng, chính xác.",
    whatIDid: [
      "Xây dựng thư viện prompt mẫu phục vụ việc viết email, thông báo nội bộ và tóm tắt biên bản họp",
      "Ứng dụng ChatGPT để gợi ý ý tưởng nội dung, dàn ý bài viết và kịch bản video ngắn",
      "Thử nghiệm các công cụ AI tạo hình ảnh và video để phác thảo nhanh ý tưởng trước khi thiết kế",
      "Tận dụng các công thức và hàm Google Sheets để tự động hóa việc tính toán, phân loại dữ liệu",
      "Chia sẻ các mẹo sử dụng AI hữu ích, dễ áp dụng cho các thành viên trong nhóm",
    ],
    tools: [
      "ChatGPT",
      "Claude",
      "Canva AI",
      "Google Sheets",
      "CapCut AI",
    ],
    outcome:
      "Tiết kiệm khoảng 50% thời gian cho các công việc soạn thảo văn bản và lên ý tưởng, giúp xử lý khối lượng công việc lớn hơn một cách nhẹ nhàng và hiệu quả.",
    gallery: [
      {
        label: "Thư Viện Prompt Mẫu",
        category: "Ứng dụng AI",
        desc: "Tổng hợp các prompt chuẩn cho công tác hành chính, thông báo và tóm tắt văn bản",
        badge: "PROMPT CHUẨN",
      },
      {
        label: "Tự Động Hóa Bảng Tính",
        category: "Xử lý Dữ liệu",
        desc: "Bảng tính ứng dụng công thức tự động liên kết dữ liệu thu chi và chấm công",
        badge: "GOOGLE SHEETS",
      },
      {
        label: "Kịch Bản Video Hỗ Trợ Bằng AI",
        category: "Sáng tạo Nội dung",
        desc: "Quy trình lên kịch bản video ngắn nhanh chóng nhờ trợ lý AI gợi ý góc nhìn",
        badge: "KỊCH BẢN AI",
      },
      {
        label: "Phác Thảo Ý Tưởng Hình Ảnh",
        category: "Thiết kế Nhanh",
        desc: "Ứng dụng AI tạo mẫu ý tưởng trước khi bắt tay vào thiết kế chi tiết",
        badge: "PHÁC THẢO",
      },
    ],
  },
  {
    id: "sabo-design",
    number: "04",
    title: "SABO DESIGN",
    role: "Thiết Kế Ấn Phẩm & Biên Tập Video",
    tags: ["THIẾT KẾ ĐỒ HỌA", "POSTER IN ẤN", "DỰNG VIDEO CAPCUT", "TRUYỀN THÔNG"],
    tagline:
      "Thiết kế poster sự kiện thể thao chuẩn in ấn, hình ảnh nhận diện thương hiệu và dựng video ngắn thu hút.",
    description:
      "Chịu trách nhiệm về mặt hình ảnh và truyền thông: từ poster giải đấu, standee sự kiện khổ lớn chuẩn màu in đến video ngắn highlight trận đấu trên mạng xã hội.",
    challenge:
      "Ấn phẩm in ấn khổ lớn đòi hỏi chất lượng hình ảnh cao và màu sắc chuẩn khi in thực tế (không bị lệch màu hay vỡ hình); trong khi video mạng xã hội cần nhanh và giữ chân người xem tốt.",
    approach:
      "Kiểm soát chặt chẽ thông số kỹ thuật in ấn (hệ màu CMYK, 300 DPI, kiểm duyệt test proof tại xưởng in); với video ngắn thì tập trung vào 3 giây đầu ấn tượng và phụ đề rõ ràng.",
    whatIDid: [
      "Thiết kế poster giải đấu, backdrop sân khấu, standee chỉ dẫn chuẩn file in ấn chất lượng cao",
      "Trực tiếp kiểm tra màu sắc bản in mẫu (test proof) tại xưởng in trước khi in hàng loạt",
      "Thiết kế chuỗi ảnh bài đăng (carousel), banner thông báo cho Fanpage câu lạc bộ",
      "Quay và dựng video ngắn tổng hợp các pha bóng đẹp, khoảnh khắc trao giải bằng CapCut",
      "Sắp xếp và quản lý kho dữ liệu hình ảnh, video của từng giải đấu theo thư mục khoa học",
    ],
    tools: [
      "Canva Pro",
      "Photoshop",
      "CapCut",
      "Hệ màu CMYK",
      "Google Drive",
    ],
    outcome:
      "Bàn giao hơn 30+ bộ ấn phẩm in ấn đạt chuẩn, không gặp lỗi màu hay lỗi kỹ thuật; các video ngắn giải đấu đạt lượng người xem và tương tác tốt trên Fanpage.",
    gallery: [
      {
        label: "Poster Giải Đấu Bida",
        category: "Ấn phẩm In ấn",
        desc: "Poster giải đấu chính thức với phong cách năng động, nổi bật thông tin giải thưởng",
        badge: "IN KHỔ LỚN",
      },
      {
        label: "Bằng Khen & Giấy Chứng Nhận",
        category: "Vinh danh Cơ thủ",
        desc: "Mẫu chứng nhận thành tích thi đấu được thiết kế trang trọng, chỉn chu",
        badge: "CHỨNG NHẬN",
      },
      {
        label: "Bài Đăng Mạng Xã Hội",
        category: "Hình ảnh Fanpage",
        desc: "Bộ hình ảnh thông báo giải đấu, kết quả trận đấu và bảng phân nhánh",
        badge: "BÀI ĐĂNG MXH",
      },
      {
        label: "Video Ngắn Highlight",
        category: "Video Ngắn",
        desc: "Clip ngắn tóm tắt khoảnh khắc thi đấu kịch tính và các đường cơ ấn tượng",
        badge: "DỰNG CAPCUT",
      },
    ],
  },
];

// -------------------------------------------------------------
// 4. BÀN LÀM VIỆC SỐ (DIGITAL DESK — 6 THƯ MỤC CÔNG VIỆC)
// -------------------------------------------------------------
export const DIGITAL_DESK_FOLDERS: DeskFolder[] = [
  {
    id: "sabo",
    slug: "/ 01_VAN_HANH",
    name: "Vận Hành Câu Lạc Bộ",
    badge: "QUY_TRÌNH",
    tagline: "Quy trình làm việc chuẩn & Kế hoạch tổ chức giải đấu",
    description:
      "Tập hợp các tài liệu vận hành thực tế tại câu lạc bộ bida: checklist từng ca trực, lịch thi đấu và bảng theo dõi cơ sở vật chất.",
    files: [
      {
        name: "Quy_Trinh_Mo_Dong_Ca_Hang_Ngay.pdf",
        size: "1.2 MB",
        type: "Tài liệu Quy trình (SOP)",
        desc: "Từng bước kiểm tra bàn bida, chuẩn bị trang thiết bị đầu ca và chốt doanh thu cuối ngày.",
        status: "ĐANG ÁP DỤNG",
        tags: ["Vận hành", "SOP", "Checklist"],
      },
      {
        name: "Ke_Hoach_To_Chuc_Giai_Dau.xlsx",
        size: "650 KB",
        type: "Bảng tính Hậu cần",
        desc: "Lịch thi đấu chi tiết, danh sách cơ thủ tham gia, cơ cấu giải thưởng và phân công nhân sự.",
        status: "HOÀN THIỆN",
        tags: ["Giải đấu", "Hậu cần"],
      },
      {
        name: "Bang_Theo_Doi_Hoi_Vien.xlsx",
        size: "420 KB",
        type: "Bảng Dữ liệu Hội viên",
        desc: "Danh sách hội viên thân thiết, lịch sử tham gia giải và quyền lợi ưu đãi tích điểm.",
        status: "CẬP NHẬT",
        tags: ["Hội viên", "Chăm sóc"],
      },
    ],
  },
  {
    id: "projects",
    slug: "/ 02_HANH_CHINH",
    name: "Hành Chính & Nhân Sự",
    badge: "QUẢN_TRỊ",
    tagline: "Quản lý nhân sự, chấm công & đối soát thu chi",
    description:
      "Hệ thống quản lý công tác hành chính: hồ sơ nhân sự, bảng chấm công hàng tháng và theo dõi chi phí hoạt động nội bộ.",
    files: [
      {
        name: "Bang_Cham_Cong_Va_Nhan_Su.xlsx",
        size: "820 KB",
        type: "Bảng tính Chấm công",
        desc: "Theo dõi ca làm việc, ngày công và các chế độ phụ cấp cho nhân sự công ty và câu lạc bộ.",
        status: "ĐANG DÙNG",
        tags: ["Chấm công", "Nhân sự"],
      },
      {
        name: "Theo_Doi_Thu_Chi_Hanh_Chinh.xlsx",
        size: "950 KB",
        type: "Bảng Đối soát Chi phí",
        desc: "Tổng hợp các khoản chi tiêu hành chính, mua sắm vật tư và lưu trữ hóa đơn rõ ràng.",
        status: "ĐỐI SOÁT",
        tags: ["Tài chính", "Thu chi"],
      },
      {
        name: "Mau_Hop_Dong_Va_Van_Ban.docx",
        size: "340 KB",
        type: "Mẫu Văn bản Chuẩn",
        desc: "Các mẫu hợp đồng dịch vụ, biên bản bàn giao và thông báo nội bộ chuẩn mực.",
        status: "LƯU TRỮ",
        tags: ["Văn bản", "Hợp đồng"],
      },
    ],
  },
  {
    id: "content",
    slug: "/ 03_TRUYEN_THONG",
    name: "Nội Dung & Video",
    badge: "NỘI_DUNG",
    tagline: "Kịch bản video ngắn & Lịch đăng bài mạng xã hội",
    description:
      "Tài liệu xây dựng nội dung Fanpage, kịch bản clip ngắn TikTok/Reels và bộ tiêu đề thu hút người xem.",
    files: [
      {
        name: "Lich_Dang_Bai_Fanpage_Thang.sheet",
        size: "480 KB",
        type: "Kế hoạch Nội dung",
        desc: "Lịch trình xuất bản bài viết hàng tuần: thông báo giải đấu, khuyến mãi và hình ảnh hoạt động.",
        status: "ĐANG CHẠY",
        tags: ["Lịch đăng", "Fanpage"],
      },
      {
        name: "Kich_Ban_Video_Highlight_Bida.docx",
        size: "260 KB",
        type: "Kịch bản Clip ngắn",
        desc: "Cấu trúc kịch bản 30-45 giây: mở đầu ấn tượng, tổng hợp đường cơ đẹp và kêu gọi tương tác.",
        status: "ÁP DỤNG",
        tags: ["Video", "CapCut", "Reels"],
      },
      {
        name: "Bo_Y_Tuong_Tieu_De_Hut_View.txt",
        size: "45 KB",
        type: "Gợi ý Tiêu đề",
        desc: "Tổng hợp các mẫu tiêu đề và cách mở đầu video giữ chân người xem trong 3 giây đầu.",
        status: "THAM KHẢO",
        tags: ["Ý tưởng", "Tiêu đề"],
      },
    ],
  },
  {
    id: "ai-workflow",
    slug: "/ 04_UNG_DUNG_AI",
    name: "Ứng Dụng AI Hàng Ngày",
    badge: "TỐI_ƯU",
    tagline: "Thư viện prompt mẫu & Mẹo sử dụng AI hiệu quả",
    description:
      "Các câu lệnh (prompt) thực tế phục vụ viết văn bản, tóm tắt tài liệu và mẹo ứng dụng AI vào công việc văn phòng.",
    files: [
      {
        name: "Thu_Vien_Prompt_Soan_Van_Ban.txt",
        size: "75 KB",
        type: "Bộ Prompt Mẫu",
        desc: "Các prompt chuẩn để ChatGPT hỗ trợ viết email trang trọng, thông báo nội bộ và tóm tắt họp.",
        status: "ĐANG DÙNG",
        tags: ["ChatGPT", "Prompt"],
      },
      {
        name: "Huong_Dan_Dung_AI_Trong_Van_Phong.pdf",
        size: "1.4 MB",
        type: "Tài liệu Hướng dẫn",
        desc: "Cách áp dụng AI đơn giản, dễ hiểu để tiết kiệm thời gian xử lý văn bản và số liệu.",
        status: "CHIA SẺ",
        tags: ["Tài liệu", "AI thực tế"],
      },
      {
        name: "Ham_Tu_Dong_Google_Sheets.xlsx",
        size: "320 KB",
        type: "Bảng tính Tự động",
        desc: "Tập hợp các công thức hữu ích giúp tự động lọc dữ liệu, tính tổng và đối soát số liệu nhanh.",
        status: "HỮU ÍCH",
        tags: ["Sheets", "Công thức"],
      },
    ],
  },
  {
    id: "design",
    slug: "/ 05_THIET_KE",
    name: "Ấn Phẩm Thiết Kế",
    badge: "ĐỒ_HỌA",
    tagline: "Poster chuẩn in ấn CMYK & Mẫu giấy chứng nhận",
    description:
      "File thiết kế poster sự kiện thể thao, standee đón khách, chứng nhận thành tích và hình ảnh Fanpage.",
    files: [
      {
        name: "Poster_Giai_Dau_SABO_Open.pdf",
        size: "24.5 MB",
        type: "File In Ấn (300 DPI)",
        desc: "Thiết kế poster giải đấu thể thao hệ màu CMYK, bố cục rõ ràng, chuẩn bị cho xưởng in.",
        status: "ĐÃ IN",
        tags: ["Poster", "CMYK", "In ấn"],
      },
      {
        name: "Mau_Giay_Khen_Chung_Nhan.pdf",
        size: "8.2 MB",
        type: "Mẫu Chứng Nhận",
        desc: "Chứng nhận giải đấu thiết kế trang trọng, phục vụ lễ bế mạc và trao thưởng cơ thủ.",
        status: "SẴN SÀNG",
        tags: ["Chứng nhận", "Giải thưởng"],
      },
      {
        name: "Bo_Khung_Anh_Bai_Dang_Fanpage.zip",
        size: "12.8 MB",
        type: "Bộ Mẫu Thiết Kế",
        desc: "Các khung mẫu bài đăng mạng xã hội đồng bộ theo nhận diện thương hiệu câu lạc bộ.",
        status: "ĐỒNG BỘ",
        tags: ["Canva", "Fanpage"],
      },
    ],
  },
  {
    id: "digital-stack",
    slug: "/ 06_SABO_ARENA",
    name: "Nền Tảng SABO Arena",
    badge: "ỨNG_DỤNG",
    tagline: "Hướng dẫn sử dụng & Ghi nhận trải nghiệm người dùng",
    description:
      "Tài liệu hướng dẫn vận hành giải đấu qua ứng dụng SABO Arena và sổ theo dõi phản hồi thực tế từ cơ thủ.",
    files: [
      {
        name: "Huong_Dan_Tao_Giai_Tren_App.pdf",
        size: "2.1 MB",
        type: "Cẩm nang Thao tác",
        desc: "Các bước tạo giải đấu, bốc thăm phân nhánh và cập nhật tỉ số trực tiếp trên ứng dụng.",
        status: "HƯỚNG DẪN",
        tags: ["App", "Hướng dẫn"],
      },
      {
        name: "So_Ghi_Nhan_Gop_Y_Cua_Co_Thu.xlsx",
        size: "380 KB",
        type: "Ghi nhận Phản hồi",
        desc: "Tổng hợp các ý kiến đóng góp của người chơi để gửi cho đội ngũ kỹ thuật cải tiến ứng dụng.",
        status: "THEO DÕI",
        tags: ["Phản hồi", "Cải tiến"],
      },
      {
        name: "Quy_Trinh_Diem_Danh_Bang_QR.pdf",
        size: "950 KB",
        type: "Quy trình Điểm danh",
        desc: "Hướng dẫn nhân viên quét mã QR xác nhận cơ thủ có mặt tại bàn thi đấu.",
        status: "ÁP DỤNG",
        tags: ["Mã QR", "Điểm danh"],
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
    title: "ỨNG DỤNG AI",
    tagline: "Hỗ trợ soạn thảo, lên ý tưởng và xử lý nội dung",
    items: [
      {
        name: "ChatGPT",
        role: "Trợ lý Soạn thảo & Tư duy",
        desc: "Hỗ trợ soạn văn bản hành chính, lên dàn ý kịch bản và tóm tắt biên bản họp nhanh chóng.",
        badge: "VIẾT LÁCH & TƯ DUY",
      },
      {
        name: "Claude",
        role: "Hỗ trợ Xử lý Tài liệu",
        desc: "Đọc hiểu tài liệu dài, trích xuất thông tin quan trọng và trau chuốt câu chữ mạch lạc.",
        badge: "XỬ LÝ VĂN BẢN",
      },
      {
        name: "Canva AI",
        role: "Gợi ý Hình ảnh Nhanh",
        desc: "Tạo hình ảnh minh họa nhanh và hỗ trợ tách nền, chỉnh sửa ảnh tiện lợi.",
        badge: "ẢNH NHANH",
      },
      {
        name: "CapCut AI",
        role: "Tạo Phụ Đề Tự Động",
        desc: "Tự động nhận diện giọng nói và tạo phụ đề video chính xác, tiết kiệm thời gian gõ chữ.",
        badge: "PHỤ ĐỀ TỰ ĐỘNG",
      },
    ],
  },
  {
    id: "creative",
    title: "THIẾT KẾ & VIDEO",
    tagline: "Ấn phẩm sự kiện, poster in ấn và dựng clip ngắn",
    items: [
      {
        name: "Canva Pro",
        role: "Thiết Kế Ấn Phẩm Nhanh",
        desc: "Thiết kế poster sự kiện, standee, slide trình chiếu và ảnh đăng mạng xã hội bắt mắt.",
        badge: "THIẾT KẾ ĐỒ HỌA",
      },
      {
        name: "CapCut",
        role: "Dựng Video Ngắn",
        desc: "Cắt ghép video, chèn nhạc, hiệu ứng chuyển cảnh và làm clip highlight cho các giải đấu.",
        badge: "DỰNG VIDEO",
      },
      {
        name: "Photoshop",
        role: "Xử Lý Ảnh Chuyên Sâu",
        desc: "Chỉnh sửa hình ảnh, cắt ghép cơ bản và kiểm tra chất lượng file trước khi in ấn.",
        badge: "CHỈNH SỬA ẢNH",
      },
      {
        name: "Kỹ thuật In CMYK",
        role: "Kiểm Chuẩn Màu In",
        desc: "Thiết lập đúng chuẩn 300 DPI, chuyển hệ màu CMYK và kiểm duyệt mẫu in thực tế tại xưởng.",
        badge: "CHUẨN IN ẤN",
      },
    ],
  },
  {
    id: "business",
    title: "HÀNH CHÍNH & VẬN HÀNH",
    tagline: "Quản lý nhân sự, theo dõi chi phí và quy trình làm việc",
    items: [
      {
        name: "Google Workspace",
        role: "Làm Việc Nhóm Đám Mây",
        desc: "Soạn thảo văn bản, chia sẻ tài liệu và quản lý thư mục làm việc chung khoa học.",
        badge: "CỘNG TÁC",
      },
      {
        name: "Excel & Google Sheets",
        role: "Quản Lý Số Liệu & Chấm Công",
        desc: "Tính toán bảng chấm công, đối soát thu chi nội bộ và quản lý danh sách giải đấu.",
        badge: "SỐ LIỆU",
      },
      {
        name: "Trello & Notion",
        role: "Quản Lý Đầu Việc",
        desc: "Theo dõi tiến độ công việc theo tuần, nhắc nhở hạn chót và phân công nhiệm vụ rõ ràng.",
        badge: "TIẾN ĐỘ",
      },
    ],
  },
  {
    id: "digital",
    title: "KỸ THUẬT SỐ",
    tagline: "Ứng dụng giải đấu, biểu mẫu và số hóa công việc",
    items: [
      {
        name: "SABO Arena",
        role: "Nền Tảng Quản Lý Giải Đấu",
        desc: "Ứng dụng trực tiếp để tạo giải bida, xếp nhánh thi đấu và cập nhật tỉ số cho cơ thủ.",
        badge: "ỨNG DỤNG CHUYÊN BIỆT",
      },
      {
        name: "Google Forms",
        role: "Thu Thập Dữ Liệu Nhanh",
        desc: "Tạo biểu mẫu đăng ký giải đấu, khảo sát ý kiến khách hàng và tự động đổ về bảng tính.",
        badge: "BIỂU MẪU",
      },
      {
        name: "Mã QR & Check-in",
        role: "Điểm Danh Nhanh",
        desc: "Tạo mã QR phục vụ điểm danh cơ thủ và kết nối thông tin vào hệ thống quản lý.",
        badge: "TIỆN ÍCH SỐ",
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
    title: "LẮNG NGHE & HIỂU RÕ",
    subtitle: "Xác định rõ yêu cầu cốt lõi",
    desc: "Trao đổi kỹ với cấp trên hoặc đối tác để nắm rõ mục tiêu, hạn chót và kết quả mong đợi trước khi bắt tay vào làm.",
    deliverable: "Bản tóm tắt yêu cầu & Kế hoạch sơ bộ",
  },
  {
    step: "02",
    title: "LẬP KẾ HOẠCH CỤ THỂ",
    subtitle: "Chia nhỏ đầu việc rõ ràng",
    desc: "Lên danh sách việc cần làm, phân bổ thời gian hợp lý và chuẩn bị sẵn tài liệu, công cụ cần thiết.",
    deliverable: "Bảng phân công & Lịch trình thực hiện",
  },
  {
    step: "03",
    title: "THỰC THI CHỈN CHU",
    subtitle: "Tỉ mỉ trong từng chi tiết",
    desc: "Triển khai công việc với sự cẩn trọng cao nhất: từ rà soát câu chữ, kiểm tra màu sắc bản in đến sắp xếp hậu cần sự kiện.",
    deliverable: "Ấn phẩm hoàn thiện & Báo cáo kết quả",
  },
  {
    step: "04",
    title: "TỐI ƯU BẰNG CÔNG NGHỆ",
    subtitle: "Giảm bớt thao tác thủ công",
    desc: "Ứng dụng AI và bảng tính tự động vào các khâu lặp lại để công việc diễn ra nhanh hơn và giảm thiểu sai sót.",
    deliverable: "Mẫu văn bản chuẩn & Bảng tính tự động",
  },
  {
    step: "05",
    title: "RÚT KINH NGHIỆM & CẢI TIẾN",
    subtitle: "Luôn tìm cách làm tốt hơn",
    desc: "Lắng nghe phản hồi từ người tham gia và đồng nghiệp sau mỗi đợt việc để rút kinh nghiệm, giúp lần sau hiệu quả hơn.",
    deliverable: "Ghi nhận đóng góp & Cập nhật quy trình",
  },
];

export const HOW_I_WORK_COPY =
  "“Tôi không chỉ hoàn thành việc được giao, mà luôn tự hỏi: Làm cách nào để lần sau công việc này chạy trơn tru hơn và đỡ tốn sức hơn?”";

// -------------------------------------------------------------
// 7. LỘ TRÌNH KINH NGHIỆM (EXPERIENCE TIMELINE)
// -------------------------------------------------------------
export const EXPERIENCE_TIMELINE: TimelineEntry[] = [
  {
    period: "2024",
    company: "NGÂN HÀNG QUỐC TẾ VIB",
    role: "Thực Tập Sinh Nghiệp Vụ",
    field: "Tài chính · Ngân hàng · Dịch vụ Khách hàng",
    summary:
      "Rèn luyện trong môi trường ngân hàng chuyên nghiệp: học hỏi quy trình xác minh hồ sơ khách hàng, phân tích sơ bộ tình trạng tài chính và tính kỷ luật chứng từ nghiêm ngặt.",
    highlights: [
      "Hỗ trợ kiểm tra thông tin và hoàn thiện hồ sơ khách hàng theo đúng quy chuẩn",
      "Tiếp đón và giải đáp thắc mắc cơ bản về các dịch vụ tài chính cho khách hàng",
      "Rèn luyện tính cẩn thận, bảo mật thông tin và tác phong làm việc chuẩn mực",
    ],
    current: false,
  },
  {
    period: "2025",
    company: "DỰ ÁN KINH DOANH & KỸ THUẬT SỐ",
    role: "Cộng Tác Viên Độc Lập",
    field: "Thiết kế Đồ họa · Dựng Video Ngắn · Ứng dụng AI",
    summary:
      "Chủ động nhận các dự án freelance đa dạng: thiết kế bộ nhận diện thương hiệu, poster sự kiện, dựng video ngắn mạng xã hội và bước đầu ứng dụng AI để tăng tốc công việc.",
    highlights: [
      "Thiết kế poster, standee sự kiện đạt chuẩn kỹ thuật in ấn thực tế",
      "Sản xuất các video ngắn thu hút tương tác cho Fanpage và TikTok",
      "Tận dụng các công cụ AI để rút ngắn thời gian lên ý tưởng và xử lý nội dung",
    ],
    current: false,
  },
  {
    period: "2026 — HIỆN TẠI",
    company: "SABO MEDIA & TECHNOLOGY",
    role: "Chuyên Viên Vận Hành & Hành Chính",
    field: "Vận hành CLB Bida · Hành chính Nhân sự · Quản lý Thu chi · Thiết kế",
    summary:
      "Đảm nhận các mảng công việc then chốt tại SABO: quản lý hoạt động câu lạc bộ bida, điều phối giải đấu, phụ trách hành chính nhân sự, theo dõi thu chi nội bộ và hỗ trợ triển khai nền tảng SABO Arena.",
    highlights: [
      "Quản lý vận hành hàng ngày tại CLB bida và điều phối thành công các giải đấu",
      "Phụ trách hồ sơ nhân sự, chấm công và đối soát chi phí hoạt động nội bộ",
      "Thiết kế trọn gói ấn phẩm sự kiện (poster, standee, video highlight giải đấu)",
      "Kết nối quy trình tổ chức thực tế với ứng dụng di động SABO Arena",
    ],
    current: true,
  },
];
