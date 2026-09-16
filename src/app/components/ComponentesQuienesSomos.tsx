"use client";
import {
    Box,
    Stack,
    Typography,
} from '@mui/material';
import Image from 'next/image';
import { MotionTypography } from './MotionTypography';
import theme from '../ui/theme';

export default function ComponenteQuienesSomos() {

    return (
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 }, px: { xs: 2, md: 0 } }} id="nosotros">
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
                QUIENES SOMOS
            </MotionTypography>
            <Stack
                direction={{ xs: "column", sm: "row" }}
                sx={{
                    alignItems: "center",

                    width: "80%",
                    mx: "auto",
                }}
            >
                <Typography sx={{ textAlign: "left" }}>
                    Empresa familiar desde el año 1996 con trabajos relacionados en sus inicios en la rama de platico hoy en día abarcamos otros rubros de metal mecantica
                </Typography>
                <Box sx={{ width: "100%", maxWidth: 500, mx: "auto" }}>
                    <Image
                        src="/images/torneria1.png"
                        alt="Taller de tornería"
                        width={500}
                        height={500}
                        sizes="(max-width: 600px) 100vw, 500px"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                        }}
                    />
                </Box>
            </Stack>

        </Box>
    );
}