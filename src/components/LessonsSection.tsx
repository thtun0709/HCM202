"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Eye, Shield, MessageSquare, Users, Target, CheckCircle } from "lucide-react";
import FadeUp from "./FadeUp";

const LESSONS = [
  {
    id: "lesson-1",
    icon: <Eye className="w-5 h-5" />,
    number: "Bài học 1",
    title: "Xây Dựng Tầm Nhìn Và Mục Tiêu Chung",
    color: "#8B0000",
    avoidPoints: null,
    points: [
      "Hiểu rõ mục tiêu chung của nhóm.",
      "Thống nhất định hướng trước khi bắt tay vào làm.",
      "Không làm việc theo cảm hứng nhất thời.",
      "Biết liên hệ giữa kiến thức học thuật và yêu cầu thực tế.",
      "Chủ động đóng góp vào mục tiêu chung.",
    ],
  },
  {
    id: "lesson-2",
    icon: <Shield className="w-5 h-5" />,
    number: "Bài học 2",
    title: "Rèn Luyện Kỷ Luật Và Trách Nhiệm",
    color: "#D4AF37",
    avoidPoints: null,
    points: [
      "Đúng giờ.",
      "Đúng deadline.",
      "Làm việc có kế hoạch.",
      "Cam kết với nhiệm vụ được giao.",
      "Không đùn đẩy trách nhiệm.",
      "Báo cáo sớm khi gặp khó khăn.",
    ],
  },
  {
    id: "lesson-3",
    icon: <MessageSquare className="w-5 h-5" />,
    number: "Bài học 3",
    title: "Xây Dựng Văn Hóa Góp Ý Và Tự Hoàn Thiện",
    color: "#b87333",
    avoidPoints: null,
    points: [
      "Dám nhận lỗi.",
      "Góp ý thẳng thắn nhưng văn minh.",
      "Không che giấu khuyết điểm.",
      "Không công kích cá nhân.",
      "Sau mỗi dự án phải biết rút kinh nghiệm.",
      "Luôn học hỏi và cải thiện năng lực.",
    ],
  },
  {
    id: "lesson-4",
    icon: <Users className="w-5 h-5" />,
    number: "Bài học 4",
    title: "Đặt Lợi Ích Tập Thể Lên Trên Cái Tôi Cá Nhân",
    color: "#4a9a6f",
    avoidPoints: [
      "Bảo thủ với ý kiến cá nhân.",
      "Làm việc chỉ vì điểm số hoặc lợi ích riêng.",
      "Ghen tị, so sánh, đổ lỗi.",
      "Không lắng nghe người khác.",
      "Xem nhẹ vai trò của tập thể.",
    ],
    points: [
      "Tôn trọng đồng đội.",
      "Chia sẻ trách nhiệm.",
      "Hỗ trợ nhau khi khó khăn.",
      "Hướng đến kết quả chung.",
    ],
  },
];

const SOLUTIONS = [
  "Xây dựng tư duy trách nhiệm.",
  "Rèn luyện năng lực chuyên môn.",
  "Tôn trọng quy trình và kỷ luật tổ chức.",
  "Chủ động giao tiếp và phối hợp.",
  "Biết tiếp nhận phản hồi.",
  "Luôn giữ thái độ trung thực, cầu thị.",
  "Có tinh thần học hỏi và thích nghi.",
];

