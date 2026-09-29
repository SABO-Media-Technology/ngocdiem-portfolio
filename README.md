# Võ Ngọc Diễm — Personal Portfolio

Trang Portfolio cá nhân chuyên nghiệp của **Võ Ngọc Diễm** (Mobile & Full-stack Engineer tại SABO M&T · Cử nhân Tài chính - Ngân hàng ĐH Sài Gòn).

Được thiết kế theo phong cách **Cinematic Obsidian Dark Luxury** tương tự chuẩn mực của `longsang.sabo.com.vn`.

---

## 🚀 Công nghệ sử dụng (Tech Stack)

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography:** Google Fonts (`Playfair Display`, `JetBrains Mono`, `Plus Jakarta Sans`)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript

---

## 📂 Cấu trúc thư mục

```text
src/
├── app/
│   ├── globals.css      # Cấu hình màu nền #040006, font serif, font mono và glassmorphism
│   ├── layout.tsx       # Tích hợp Google Fonts, SEO Metadata và OpenGraph
│   └── page.tsx         # Trang chính kết nối toàn bộ các sections
├── components/
│   ├── Navbar.tsx       # Thanh điều hướng trên cùng, sao chép email nhanh
│   ├── Hero.tsx         # Giới thiệu tiêu điểm, bằng cử nhân SGU, số liệu thực chiến
│   ├── Projects.tsx     # Danh mục sản phẩm đã ship (SABO Arena, SABOHUB,...)
│   ├── ProjectModal.tsx # Cửa sổ xem chi tiết ca kiến trúc và giải pháp
│   ├── About.tsx        # Câu chuyện chuyển hướng Tài chính × Công nghệ
│   ├── Skills.tsx       # Bảng ma trận kỹ năng Mobile, Backend, Web, DevOps
│   ├── Experience.tsx   # Lộ trình học vấn SGU và kinh nghiệm tại SABO M&T
│   ├── Contact.tsx      # Form liên hệ và thông tin kết nối
│   └── Footer.tsx       # Chân trang tối giản
└── data/
    └── portfolioData.ts # Toàn bộ dữ liệu nội dung dạng type-safe (dễ chỉnh sửa)
```

---

## 🛠️ Hướng dẫn cài đặt & Chạy cục bộ

```bash
# 1. Di chuyển vào thư mục dự án
cd /home/sabopc/Projects/portfolio

# 2. Cài đặt các gói phụ thuộc (nếu cần)
pnpm install

# 3. Khởi chạy môi trường phát triển (Local Dev Server)
pnpm dev
```

Mở trình duyệt tại [http://localhost:3000](http://localhost:3000) để trải nghiệm.

---

## 📦 Build & Kiểm thử Production

```bash
# Kiểm tra TypeScript và đóng gói tĩnh (Static Pre-render)
pnpm build

# Chạy bản production cục bộ
pnpm start
```

---

## 🌐 Triển khai lên Production (Vercel)

Dự án Next.js này đã được tối ưu hóa 100% để deploy lên Vercel:

1. Đẩy mã nguồn lên GitHub cá nhân của bạn:
   ```bash
   git add .
   git commit -m "feat: initial luxury cinematic portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. Truy cập [vercel.com](https://vercel.com) -> Import Repository -> Chọn Framework **Next.js** -> Nhấn **Deploy**.
3. Cấu hình tên miền tùy chỉnh (ví dụ: `diem.sabo.com.vn` hoặc `vongocdiem.com`).
