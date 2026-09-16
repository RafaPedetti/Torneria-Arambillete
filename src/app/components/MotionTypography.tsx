"use client";

import  {Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ComponentProps } from "react";
import { motion } from "framer-motion";

const BaseMotionTypography = motion(Typography);

const underlineSx: SxProps<Theme> = {
  display: "inline-block",
  position: "relative",
  transition: "color 0.2s ease",
  fontWeight: 600,
  margin: 4,
  "&:hover": {
    color: "primary.main",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -8,
    height: "3px",
    borderRadius: "999px",
    backgroundColor: "primary.main",
    transformOrigin: "center",
    transform: "scaleX(0)",
    transition: "transform 0.25s ease",
  },

  "&:hover::after": {
    transform: "scaleX(1)",
  },
};

type MotionTypographyProps = ComponentProps<typeof BaseMotionTypography>;

export function MotionTypography({
  sx,
  ...props
}: MotionTypographyProps) {
  const styles = sx
    ? Array.isArray(sx)
      ? sx
      : [sx]
    : [];

  return <BaseMotionTypography {...props} sx={[underlineSx, ...styles]} />;
}