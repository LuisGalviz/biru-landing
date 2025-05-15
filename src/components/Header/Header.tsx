'use client';

import Link from 'next/link';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Typography, Drawer, Button, Box } from '@mui/material';
import { Menu, X } from 'lucide-react';
import {
  appBar,
  toolbar,
  menuButton,
  title,
  navLinks,
  drawerContent,
  langSwitcher,
  navButton,
} from './header.styles';
import LanguageSwitcher from '../LanguageSwitcher';

interface HeaderItem {
  label: string;
  href: string;
}

interface HeaderProps {
  items: HeaderItem[];
}

const Header = ({ items }: HeaderProps) => {
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
            LOGO
          </Typography>

          <Box sx={navLinks}>
            {items.map((item: { label: string; href: string }) => (
              <Button key={item.label} href={item.href} component={Link} sx={navButton}>
                {item.label}
              </Button>
            ))}
          </Box>
          <Box sx={langSwitcher}>
            <LanguageSwitcher />
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
          {items.map((item: { label: string; href: string }) => (
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

Header.prototypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Header;
