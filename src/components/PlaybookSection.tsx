"use client";

import {
  Anchor,
  Target,
  Users,
  Lightbulb,
  CheckCircle,
  AlertCircle,
  ClipboardList,
  Clock,
  MessageSquare,
  TrendingUp,
  Shield,
  Star,
  RefreshCw,
} from "lucide-react";
import FadeUp from "./FadeUp";

const FOUNDER_TRAITS = [
  { icon: <Target className="w-5 h-5" />, title: "Xác Định Tầm Nhìn", desc: "Xác định tầm nhìn rõ ràng và định hướng chiến lược dài hạn." },
  { icon: <ClipboardList className="w-5 h-5" />, title: "Phân Công Tổ Chức", desc: "Biết phân công và tổ chức công việc hiệu quả cho từng thành viên." },
  { icon: <Lightbulb className="w-5 h-5" />, title: "Truyền Cảm Hứng", desc: "Truyền cảm hứng và giữ ngọn lửa nhiệt huyết cho cả đội nhóm." },
  { icon: <AlertCircle className="w-5 h-5" />, title: "Quyết Đoán", desc: "Ra quyết định dứt khoát trong giai đoạn khó khăn và áp lực." },
  { icon: <Shield className="w-5 h-5" />, title: "Giữ Hướng Đi", desc: "Giữ nhóm không đi lệch khỏi mục tiêu và giá trị ban đầu." },
];

const CORE_TEAM_TRAITS = [
  { icon: <CheckCircle className="w-4 h-4" />, title: "Hiểu rõ mục tiêu", desc: "Nắm vững mục tiêu của tổ chức, không làm việc theo cảm hứng." },
  { icon: <Star className="w-4 h-4" />, title: "Năng lực chuyên môn", desc: "Có kỹ năng chuyên môn đủ để đảm nhận vai trò được giao." },
  { icon: <Shield className="w-4 h-4" />, title: "Trách nhiệm cao", desc: "Có tinh thần trách nhiệm cao, luôn hoàn thành cam kết." },
  { icon: <TrendingUp className="w-4 h-4" />, title: "Giải quyết khó khăn", desc: "Sẵn sàng đối mặt và tìm giải pháp khi gặp thử thách." },
  { icon: <Users className="w-4 h-4" />, title: "Lợi ích chung", desc: "Biết đặt lợi ích chung lên trên lợi ích cá nhân." },
  { icon: <RefreshCw className="w-4 h-4" />, title: "Lan tỏa văn hóa", desc: "Có khả năng lan tỏa văn hóa tích cực cho các thành viên khác." },
];

const DISCIPLINE_ITEMS = [
  { icon: <ClipboardList className="w-4 h-4" />, title: "Quy trình rõ ràng", desc: "Có quy trình làm việc rõ ràng, minh bạch." },
  { icon: <Target className="w-4 h-4" />, title: "Tiêu chuẩn đánh giá", desc: "Có tiêu chuẩn đánh giá minh bạch, khách quan." },
  { icon: <MessageSquare className="w-4 h-4" />, title: "Cơ chế góp ý", desc: "Có cơ chế góp ý và phản hồi tích cực." },
  { icon: <AlertCircle className="w-4 h-4" />, title: "Dám nhìn nhận sai", desc: "Dám nhìn nhận sai lầm và chịu trách nhiệm." },
  { icon: <TrendingUp className="w-4 h-4" />, title: "Cải tiến liên tục", desc: "Cải tiến liên tục sau mỗi giai đoạn dự án." },
  { icon: <Users className="w-4 h-4" />, title: "Không để cái tôi", desc: "Không để cái tôi cá nhân phá vỡ tập thể." },
];

