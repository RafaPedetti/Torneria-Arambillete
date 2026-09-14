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
      {/* Panel 1: imagen + texto secundario */}
      <Box
        component="section"
        sx={{
          position: "relative",
          flex: 1,
          height: { xs: "45vh", sm: "60vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/torneria1.png"
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
            bgcolor: alpha(theme.palette.common.black, 0.4),
          }}
        />
      </Box>

      {/* Panel 2: imagen + título principal */}
      <Box
        component="section"
        sx={{
          position: "relative",
          flex: 1,
          height: { xs: "45vh", sm: "60vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/metal.avif"
          alt="Trabajo en metal industrial"
          fill
          style={{ objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            bgcolor: alpha(theme.palette.primary.dark, 0.75),
          }}
        />
        <MotionBox
          sx={{ position: "relative", zIndex: 2, textAlign: "center", px: 3 }}
        >
          <MotionTypography
            variant="h4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ color: theme.palette.primary.light, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            gutterBottom
            sx={{
              cursor: "pointer",
              color: "common.white",
              fontWeight: 700,
              fontSize: { xs: "1.6rem", sm: "2.2rem" },
            }}
          >
            Tornería · Mantenimiento Industrial · Matricería
          </MotionTypography>
        </MotionBox>
      </Box>
    </Stack>
  );
}