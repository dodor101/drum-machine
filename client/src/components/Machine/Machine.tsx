import React from 'react'
import { Box , Typography} from '@mui/material'
export default function Machine() {
  return (
    <Box sx={{ p: 2, border: '0.2em solid yellow', bgcolor: 'grey' }}>
      {' '}
      <Box component="header" sx={{
        border: 'white solid', p: '1rem', display: "flex",
        justifyContent: "flex-end"
       }}>
        <Typography variant="h6" component="h6" sx={{color: "white", fontWeight: 700,}}>
         Drum
        </Typography>
      </Box>
    </Box>
  );
}