const ROLES = [
  { role: "Trưởng Nhóm", color: "#8B0000", bg: "rgba(139,0,0,0.2)", desc: "Điều phối, ra quyết định, báo cáo tổng thể" },
  { role: "Nghiên Cứu", color: "#D4AF37", bg: "rgba(212,175,55,0.12)", desc: "Thu thập và phân tích tài liệu, dữ liệu" },
  { role: "Thiết Kế", color: "#5b8dd9", bg: "rgba(91,141,217,0.12)", desc: "Slide, infographic, hình ảnh minh họa" },
  { role: "Lập Trình", color: "#4a9a6f", bg: "rgba(74,154,111,0.12)", desc: "Demo, prototype, code minh họa" },
  { role: "Thuyết Trình", color: "#b87333", bg: "rgba(184,115,51,0.12)", desc: "Chuẩn bị nội dung, luyện trình bày" },
  { role: "Kiểm Tra", color: "#9b59b6", bg: "rgba(155,89,182,0.12)", desc: "QA toàn bộ nội dung và sản phẩm" },
];

export default function PlaybookSection() {
  return (
    <section id="van-dung-thuc-tien" className="bg-[#f9fafb] text-[#111827] section-padding relative overflow-hidden bg-gray-50">
      <div className="absolute top-0 left-0 w-full h-[3px]"
        style={{ background: "linear-gradient(90deg, transparent, #8B0000, #D4AF37, transparent)" }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <FadeUp delay={0} className="text-center mb-16">
          <span className="badge-crimson mb-4">
            Phần III
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#111827]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Vận Dụng Thực Tiễn
          </h2>
          <p className="text-sm max-w-2xl mx-auto text-[#4b5563]">
            Chuyển dịch các nguyên lý tổ chức cốt lõi vào xây dựng đội ngũ startup & làm việc nhóm sinh viên
          </p>
          <div className="gold-divider-light" />
        </FadeUp>

        {/* SLIDE 8 */}
        <FadeUp delay={0.1} className="mb-12">
          <div className="bg-white border border-gray-200/80 shadow-sm rounded-3xl p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#111827]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Liên Hệ Với Doanh Nghiệp & Startup Hiện Nay
            </h3>
            <p className="text-sm mb-6 text-[#4b5563]">Đội ngũ vững vàng là chìa khóa then chốt cho sự sinh tồn của doanh nghiệp khởi nghiệp:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { icon: "🧭", title: "Founder/CEO", text: "Người định hướng & chèo lái con thuyền." },
                { icon: "⚡", title: "Đội ngũ nòng cốt", text: "Quyết định sức mạnh nội lực bền bỉ." },
                { icon: "🏛️", title: "Văn hóa chung", text: "Chất keo gắn kết bền chặt tổ chức." },
                { icon: "⚖️", title: "Hệ thống kỷ luật", text: "Đảm bảo tính vận hành ổn định." },
                { icon: "🎯", title: "Tầm nhìn chung", text: "Mục tiêu thống nhất để cùng tiến lên." },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl p-4 text-center transition-all duration-300 bg-gray-50 border border-gray-100">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h4 className="text-xs font-bold mb-1 text-[#111827]">{item.title}</h4>
                  <p className="text-[11px] leading-relaxed text-[#6b7280]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* SLIDES 9-11 */}
        <FadeUp delay={0.1} className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Founder as Helmsman */}
            <div className="bg-white border border-gray-200/80 shadow-sm rounded-3xl p-6 md:p-8 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(139,0,0,0.02), rgba(255,255,255,1))",
              }}>
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-5"
                style={{ background: "#8B0000" }} />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-red-50 text-[#8B0000]">
                  <Anchor className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#111827]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Người &ldquo;Cầm Lái&rdquo; Trong Startup
                  </h3>
                  <p className="text-xs text-[#6b7280]">Founder xuất sắc dẫn dắt tầm nhìn chung</p>
                </div>
              </div>
              <div className="space-y-3">
                {FOUNDER_TRAITS.map((trait, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl p-3 bg-gray-50 border border-gray-100 transition-all duration-200 hover:bg-white hover:shadow-sm">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-red-50 text-[#8B0000]">
                      {trait.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold mb-0.5 text-[#111827]">{trait.title}</p>
                      <p className="text-xs text-[#6b7280]">{trait.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core team + Discipline */}
            <div className="space-y-4">
              <div className="bg-white border border-gray-200/80 shadow-sm rounded-3xl p-6">
                <h3 className="text-base font-bold mb-4 flex items-center gap-2 text-[#111827]"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  <Users className="w-4 h-4 text-amber-600" />
                  Đội Ngũ Nòng Cốt — 6 Đặc Điểm
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {CORE_TEAM_TRAITS.map((trait, i) => (
                    <div key={i} className="flex items-start gap-2 rounded-xl p-3 bg-gray-50 border border-gray-100">
                      <div className="mt-0.5 flex-shrink-0 text-amber-600">{trait.icon}</div>
                      <div>
                        <p className="text-xs font-bold text-[#111827]">{trait.title}</p>
                        <p className="text-[11px] text-[#6b7280]">{trait.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-200/80 shadow-sm rounded-3xl p-6">
                <h3 className="text-base font-bold mb-4 flex items-center gap-2 text-[#111827]"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  <Shield className="w-4 h-4 text-emerald-600" />
                  Kỷ Luật & Tự Chỉnh Đốn
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {DISCIPLINE_ITEMS.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 rounded-xl p-3 bg-gray-50 border border-gray-100">
                      <div className="mt-0.5 flex-shrink-0 text-emerald-600">{item.icon}</div>
                      <div>
                        <p className="text-xs font-bold text-[#111827]">{item.title}</p>
                        <p className="text-[11px] text-[#6b7280]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* SLIDE 12 — Team Charter */}
        <FadeUp delay={0.1}>
          <div className="bg-white border border-gray-200/80 shadow-sm rounded-3xl overflow-hidden">
            {/* Charter header bar */}
            <div className="px-6 py-4 flex items-center gap-3 bg-gray-50 border-b border-gray-100">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex items-center gap-2 flex-1">
                <ClipboardList className="w-4 h-4 text-red-800" />
                <span className="text-sm font-bold text-[#111827]">
                  Team Charter — Quy Ước Nhóm Sinh Viên
                </span>
                <span className="ml-auto text-xs px-2.5 py-0.5 rounded-full bg-green-100 text-green-800 border border-green-200">
                  <span className="pulse-dot inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5" />
                  Đang hoạt động
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <p className="text-sm mb-6 text-[#6b7280]">
                Một nhóm sinh viên làm dự án cần thiết lập phân vai cụ thể và quy tắc cộng tác kỷ luật:
              </p>

              {/* Roles */}
              <div className="mb-8">
                <p className="text-xs font-bold tracking-widest uppercase mb-3 text-red-800">
                  Phân Công Vai Trò
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {ROLES.map((r, i) => (
                    <div key={i} className="charter-role-badge font-bold"
                      style={{ background: `${r.color}12`, color: r.color, border: `1px solid ${r.color}25` }}>
                      {r.role}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {ROLES.map((r, i) => (
                    <div key={i} className="rounded-xl p-3 flex items-start gap-2 bg-gray-50 border border-gray-100"
                      style={{ borderLeft: `3px solid ${r.color}` }}>
                      <span className="text-xs font-bold flex-shrink-0" style={{ color: r.color }}>{r.role}:</span>
                      <span className="text-[11px] text-[#6b7280]">{r.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Charter rules */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl p-4 bg-amber-50/50 border border-amber-200/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-amber-700" />
                    <p className="text-xs font-bold text-amber-800">Deadline Cụ Thể</p>
                  </div>
                  <p className="text-xs text-[#6b7280]">Mỗi task có deadline riêng. Chủ động báo sớm khi gặp vấn đề — tuyệt đối không chờ đến sát hạn chót.</p>
                </div>
                <div className="rounded-2xl p-4 bg-blue-50/50 border border-blue-200/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-blue-700" />
                    <p className="text-xs font-bold text-blue-800">Họp Nhóm Định Kỳ</p>
                  </div>
                  <p className="text-xs text-[#6b7280]">Họp nhóm ít nhất 1 lần/tuần. Nghiêm túc báo cáo tiến độ và cùng giải quyết các vướng mắc chung.</p>
                </div>
                <div className="rounded-2xl p-4 bg-emerald-50/50 border border-emerald-200/50">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-emerald-700" />
                    <p className="text-xs font-bold text-emerald-800">Cơ Chế Góp Ý</p>
                  </div>
                  <p className="text-xs text-[#6b7280]">Thành viên góp ý thẳng thắn nhưng mang tính xây dựng. Khi xảy ra lỗi, tập trung tìm giải pháp thay vì đổ lỗi.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
