import React from 'react'
import { Paper, Stack, Switch, Slider, InputLabel } from '@mui/material';

export default function Controls(props) {
  return (
    <Stack
      spacing={1}
      columns={{ xs: 8, sm: 2, md: 6 }}
      sx={{ p: '1rem', width: '20%', justifyContent: 'center', alignItems: 'center' }}
    >
      <InputLabel sx={{ display: 'flex', flexDirection: 'column' }}>
        Power
        <Switch onClick={() => props.setPower(!props.power)} checked={props.power} inputProps={{ 'aria-label': 'controlled' }} />
      </InputLabel>

      <Paper sx={{ p: '0.4em 2em' }}>{props.power && props.soundClicked}</Paper>

      <Slider
        size="small"
        defaultValue={10}
        aria-label="Volume"
        valueLabelDisplay="auto"
        min={10}
        max={110}
        value={props.volume}
        onChange={props.handleVolumeChange}
        sx={{ color: 'yellow' }}
      />
      <InputLabel sx={{ display: 'flex', flexDirection: 'column' }}>
        Bank
        <Switch checked={props.bank}  onClick={()=> props.setBank(!props.bank)}  inputProps={{ 'aria-label': 'controlled' }} />
      </InputLabel>
    </Stack>
  );
}
