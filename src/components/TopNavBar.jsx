import { AppBar, Box, IconButton, Stack, Toolbar, Typography, useMediaQuery, useTheme, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const TopNavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar
      position="absolute"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',  // Transparent background for blending with hero section
        boxShadow: 'none',  // No shadow to keep it minimal
        zIndex: 3,  // Ensures the navbar stays on top of other elements
        backdropFilter: 'blur(5px)',  // Optional: subtle blur effect on scroll
        transition: 'background-color 0.3s ease-in-out',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px' }}>
        {/* Left - Logo or Title */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            variant="h6"
            sx={{
              color: '#000',  // Black text color
              fontWeight: 600,
              fontFamily: 'Poppins, sans-serif',
              textTransform: 'uppercase',
            }}
          >
            Pauline M. Mukulu
          </Typography>
        </Box>

        {/* Center - Navigation Menu */}
        <Stack direction="row" spacing={4} sx={{ alignItems: 'center' }}>
          <Button sx={{ color: '#000', textTransform: 'none' }}>Home</Button>
          <Button sx={{ color: '#000', textTransform: 'none' }}>About</Button>
          <Button sx={{ color: '#000', textTransform: 'none' }}>Blogs</Button>
          <Button sx={{ color: '#000', textTransform: 'none' }}>Resume</Button>
        </Stack>

        {/* Right - Social Icons */}
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

        {/* Mobile Menu Icon */}
        {isMobile && (
          <IconButton
            sx={{ color: '#000' }}
            // Add functionality for opening a mobile menu
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
