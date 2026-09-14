"use client";
import {
  Box,
  Typography,
} from '@mui/material';
import { MotionTypography } from './MotionTypography';
import theme from '../ui/theme';
export default function ComponenteFilosofia() {

  return (
    <Box sx= {{textAlign:"center", mb:{ xs: 4, md: 6 }, px:{ xs: 2, md: 0 } }}>
      <MotionTypography
        variant="h4"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        whileHover={{ color: theme.palette.primary.dark, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 200 }}
        gutterBottom
        sx={{ cursor: 'pointer' }}
      >
        Ubicacion
      </MotionTypography>
      <Typography>TODO MAPA</Typography>
    </Box>
  );
}