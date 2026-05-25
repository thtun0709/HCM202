"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, Sparkles } from "lucide-react";
import FadeUp from "./FadeUp";

const SELF_QUESTIONS = [
  {
    id: "q1",
    question: "Mình có đang làm việc có trách nhiệm không?",
    description: "Hoàn thành đúng hạn, không đùn đẩy, báo sớm khi gặp khó khăn.",
  },
  {
    id: "q2",
    question: "Mình có biết lắng nghe góp ý không?",
    description: "Tiếp nhận phản hồi một cách cởi mở, không phòng thủ hay phản ứng tiêu cực.",
  },
  {
    id: "q3",
    question: "Mình có tôn trọng deadline và nguyên tắc chung không?",
    description: "Tuân thủ quy ước nhóm, đúng giờ, đúng cam kết.",
  },
  {
    id: "q4",
    question: "Mình có đặt mục tiêu nhóm lên trên cái tôi cá nhân không?",
    description: "Biết nhường nhịn, hỗ trợ đồng đội, không bảo thủ với ý kiến riêng.",
  },
  {
    id: "q5",
    question: "Mình có đang rèn luyện để trở thành người đáng tin cậy trong tập thể không?",
    description: "Liên tục học hỏi, cải thiện kỹ năng và thái độ làm việc.",
  },
];


type FeedbackEntry = { message: string; color: string; icon: string };

const FEEDBACK_MAP: Record<number, FeedbackEntry> = {
  0: { message: "Hãy bắt đầu hành trình tự hoàn thiện từ hôm nay!", color: "#7a7672", icon: "🌱" },
  1: { message: "Bạn đã có điểm khởi đầu tốt. Tiếp tục phát triển nhé!", color: "#b87333", icon: "🌿" },
  2: { message: "Khá tốt! Bạn đang trên đúng hướng.", color: "#D4AF37", icon: "⭐" },
  3: { message: "Rất tốt! Bạn có tiềm năng trở thành thành viên nòng cốt.", color: "#4a9a6f", icon: "🌟" },
  4: { message: "Tuyệt vời! Bạn gần đạt chuẩn thành viên nòng cốt lý tưởng.", color: "#5b8dd9", icon: "💎" },
  5: { message: "Xuất sắc! Bạn đã sẵn sàng trở thành người cầm lái của tổ chức.", color: "#D4AF37", icon: "👑" },
};

export default function ReflectionSection() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const checkedCount = Object.values(checked).filter(Boolean).length;
  const feedback = FEEDBACK_MAP[checkedCount] ?? FEEDBACK_MAP[0];

  const toggle = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="lien-he-ban-than" ref={ref} className="bg-[#f9fafb] text-[#111827] section-padding relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,0,0,0.02) 0%, transparent 70%)" }} />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <FadeUp delay={0} className="text-center mb-12">
          <span className="badge-crimson mb-4">
            Liên Hệ Bản Thân
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#111827]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Bạn Đang Ở Đâu?
          </h2>
          <p className="text-sm max-w-xl mx-auto text-[#4b5563]">
            Hãy thành thật tự đánh giá năng lực & tinh thần trách nhiệm cá nhân bằng cách đánh dấu vào các tiêu chí dưới đây:
          </p>
          <div className="gold-divider-light" />
        </FadeUp>

        {/* Questions */}
        <FadeUp delay={0.15}>
          <div className="bg-white border border-gray-200/80 shadow-sm rounded-3xl p-6 md:p-8 mb-6">
            <div className="space-y-4">
              {SELF_QUESTIONS.map((q, i) => {
                const isChecked = !!checked[q.id];
                return (
                  <motion.div
                    key={q.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.08 + 0.1, duration: 0.4, ease: "easeOut" }}
                    className="flex items-start gap-4 rounded-2xl p-4 cursor-pointer transition-all duration-300 border border-zinc-100"
                    style={{
                      background: isChecked ? "rgba(212,175,55,0.08)" : "#fafafa",
                      border: `1px solid ${isChecked ? "rgba(212,175,55,0.4)" : "#f1f1f4"}`,
                    }}
                    onClick={() => toggle(q.id)}
                  >
                    <Checkbox
                      id={`check-${q.id}`}
                      checked={isChecked}
                      onCheckedChange={() => toggle(q.id)}
                      className="mt-1 flex-shrink-0 cursor-pointer border-zinc-300 data-[state=checked]:bg-amber-600 data-[state=checked]:border-amber-600"
                    />
                    <div className="flex-1">
                      <label
                        htmlFor={`check-${q.id}`}
                        className="text-sm font-bold mb-1 block cursor-pointer transition-colors duration-200 text-[#111827]"
                        style={{ color: isChecked ? "#b45309" : "#1f2937" }}
                      >
                        {q.question}
                      </label>
                      <p className="text-xs text-[#6b7280]">{q.description}</p>
                    </div>
                    <AnimatePresence>
                      {isChecked && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-amber-700" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </FadeUp>

        {/* Progress feedback */}
        <AnimatePresence mode="wait">
          <motion.div
            key={checkedCount}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="rounded-3xl p-6 mb-6 text-center border"
            style={{
              background: isFinite(checkedCount) ? "#ffffff" : "#ffffff",
              borderColor: feedback.color === "#7a7672" ? "#e5e7eb" : `${feedback.color}30`,
              boxShadow: "0 4px 12px rgba(0,0,0,0.03)"
            }}
          >
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl">{feedback.icon}</span>
              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-black" style={{ color: feedback.color }}>{checkedCount}/5</span>
                  <Sparkles className="w-4 h-4" style={{ color: feedback.color }} />
                </div>
                <p className="text-sm font-bold text-zinc-800">{feedback.message}</p>
              </div>
            </div>
            <div className="mt-4 rounded-full overflow-hidden h-2.5 bg-zinc-100 border border-zinc-200">
              <motion.div
                className="h-full rounded-full"
                animate={{ width: `${(checkedCount / 5) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ background: `linear-gradient(90deg, #8B0000, #D4AF37)` }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
