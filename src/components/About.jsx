import {
  Box,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const milestones = [
  {
    year: '2022',
    achievement: 'Appointed Deputy Chief Internal Auditor',
  },
  {
    year: '2016',
    achievement: 'Promoted to Senior Internal Auditor',
  },
  {
    year: '2014',
    achievement: 'Promoted to a Data Accountant',
  },
  {
    year: '2006',
    achievement: 'Accountant',
  },
  {
    year: '2003',
    achievement: 'Administrator',
  },
  {
    year: '2011',
    achievement: 'Certified Public Accountant (CPA-K)',
  },
];

const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="about"
      sx={{
        minHeight: '60vh',
        backgroundColor: '#fff',
        px: { xs: 3, sm: 10 },
        py: { xs: 8, sm: 12 },
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 6,
      }}
    >
      {/* Left Side: Milestones */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: '#000',
            mb: 2,
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Career Milestones
        </Typography>
        <Divider sx={{ width: 60, borderBottom: '4px solid #d4a017', mb: 3 }} />

        <List sx={{ pl: 1 }}>
          {milestones.map((milestone, index) => (
            <ListItem key={index} sx={{ alignItems: 'flex-start' }}>
              <ListItemIcon>
                <CheckCircle sx={{ color: '#d4a017', mt: 0.5 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontFamily: 'Poppins' }}>
                    {milestone.year}
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" sx={{ color: '#555', fontFamily: 'Poppins' }}>
                    {milestone.achievement}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Right Side: Professional Bio */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: '#000',
            mb: 2,
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          About Pauline
        </Typography>
        <Divider sx={{ width: 40, borderBottom: '4px solid #d4a017', mb: 3 }} />

        <Typography
          variant="body1"
          sx={{
            fontSize: 16,
            color: '#444',
            lineHeight: 1.8,
            fontFamily: 'Poppins, sans-serif',
            mb: 2,
          }}
        >
          Pauline M. Mukulu, MBA, CPA-K, is a results-driven leader with extensive experience in strategy, corporate planning, governance, and public-sector economic policy. As Deputy Chief Internal Auditor, she is known for her visionary leadership and commitment to excellence in national development.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: 16,
            color: '#444',
            lineHeight: 1.8,
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Her career spans impactful roles at Afya Sacco, where she has led strategic reforms, planning frameworks, and public investments. Pauline is passionate about building sustainable systems, empowering women in leadership, and aligning institutions with long-term national goals.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutSection;
