import * as React from 'react';
import './style.css';
import CountrySelect from './components/InputCountry';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import DeleteIcon from '@material-ui/icons/Delete';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputPassword from './components/InputPassword';

export default function App() {
  return (
    <Grid
      container
      direction="column-reverse"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Box sx={{ p: 1 }}>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            sx={{ width: 300 }}
          />
        </Box>
        <Box sx={{ p: 1 }}>
          <InputPassword />
        </Box>
        <Box sx={{ p: 1 }}>
          <CountrySelect />
        </Box>
        <Button variant="outlined">
          Delete
          <DeleteIcon />
        </Button>
      </Grid>
    </Grid>
  );
}
