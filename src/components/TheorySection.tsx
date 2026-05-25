"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Anchor, BookOpen, HeartHandshake, Eye, Shield, Users, RefreshCw } from "lucide-react";
import FadeUp from "./FadeUp";
import Image from "next/image";

const THEORY_TABS = [
  {
    id: "leadership",
    label: "Vai Trò Lãnh Đạo",
    icon: <Anchor className="w-4 h-4" />,
    content: [
      "Cách mạng muốn thành công phải có tổ chức lãnh đạo.",
      "Đảng giữ vai trò định hướng, tổ chức và dẫn dắt phong trào.",
      "Đảng phải vững vàng về tư tưởng, đường lối và tổ chức.",
    ],
    highlight: `"Đảng có vững, cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy."`,
  },
  {
    id: "theory-practice",
    label: "Lý Luận & Thực Tiễn",
    icon: <BookOpen className="w-4 h-4" />,
    content: [
      "Có nền tảng lý luận đúng đắn.",
      "Biết vận dụng lý luận vào thực tiễn.",
      "Xuất phát từ nhu cầu và lợi ích của nhân dân.",
      "Không giáo điều, máy móc, xa rời thực tế.",
    ],
    highlight: "Lý luận giống như kim chỉ nam, còn thực tiễn là nơi kiểm chứng năng lực lãnh đạo.",
  },
  {
    id: "clean-org",
    label: "Xây Dựng Vững Mạnh",
    icon: <HeartHandshake className="w-4 h-4" />,
    content: [
      "Phải có đạo đức cách mạng.",
      "Phải giữ gìn đoàn kết nội bộ.",
      "Phải thực hiện tự phê bình và phê bình.",
      "Phải có kỷ luật nghiêm minh, tự giác.",
      "Phải thường xuyên tự chỉnh đốn.",
      "Phải chống chủ nghĩa cá nhân.",
    ],
    highlight: "Một tổ chức muốn mạnh không chỉ cần mục tiêu đúng, mà còn cần đạo đức, kỷ luật, sự đoàn kết và khả năng tự sửa chữa sai lầm.",
  },
];

const CORE_VALUES = [
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Lãnh Đạo Có Tầm Nhìn",
    number: "01",
    tooltip: "Người lãnh đạo phải thấy xa, trông rộng. Không chỉ giải quyết vấn đề hiện tại mà phải định hướng tương lai cho tổ chức.",
    color: "#8B0000",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Tổ Chức Có Kỷ Luật",
    number: "02",
    tooltip: "Kỷ luật tự giác là nền tảng. Mỗi thành viên tuân thủ quy tắc không phải vì bắt buộc, mà vì hiểu giá trị của kỷ luật.",
    color: "#b87333",
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "Đội Ngũ Có Đạo Đức",
    number: "03",
    tooltip: "Đạo đức là gốc rễ. Một người có tài mà thiếu đức giống như cây không có rễ, dễ gãy khi gặp gió lớn.",
    color: "#D4AF37",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Nội Bộ Đoàn Kết",
    number: "04",
    tooltip: "Đoàn kết tạo sức mạnh. Khi nội bộ thống nhất, tổ chức có thể vượt qua mọi thử thách từ bên ngoài.",
    color: "#4a9a6f",
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Luôn Tự Chỉnh Đốn",
    number: "05",
    tooltip: "Tự phê bình và phê bình là vũ khí sắc bén để tổ chức không ngừng hoàn thiện. Biết nhận lỗi và sửa lỗi là dấu hiệu của tổ chức trưởng thành.",
    color: "#5b8dd9",
  },
];

