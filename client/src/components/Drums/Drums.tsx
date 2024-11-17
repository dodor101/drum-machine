import Grid from '@mui/material/Grid2';
import Item from '../../utils/Item';



export default function Drums(props ) {

  interface Sound {
    id: number;
    title: string;
    url: string
  }


const secondView = props.soundsTwo.map((sound: Sound) => (
  <Grid key={sound.id} size={2}>
    <Item
      sx={{
        p: '1rem ',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        height: '50%',
        width: '50%',
        boxShadow: '4px 3px  2px',
        fontWeight: 700,
      }}
      onClick={() => {
        props.play(sound.id);
        props.setSoundClicked(sound.title);
      }}
    >
      {sound.title}
      <audio ref={(el) => (props.audioRefs.current[sound.id] = el)} src={sound.url} typeof="audio/mpeg"></audio>
    </Item>
  </Grid>
));



  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 2, sm: 6, md: 6 }} sx={{ p: '1rem' }}>
      {props.bank
        ? secondView
        : props.sounds.map((sound: Sound) => (
            <Grid key={sound.id} size={2}>
              <Item
                sx={{
                  p: '1rem ',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  height: '50%',
                  width: '50%',
                  boxShadow: '4px 3px  2px',
                  fontWeight: 700,
                }}
                onClick={() => {
                  props.play(sound.id);
                  props.setSoundClicked(sound.title);
                }}
              >
                {sound.title}
                <audio
                  ref={(el) => (props.audioRefs.current[sound.id] = el)}
                  src={sound.url}
                  typeof="audio/mpeg"
                ></audio>
              </Item>
            </Grid>
          ))}
    </Grid>
  );
}
