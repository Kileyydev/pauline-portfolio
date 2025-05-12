import { useState } from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const TopNavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = ['Home', 'About', 'Blogs', 'Resume'];

  return (
    <>
      <AppBar
        position="absolute"
        sx={{
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'transparent',
          boxShadow: 'none',
          zIndex: 3,
          backdropFilter: 'blur(5px)',
          transition: 'background-color 0.3s ease-in-out',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px' }}>
          {/* Logo / Title */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="h6"
              sx={{
                color: '#000',
                fontWeight: 600,
                fontFamily: 'Poppins, sans-serif',
                textTransform: 'uppercase',
              }}
            >
              Pauline M. Mukulu
            </Typography>
          </Box>

          {/* Desktop Nav Menu */}
          {!isMobile && (
            <Stack direction="row" spacing={4} sx={{ alignItems: 'center' }}>
              {navLinks.map((link) => (
                <Button key={link} sx={{ color: '#000', textTransform: 'none' }}>
                  {link}
                </Button>
              ))}
            </Stack>
          )}

          {/* Social Icons or Hamburger Menu */}
          {isMobile ? (
            <IconButton sx={{ color: '#000' }} onClick={handleDrawerToggle}>
              <MenuIcon fontSize="large" />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={2}>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/pauline-mukulu-mba-cpa-k/"
                target="_blank"
                rel="noopener"
                sx={{ color: '#000', '&:hover': { color: '#0a66c2' } }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton
                component="a"
                href="https://facebook.com/"
                target="_blank"
                rel="noopener"
                sx={{ color: '#000', '&:hover': { color: '#1877f2' } }}
              >
                <FacebookIcon fontSize="large" />
              </IconButton>
              <IconButton
                component="a"
                href="https://twitter.com/"
                target="_blank"
                rel="noopener"
                sx={{ color: '#000', '&:hover': { color: '#1da1f2' } }}
              >
                <TwitterIcon fontSize="large" />
              </IconButton>
            </Stack>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{
            width: 250,
            paddingTop: 2,
          }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            {navLinks.map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', p: 2 }}>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/pauline-mukulu-mba-cpa-k/"
              target="_blank"
              rel="noopener"
              sx={{ color: '#000', '&:hover': { color: '#0a66c2' } }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://facebook.com/"
              target="_blank"
              rel="noopener"
              sx={{ color: '#000', '&:hover': { color: '#1877f2' } }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://twitter.com/"
              target="_blank"
              rel="noopener"
              sx={{ color: '#000', '&:hover': { color: '#1da1f2' } }}
            >
              <TwitterIcon />
            </IconButton>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

export default TopNavBar;
