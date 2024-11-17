import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#808080',
  ...theme.typography.body2,
  padding: theme.spacing(1),
 
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#808080',
  }),
}));

export default Item;
