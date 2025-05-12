import { Box, Container, Stack, Typography, Link } from '@mui/material';

const FooterBottom = () => {
  return (
    <Box sx={{ backgroundColor: '#222', color: '#fff', py: 2 }}>
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            &copy; 2025 Pauline M. Mukulu. All Rights Reserved.
          </Typography>
          <Stack direction="row" spacing={4}>
            <Link href="#privacy" color="inherit" sx={{ textTransform: 'uppercase', opacity: 0.7 }}>
              Privacy Policy
            </Link>
            <Link href="#terms" color="inherit" sx={{ textTransform: 'uppercase', opacity: 0.7 }}>
              Terms of Service
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default FooterBottom;
