"use client";

import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Image from "next/image";
import { MotionTypography } from "./MotionTypography";
import theme from "../ui/theme";

type ContactoProps = {
  email?: string;
  telefono?: string;
  direccion?: string;
  imagen?: string;
};

export default function ComponenteContacto({
  email = "contacto@torneria.com",
  telefono = "+598 99 123 456",
  direccion = "Montevideo, Uruguay",
  imagen = "/images/torneria3.jpg",
}: ContactoProps) {
  return (
    <Box sx={{ maxWidth: 1150, mx: "auto" }}>
      <Stack spacing={1.5} sx={{ mb: 5, alignItems: "center" }}>
        <MotionTypography
          variant="h2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ color: theme.palette.primary.dark, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 200 }}
          gutterBottom
          sx={{
            cursor: 'pointer',
            fontSize: "clamp(2rem, 5vw, 4rem)",
            textAlign: "center",
          }}
        >
          SOLICITÁ TU PRESUPUESTO
        </MotionTypography>

        <Typography
          color="text.secondary"
          sx={{
            maxWidth: "80%",
            textAlign: "center",
            fontSize: "1.05rem",
          }}
        >
          Fabricamos, reparamos y mecanizamos piezas a medida para la industria,
          el campo y proyectos particulares.
        </Typography>
      </Stack>

      <Paper
        elevation={0}
        sx={{
          overflow: "hidden",
          borderRadius: 5,
          border: `1px solid ${theme.palette.divider}`,
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.12)",
        }}
      >
        <Stack direction={{ xs: "column-reverse", md: "row" }}>
          <Stack
            spacing={3}
            sx={{
              flex: 1,
              p: { xs: 3, sm: 5, md: 6 },
              justifyContent: "center",
            }}
          >
            <Box>
              <Typography variant="h4" gutterBottom sx={{
                cursor: 'pointer',
                fontSize: "clamp(2rem, 5vw, 3rem)",
                textAlign: "center",
                fontWeight: 700,
              }}>
                ¿Necesitás una pieza o reparación?
              </Typography>

              <Typography color="text.secondary">
                Enviános las medidas, un plano o una foto de la pieza. Te
                asesoramos y preparamos un presupuesto sin compromiso.
              </Typography>
            </Box>

            <Stack spacing={2}>
              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <EmailOutlinedIcon color="primary" />
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    EMAIL
                  </Typography>
                  <Typography
                    component="a"
                    href={`mailto:${email}`}
                    sx={{
                      display: "block",
                      color: "text.primary",
                      fontWeight: 700,
                      textDecoration: "none",
                    }}
                  >
                    {email}
                  </Typography>
                </Box>
              </Stack>

              <Divider />

              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <PhoneOutlinedIcon color="primary" />
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    WHATSAPP
                  </Typography>
                  <Typography
                    component="a"
                    href={`tel:${telefono.replace(/\s/g, "")}`}
                    sx={{
                      display: "block",
                      color: "text.primary",
                      fontWeight: 700,
                      textDecoration: "none",
                    }}
                  >
                    {telefono}
                  </Typography>
                </Box>
              </Stack>

              <Divider />

              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <LocationOnOutlinedIcon color="primary" />
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    TALLER
                  </Typography>
                  <Typography sx={{ fontWeight: 700 }}>{direccion}</Typography>
                </Box>
              </Stack>
            </Stack>

            <Button
              component="a"
              href={`mailto:${email}?subject=Consulta%20de%20presupuesto`}
              variant="contained"
              size="large"
              sx={{
                alignSelf: "flex-start",
                borderRadius: 2,
                px: 3,
                py: 1.25,
                fontWeight: 800,
              }}
            >
              Pedir presupuesto
            </Button>
          </Stack>

          <Box
            sx={{
              position: "relative",
              flex: 1,
              minHeight: { xs: 280, md: 580 },
              overflow: "hidden",
            }}
          >
            <Image
              src={imagen}
              alt="Trabajo de tornería y mecanizado industrial"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />

            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.6))",
              }}
            />

            <Stack
              spacing={0.5}
              sx={{
                position: "absolute",
                bottom: 28,
                left: 28,
                right: 28,
                color: "#fff",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.3rem", md: "1.7rem" },
                  fontWeight: 800,
                  textShadow: "0 2px 10px rgba(0,0,0,0.5)"
                }}
              >
                Precisión en cada pieza
              </Typography>

              <Typography sx={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
                Torneado · Mecanizado · Reparación · Fabricación a medida
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}