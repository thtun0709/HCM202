"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Bot, BookOpen, Cpu } from "lucide-react";

const AI_TOOLS = [
  {
    icon: <Cpu className="w-5 h-5" />,
    name: "Antigravity",
    role: "Vibe code thiết kế UI/UX",
    desc: "Xây dựng toàn bộ giao diện, layout, animations và hệ thống design cho website thuyết trình này.",
    color: "#D4AF37",
    bg: "rgba(212,175,55,0.08)",
    border: "rgba(212,175,55,0.25)",
    badge: "UI/UX & Code",
    badgeColor: "rgba(212,175,55,0.15)",
    badgeText: "#D4AF37",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    name: "NotebookLM",
    role: "Phân tích nội dung bài thuyết trình",
    desc: "Hỗ trợ tổng hợp, phân tích và cấu trúc hóa nội dung từ tài liệu gốc CQ5 thành các luận điểm rõ ràng.",
    color: "#5b8dd9",
    bg: "rgba(91,141,217,0.08)",
    border: "rgba(91,141,217,0.25)",
    badge: "Content Analysis",
    badgeColor: "rgba(91,141,217,0.15)",
    badgeText: "#5b8dd9",
  },
  {
    icon: <Bot className="w-5 h-5" />,
    name: "Gemini",
    role: "Phân tích nội dung bài thuyết trình",
    desc: "Hỗ trợ diễn giải tư tưởng Hồ Chí Minh, liên hệ thực tiễn và gợi ý cách trình bày học thuật.",
    color: "#4a9a6f",
    bg: "rgba(74,154,111,0.08)",
    border: "rgba(74,154,111,0.25)",
    badge: "Content Analysis",
    badgeColor: "rgba(74,154,111,0.15)",
    badgeText: "#4a9a6f",
  },
];

export default function AIUsageButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating trigger button */}
      <motion.button
        id="ai-usage-btn"
        onClick={() => setOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.4, type: "spring", stiffness: 300 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full cursor-pointer"
        style={{
          background: "linear-gradient(135deg, rgba(139,0,0,0.85), rgba(90,0,0,0.9))",
          border: "1px solid rgba(212,175,55,0.35)",
          boxShadow: "0 4px 24px rgba(139,0,0,0.4), 0 0 0 1px rgba(212,175,55,0.1)",
          backdropFilter: "blur(12px)",
        }}
        aria-label="Xem AI Usage"
      >
        <Sparkles className="w-4 h-4" style={{ color: "#D4AF37" }} />
        <span className="text-xs font-semibold tracking-wider" style={{ color: "#f0ede8" }}>
          AI Usage
        </span>
      </motion.button>

      {/* Popup overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 cursor-pointer"
              style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
              onClick={() => setOpen(false)}
            />

            {/* Modal */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed z-50 w-full max-w-md mx-auto"
              style={{
                bottom: "5rem",
                right: "1.5rem",
                left: "auto",
              }}
            >
              <div
                className="rounded-3xl overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, #141414, #0e0e0e)",
                  border: "1px solid rgba(212,175,55,0.2)",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
                }}
              >
                {/* Header */}
                <div
                  className="px-6 py-5 flex items-center justify-between"
                  style={{
                    background: "linear-gradient(90deg, rgba(139,0,0,0.2), rgba(212,175,55,0.06))",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(212,175,55,0.15)", color: "#D4AF37" }}
                    >
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h3
                        className="text-base font-bold"
                        style={{ fontFamily: "'Playfair Display', serif", color: "#f0ede8" }}
                      >
                        AI Usage
                      </h3>
                      <p className="text-xs" style={{ color: "#7a7672" }}>
                        Các công cụ AI được sử dụng trong dự án
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setOpen(false)}
                    id="ai-usage-close-btn"
                    className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200 hover:bg-white/10"
                    style={{ color: "#7a7672" }}
                    aria-label="Đóng"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Tool cards */}
                <div className="p-4 space-y-3">
                  {AI_TOOLS.map((tool, i) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 + 0.1, duration: 0.35, ease: "easeOut" }}
                      className="rounded-2xl p-4"
                      style={{ background: tool.bg, border: `1px solid ${tool.border}` }}
                    >
                      <div className="flex items-start gap-3">
                        {/* Icon */}
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${tool.color}20`, color: tool.color }}
                        >
                          {tool.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span
                              className="text-sm font-bold"
                              style={{ color: "#f0ede8" }}
                            >
                              {tool.name}
                            </span>
                            <span
                              className="text-xs px-2 py-0.5 rounded-full font-medium"
                              style={{
                                background: tool.badgeColor,
                                color: tool.badgeText,
                                border: `1px solid ${tool.border}`,
                              }}
                            >
                              {tool.badge}
                            </span>
                          </div>
                          <p
                            className="text-xs font-semibold mb-1"
                            style={{ color: tool.color }}
                          >
                            {tool.role}
                          </p>
                          <p className="text-xs leading-relaxed" style={{ color: "#8a8784" }}>
                            {tool.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div
                  className="px-6 py-4 text-center"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <p className="text-xs" style={{ color: "#4a4845" }}>
                    HCM202 · CQ5 · Tư tưởng Hồ Chí Minh
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
