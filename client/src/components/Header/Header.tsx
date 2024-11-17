import { Box, Typography } from '@mui/material';

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        p: '0.2rem',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <Typography variant="h6" component="h6" sx={{ color: 'white', fontWeight: 700, fontFamily: "cursive" }}>
        Drum
      </Typography>
    </Box>
  );
}
