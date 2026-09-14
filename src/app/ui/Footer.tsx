import { Box, Container, Typography, Link, Stack, Divider } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const socialIconSx = {
  color: "text.secondary",
  transition: "color 0.3s, transform 0.3s",
  "&:hover": {
    color: "primary.main",
    transform: "scale(1.15)",
  },
  display: "inline-flex",
};

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "grey.100", py: { xs: 4, sm: 6 } }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 3, sm: 4 }}
          sx={{
            justifyContent: "space-between",
            textAlign: { xs: "center", sm: "left" }
          }}
        >
          {/* Brand + contact */}
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }} gutterBottom>
              Torneria Arambillete
            </Typography>
            <Typography variant="body2" color="text.secondary">
              099 196 394
            </Typography>
            <Link
              href="mailto:torneria2@gmail.com"
              underline="hover"
              color="text.secondary"
              variant="body2"
            >
              torneria2@gmail.com
            </Link>
          </Box>

          {/* Address */}
          <Box>
            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                alignItems: "flex-start",
                justifyContent: { xs: "center", sm: "flex-start" }
              }}
            >
              <PlaceIcon fontSize="small" sx={{ color: "text.secondary", mt: "2px" }} />
              <Typography variant="body2" color="text.secondary">
                Av. 18 de Julio 1234, Montevideo
              </Typography>
            </Stack>
          </Box>

          {/* Hours */}
          <Box>
            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                alignItems: "flex-start",
                justifyContent: { xs: "center", sm: "flex-start" }
              }}
            >
              <AccessTimeIcon fontSize="small" sx={{ color: "text.secondary", mt: "2px" }} />
              <Stack direction= "column" spacing={1}>
              <Typography variant="body2" color="text.secondary">
                Horario de 8 a 17 de Lunes a Viernes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sabado de 8 a 12
              </Typography>
              </Stack>

            </Stack>
          </Box>
        </Stack >

        <Stack
          direction="row"
          spacing={3}

          sx={{ mt: { xs: 4, sm: 5 }, justifyContent: "center" }}
        >
          <Link href="https://www.instagram.com/cuidarte.sh/" target="_blank" rel="noopener">
            <Box component="span" sx={socialIconSx}>
              <InstagramIcon fontSize="large" />
            </Box>
          </Link>
          <Link href="https://www.facebook.com/..." target="_blank" rel="noopener">
            <Box component="span" sx={socialIconSx}>
              <FacebookIcon fontSize="large" />
            </Box>
          </Link>
          <Link href="https://wa.me/59898500411" target="_blank" rel="noopener">
            <Box component="span" sx={socialIconSx}>
              <WhatsAppIcon fontSize="large" />
            </Box>
          </Link>
          <Link href="mailto:comercialcuidarte2@gmail.com">
            <Box component="span" sx={socialIconSx}>
              <EmailIcon fontSize="large" />
            </Box>
          </Link>
        </Stack>
      </Container >
    </Box >
  );
}
