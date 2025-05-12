import { Box, Card, CardContent, Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Custom theme with gold accents
const theme = createTheme({
  palette: {
    primary: {
      main: '#D4AF37', // Gold for title underline
    },
    background: {
      default: '#F5F7FA', // Light gray background for section
      paper: '#000000', // Black for tiles
    },
    text: {
      primary: '#000000', // White for primary text (quotes)
      secondary: '#E0E0E0', // Lighter gray for author names
    },
  },
});

// Custom CSS for continuous sliding animation
const styles = {
  animation: 'slide 15s linear infinite',
  '@keyframes slide': {
    '0%': {
      transform: 'translateX(0)',
    },
    '100%': {
      transform: 'translateX(-50%)', // Move 50% left (duplicated cards)
    },
  },
};

const Testimonials = () => {
  const testimonials = [
    {
      text: 'This service is amazing! Highly recommended!',
      author: 'John Doe',
    },
    {
      text: 'A fantastic experience from start to finish!',
      author: 'Jane Smith',
    },
    {
      text: 'I would definitely use this again. Excellent quality!',
      author: 'Emily Johnson',
    },
    {
      text: 'Absolutely loved the experience. Would recommend it to everyone!',
      author: 'Mark Davis',
    },
    {
      text: 'Such a great service. Very professional and reliable!',
      author: 'Sara Lee',
    },
  ];

  // Duplicate the testimonials array for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ py: 4, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Typography
              variant="h3"
              component="h2"
              color="text.primary"
              gutterBottom
              sx={{
                fontSize: { xs: '1.6rem', md: '2.2rem' },
                fontWeight: 'bold',
            
              }}
            >
              What Our Clients Say
            </Typography>
            <Box
              sx={{
                width: 120,
                height: 4,
                bgcolor: 'primary.main', // Gold underline
                mx: 'auto',
                borderRadius: 1,
              }}
            />
          </Box>
          <Box sx={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'nowrap',
                width: 'fit-content',
                ...styles,
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  sx={{
                    width: { xs: 300, md: 400 },
                    height: { xs: 220, md: 280 }, // Increased height to fit text
                    margin: { xs: '0 10px', md: '0 15px' },
                    boxShadow: 3,
                    borderRadius: 0,
                    bgcolor: 'background.paper', // Black background
                    color: 'text.primary',
                    flexShrink: 0,
                    overflow: 'visible', // Ensure no clipping
                  }}
                >
                  <CardContent
                    sx={{
                      p: 4,
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontStyle: 'italic',
                        fontFamily: 'Georgia, serif',
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        lineHeight: 1.5,
                        whiteSpace: 'normal', // Allow text wrapping
                        wordBreak: 'break-word', // Break long words
                        overflow: 'visible',
                      }}
                    >
                      "{testimonial.text}"
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 'bold',
                        fontSize: { xs: '0.85rem', md: '0.95rem' },
                        color: 'text.secondary', // Lighter gray for contrast
                        mt: 2,
                      }}
                    >
                      - {testimonial.author}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Testimonials;
