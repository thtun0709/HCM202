"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageSquare } from "lucide-react";

interface SpeechToggleProps {
  id: string;
  speech: string;
  label?: string;
}

export default function SpeechToggle({ id, speech, label = "Xem lời thoại thuyết trình" }: SpeechToggleProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-4">
      <button
        id={`speech-toggle-${id}`}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer group"
        style={{
          background: open ? "rgba(212,175,55,0.12)" : "rgba(255,255,255,0.04)",
          border: `1px solid ${open ? "rgba(212,175,55,0.35)" : "rgba(255,255,255,0.1)"}`,
          color: open ? "#D4AF37" : "#7a7672",
        }}
        aria-expanded={open}
      >
        <MessageSquare className="w-3.5 h-3.5" />
        {label}
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={`speech-content-${id}`}
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 12 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className="rounded-2xl p-5 text-sm leading-relaxed border-l-4 text-left"
              style={{
                background: "rgba(212,175,55,0.05)",
                borderLeftColor: "#D4AF37",
                border: "1px solid rgba(212,175,55,0.15)",
                borderLeft: "4px solid #D4AF37",
                color: "#b0ada8",
              }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#D4AF37" }}>
                Lời thuyết trình gợi ý
              </p>
              <p style={{ color: "#c8c5c0" }}>{speech}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
