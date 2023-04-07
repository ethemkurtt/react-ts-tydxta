import * as React from 'react';
import './style.css';
import CountrySelect from './components/InputCountry';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputPassword from './components/InputPassword';
import FormButton from './components/FormButton';
export default function App(probs) {
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
        <Box sx={{ p: 1 }}>
          <Box sx={{ float: 'left' }}>
            <FormButton name={'Delete'} />
          </Box>
          <Box sx={{ float: 'left', marginLeft: '10px' }}>
            <FormButton name={'Add Account'} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
