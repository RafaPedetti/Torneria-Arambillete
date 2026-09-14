import { Box } from "@mui/material";
import ComponentePortada from "./components/ComponentePortada";
import ComponenteQuienesSomos from "./components/ComponentesQuienesSomos";
import CoomponenteUbicacion from "./components/ComponenteUbicacion";

export default function Home() {
  return (
    <Box>
      <ComponentePortada />
      <ComponenteQuienesSomos />
      <CoomponenteUbicacion />
    </Box>
  );
}
