import type { SxProps, Theme } from "@mui/material/styles";

export function navButtonSx(active: boolean): SxProps<Theme> {
  return {
    textTransform: "none",
    fontWeight: active ? 700 : 500,
    color: active ? "primary.main" : "text.secondary",
    position: "relative",

    "&:hover": {
      color: "primary.main",
      backgroundColor: "transparent",
    },

    "&::after": {
      content: '""',
      position: "absolute",
      left: 12,
      right: 12,
      bottom: 6,
      height: "2px",
      backgroundColor: "primary.main",
      transform: active ? "scaleX(1)" : "scaleX(0)",
      transition: "transform 0.2s ease",
    },

    "&:hover::after": {
      transform: "scaleX(1)",
    },
  };
}