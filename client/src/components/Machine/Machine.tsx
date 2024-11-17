import React from 'react';
import { Box, Typography, Paper, Switch, Stack, Divider, Slider } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import useSound from 'use-sound';


import clap from '../../assets/audio/CLAP - and snare.wav';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function Machine() {

   const [checked, setChecked] = React.useState(true);


  const [play] = useSound(clap);
  const numbers = [
    {
      number: 1,
    },
    {
      number: 2,
    },
    {
      number: 3,
    },
    {
      number: 4,
    },
    {
      number: 5,
    },
    {
      number: 6,
    },
    {
      number: 7,
    },
    {
      number: 8,
    },
    {
      number: 9,
    },
  ];


  return (
    <Box sx={{ p: 2, border: '0.2em solid yellow', bgcolor: 'grey' }}>
      {' '}
      <Box
        component="header"
        sx={{
          border: 'white solid',
          p: '1rem',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Typography variant="h6" component="h6" sx={{ color: 'white', fontWeight: 700 }}>
          Drum
        </Typography>
      </Box>
      {/* control portion */}
      <Box sx={{ p: '1rem', display: 'flex', justifyContent: 'space-around' }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 6, md: 6 }}
          sx={{  p: '1rem' }}
        >
          {numbers.map((num) => (
            <Grid size={2}>
              <Item onClick={play}>
                {num.number}
                <audio src={clap} typeof="audio/mpeg"></audio>
              </Item>
            </Grid>
          ))}
        </Grid>
        <Stack spacing={1} columns={{ xs: 8, sm:2, md: 6 }} sx={{  p: '1rem', width: "20%", justifyContent: "center", alignItems: "center" }}>
          <Switch checked={checked} inputProps={{ 'aria-label': 'controlled' }} />
          <Paper sx={{p: "0.4em 2em"}}>Clap</Paper>
          <Slider size="small" defaultValue={10} aria-label="Volume" valueLabelDisplay="auto"  sx={{color:"yellow"}}/>
          <Switch checked={checked} inputProps={{ 'aria-label': 'controlled' }} sx={{ color: "yellow" }} />
        </Stack>
      </Box>
    </Box>
  );
}
