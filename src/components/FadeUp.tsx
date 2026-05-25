"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
}

export default function FadeUp({ children, delay = 0, className = "", duration = 0.6 }: FadeUpProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
