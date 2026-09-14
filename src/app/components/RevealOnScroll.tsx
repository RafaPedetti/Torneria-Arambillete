"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Fade } from "@mui/material";

interface Props {
  children: React.ReactNode;
  /** If content is inside a scrollable container, pass its element here */
  root?: Element | null;
  /** Start animating a bit before fully entering the viewport */
  rootMargin?: string;
  /** Trigger once only */
  once?: boolean;
  /** Fade duration */
  timeout?: number;
}

export default function RevealOnScroll({
  children,
  root = null,
  rootMargin = "0px 0px -10% 0px",
  once = true,
  timeout = 600,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (visible && once) return;

    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        root,
        rootMargin,
        threshold: [0, 0.1, 0.2],
      }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [root, rootMargin, once, visible]);

  return (
    <Box
      ref={ref}
      sx={{
        display: "block",
        width: "100%",
      }}
    >
      <Fade in={visible} timeout={timeout}>
        <Box>{children}</Box>
      </Fade>
    </Box>
  );
}