export default function TheorySection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="ly-luan-cot-loi" className="section-padding relative overflow-hidden bg-[#0c0c0e]">
      <div className="absolute top-0 left-0 w-full h-[3px]"
        style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.03) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <FadeUp delay={0} className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: "rgba(212,175,55,0.12)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.25)" }}>
            Phần II
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#f0ede8" }}>
            Cơ Sở Lý Luận
          </h2>
          <p className="text-sm max-w-2xl mx-auto" style={{ color: "#8a8784" }}>
            Tư tưởng Hồ Chí Minh về xây dựng Đảng — nền tảng lý luận dẫn dắt
          </p>
          <div className="gold-divider w-24 mx-auto mt-4" />
        </FadeUp>

        {/* Layout with Image and Tabs */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-20">
          <div className="flex-1 w-full lg:sticky lg:top-24">
             <FadeUp delay={0.1}>
               <div className="relative aspect-square md:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 w-full max-w-md mx-auto">
                 <Image src="/images/theory_leadership.png" alt="Theory Leadership" fill className="object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent opacity-80" />
               </div>
             </FadeUp>
          </div>
          
          <div className="flex-[1.2] w-full">
            {/* Tabs */}
            <FadeUp delay={0.15}>
              <Tabs defaultValue="leadership">
                <TabsList className="grid grid-cols-3 w-full mb-8 rounded-2xl p-1"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  {THEORY_TABS.map((tab) => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      id={`theory-tab-${tab.id}`}
                      className="flex items-center gap-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer data-[state=active]:text-yellow-300"
                      style={{ color: "#7a7672" }}
                    >
                      {tab.icon}
                      <span className="hidden sm:inline">{tab.label}</span>
                      <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {THEORY_TABS.map((tab) => (
                  <TabsContent key={tab.id} value={tab.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="rounded-3xl p-6 md:p-8"
                      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <h3 className="text-xl md:text-2xl font-bold mb-2"
                        style={{ fontFamily: "'Playfair Display', serif", color: "#f0ede8" }}>
                        {tab.label}
                      </h3>
                      <p className="text-xs mb-6" style={{ color: "#7a7672" }}>
                        Hồ Chí Minh chỉ rõ, tổ chức cách mạng muốn vững mạnh thì phải:
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {tab.content.map((point, i) => (
                          <div key={i} className="flex items-start gap-3 rounded-xl p-3"
                            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                            <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                              style={{ background: "rgba(212,175,55,0.15)", color: "#D4AF37" }}>
                              {i + 1}
                            </div>
                            <p className="text-sm leading-relaxed" style={{ color: "#c8c5c0" }}>{point}</p>
                          </div>
                        ))}
                      </div>

                      <div className="rounded-2xl p-4"
                        style={{ background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.15)" }}>
                        <p className="text-sm italic leading-relaxed text-center" style={{ color: "#D4AF37" }}>
                          {tab.highlight}
                        </p>
                      </div>
                    </motion.div>
                  </TabsContent>
                ))}
              </Tabs>
            </FadeUp>
          </div>
        </div>

        {/* 5 Core Values */}
        <FadeUp delay={0.1}>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-2"
              style={{ fontFamily: "'Playfair Display', serif", color: "#f0ede8" }}>
              5 Giá Trị Cốt Lõi Lớn
            </h3>
            <p className="text-sm" style={{ color: "#8a8784" }}>
              Ấn vào mỗi thẻ bên dưới để xem diễn giải chi tiết về giá trị cốt lõi
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-6">
          {CORE_VALUES.map((val, i) => {
            const isActive = activeIdx === i;
            return (
              <FadeUp key={i} delay={i * 0.05 + 0.1}>
                <motion.div
                  layout
                  onClick={() => setActiveIdx(isActive ? null : i)}
                  id={`core-value-${i + 1}`}
                  className="rounded-3xl p-6 text-center cursor-pointer relative overflow-hidden transition-all duration-300 flex flex-col justify-between h-full"
                  style={{
                    background: isActive ? `${val.color}25` : "rgba(255,255,255,0.02)",
                    border: isActive ? `2px solid ${val.color}` : `1px solid rgba(255,255,255,0.05)`,
                    boxShadow: isActive ? `0 10px 30px -10px ${val.color}40` : "none",
                    opacity: activeIdx !== null && !isActive ? 0.45 : 1,
                  }}
                  whileHover={{ y: isActive ? 0 : -4 }}
                >
                  <div>
                    {/* Index label */}
                    <div className="absolute top-4 right-5 text-2xl font-black opacity-10 select-none"
                      style={{ color: val.color, fontFamily: "'Playfair Display', serif" }}>
                      {val.number}
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300"
                      style={{ background: `${val.color}20`, color: val.color }}>
                      {val.icon}
                    </div>

                    <h4 className="text-base font-bold leading-snug mb-3" style={{ color: "#f0ede8" }}>
                      {val.title}
                    </h4>

                    {/* Description showing with expand motion */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="text-xs leading-relaxed mt-2 text-left pt-2 border-t border-white/5"
                          style={{ color: "#d0cdc8" }}
                        >
                          {val.tooltip}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <p className="text-[10px] mt-4 uppercase tracking-widest font-semibold" style={{ color: val.color, opacity: 0.8 }}>
                    {isActive ? "Thu nhỏ lại" : "Nhấn để xem"}
                  </p>
                </motion.div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
