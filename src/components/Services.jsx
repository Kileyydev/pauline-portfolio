import { Box, Container, Grid, Paper, Typography, SvgIcon } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import BarChartIcon from '@mui/icons-material/BarChart';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';

// Custom theme with gold accents
const theme = createTheme({
  palette: {
    primary: {
      main: '#D4AF37', // Gold
    },
    background: {
      default: '#F9FAFB', // Light gray background
      paper: '#FFFFFF', // White for cards
    },
    text: {
      primary: '#1F2937', // Dark gray for text
      secondary: '#4B5563', // Medium gray for secondary text
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
            borderColor: '#D4AF37',
          },
        },
      },
    },
  },
});

// ServiceCard component
const ServiceCard = ({ icon, title, description }) => (
  <Paper
    elevation={1}
    sx={{
      p: 3,
      textAlign: 'center',
      border: '1px solid',
      borderColor: 'grey.200',
      bgcolor: 'background.paper',
      width: '100%',
      maxWidth: 300, // Constrain card width
    }}
  >
    <SvgIcon
      component={icon}
      sx={{ fontSize: 40, color: 'primary.main', mb: 1.5 }}
    />
    <Typography variant="h6" component="h3" color="text.primary" gutterBottom sx={{ fontSize: '1.1rem' }}>
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
      {description}
    </Typography>
  </Paper>
);

// AchievementCard component
const AchievementCard = ({ metric, description }) => (
  <Box sx={{ textAlign: 'center' }}>
    <Typography
      variant="h4"
      component="p"
      color="primary.main"
      sx={{ fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}
    >
      {metric}
    </Typography>
    <Typography
      variant="body1"
      color="text.primary"
      sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}
    >
      {description}
    </Typography>
  </Box>
);

// Combined Services and Achievements component
const ServicesAndAchievements = () => {
  const services = [
  {
    icon: CodeIcon,
    title: 'Financial Advisory',
    description: 'Providing strategic financial guidance to ensure sustainable business growth.',
  },
  {
    icon: BrushIcon,
    title: 'Audit & Assurance',
    description: 'Delivering accurate, compliant audits that build stakeholder trust.',
  },
  {
    icon: BarChartIcon,
    title: 'Taxation Services',
    description: 'Offering expert tax planning and compliance strategies for organizations.',
  },
  {
    icon: DesignServicesIcon,
    title: 'Corporate Governance',
    description: 'Strengthening board effectiveness and ethical leadership practices.',
  },
  {
    icon: EditIcon,
    title: 'Capacity Building',
    description: 'Equipping teams with skills in finance, leadership, and strategic planning.',
  },
  {
    icon: SearchIcon,
    title: 'Policy Development',
    description: 'Designing impactful policies that align with organizational goals.',
  },
];


  const achievements = [
    {
      metric: '15+',
      description: 'Years of Experience',
    },
    {
      metric: '3000+',
      description: 'Reports Audited',
    },
    {
      metric: '50%',
      description: 'Loss Reduction Achieved',
    },
    {
      metric: '25%',
      description: 'Revenue Growth Delivered',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      {/* Services Section */}
      <Box sx={{ py: 6, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            color="text.primary"
            gutterBottom
            sx={{ mb: 4, fontSize: { xs: '1.8rem', md: '2.5rem' }, fontWeight: 'bold',}}
          >
            Services
          </Typography>
          {/* First Row */}
          <Grid
            container
            spacing={2}
            sx={{
              flexWrap: 'nowrap', // Force single row
              justifyContent: 'center',
              mb: 2, // Space between rows
            }}
          >
            {services.slice(0, 3).map((service, index) => (
              <Grid item xs={4} key={index}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </Grid>
            ))}
          </Grid>
          {/* Second Row */}
          <Grid
            container
            spacing={2}
            sx={{
              flexWrap: 'nowrap', // Force single row
              justifyContent: 'center',
            }}
          >
            {services.slice(3, 6).map((service, index) => (
              <Grid item xs={4} key={index + 3}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Achievements Section */}
      <Box sx={{ py: 6, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            color="text.primary"
            gutterBottom
            sx={{
              mb: 4,
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              fontWeight: 'bold',
            }}
          >
            Achievements
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{
              flexWrap: 'nowrap', // Force single row
              justifyContent: 'center',
            }}
          >
            {achievements.map((achievement, index) => (
              <Grid item xs={3} key={index}>
                <AchievementCard
                  metric={achievement.metric}
                  description={achievement.description}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ServicesAndAchievements;
