import { Box } from "@mui/material";
import ComponentePortada from "./components/ComponentePortada";
import ComponenteQuienesSomos from "./components/ComponentesQuienesSomos";
import CoomponenteUbicacion from "./components/ComponenteUbicacion";
import ComponenteServicios from "./components/ComponenteServicios";
import ComponenteContacto from "./components/ComponenteContacto";

export default function Home() {
  return (
    <Box>
      <ComponentePortada  />
      <ComponenteServicios />
      <ComponenteQuienesSomos />
      <ComponenteContacto />
      <CoomponenteUbicacion lat={40.7128} lng={-74.006} />
    </Box>
  );
}
