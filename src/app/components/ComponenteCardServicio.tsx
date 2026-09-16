"use client";

import { Box, Card, CardActionArea, Typography } from "@mui/material";
import Image from "next/image";
import { MotionTypography } from "./MotionTypography";

type ServicioCardProps = {
  titulo: string;
  subtitulo?: string;
  imagen: string;
  alt: string;
  onClick?: () => void;
};

export default function ComponenteCardServicios({
  titulo,
  subtitulo,
  imagen,
  alt,
  onClick,
}: ServicioCardProps) {
  return (
    <Box sx={{ width: "100%", maxWidth: 280, mx: "auto", textAlign: "center" }}>
      <MotionTypography
        variant="h5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200 }}
        sx={{
          fontSize: "1.5rem",
          fontWeight: 700,
          textTransform: "uppercase",
          mb: subtitulo ? 2 : 2,
        }}
      >
        {titulo}
      </MotionTypography>

  <Typography
  variant="caption"
  sx={{
    minHeight: "1.5em",
    display: "block",
    mb: 1.5,
    color: "text.secondary",
    fontWeight: 600,
    textTransform: "uppercase",
    visibility: subtitulo ? "visible" : "hidden",
  }}
>
  {subtitulo || "placeholder"}
</Typography>

      <Card
        elevation={0}
        sx={{
          borderRadius: 0,
          overflow: "hidden",
          backgroundColor: "grey.200",
        }}
      >
        <CardActionArea
          onClick={onClick}
          sx={{
            position: "relative",
            height: 190,

            "&:hover img": {
              transform: "scale(1.08)",
            },

            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0)",
              transition: "background-color 0.3s ease",
            },

            "&:hover::after": {
              backgroundColor: "rgba(0, 0, 0, 0.15)",
            },
          }}
        >
          <Image
            src={imagen}
            alt={alt}
            fill
            sizes="(max-width: 600px) 100vw, 280px"
            style={{
              objectFit: "cover",
              transition: "transform 0.4s ease",
            }}
          />
        </CardActionArea>
      </Card>
    </Box>
  );
}