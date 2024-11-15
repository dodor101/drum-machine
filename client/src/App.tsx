import { useState } from 'react'
import { Box } from '@mui/material'
import './App.css'
import Machine from './components/Machine/Machine'

function App() {

  return (
    <>

      <Box>
        <h1>Drum Machine</h1>
        <Machine/>
      </Box>
    </>
  )
}

export default App
