"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Anchor } from "lucide-react";
import FadeUp from "./FadeUp";

const CONCLUSION_POINTS = [
  "Muốn tổ chức mạnh phải có lãnh đạo đúng hướng.",
  "Muốn đi xa phải có đội ngũ nòng cốt vững vàng.",
  "Muốn phát triển bền vững phải có kỷ luật, đạo đức và đoàn kết.",
  "Sinh viên cần rèn luyện cả chuyên môn, trách nhiệm và thái độ làm việc.",
];

export default function ConclusionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ket-luan" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,0,0,0.2) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 100%, rgba(212,175,55,0.08) 0%, transparent 50%),
            #0a0a0a
          `,
        }} />
      <div className="absolute top-0 left-0 w-full h-1"
        style={{ background: "linear-gradient(90deg, transparent, #8B0000, #D4AF37, #8B0000, transparent)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <FadeUp delay={0} className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
            style={{ background: "linear-gradient(135deg, #8B0000, #b30000)", boxShadow: "0 0 40px rgba(139,0,0,0.4)" }}>
            <Anchor className="w-8 h-8 text-yellow-300" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#f0ede8" }}>
            Kết Luận
          </h2>
          <div className="gold-divider w-32 mx-auto" />
        </FadeUp>

        {/* Intro */}
        <FadeUp delay={0.1} className="text-center mb-10">
          <p className="text-base md:text-lg max-w-3xl mx-auto" style={{ color: "#b0ada8" }}>
            Tư tưởng Hồ Chí Minh về xây dựng Đảng đem lại nhiều bài học cho việc xây dựng tổ chức hiện nay:
          </p>
        </FadeUp>

        {/* 4 Conclusion points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {CONCLUSION_POINTS.map((point, i) => (
            <FadeUp key={i} delay={i * 0.12 + 0.2}>
              <div
                className="flex items-start gap-4 rounded-2xl p-5 card-lift h-full"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(212,175,55,0.15)",
                }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(212,175,55,0.15)", color: "#D4AF37" }}>
                  <CheckCircle className="w-5 h-5" />
                </div>
                <p className="text-sm md:text-base leading-relaxed pt-2" style={{ color: "#d0cdc8" }}>{point}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #3a0000 0%, #600000 50%, #8B0000 100%)",
            border: "1px solid rgba(212,175,55,0.4)",
            boxShadow: "0 15px 40px -10px rgba(139,0,0,0.6), 0 0 30px rgba(212,175,55,0.2)",
          }}
        >
          <div className="absolute -top-4 left-6 text-8xl opacity-10 select-none"
            style={{ color: "#D4AF37", fontFamily: "'Playfair Display', serif" }}>
            &ldquo;
          </div>
          <div className="absolute -bottom-4 right-6 text-8xl opacity-10 select-none"
            style={{ color: "#D4AF37", fontFamily: "'Playfair Display', serif" }}>
            &rdquo;
          </div>

          <div className="relative z-10 p-8 md:p-12 text-center flex flex-col items-center">
            <p className="text-xs font-bold tracking-widest uppercase mb-4 text-[#D4AF37]">
              Thông Điệp Đúc Kết
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold italic leading-relaxed mb-8 max-w-2xl"
              style={{ fontFamily: "'Playfair Display', serif", color: "#f0ede8" }}>
              Một đội nhóm mạnh không tự nhiên hình thành, mà được xây dựng từ{" "}
              <span className="text-[#D4AF37]">tầm nhìn</span>,{" "}
              <span className="text-[#D4AF37]">kỷ luật</span>,{" "}
              <span className="text-[#D4AF37]">đạo đức</span>{" "}
              và tinh thần{" "}
              <span className="text-[#D4AF37]">cùng hướng về mục tiêu chung</span>.
            </p>

            <button 
              onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#4A0E17] font-bold text-xs uppercase tracking-widest rounded-full shadow-lg hover:shadow-yellow-500/20 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Quay Lại Đầu Trang
            </button>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="gold-divider w-24 mx-auto mb-6" />
          <p className="text-xs tracking-widest uppercase" style={{ color: "#5a5652" }}>
             Nhóm Speed - Half1_SE1831 — Đại Học FPT &nbsp;·&nbsp; HCM202 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}
