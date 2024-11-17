import clap from '../assets/audio/CLAP - and snare.wav';
import kick from '../assets/audio/KICK - pierre.wav';
import eight from '../assets/audio//808 - fosho.wav';
import hat from '../assets/audio//HAT - cardiak 2.wav';
import perc from '../assets/audio//PERC - drugs.wav';
import snare from '../assets/audio//SNARE - specifically.wav';
import oh from '../assets/audio//OH - money twerk.wav';
import crash from '../assets/audio//STRTR Crash - Another One.wav';
import sfx from '../assets/audio//SFX - racer (glass shattering).wav';


//  Imports for audio two
import bongo from '../assets/audio2/Organic - Bongo A (2).wav'
import conga from '../assets/audio2/Organic - Conga A (3).wav';
import cymbal from '../assets/audio2/Organic - Cymbal (4).wav';
import frame from '../assets/audio2/Organic - Frame Drum_A (21).wav';
import goblet from '../assets/audio2/Organic - Goblet Drum_B (9).wav';
import hitHat from '../assets/audio2/Organic - HiHat_F (4).wav';
import kick2 from '../assets/audio2/Organic - Kick (7).wav';
import snare2 from '../assets/audio2//Organic - Snare (11).wav';
import percRoll from "../assets/Organic - Perc Roll (15).wav";







//  for typeScript
interface Sound {
  id: number;
  title: string;
  url: string;
}
// sound Object
 export const sounds: Sound[] = [
  {
    id: 1,
    title: 'Clap',
    url: clap,
  },
  {
    id: 2,
    title: 'Kick',
    url: kick,
  },
  {
    id: 3,
    title: '808',
    url: eight,
  },
  {
    id: 4,
    title: 'Hat',
    url: hat,
  },
  {
    id: 5,
    title: 'Perc',
    url: perc,
  },
  {
    id: 6,
    title: 'Snare',
    url: snare,
  },
  {
    id: 7,
    title: 'OH',
    url: oh,
  },
  { id: 8, title: 'Crash', url: crash },
  { id: 9, title: 'SFX', url: sfx },
];



// sound Object
 export const soundsTwo: Sound[] = [
  {
    id: 1,
    title: 'Bongo',
    url: bongo,
  },
  {
    id: 2,
    title: 'Conga',
    url: conga,
  },
  {
    id: 3,
    title: 'Cymbal',
    url: cymbal,
  },
  {
    id: 4,
    title: 'Frame',
    url: frame,
  },
  {
    id: 5,
    title: 'Goblet',
    url: goblet,
  },
  {
    id: 6,
    title: 'Hit-Hat',
    url: hitHat,
  },
  {
    id: 7,
    title: 'Kick',
    url: kick2,
  },
  { id: 8, title: 'Snare', url: snare2 },
  { id: 9, title: 'Perc Roll', url: percRoll },
];
