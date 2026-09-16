"use client";

import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { navButtonSx } from "./navButtonSx";

type NavLink = { label: string; href: string };

const leftLinks: NavLink[] = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Servicios", href: "/#servicios" },

];

const rightLinks: NavLink[] = [
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
];

const allLinks = [...leftLinks, ...rightLinks];

export default function Header() {
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar position="static" color="inherit" elevation={0} sx={{ borderBottom: "1px solid", borderColor: "divider" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", gap: 2, py: { xs: 1, sm: 0 } }}>
        {/* Izquierda: links desktop */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, flex: 1 }}>
          {leftLinks.map((link) => (
            <Button
              key={link.href}
              component={NextLink}
              href={link.href}
              sx={navButtonSx(pathname === link.href)}
            >
              {link.label}
            </Button>
          ))}
        </Box>

        {/* Centro: logo */}
        <Box
          component={NextLink}
          href="/"
          sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        >
          <Image src="/images/logo.png" alt="Torneria Arambillete" width={150} height={90} priority />
        </Box>

        {/* Derecha: links desktop */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, flex: 1, justifyContent: "flex-end" }}>
          {rightLinks.map((link) => (
            <Button
              key={link.href}
              component={NextLink}
              href={link.href}
              sx={navButtonSx(pathname === link.href)}
            >
              {link.label}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" }, position: "absolute", right: 16 }}>
          <IconButton
            onClick={handleOpen}
            aria-controls={open ? "nav-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            aria-label="Abrir menú"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="nav-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            {allLinks.map((link) => (
              <MenuItem
                key={link.href}
                component={NextLink}
                href={link.href}
                selected={pathname === link.href}
                onClick={handleClose}
                sx={{ fontSize: 14 }}
              >
                {link.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}