'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, IconButton, Typography, Drawer, Button, Box } from '@mui/material';
import { Menu, X } from 'lucide-react';
import { styles } from './header.styles';
import LanguageSwitcher from '../LanguageSwitcher';
import { getHeaderSx } from '@/utils/getHeaderSx';

interface HeaderItem {
  label: string;
  href: string;
}

interface HeaderProps {
  items: HeaderItem[];
}

const Header = ({ items }: HeaderProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AppBar sx={getHeaderSx(scrolled)}>
        <Toolbar sx={styles.toolbar}>
          <IconButton sx={styles.menuButton} onClick={toggleDrawer(true)}>
            <Menu />
          </IconButton>

          <Typography variant="h6" sx={styles.title}>
            LOGO
          </Typography>

          <Box sx={styles.navLinks}>
            {items.map((item) => (
              <Button key={item.label} href={item.href} component={Link} sx={styles.navButton}>
                {item.label}
              </Button>
            ))}
          </Box>

          <Box sx={styles.langSwitcher}>
            <LanguageSwitcher />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={styles.drawerContent}>
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={toggleDrawer(false)}>
              <X />
            </IconButton>
          </Box>
          {items.map((item) => (
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
