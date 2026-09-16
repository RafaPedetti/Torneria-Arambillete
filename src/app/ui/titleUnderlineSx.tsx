import type { SxProps, Theme } from "@mui/material/styles";

export function titleUnderlineSx(active = false): SxProps<Theme> {
  return {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    fontWeight: 400,
    transition: "color 0.2s ease",

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
      transform: active ? "scaleX(1)" : "scaleX(0)",
      transition: "transform 0.25s ease",
    },

    "&:hover::after": {
      transform: "scaleX(1)",
    },
  };
}