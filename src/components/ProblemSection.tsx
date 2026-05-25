"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { AlertTriangle, Users, Clock, TrendingDown, Swords, Compass, Shield, Target, Scale } from "lucide-react";
import FadeUp from "./FadeUp";

const PAIN_POINTS = [
  {
    icon: <Compass className="w-5 h-5" />,
    title: "Thiếu Định Hướng",
    desc: "Có ý tưởng nhưng thiếu người định hướng dẫn dắt.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Rời Rạc",
    desc: "Thành viên làm việc rời rạc, thiếu phối hợp hiệu quả.",
  },
  {
    icon: <Scale className="w-5 h-5" />,
    title: "Trách Nhiệm Mờ Nhạt",
    desc: "Trách nhiệm không rõ ràng, dễ đùn đẩy công việc.",
  },
  {
    icon: <TrendingDown className="w-5 h-5" />,
    title: "Mất Động Lực",
    desc: "Khi gặp khó khăn, nhóm mất động lực hoặc tan rã.",
  },
  {
    icon: <Swords className="w-5 h-5" />,
    title: "Mâu Thuẫn Cá Nhân",
    desc: "Mâu thuẫn cá nhân làm ảnh hưởng đến mục tiêu chung.",
  },
];

// Suppress unused import warning
void Clock;

const CORE_QUESTIONS = [
  {
    icon: <Compass className="w-5 h-5" />,
    question: "Ai là người định hướng và dẫn dắt tổ chức?",
    color: "#8B0000",
    bg: "rgba(139,0,0,0.08)",
    border: "rgba(139,0,0,0.3)",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    question: "Đội ngũ nòng cốt được xây dựng dựa trên nguyên tắc nào?",
    color: "#D4AF37",
    bg: "rgba(212,175,55,0.06)",
    border: "rgba(212,175,55,0.25)",
  },
  {
    icon: <Target className="w-5 h-5" />,
    question: "Làm thế nào để duy trì kỷ luật, đoàn kết và trách nhiệm?",
    color: "#b87333",
    bg: "rgba(184,115,51,0.06)",
    border: "rgba(184,115,51,0.25)",
  },
  {
    icon: <Users className="w-5 h-5" />,
    question: "Làm sao để hạn chế cái tôi cá nhân và hướng tới mục tiêu chung?",
    color: "#6b7280",
    bg: "rgba(107,114,128,0.06)",
    border: "rgba(107,114,128,0.2)",
  },
];



export default function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  void inView;

  return (
    <section id="dat-van-de" className="bg-[#f9fafb] text-[#111827] section-padding relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: "linear-gradient(90deg, transparent, #8B0000, #D4AF37, transparent)" }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <FadeUp delay={0} className="text-center mb-16">
          <span className="badge-crimson mb-4">
            Phần I
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#111827]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Đặt Vấn Đề
          </h2>
          <div className="gold-divider-light" />
        </FadeUp>

        {/* SLIDE 2 — Pain points */}
        <FadeUp delay={0.1}>
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-red-700 animate-pulse" />
            <h3 className="text-xl font-bold text-[#111827]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Thực Trạng Trong Làm Việc Nhóm & Startup Sinh Viên
            </h3>
          </div>
          <p className="text-sm mb-8 ml-7 text-[#4b5563]">
            Nhiều dự án học thuật và startup trẻ của sinh viên nhanh chóng gặp trở ngại lớn về cách vận hành nội bộ:
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-16">
          {PAIN_POINTS.map((item, i) => (
            <FadeUp key={i} delay={i * 0.05 + 0.15}>
              <div className="bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl p-6 text-center h-full flex flex-col items-center justify-start">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110"
                  style={{ background: "rgba(139,0,0,0.06)", color: "#8B0000" }}>
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold mb-2 text-[#111827]">{item.title}</h4>
                <p className="text-xs leading-relaxed text-[#4b5563]">{item.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-zinc-200 my-16" />

        {/* SLIDE 3 — Core questions */}
        <FadeUp delay={0.1}>
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#111827]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Vấn Đề Cốt Lõi Đặt Ra
          </h3>
          <p className="text-sm mb-8 text-[#4b5563]">
            Mỗi tổ chức muốn phát triển bền vững cần phải nghiêm túc trả lời được 4 câu hỏi định vị cốt lõi:
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {CORE_QUESTIONS.map((item, i) => (
            <FadeUp key={i} delay={i * 0.06 + 0.15}>
              <div
                className="flex items-start gap-4 rounded-2xl p-5 h-full transition-all duration-300 bg-white border border-gray-200/80 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}10`, color: item.color }}>
                  {item.icon}
                </div>
                <p className="text-sm font-semibold leading-relaxed pt-1.5" style={{ color: "#374151" }}>{item.question}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Key message */}
        <FadeUp delay={0.3}>
          <div
            className="rounded-3xl p-8 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(139,0,0,0.04), rgba(212,175,55,0.06))",
              border: "1px solid rgba(139,0,0,0.1)",
            }}
          >
            <p className="text-base md:text-lg font-medium leading-relaxed" style={{ color: "#1f2937" }}>
              Muốn tổ chức mạnh thì phải có{" "}
              <span className="font-extrabold" style={{ color: "#8B0000" }}>người cầm lái vững vàng</span>{" "}
              and{" "}
              <span className="font-extrabold" style={{ color: "#D4AF37" }}>đội ngũ nòng cốt có kỷ luật, đạo đức, năng lực</span>.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
