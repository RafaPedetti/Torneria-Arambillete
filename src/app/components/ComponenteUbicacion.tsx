"use client";
import {
  Box,
  Paper,
} from '@mui/material';
import { MotionTypography } from './MotionTypography';
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import theme from '../ui/theme';

type AddressMapProps = {
  lat: number;
  lng: number;
};

export default function ComponenteUbicacion({ lat, lng }: AddressMapProps) {
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
        UBICACIÓN
      </MotionTypography>
      <Paper
        elevation={3}
        sx={{
          width: {
            xs: "100%",
            md: "80%",
          },
          mx: "auto",
          overflow: "hidden",
          borderRadius: 2,
        }}
      >
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
          <Map
            defaultCenter={{ lat, lng }}
            defaultZoom={16}
            mapId="YOUR_GOOGLE_MAP_ID"
            style={{ width: "100%", height: 360 }}
            gestureHandling="greedy"
            disableDefaultUI={false}
          >
            <AdvancedMarker position={{ lat, lng }} />
          </Map>
        </APIProvider>
      </Paper>
    </Box>
  );
}