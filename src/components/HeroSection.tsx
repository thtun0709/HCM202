"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown, BookOpen, Layers } from "lucide-react";


function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToNext = () => {
    const el = document.getElementById("dat-van-de");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden hero-bg noise-overlay"
      id="hero"
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,0,0,0.3) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-20 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 text-center">
        {/* Badge */}
        <FadeUp delay={0}>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-semibold tracking-widest uppercase"
            style={{
              background: "rgba(139,0,0,0.2)",
              border: "1px solid rgba(212,175,55,0.3)",
              color: "#D4AF37",
            }}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Tư Tưởng Hồ Chí Minh — HCM202
          </div>
        </FadeUp>

        {/* Main title */}
        <FadeUp delay={0.15}>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: "#f0ede8" }}
          >
            Từ Quan Niệm của{" "}
            <span className="shimmer-text">Hồ Chí Minh</span>
            <br />
            về Xây Dựng Đảng
          </h1>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="text-lg md:text-xl mb-4 font-light" style={{ color: "#d0cdc8" }}>
            đến bài học{" "}
            <span style={{ color: "#D4AF37" }} className="font-semibold">
              Xây Dựng Đội Ngũ Nòng Cốt
            </span>{" "}
            trong Doanh Nghiệp / Startup
          </p>
          <p className="text-base mb-10 font-light italic" style={{ color: "#7a7672" }}>
            đối với sinh viên khi bước vào môi trường làm việc
          </p>
        </FadeUp>

        {/* Theoretical boundary */}
        <FadeUp delay={0.45}>
          <div
            className="glass rounded-2xl p-5 mb-12 max-w-2xl mx-auto text-left"
            style={{ borderColor: "rgba(212,175,55,0.15)" }}
          >
            <div className="flex items-start gap-3">
              <Layers className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#D4AF37" }} />
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#D4AF37" }}>
                  Giới Hạn Lý Thuyết
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#b0ada8" }}>
                  Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam: vai trò lãnh đạo, nguyên tắc tổ chức,
                  xây dựng và chỉnh đốn Đảng.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* FAMOUS QUOTE BLOCKQUOTE */}
        <FadeUp delay={0.6}>
          <blockquote
            className="relative rounded-3xl p-8 md:p-12 max-w-3xl mx-auto overflow-hidden mb-10"
            style={{
              background: "linear-gradient(135deg, rgba(139,0,0,0.15), rgba(90,0,0,0.08))",
              border: "1px solid rgba(212,175,55,0.25)",
            }}
          >
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ boxShadow: "inset 0 0 40px rgba(212,175,55,0.04), 0 0 50px rgba(139,0,0,0.1)" }}
            />

            {/* Opening quotation mark */}
            <div
              aria-hidden="true"
              className="leading-none mb-2 text-left select-none"
              style={{ fontSize: "7rem", color: "#D4AF37", opacity: 0.35, fontFamily: "'Playfair Display', serif", lineHeight: 0.5 }}
            >
              &ldquo;
            </div>

            <p
              className="text-xl md:text-2xl lg:text-3xl font-semibold italic leading-relaxed text-center relative z-10"
              style={{ fontFamily: "'Playfair Display', serif", color: "#f0ede8" }}
            >
              Đảng có vững, cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy.
            </p>

            {/* Closing quotation mark */}
            <div
              aria-hidden="true"
              className="leading-none mt-2 text-right select-none"
              style={{ fontSize: "7rem", color: "#D4AF37", opacity: 0.35, fontFamily: "'Playfair Display', serif", lineHeight: 0.5 }}
            >
              &rdquo;
            </div>

            <div className="mt-4 text-center relative z-10">
              <div className="gold-divider w-24 mx-auto mb-3" />
              <cite className="text-sm font-semibold tracking-widest uppercase not-italic" style={{ color: "#D4AF37" }}>
                — Hồ Chí Minh
              </cite>
            </div>
          </blockquote>
        </FadeUp>


      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer group"
        id="hero-scroll-btn"
        aria-label="Cuộn xuống"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "#7a7672" }}>
          Khám phá
        </span>
        <ChevronDown className="w-5 h-5" style={{ color: "#D4AF37" }} />
      </motion.button>
    </section>
  );
}
