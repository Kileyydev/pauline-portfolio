import {
  Box,
  Typography,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="home"
      sx={{
        width: '100%',
        minHeight: '65vh',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        position: 'relative',
        backgroundColor: '#f4f4f4',
        overflow: 'hidden',
      }}
    >
      {/* Left - Text Section */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 4,
          py: isMobile ? 6 : 0,
          backgroundColor: '#f4f4f4',
          zIndex: 2,
        }}
      >
        <Box sx={{ maxWidth: 600, textAlign: isMobile ? 'center' : 'left' }}>
          <Typography
            variant={isMobile ? 'h4' : 'h3'}
            sx={{ fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: '#000' }}
          >
            Pauline M. Mukulu
          </Typography>
          <Typography
            variant="h6"
            sx={{ mt: 1, color: '#d4a017', fontWeight: 500, fontFamily: 'Poppins, sans-serif' }}
          >
            MBA, CPA-K — Finance & Strategy Leader
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              fontSize: 16,
              lineHeight: 1.7,
              fontFamily: 'Poppins, sans-serif',
              color: '#333',
              opacity: 0.9,
            }}
          >
            Passionate about financial transformation, governance, and empowering organizations to
            reach their strategic goals with integrity and purpose.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            sx={{ mt: 4, justifyContent: isMobile ? 'center' : 'flex-start' }}
          >
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
        </Box>
      </Box>

      {/* Right - Image with Fade Leftward */}
      <Box
        sx={{
          flex: 1,
          position: 'relative',
          minHeight: isMobile ? 300 : '100vh',
        }}
      >
        <Box
          component="img"
          src="/images/pauline-hero.jpg"
          alt="Pauline M. Mukulu"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        {/* Gradient overlay: right to left fade */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to left, rgba(255,255,255,0) 60%, #f4f4f4 100%)',
          }}
        />
      </Box>

      {/* Scroll Icon */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
        }}
      >
        <IconButton href="#about" sx={{ color: '#d4a017' }}>
          <ExpandMoreIcon fontSize="large" />
        </IconButton>
      </Box>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translate(-50%, 0); }
          40% { transform: translate(-50%, 8px); }
          60% { transform: translate(-50%, 4px); }
        }
      `}</style>
    </Box>
  );
};

export default HeroSection;
