import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function InputPassword() {
  return (
    <TextField
      id="outlined-password-input"
      label="Password"
      type="password"
      autoComplete="current-password"
      sx={{ width: 300 }}
    />
  );
}
