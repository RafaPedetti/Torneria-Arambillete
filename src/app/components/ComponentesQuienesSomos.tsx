"use client";
import {
    Box,
    Stack,
    Typography,
} from '@mui/material';
import Image from 'next/image';
import { MotionTypography } from './MotionTypography';
import theme from '../ui/theme';

export default function ComponenteFilosofia() {

    return (
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 }, px: { xs: 2, md: 0 } }}>
            <MotionTypography
                variant="h2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ color: theme.palette.primary.dark, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200 }}
                gutterBottom
                sx={{ cursor: 'pointer' }}
            >
                QUIENES SOMOS
            </MotionTypography>
            <Stack direction="row" spacing={1} sx={{ mb: 2, justifyContent: "center", alignItems: "center" }}>
                <Typography>
                    Empresa familiar desde el año 1996 con trabajos relacionados en sus inicios en la rama de platico hoy en día abarcamos otros rubros de metal mecantica
                </Typography>
            </Stack>
            <Image
                src="/images/torneria1.png"
                alt="Taller de tornería"
                width={1200}
                height={800}
            />
        </Box>
    );
}