export default function LessonsSection() {
  return (
    <section id="bai-hoc-giai-phap" className="section-padding relative overflow-hidden bg-[#0a0a0c]">
      <div className="absolute top-0 left-0 w-full h-[3px]"
        style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <FadeUp delay={0} className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
            style={{ background: "rgba(212,175,55,0.12)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.25)" }}>
            Phần IV
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#f0ede8" }}>
            Bài Học & Giải Pháp
          </h2>
          <p className="text-sm max-w-2xl mx-auto" style={{ color: "#8a8784" }}>
            Bốn bài học thực tiễn rút ra từ di sản tư tưởng và hệ thống giải pháp định vị bản thân cho sinh viên
          </p>
          <div className="gold-divider w-24 mx-auto mt-4" />
        </FadeUp>

        {/* 4 Lessons Accordion */}
        <FadeUp delay={0.15} className="mb-16">
          <Accordion multiple className="space-y-4">
            {LESSONS.map((lesson, i) => (
              <AccordionItem
                key={lesson.id}
                value={lesson.id}
                id={`lesson-accordion-${i + 1}`}
                className="rounded-2xl overflow-hidden border-0 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.01)",
                  border: `1px solid rgba(255,255,255,0.04)`,
                  borderLeft: `4px solid ${lesson.color}`,
                  boxShadow: "0 4px 20px -5px rgba(0,0,0,0.3)",
                }}
              >
                <AccordionTrigger
                  className="px-6 py-5 hover:no-underline cursor-pointer transition-colors duration-200 hover:bg-white/[0.01]"
                  style={{ color: "#f0ede8" }}
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${lesson.color}15`, color: lesson.color }}>
                      {lesson.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase mb-0.5"
                        style={{ color: lesson.color, opacity: 0.9 }}>
                        {lesson.number}
                      </p>
                      <p className="text-base font-bold"
                        style={{ fontFamily: "'Playfair Display', serif", color: "#f0ede8" }}>
                        {lesson.title}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-6 pt-2 border-t border-white/[0.02]">
                  <div className="ml-14">
                    {lesson.avoidPoints && (
                      <div className="mb-4">
                        <p className="text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: "#ff8888" }}>
                          Cần tránh:
                        </p>
                        <div className="space-y-1.5">
                          {lesson.avoidPoints.map((p, j) => (
                            <div key={j} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-red-400" />
                              <p className="text-xs" style={{ color: "#a0ada8" }}>{p}</p>
                            </div>
                          ))}
                        </div>
                        {lesson.points.length > 0 && (
                          <p className="text-xs font-bold mb-2 mt-4 uppercase tracking-wide" style={{ color: "#4a9a6f" }}>
                            Thay vào đó cần:
                          </p>
                        )}
                      </div>
                    )}

                    <div className="space-y-1.5">
                      {lesson.points.map((p, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: lesson.color }} />
                          <p className="text-xs" style={{ color: "#c8c5c0" }}>{p}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>

        {/* Slide 17 Solutions */}
        <FadeUp delay={0.1}>
          <div className="rounded-3xl overflow-hidden"
            style={{ 
              background: "rgba(255,255,255,0.01)", 
              border: "1px solid rgba(212,175,55,0.15)",
              borderLeft: "4px solid #D4AF37" 
            }}>
            <div className="px-6 md:px-8 pt-6 md:pt-8 pb-2">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-yellow-500/10 text-yellow-500">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#f0ede8" }}>
                  Giải Pháp Đề Xuất Cho Sinh Viên
                </h3>
              </div>
              <p className="text-xs mb-4 ml-13" style={{ color: "#8a8784" }}>
                Để tự rèn luyện trở thành mảnh ghép nòng cốt vững mạnh trong bất kỳ tổ chức nào:
              </p>
            </div>

            <Accordion>
              <AccordionItem value="solutions" className="border-0">
                <AccordionTrigger
                  className="px-6 md:px-8 py-4 hover:no-underline cursor-pointer text-left transition-colors hover:bg-white/[0.01]"
                  style={{ color: "#D4AF37" }}
                >
                  <span className="text-xs font-semibold uppercase tracking-wider">Xem 7 giải pháp chi tiết</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 md:px-8 pb-6 border-t border-white/[0.02] pt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SOLUTIONS.map((sol, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                        className="flex items-start gap-3 rounded-xl p-3 bg-white/[0.02] border border-white/[0.04] hover:border-yellow-500/20 transition-all duration-200"
                      >
                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold bg-yellow-500/10 text-yellow-500">
                          {i + 1}
                        </div>
                        <p className="text-xs pt-0.5" style={{ color: "#c8c5c0" }}>{sol}</p>
                      </motion.div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
