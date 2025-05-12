import { Box, Container, Stack, Typography, Link, IconButton, useMediaQuery, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ backgroundColor: '#1a1a1a', color: '#fff', py: 4 }}>
      <Container maxWidth="lg">
        <Stack
          direction={isMobile ? 'column' : 'row'}
          spacing={4}
          justifyContent="space-between"
          alignItems={isMobile ? 'center' : 'flex-start'}
        >
          {/* Left Column - Footer Info / About Section */}
          <Box sx={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: 'Poppins, sans-serif', color: '#d4a017' }}>
              Pauline M. Mukulu
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, opacity: 0.7, color: '#fff' }}>
              Finance & Strategy Leader | Passionate about driving organizational success through financial transformation.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 3, justifyContent: isMobile ? 'center' : 'flex-start' }}>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/pauline-mukulu-mba-cpa-k/?originalSubdomain=ke"
                target="_blank"
                rel="noopener"
                sx={{ color: '#d4a017', '&:hover': { color: '#d4a017' } }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://facebook.com/"
                target="_blank"
                rel="noopener"
                sx={{ color: '#d4a017', '&:hover': { color: '#d4a017' } }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://twitter.com/"
                target="_blank"
                rel="noopener"
                sx={{ color: '#d4a017', '&:hover': { color: '#d4a017' } }}
              >
                <TwitterIcon />
              </IconButton>
            </Stack>
          </Box>

          {/* Center Column - Skills & Expertise and Achievements */}
          <Box sx={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#d4a017' }}>
              Skills & Expertise
            </Typography>
            <Stack direction="column" spacing={1} sx={{ mt: 2 }}>
              <Typography variant="body2" sx={{ color: '#fff' }}>• Financial Strategy</Typography>
              <Typography variant="body2" sx={{ color: '#fff' }}>• Business Leadership</Typography>
              <Typography variant="body2" sx={{ color: '#fff' }}>• Corporate Governance</Typography>
              <Typography variant="body2" sx={{ color: '#fff' }}>• Financial Transformation</Typography>
            </Stack>

            <Typography variant="h6" sx={{ fontWeight: 700, mt: 4, color: '#d4a017' }}>
              Achievements
            </Typography>
            <Stack direction="column" spacing={1} sx={{ mt: 2 }}>
              <Typography variant="body2" sx={{ color: '#fff' }}>• 2020 Finance Leadership Award</Typography>
              <Typography variant="body2" sx={{ color: '#fff' }}>• Certified Public Accountant (CPA-K)</Typography>
              <Typography variant="body2" sx={{ color: '#fff' }}>• MBA in Strategic Management</Typography>
            </Stack>
          </Box>

          {/* Right Column - LinkedIn Embed Widget */}
          <Box sx={{ flex: 1, textAlign: isMobile ? 'center' : 'right' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#Fd4a017' }}>
              Latest Post
            </Typography>

            {/* LinkedIn Embed Widget */}
            <Box
              sx={{
                padding: 1,
                backgroundColor: '#fff',
                height: '180px', // Reduced height for a more compact widget
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 2,
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:YOUR_POST_ID_HERE"
                height="180"
                width="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="LinkedIn Post"
              ></iframe>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Link
                href="https://www.linkedin.com/in/pauline-mukulu-mba-cpa-k/"
                target="_blank"
                rel="noopener"
                sx={{
                  fontSize: '1rem',
                  color: '#d4a017',
                  textDecoration: 'underline',
                  fontWeight: 600,
                }}
              >
                Visit LinkedIn Profile
              </Link>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
