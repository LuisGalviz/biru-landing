'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, Button, Box } from '@mui/material';
import { Menu, X } from 'lucide-react';
import { appBar, toolbar, menuButton, title, navLinks, drawerContent } from './header.styles';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Features', href: '#features' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Team', href: '#team' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  return (
    <>
      <AppBar position="static" sx={appBar}>
        <Toolbar sx={toolbar}>
          <IconButton sx={menuButton} onClick={toggleDrawer(true)}>
            <Menu />
          </IconButton>

          <Typography variant="h6" sx={title}>
            Mi Sitio
          </Typography>

          <Box sx={navLinks}>
            {navItems.map((item) => (
              <Button key={item.label} href={item.href} component={Link} color="inherit">
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={drawerContent}>
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={toggleDrawer(false)}>
              <X />
            </IconButton>
          </Box>
          {navItems.map((item) => (
            <Button
              key={item.label}
              component={Link}
              href={item.href}
              fullWidth
              onClick={toggleDrawer(false)}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
