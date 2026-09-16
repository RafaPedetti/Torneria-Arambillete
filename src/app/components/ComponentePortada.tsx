"use client";

import { Box, Stack, Typography, useTheme, alpha } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionTypography = motion(Typography);
const MotionBox = motion(Box);

export default function Hero() {
  const theme = useTheme();

  return (
    <Stack direction={{ xs: "column", sm: "row" }}>
      <Box
        id="inicio"
        component="section"
        sx={{
          position: "relative",
          flex: 1,
          height: { xs: "55vh", sm: "70vh" },
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/torneria2hd.png"
          alt="Taller de tornería"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background: `linear-gradient(to top, ${alpha(
              theme.palette.common.black,
              0.85
            )} 0%, ${alpha(theme.palette.common.black, 0.35)} 45%, ${alpha(
              theme.palette.common.black,
              0.05
            )} 100%)`,
          }}
        />

        <MotionBox
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: "left",
            px: { xs: 3, sm: 6 },
            pb: { xs: 4, sm: 6 },
            maxWidth: { sm: "650px" },
          }}
        >
          <Typography
            component="p"
            sx={{
              display: { xs: "none", sm: "block" },
              color: theme.palette.primary.light,
              fontWeight: 700,
              letterSpacing: "0.18em",
              fontSize: { xs: "0.7rem", sm: "0.8rem" },
              mb: 1.5,
            }}
          >
            DESDE 1996 · MONTEVIDEO
          </Typography>
          <Box
            sx={{
              width: 48,
              height: 3,
              bgcolor: theme.palette.primary.light,
              mb: 2.5,
            }}
          />
          <MotionTypography
            variant="h1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ color: theme.palette.primary.light, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200 }}
            sx={{
              cursor: "pointer",
              color: "common.white",
              fontWeight: 700,
              lineHeight: 1.1,
              fontSize: { xs: "1.9rem", sm: "3rem" },
            }}
          >
            Tornería  · Matricería · Mantenimiento Industrial
          </MotionTypography>
        </MotionBox>
      </Box>
    </Stack>
  );
}