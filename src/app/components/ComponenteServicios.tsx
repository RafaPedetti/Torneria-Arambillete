"use client";
import {
    Box,
    Stack,
} from '@mui/material';
import { MotionTypography } from './MotionTypography';
import theme from '../ui/theme';
import ComponenteCardServicios from './ComponenteCardServicio';

export default function ComponenteServicios() {

    return (
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 }, px: { xs: 2, md: 0 } }} id="servicios">
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
                SERVICIOS
            </MotionTypography>
            <Stack
                direction="row"
                useFlexGap
                spacing={7}
                sx={{
                    flexWrap: "wrap",
                    justifyContent: "center",
                    width: "80%",
                    mx: "auto",
                }}
            >
                <ComponenteCardServicios
                    titulo="TORNERIA  MECANICA "
                    subtitulo="INDUSTRIAL Y  AGRICOLA"
                    imagen="/images/torneria1.png"
                    alt="TORNERIA  MECANICA "
                />
                <ComponenteCardServicios
                    titulo="FRESADOS Y MATRICERÍA"
                    imagen="/images/torneria1.png"
                    alt="FRESADOS Y MATRICERÍA"
                />
                <ComponenteCardServicios
                    titulo="RECTIFICADO PLANO"
                    imagen="/images/torneria1.png"
                    alt="RECTIFICADO PLANO"
                />
                <ComponenteCardServicios
                    titulo="ESTRUCTURAS METÁLICAS"
                    imagen="/images/torneria1.png"
                    alt="ESTRUCTURAS METÁLICAS"
                />
                <ComponenteCardServicios
                    titulo="MANTENIMIENTO INDUSTRIAL"
                    imagen="/images/torneria1.png"
                    alt="MANTENIMIENTO INDUSTRIAL"
                />

            </Stack>


        </Box>
    );
}