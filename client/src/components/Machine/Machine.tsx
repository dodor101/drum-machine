import React, { useRef, useState } from 'react';
import { Box } from '@mui/material';

import Header from '../Header/Header';
import Drums from '../Drums/Drums';
import Controls from '../Controls/Controls';

import { sounds, soundsTwo } from '../../utils/sounds';
export default function Machine() {
  const [power, setPower] = useState<boolean>(true);

  const [bank, setBank] = useState(false);

  const [soundClicked, setSoundClicked] = useState('Clap');
  const [volume, setVolume] = useState<number>(10);



  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});

  const play = (id: number) => {
    const audio = audioRefs.current[id];

    if (power && audio) {
      audio.currentTime = 0; // Restart the sound
      audio.volume = volume / 110;
      audio.play();

    } else if (!power) {
      audio?.pause();
      if (audio) {
        audio.currentTime = 0;
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target as HTMLInputElement;
    const newVolume = parseInt(value.value);
    setVolume(newVolume);
  };

  return (
    <Box sx={{ p: 2, border: '0.2em solid yellow', bgcolor: '#B3B3B3' }}>
      <Header />
      {/* control portion */}
      <Box sx={{ p: '1rem', display: 'flex', justifyContent: 'space-around' }}>
        <Drums
          soundsTwo={soundsTwo}
          sounds={sounds}
          setSoundClicked={setSoundClicked}
          audioRefs={audioRefs}
          play={play}
          bank={bank}
        />
        <Controls
          setPower={setPower}
          power={power}
          setBank={setBank}
          bank={bank}
          handleVolumeChange={handleVolumeChange}
          volume={volume}
          soundClicked={soundClicked}
        />
      </Box>
    </Box>
  );
}
